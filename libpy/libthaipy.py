#! /usr/bin/python
#-*-coding:utf8-*-
import re

try:
    import json #python 2.6
except ImportError:
    import simplejson as json #pypi it

class thaipy :
    
    def __init__ (self):
        self.startBlock = []
        pass
    
    def pythonToJS (self, src) :
        lineNum = 0
        src = "".join(self.splitQuote(src))
        ls = []; gvLoop=0; preTab=0
        for l in src.splitlines() :
            ls.append("")
            line = l
            l = l.strip()
            lineNum += 1
            curTab = self.countTab(line)
            
            if l == "" or l[0]=="#":
                 ls[-1] += "/*"+line+"*/"
                 continue
            
            if l.endswith(":") :
                state=re.split(" |:",l,1)[0]
                l = l [len(state):][:-1].strip()
                if state == "for" :
                    #ascii for loop
                    if l[0]== "(" :
                        ls[-1] += "for "+l+" { "
                    #groovy time loop
                    elif l.isalnum():
                        ls[-1] += "/*"+line+"*/ try{_gvLoop}catch(e){_gvLoop = [];} _gvLoop["+str(gvLoop)+"] = it; \
                        for (var it  = 0; it < "+l+"; it++) { it  =  _gvLoop["+str(gvLoop)+"];"
                        gvLoop += 1
                    #python forin loop
                    else:
                        dummyName, objName = re.split("in ", l , 1)
                        ls[-1] += "for (var _dummy in "+objName+") { "+dummyName+"  =  "+objName+"[_dummy];"
                elif state in "if,elif,while,except,catch,with,switch".split(","):
                    if state is "catch":
                        state = "except"
                    if state is "elif":
                        state = "else if "
                    ls[-1] += state+" ("+l+") {"   
                elif state in "try,finally,else,(do)".split(","):
                    ls[-1] += state+" {"        
                elif state in ["case","default"]:
                    ls[-1] += state+" "+l+" : {"
                elif state in ["def", "class", "function"] :
                    ls[-1] += "function "+l+" {"
                else :
                    print "Syntax Error in "+str(lineNum)+" : Unexpect ':' at the end of none statement line\n"+state+"\n"
                ls[-1] = "\t"*curTab+ls[-1]
            else :
                ls[-1] += "\t"*curTab+l+";"

            if curTab < preTab :
                "var it = _gvLoop.pop();"
                ls[-2] += ""+"}"*(preTab-curTab)
            preTab = curTab
        
        ls[-1]+= "}"*curTab
        return "\n".join(ls)
                    
    def countTab (self, line):
            tabLen = 0
            for dum in re.split("\t|    ", line) :
                if dum == "" :
                    tabLen += 1
                else :
                    continue

            return tabLen
            
    def splitQuote (self, line) :
        sqc = 0; dbqc = 0; sbc=0; ls = [""]
        for w in self.splitSymbolKeyword(line) :
            notCrossing = not (sqc + dbqc + sbc)
            """if w in ["'", '"'] and len(ls[-1]) > 0 and ls[-1][-1] == "\\" :
                ls[-1] +=  w
                continue"""
            
            #single quote cross
            if w == "'"  and notCrossing   :
                sqc = 1

                #three single quote  cross
                if len(ls[-1]) >1 and \
                ( ls[-1] == "''" or ( ls[-1].startswith("'''") and not ls[-1].endswith("'''"))) : 
                        ls[-1] +=  w
                else:
                    ls.append(w)
                    
                continue 
            elif w  == "'"  and  sqc == 1  : 
                sqc = 0
                ls[-1] +=  w
                continue
            elif w != "'"  and  sqc == 1  :
                ls[-1] +=  w
                continue

            #double quote cross
            if w  == '"'  and  notCrossing  :
                dbqc = 1
                #three double quote cross  
                if len(ls[-1]) >1 and \
                ( ls[-1] == '""' or ( ls[-1].startswith('"""') and not ls[-1].endswith('"""'))) : 
                        ls[-1] +=  w
                else:
                    ls.append(w)
                continue 
            elif w  == '"'  and  dbqc  : 
                dbqc = 0
                ls[-1] +=  w
                continue
            elif w != '"'  and  dbqc  :
                ls[-1] +=  w
                continue

            #square brackets cross
            if w  == '['  and  notCrossing  :
                ls.append(w)
                sbc = 1
                continue 
            elif w  == ']'  and  sbc  : 
                sbc = 0
                ls[-1] +=  w
                if ":" in ls[-1] :
                        dum=ls[-1][1:-1].split(":") 
                        if len(dum) == 2 :
                            if "" in dum :
                                #dummy[-3:]
                                if dum[1] is "" and not dum[0] is "":
                                    ls[-1] = ".slice("+dum[0]+")"
                            #dummy[0:3] and dummy[:-3]
                            else :
                                ls[-1] = ".slice("+dum[0]+", "+dum[1]+")"
                        elif len(dum) == 3 :
                            ls[-1] =".stepSlice("+ls[-1][1:-1]+")"
                        elif len(dum)>3:
                            print "Syntax Error : List object can't use ':' more than 2\n"
                continue
            elif w != ']'  and  sbc  :
                ls[-1] +=  w
                continue
            
            #string cross
            if len(ls[-1]) > 0 and re.search(""""|'""", ls[-1][-1]) :
                ls.append(w)
            else :
                ls[-1]  +=  w
            
        i = 0        
        for i in range(0, len(ls)) :
            w = ls[i]
            newlineCount=len(re.findall("\n", w))
            if w.startswith("'''") :
                w = "'"+w[3:-3].replace("\'", '\\\'').replace("\n", "\\n")+"'"+"\n"*newlineCount
            elif w.startswith("'''") :
                w = '"'+w[3:-3].replace('\"', "\\\"").replace("\n", "\\n")+'"'+"\n"*newlineCount
            ls[i] = w
        
        return ls
                
                    
    def splitSymbolKeyword(self, src) : #return ["abc","/"," ","def","*",...]
        ls = [" "]
        
        for c in src :
            lsEndChar = ls[-1][-1]
            if self.isSymbol(c) :
                    ls.append(c)
            elif self.isBlankChar(c) :
                if  not self.isBlankChar(lsEndChar) :
                    ls.append(c)
                else :
                    ls[-1] += c
            else :
                if  not self.isChar(lsEndChar) :
                    ls.append(c)
                else :
                    ls[-1] += c
            ls[0]=ls[0][1:]
        return ls

    def isChar (self, c) :
        if (c>= "ก" and c <=  "ฺ") or (c >=  "฿" and c <=  "๙")or (c >=  "A" and c <=  "Z")or (c >=  "a" and c <=  "z") or c == "_" or c == "" :
            return True

    def isSymbol (self, c) :
        if self.isChar(c) or self.isBlankChar (c) :
            return False
        return True

    def isBlankChar (self, c) :
        if c  !=  " " and c != "\t" :
            return False
        return True

if __name__=="__main__":
    example = """
    
#python list array 
dummy=[1,2,3,4,5,6,7,8,9,10,11,12]
dummy[0]
dummy[-1]
#dummy.slice(0,3)
dummy[0:3]
#dummy.slice(-3)
dummy[-3:]
#dummy.slice(0,-3)
dummy[:-3]
dummy[0:-3:3]

#groovy time loop    
'''for 5 :
    print it'''
    
#ascii for loop
for (i=0;i<5;i++):
    print i

#python for loop
for i in [1,2,3]:
    print i
    
def a ():
    pass

if 1==2:
    pass
    
elif 2==3:
    pass
else:
    pass

try:
    x
except e:
    alert(e)
finally:
    pass
    
switch a :
    case 1:
        pass
    default:
        pass
        
        
        
class a:
    def __init__():
        pass



class b(a):
    def __init__(a):
        pass
"""
    a=thaithon()
    print a.pythonToJS(example)
