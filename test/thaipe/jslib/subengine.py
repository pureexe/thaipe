# -*- encoding: utf-8
import os,sys, re
import types

#my import
import mylib
from modlist import *
from string import Template

try:
    import json #python 2.6
except ImportError:
    import simplejson as json #pypi it


_dev=False

templateName="template.js"
if _dev:
    f=open(templateName)
    template=f.read().split(templateName)
else:
    f=open(os.path.dirname(__file__)+"/"+templateName)
    template=f.read().split(templateName)
    
f.close()

def genjscode (mods):
    jsLib=""

    m1 = Template(template[0])
    m2 = Template(template[1])

    #start
    for mod in mods:

        if _dev :
            if not mod[0] in "gc":
                continue
                
        insteadModName=mod
        if mod in mylib.jsKeyword :
            insteadModName="thai_"+insteadModName

        try:
            exec("import "+mod)
        except :
            continue
        
        try :
            attr=dir(eval(mod))
        except:
            attr=[]

        mtds=""
        props=""
        for mtd in attr :

            insteadMtdName=mtd
            if mtd in mylib.jsKeyword :
                insteadMtdName="thai_"+insteadMtdName

            evalMtd=eval(mod+"."+mtd)
            try:
                if type(evalMtd) is types.MethodType or \
                type(evalMtd) is types.FunctionType or \
                type(evalMtd) is types.BuiltinFunctionType  or \
                type(evalMtd) is types.BuiltinMethodType:
                    
                    mtds+=m2.substitute(
                        modName=mod,
                        insteadModName=insteadModName,
                        mtdName=mtd,
                        insteadMtdName=insteadMtdName
                        )
                    
                elif type(evalMtd) is types.ModuleType:
                    if not mtd in mods:
                        genjscode ([mod+"."+mtd]) 
                    
                else :
                    if props!="":
                        props+="\t"
                    try :
                        props+="this."+mtd+" = "+json.dumps(evalMtd)+";\n"
                    except  :
                        props+="this."+mtd+" = "+json.dumps(str(evalMtd))+";\n"
    
                    
            except ValueError :
                ""
        jsLib+= m1.substitute(
            modName=mod,
            props=props,
            insteadModName=insteadModName,
            mtds=mtds
            ).replace("    ", "\t")

    return jsLib

if __name__ == "__main__":
    mylib.write("func.js", genjscode(mods))#""".replace("\t", " ").replace("\t", " ").replace("\n"," ")"""
    mylib.write("func.html", "<script>\n"+genjscode(mods)+"\n</script>") #ไว้ใช้ firefox ตรวจความถูกต้อง
