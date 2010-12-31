_jsKeyword=["abstract", "else", "instanceof", "switch", "boolean", "enum", "int", "synchronized", "break", "export", "interface", "this", "byte", "extends", "long", "throw", "case", "false", "native", "throws", "catch", "final", "new", "transient", "char", "finally", "null", "true", "class", "float", "package", "try", "const", "for", "private", "typeof", "continue", "function", "protected", "var", "debugger", "goto", "public", "void", "default", "if", "return", "volatile", "delete", "implements", "short", "while", "do", "import", "static", "with", "double", "in", "super"];
_dev=false;
//eval python code
function py (pyCode) {
	pyCode=pyCode.replace(/\n/g,"__NEW_LINE__") //title จะ replace \n ทิ้งหมด เลยกันไว้
	var beforeTitle=document.title;
	document.title = "!!"+pyCode;
	document.title = beforeTitle;
}

/*Make python variable(s) to be javascript variable*/
function pyVar (/*<pyVarName>[0],...,<pyVarName>[n]*/ ) {
	var args=arguments;
	for (i=0;i<args.length;i++)
		py('self.pyVar("'+args[i]+'")');
}

/*Return python variable value*/
function  pyReturn (varName) { /*varName=varToReturn - STRING TYPE*/
	var t=varName;
	pyVar (t);
	return window[t];
}

function require(){
	/*0.1b1 - add try catch*/
	if(arguments.length < 1) return false;
	results = {python: [], javascript: []};
	for (var i = 0; i < arguments.length; i++) {  // arguments have no forEach
	   x = arguments[i];
	   if(x.match(/\.js$/)){
	      results.javascript.push(x);
	   }else{
	      results.python.push(x);
	      if(x.indexOf(".") != -1){ //ถ้า import มี sub เช่น os.path, ต้องสร้าง obj ชื่อ path ขึ้นใหม่
		  mods = x.split(".");
		  mods.pop(); modName = mods.shift(); print(modName);
		  if(!window[modName]){
			  pathing = {}
			  injectHere = pathing // pointer!
			  mods.forEach(function(x){
			    injectHere[x] = {}
			    injectHere = injectHere[x]
			  });
			  window[modName] = pathing
		 }
	      }
	   }
	}
	if(results.python.length > 0){
	    // python imports
	    var modNames=results.python.join(", ");
		
		//Change for merge title, !!title, and --title syntax, title stable now. 
	    py("self._dummy=self._modengine.genjscode('"+modNames+"'.split(','))");
        //print(pyReturn("_dummy"))
	    eval(pyReturn("_dummy"));
        
	    // initiate all imported stuff
	    results.python.forEach(function(modName){
			try {
				if(modName.indexOf(".") == -1) {
					window[modName] = new window[modName];
				}
				else {
					// hax!! any better way? I hate this
					eval("window."+modName+" = new window."+modName);
				}
			}
			catch (e){
				print ("\nError : Incorect or does't exist importing module/file name : '"+modName+"'.");
				_ERR(e);
					
			}
	    });
	}
	if(results.javascript.length > 0){
	    results.javascript.forEach(function(x){
		var script = document.createElement('script');
		script.src = x;
		script.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(script);
	    });
	}
	return true;
}

/*Imports function*/
_dummy=["imports(mods){\n\targuments=mods.split(',');",];
_dummyImports=(""+require).replace("require() {",_dummy[0]);
eval(_dummyImports);


function _ERR(errObj)
{

	var _ERR="\nError > current file's built-in script or import script error :";
	for (var i in errObj) {
		_ERR+="\n\t"+i+" : "+errObj[i];
	}
	_ERR+="\n\n"
	for (i=0;i<10;i++)
		_ERR+="*******";
	print (_ERR+"\n");
	return "";
}

function print (t) {
	if (typeof t!="string")
		t=""+t;
	py('print "'+t.addslashes()+'"');
}

String.prototype.strip = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

