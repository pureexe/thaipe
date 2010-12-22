import compiler, sys
fileNames=sys.argv[1].split(",")
print fileNames
for fn in fileNames:
    compiler.compileFile(fn)
