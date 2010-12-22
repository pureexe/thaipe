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
for i in range(0,len(mods)):
    if re.compile("\.pyc$|\.pyo$|\.pyd$").search(mods[i]):
        mods[i]=re.sub("\.pyc$|\.pyo$|\.pyd$","",mods[i])
        z.append(mods[i])
z.extend("sys,os.path".split(","))
z.sort()

db=mylib.db("./mods.db")
db.dump( z)
#mylib.write("mods.txt", z.join(mods))
