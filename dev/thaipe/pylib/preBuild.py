if __name__ == "__main__":
    import commands, os, mylib, re

    for fn in  mylib.listDir("../"):
        if re.search("\.pyc$", fn):
            os.remove(fn)
