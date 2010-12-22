objIdRange=-1;
        
function _newPyObj (obj) {
    objIdRange++;                           //ตั้งชื่อเลข id
    return objIdRange;                      //คืนเลข id ให้
}

function open () {
    this.id=_newPyObj();
    var args=arguments;
    this.fn=args[0];
    this.mod=args[1];
    if (typeof(this.mod)=="undefined") 
        this.mod="r";

        
    this.read =function() {
        py("self._out=self.objList["+this.id+"].read()");
        return pyReturn("_out");
    }
    this.write =function(t) {
        py("self._out=self.objList["+this.id+"].write(str("+t+"))");
    }
    this.close =function() {
    print.py("self.objList["+this.id+"]");
        py("self._out=self.objList["+this.id+"].close()");
    }
}
