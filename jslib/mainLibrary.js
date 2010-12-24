_jsKeyword=["abstract", "else", "instanceof", "switch", "boolean", "enum", "int", "synchronized", "break", "export", "interface", "this", "byte", "extends", "long", "throw", "case", "false", "native", "throws", "catch", "final", "new", "transient", "char", "finally", "null", "true", "class", "float", "package", "try", "const", "for", "private", "typeof", "continue", "function", "protected", "var", "debugger", "goto", "public", "void", "default", "if", "return", "volatile", "delete", "implements", "short", "while", "do", "import", "static", "with", "double", "in", "super"];
//eval python code
function py (pyCode) {
	//alert(pyCode)
	var pyCode=pyCode.replace(/\n/g, "_NEWLINE"); //title จะ replace \n ทิ้งหมด เลยกันไว้
	var beforeTitle=document.title;
	document.title=beforeTitle;
	document.title = "null";
	document.title = pyCode;
}
function require(){
	if(arguments.length < 1) return false;
	results = {python: [], javascript: []};
	for (var i = 0; i < arguments.length; i++) {  // arguments have no forEach
	   x = arguments[i];
	   if(x.match(/\.js$/)){
	      results.javascript.push(x);
	   }else{
	      results.python.push(x);
	      if(x.indexOf(".") != -1){
		  mods = x.split(".");
		  mods.pop();
		  mods.forEach(function(x){
		    window[x] = new Object(x);
		  });
	      }
	   }
	}
	if(results.python.length > 0){
	    // python imports
	    document.title = "!!import "+results.python.join(", ")
	    // initiate all imported stuff
	    results.python.forEach(function(x){
		    if(x.indexOf(".") == -1)
			window[x] = new window[x];
		    else
			// hax!! any better way? I hate this
			eval("window."+x+" = new window."+x);
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

function print (t) {
  py('print """'+t+'"""');
}

/*แปลง ตัวแปรไพธอนเป็น js*/
function pyVar (/*"pyVarName"[0],...[n]*/ ) {
	args=arguments;
	for (i=0;i<args.length;i++)
	py("self.pyVar( \"\"\""+args[i]+"\"\"\" )");
}

/*คืนค่าตัวแปรไพธอน เป็น js*/
function  pyReturn (varName) { //varName=varToReturn - STRING TYPE
	t=varName;
	pyVar (t);
	return eval(t);
}



/*ส่วนนี้จะประกาศ object และ function ที่จำเป็นต่อการใช้งาน
 * โดยเฉพาะส่วนที่ไพธอนมีมาให้ แต่ Browser ไม่มี หรือยุ่งยากไป*/

objIdRange=-1;


function _newPyObj (obj) {
	py("self.objList.append(None)");	//เพิ่มออปเจต
	objIdRange++;							//ตั้งชื่อเลข id
	return objIdRange;					//คืนเลข id ให้
}

/*เหมือน python open () ส่วน ฟังก์ชั่นแบบ python file ()
 * จะใช้ชื่อว่า line และ lines */ 
function fopen () {
	this.id=_newPyObj();
	self.args=arguments;
	this.fn=self.args[0];
	this.mod=self.args[1];
	if (typeof this.mod=="undefined")
		this.mod="r";

	py("self.objList["+this.id+"] =  open('"+this.fn+"', '"+this.mod+"')");
	
	this.read =function() {
		py("self._out=self.objList["+this.id+"].read()");
		return pyReturn("_out");
	}
	
	this.read =function() {
		py("self._out=self.objList["+this.id+"].read()");
		return pyReturn("_out");
	}

	this.lastRead =function() {
		py("self._out=self.objList["+this.id+"].read()");
		this.close()
		return pyReturn("_out");
	}
	
	this.write =function(t) {
		py("self._out=self.objList["+this.id+"].write(str(\"\"\""+t+"\"\"\"))");
	}
	
	this.close =function() {
		py("self.objList["+this.id+"].close()");
	}
}

/*ฟังก์ชั่นฝาแฝดกับ file.lastRead() ปิดไฟล์ให้อัตโนมัติ*/
function getData (fileName) {
	f=new fopen(fileName);
	return f.lastRead();
}



pyGetProp=function(obj, propName){
	try{
			py("self._out=objList["+obj.id+"]."+propName);
			return pyReturn("_out");
	} catch(e){print(e)}
};


	/*note: this.x != var x
			thiis.x เป็น property ของ class สืบทอดได้,
			แต่ var x เป็นตัวแปรใน function หรือ class ที่สืบทอดไม่ได้เลย.
	ต่างจาก php ที่ var x นั้น == this.x
	ตัวอย่าง :
	<script>
	i=0;
	function a() {
					i++;alert(i)
					var Var = i;
					this.This = i;
	}
	function b(){}
	b.prototype=new a();
	c1=new b();
	c2 = new b();
	str="i จบที่ "+i+",\n c1.Var="+c1.Var+",\n c2.Var="+c2.Var+",\n c1.this="+c1.This+",\n c2.this="+c2.This
	alert (str);
	</script>

	สังเกตอีกอย่างว่า i ใน a ถูกรันตอน new a ครั้งเดียวเท่านั้น

	*/
