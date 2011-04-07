$insteadModName=function() {
    try{
        py("self._lastSendExacProblem='Request module error'");
        py("self._lastExacModName='$insteadModName'");
        /*py("self._objList.append(None)");
        py("self._dummy=len(self._objList)-1");
        this.id=pyReturn("_dummy");*/
        this.id=_newPyObj();
        this.args=arguments;

        py("import $modName\nself._objList["+this.id+"] = $modName");
        
    }
    catch(e){
        print("jsError > $modName :\n");
         _ERR(e);
    }

    /*Properties*/
    $props
    /*Methods*/
    $mtds
    
}
/*spliter*/
template.js
/*spliter*/
	this.$insteadMtdName=function() {

		py("self._lastSendExacProblem='Request method error'")
		py("self._lastExacModName='$modName'")
		py("self._lastExacMtdName='$insteadMtdName'")

		var err="Error >  module : $modName > method : $insteadMtdName :\n";
		var args=arguments;
		var putArgs=[];

		for(var i=0;i<args.length;i++) {
			if (_type(args[i]) == "object") {
				try{
						if(typeof(args[i].id)!="undefined") {
								putArgs[i]="self._objList["+args[i].id+"]";
						}
						else {
								try {
										putArgs[i]=_convertArray(value[i]);
										putArgs[i]="}";
								}
								catch(e){
										print(err);
										_ERR(e);
								}
						}
				}
				catch(e){
						print(err);
						_ERR(e);
				}
			}
			else if (_type(args[i])=="array") {
				try{
						putArgs[i]=_convertArray(args[i]);
				}
				catch(e){
						print(err);
						_ERR(e);
				}
			}
			else if (_type(args[i])=="string") {
				try{
						args[i]=args[i].addslashes();
						py("self._strList.append('"+args[i]+"')");
						py("self._dummy=len(self._strList)-1");
						putArgs[i]="self._strList["+pyReturn('_dummy')+"]";
				}
				catch(e){
						print(err);
						_ERR(e);
				}
			}
			else if (_type(args[i])=="function" || _type(args[i])=="NaN") {
				try{
						args[i]=args[i].addslashes();
						py("self._strList.append(self.addslashes('"+args[i]+"'))");
						py("self._dummy=len(self._strList)-1");
						putArgs[i]="self._strList["+pyReturn('_dummy')+"]";
						print("\n\njsWarning > "+funcName+" : \nYou try to send javascript function to be argument of python attribute");
						print("It can't use in python, and can clash your program. However THAI PE will convert it to string of function.\n");
				}
				catch(e){
						print(err);
						_ERR(e);
				}
			}
			else if (_type(args[i])=="number") {
				try{
						putArgs[i]=args[i];
				}
				catch(e){
						print(err);
						_ERR(e);
				}
			}
			else if (_type(args[i])=="null") {
				try{
						putArgs[i]="Null";
				}
				catch(e){
						print(err);
						_ERR(e);
				}
			}
			else if (_type(args[i])=="boolean") {
				try{
						if (args[i]) {
								putArgs[i]="True";
						}
						else {
								putArgs[i]="False";
						}
				}
				catch(e){
						print(err);
						_ERR(e);
				}
			}
			else {
				try{
						putArgs[i]=args[i];
						print("\n\njsWarning > "+funcName+" : \nYou try to send an unknow type ('"+args[i]+"') to python.");
						print("It can't use in python, and can clash your program.\n");
				}
				catch(e){
						print(err);
						_ERR(e);
				}
			}
		}
		try{
			var z="["+putArgs.join("],[")+"]";
			py("self._lastExacArgs="+z);
			py("self._out=self._objList["+this.id+"].$mtdName ("+putArgs.join(",")+")");
			return pyReturn("_out");
		}
		catch(e){
			print(err);
			_ERR(e);
		}
	}
