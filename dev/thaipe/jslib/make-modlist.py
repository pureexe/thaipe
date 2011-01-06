#-*-coding:utf-8-*-
#Generator module's names to mods.py > mods=[<moduleNameList>]
#Don't live load this module if we don't have anyway faster than it.
import os, sys, re
import mylib
mods=[]
for path in sys.path :
    try:
        if os.path.isdir(path):
            mods.extend(mylib.listDir(path, False))
    except Exception,e:
            print path
            print e
            print "<-for1\n--------\n"
            
z=[]
fileType="\.py$|\.pyc$|\.pyo$|\.pyd$"

for i in range(0,len(mods)):
    if re.compile(fileType).search(mods[i]) :
        mods[i]=re.sub(fileType,"",mods[i])
        if not mods[i] in z :
            z.append(mods[i])
            
z.extend("sys,os.path".split(","))
z.sort()

dummy="','"
open("modlist.py","w").write("mods=['"+dummy.join(z)+"']")
