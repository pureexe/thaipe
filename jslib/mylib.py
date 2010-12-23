import os
jsKeyword=["abstract", "else", "instanceof", "switch", "boolean", "enum", "int", "synchronized", "break",
 "export", "interface", "this", "byte", "extends", "long", "throw", "case", "false", "native", "throws",
 "catch", "final", "new", "transient", "char", "finally", "null", "true", "class", "float", "package", "try",
 "const", "for", "private", "typeof", "continue", "function", "protected", "var", "debugger", "goto",
 "public", "void", "default", "if", "return", "volatile", "delete", "implements", "short", "while", "do",
 "import", "static", "with", "double", "in", "super"]
jsKeyword.append("screen")

def write(fn, data):
    f=open(fn,"w")
    #pp = pprint.PrettyPrinter(indent=4)
    f.write(data)
    f.close()

def read(fn):
    f=open(fn,"r")
    #pp = pprint.PrettyPrinter(indent=4)
    f.read(data)
    f.close()
    
def listDir(target,withPath=True):
    result=[]
    for filename in os.listdir(target) :
        
        fp=target+"/"+filename
        if os.path.isdir(fp) :

            result.extend(listDir(fp,withPath))
        else :
                if withPath :
                    result.append(fp)
                else :
                    result.append(filename)
    return result

class db:
    def __init__(self,dbPath):
        import pickle
        self.pickle=pickle
        del pickle
        self.dbPath=dbPath
        self.dbObj=object;

    def load(self):
        self.dbObj=open(self.dbPath, "rb")
        obj=self.pickle.load(self.dbObj)
        self.dbObj.close()
        return obj

    def dump(self, obj):
        self.dbObj=open(self.dbPath, "wb")
        obj=self.pickle.dump(obj, self.dbObj)
        self.dbObj.close()
        return obj
    
            

            
        
