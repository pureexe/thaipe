import re, sys
#insert nessesary import script tag at first of page
def insert_imptag (url) :
    if url.strip()[0:5] == "file:" and url.find("about:blank")==-1 and url[-5:]==".htma":
        path="/"+":/".join(re.sub("\?.*", "", re.sub("//*", "/", url)).split(":/")[1:])
        src=sys.path[0]+"/libjs/main.js"
        taghead="""<meta http-equiv="content-type" content="text/html; charset=utf-8"><script id='_imptag'"""
        imptag=taghead+" src='"+src+"'></script>"
        with open(path) as f :
            code=f.read()
        firstline = code.splitlines()[0].strip()
        if firstline.find(taghead) > -1 and firstline.find(src)== -1 :
            f=open(path, "w")
            f.write(imptag+"\n"+"\n".join(code.splitlines()[1:]))
            f.close()
        elif firstline != imptag :
            f=open(path, "w")
            f.write(imptag+"\n"+code)
            f.close()
