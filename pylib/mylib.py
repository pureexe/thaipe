#-*-coding:utf8-*-
#!/usr/bin/python
#
# Copyright (C) 2011 Vorapol Anjalisangas <thaithonpe@gmai.com>
#       Redistribution and use in source and binary forms, with or without
#       modification, are permitted provided that the following conditions are
#       met:
#       
#       * Redistributions of source code must retain the above copyright
#         notice, this list of conditions and the following disclaimer.
#       * Redistributions in binary form must reproduce the above
#         copyright notice, this list of conditions and the following disclaimer
#         in the documentation and/or other materials provided with the
#         distribution.
#       * Neither the name of the  nor the names of its
#         contributors may be used to endorse or promote products derived from
#         this software without specific prior written permission.
#       
#       THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
#       "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
#       LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
#       A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
#       OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
#       SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
#       LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
#       DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
#       THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
#       (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
#       OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

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
    
            

            
        