String.prototype.addslashes=function () {
    return (this+"").replace(/\n|\r|\r\n|[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function _type(thing){
    if(thing===null)return "null"; /*special case*/
    return Object.prototype.toString.call(thing).replace(/\[|\]| |object/g,"").toLowerCase();
}

/*Convert javascript array and object to python evalutable string*/
function _convertArray (arr) {
	var key=[];
	var value=[];
	var countMember=0;
	var conArr="";
	
	if(_type(arr)=="array"){
		var args=arr;
		countMember=arr.length;
		conArr+="[";
	}
	else {
		for (var h in arr) {
			key[countMember]=h;
			value[countMember]=arr[h];
			countMember++;	
		}
		var args=value;	
	}
	
	var funcName="_convertArray";
	var err="Error Ploblem : Incorect array or object syntax type : \n";

	for(var i=0;i<countMember;i++) {

		if (i>=1) 
			conArr+=", ";
		if (_type(arr)=="array"){
		}
		else{
			conArr+="{'"+key[i]+"' : ";
		}
		
		if (_type(args[i]) == "object") {
			try{
				if(typeof(args[i].id)!="undefined") {
					conArr+="self._objList["+args[i].id+"]";
				}
				else {
					try {
						conArr+=_convertArray(value[i]);
						conArr+="}";
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
				conArr+=_convertArray(args[i]);
			}
			catch(e){
				print(err);
				_ERR(e);
			}
		}
		else if (_type(args[i])=="string") {
			try{
						args[i]=args[i].addslashes();
						py("self._strList.append(self.addslashes('"+args[i]+"'))");
						py("self._dummy=len(self._strList)-1");
						conArr+="self._strList["+pyReturn('_dummy')+"];";
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
						conArr+="self._strList["+pyReturn('_dummy')+"]";
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
				conArr+=args[i];
			}
			catch(e){
				print(err);
				_ERR(e);
			}
		}
		else if (_type(args[i])=="null") {
			try{
				conArr+="Null";
			}
			catch(e){
				print(err);
				_ERR(e);
			}
		}
		else if (_type(args[i])=="boolean") {
			try{
				if (args[i]) {
					conArr+="True";
				}
				else {
					conArr+="False";
				}
			}
			catch(e){
				print(err);
				_ERR(e);
			}
		}
		else {
			try{
				conArr+=args[i];
				print("\n\njsWarning > "+funcName+" : \nYou try to send an unknow type ('"+args[i]+"') to python.");
				print("It can't use in python, and can clash your program.\n");
			}
			catch(e){
				print(err);
				_ERR(e);
			}
		}
	}

	if(_type(arr)=="array"){
		conArr+="]";
	}
	else {
		conArr+="}";
	}

	return conArr;
}


/*From here on, place for necessary object and function for user
 *obj must has "id" property for conect with python*/

_objIdRange=-1;

function _newPyObj () {
	py("self._objList.append(None)");	/*add python object list*/
	_objIdRange++;							/*generate id*/
	return _objIdRange;					/*return id*/
}

/* Same python open*/ 
function fileOpen () {
	try {
		this.id=_newPyObj();
		this.args=arguments;
		this.fn=this.args[0];
		this.mod=this.args[1];
		if (typeof this.mod=="undefined")
			this.mod="r";
            
		/*require("os");
        require ("os.path");
		var dirpath=os.path.split(this.fn);
		dirpath=ps.path.join(dirPath[0:dirpath.length-1]);
		if (! os.path.isdir(dirpath)) {
            os.makedirs(dirpath)
        }*/
        
		py("self._objList["+this.id+"] =  open('"+this.fn+"', '"+this.mod+"')");
		
		this.read =function() {
			py("self._out=self._objList["+this.id+"].read()");
			return pyReturn("_out");
		}

		this.readFile =function() {
			py("self._out=self._objList["+this.id+"].read()");
			this.close();
			return pyReturn("_out");
		}
		
		this.write =function(t) {
			py("self._out=self._objList["+this.id+"].write('"+t.addslashes()+"')");
		}
		
		this.writeFile =function(t) {
			py("self._out=self._objList["+this.id+"].write('"+t.addslashes()+"')");
			this.close();
			return pyReturn("_out");
		}
		
		this.close =function() {
			py("self._objList["+this.id+"].close()");
		}
	} catch(e){_ERR(e);};
}

fopen = fileOpen;

/*Same file_get_contents of PHP*/
function readFile (fileName) {
		var f=new fileOpen(fileName);
		return f.readFile();
}

getData=readFile;
file_get_contents = readFile ;

/*Same file_get_contents of PHP*/
function writeFile (fileName, str) {
		var f=new fileOpen(fileName, "w");
		return f.writeFile(str);
}
