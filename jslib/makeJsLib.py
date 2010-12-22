import os,sys, re, pprint, mylib
import types
from string import Template

_dev=False

def classMaker (mods):
    jsLib=""
    lastMod=""
    
    m1 = Template("""
$insteadModName=new Object;
$insteadModName=function() {
    this.id=_newPyObj();
    this.args=arguments;
    py("import $modName\\nself.objList["+this.id+"] =  $modName");

    /*Methods*/
    $methods
    
}
""")

    m2 = Template("""
    this.$insteadMethodName=function() {
        args=arguments;
        putArgs="";
        for(i=0;i<args.length;i++) {
            if (i>=1) 
                putArgs+=", ";
            if (typeof(args[i])=="object") {
                try{
                    putArgs+="self.objList["+args[i].id+"]";
                }
                catch(e){
                    print(e);
                }
            }
            else if (typeof(args[i])=="string") {
                try{
                    putArgs+='\\"\\"\\"'+args[i]+'\\"\\"\\"';
                }
                catch(e){
                    print(e);
                }
            }
            else {
                try{
                    putArgs+=args[i];
                }
                catch(e){
                    print(e);
                }
            }
        }
        
        py("self._out=self.objList["+this.id+"].$methodName ("+putArgs+")");
        return pyReturn("_out");
    }
""")

    #เริ่ม
    for mod in mods:

        if _dev :
            if not mod[0] in "go":
                continue
            
        if lastMod != mod :
            lastMod=mod
            
            try:
                exec("import "+mod)
            except Exception,e:
                """print e
                print "end"""
                continue
            
            methods=""

            try :
                attr=dir(eval(mod))
            except:
                attr=[]
            for VM in attr :
                evalPM=eval(mod+"."+VM)
                try:
                    if VM[0]=="_":
                        continue

                    if    type(evalPM) is types.MethodType or type(evalPM) is types.FunctionType:
                        insteadMethodName=VM
                        
                        if VM in mylib.jsKeyword :
                            insteadMethodName="thai_"+insteadMethodName
                            
                        methods+=m2.substitute(
                            methodName=VM,
                            insteadMethodName=insteadMethodName
                            )
                        
                    elif type(evalPM) is types.ModuleType:
                        if not VM in modules:
                            classMaker ([mod+"."+VM]) 
                        
                except ValueError :
                    ""
            insteadModName=mod
            if mod in mylib.jsKeyword :
                insteadModName="thai_"+insteadModName

            jsLib+= m1.substitute(
                modName=mod,
                insteadModName=insteadModName,
                methods=methods
                ).replace("    ", "\t")

    return jsLib

mods=mylib.db("mods.db").load()
modules=mods
mylib.write("func.js", classMaker(mods))#""".replace("\t", " ").replace("\t", " ").replace("\n"," ")"""
mylib.write("func.html", "<script>\n"+classMaker(mods)+"\n</script>") #ไว้ใช้ firefox ตรวจความถูกต้อง



