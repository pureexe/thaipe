
ANSI=new Object;
ANSI=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ANSI\nself.objList["+this.id+"] =  ANSI");

	/*Methods*/
	
	this.BuildNumber=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].BuildNumber ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoBack=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoBack ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoBackOne=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoBackOne ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoCursorRestore=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoCursorRestore ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoCursorSave=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoCursorSave ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoDown=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoDown ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoDownOne=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoDownOne ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoEnableScroll=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoEnableScroll ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoErase=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoErase ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoEraseDown=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoEraseDown ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoEraseEndOfLine=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoEraseEndOfLine ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoEraseLine=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoEraseLine ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoForward=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoForward ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoForwardOne=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoForwardOne ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoHome=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoHome ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoHomeOrigin=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoHomeOrigin ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoMode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoMode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoScrollRegion=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoScrollRegion ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoUp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoUp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoUpOne=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoUpOne ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoUpReverse=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoUpReverse ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Emit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Emit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Log=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Log ("+putArgs+")");
		return pyReturn("_out");
	}

	this.StartNumber=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].StartNumber ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

AptUrl=new Object;
AptUrl=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import AptUrl\nself.objList["+this.id+"] =  AptUrl");

	/*Methods*/
	
	
}

ArgImagePlugin=new Object;
ArgImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ArgImagePlugin\nself.objList["+this.id+"] =  ArgImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

BaseHTTPServer=new Object;
BaseHTTPServer=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import BaseHTTPServer\nself.objList["+this.id+"] =  BaseHTTPServer");

	/*Methods*/
	
	this.filterwarnings=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].filterwarnings ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

Bastion=new Object;
Bastion=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Bastion\nself.objList["+this.id+"] =  Bastion");

	/*Methods*/
	
	this.Bastion=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Bastion ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

BdfFontFile=new Object;
BdfFontFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import BdfFontFile\nself.objList["+this.id+"] =  BdfFontFile");

	/*Methods*/
	
	this.bdf_char=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].bdf_char ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

BmpImagePlugin=new Object;
BmpImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import BmpImagePlugin\nself.objList["+this.id+"] =  BmpImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

BufrStubImagePlugin=new Object;
BufrStubImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import BufrStubImagePlugin\nself.objList["+this.id+"] =  BufrStubImagePlugin");

	/*Methods*/
	
	this.register_handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_handler ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

CDDB=new Object;
CDDB=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import CDDB\nself.objList["+this.id+"] =  CDDB");

	/*Methods*/
	
	this.parse_read_reply=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_read_reply ("+putArgs+")");
		return pyReturn("_out");
	}

	this.query=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].query ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

CDROM=new Object;
CDROM=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import CDROM\nself.objList["+this.id+"] =  CDROM");

	/*Methods*/
	
	
}

CGIHTTPServer=new Object;
CGIHTTPServer=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import CGIHTTPServer\nself.objList["+this.id+"] =  CGIHTTPServer");

	/*Methods*/
	
	this.executable=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].executable ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nobody_uid=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nobody_uid ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

Canvas=new Object;
Canvas=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Canvas\nself.objList["+this.id+"] =  Canvas");

	/*Methods*/
	
	
}

CommandNotFound=new Object;
CommandNotFound=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import CommandNotFound\nself.objList["+this.id+"] =  CommandNotFound");

	/*Methods*/
	
	
}

ConfigParser=new Object;
ConfigParser=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ConfigParser\nself.objList["+this.id+"] =  ConfigParser");

	/*Methods*/
	
	
}

ContainerIO=new Object;
ContainerIO=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ContainerIO\nself.objList["+this.id+"] =  ContainerIO");

	/*Methods*/
	
	
}

Cookie=new Object;
Cookie=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Cookie\nself.objList["+this.id+"] =  Cookie");

	/*Methods*/
	
	
}

CurImagePlugin=new Object;
CurImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import CurImagePlugin\nself.objList["+this.id+"] =  CurImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

DLFCN=new Object;
DLFCN=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import DLFCN\nself.objList["+this.id+"] =  DLFCN");

	/*Methods*/
	
	
}

DcxImagePlugin=new Object;
DcxImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import DcxImagePlugin\nself.objList["+this.id+"] =  DcxImagePlugin");

	/*Methods*/
	
	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

Dialog=new Object;
Dialog=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Dialog\nself.objList["+this.id+"] =  Dialog");

	/*Methods*/
	
	this.At=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].At ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtEnd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtEnd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtInsert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtInsert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelFirst=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelFirst ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelLast=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelLast ("+putArgs+")");
		return pyReturn("_out");
	}

	this.NoDefaultRoot=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].NoDefaultRoot ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Tcl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Tcl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getboolean=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getboolean ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_names=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_names ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_types=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_types ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mainloop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mainloop ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

DiscID=new Object;
DiscID=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import DiscID\nself.objList["+this.id+"] =  DiscID");

	/*Methods*/
	
	this.cddb_sum=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cddb_sum ("+putArgs+")");
		return pyReturn("_out");
	}

	this.disc_id=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].disc_id ("+putArgs+")");
		return pyReturn("_out");
	}

	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

DocXMLRPCServer=new Object;
DocXMLRPCServer=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import DocXMLRPCServer\nself.objList["+this.id+"] =  DocXMLRPCServer");

	/*Methods*/
	
	this.resolve_dotted_attribute=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resolve_dotted_attribute ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

EpsImagePlugin=new Object;
EpsImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import EpsImagePlugin\nself.objList["+this.id+"] =  EpsImagePlugin");

	/*Methods*/
	
	this.Ghostscript=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Ghostscript ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ExifTags=new Object;
ExifTags=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ExifTags\nself.objList["+this.id+"] =  ExifTags");

	/*Methods*/
	
	
}

FSM=new Object;
FSM=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import FSM\nself.objList["+this.id+"] =  FSM");

	/*Methods*/
	
	this.BeginBuildNumber=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].BeginBuildNumber ("+putArgs+")");
		return pyReturn("_out");
	}

	this.BuildNumber=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].BuildNumber ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoEqual=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoEqual ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DoOperator=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DoOperator ("+putArgs+")");
		return pyReturn("_out");
	}

	this.EndBuildNumber=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].EndBuildNumber ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Error=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Error ("+putArgs+")");
		return pyReturn("_out");
	}

	this.main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].main ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

FileDialog=new Object;
FileDialog=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import FileDialog\nself.objList["+this.id+"] =  FileDialog");

	/*Methods*/
	
	this.At=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].At ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtEnd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtEnd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtInsert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtInsert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelFirst=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelFirst ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelLast=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelLast ("+putArgs+")");
		return pyReturn("_out");
	}

	this.NoDefaultRoot=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].NoDefaultRoot ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Tcl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Tcl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getboolean=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getboolean ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_names=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_names ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_types=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_types ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mainloop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mainloop ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

FitsStubImagePlugin=new Object;
FitsStubImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import FitsStubImagePlugin\nself.objList["+this.id+"] =  FitsStubImagePlugin");

	/*Methods*/
	
	this.register_handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_handler ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

FixTk=new Object;
FixTk=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import FixTk\nself.objList["+this.id+"] =  FixTk");

	/*Methods*/
	
	this.convert_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].convert_path ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

FliImagePlugin=new Object;
FliImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import FliImagePlugin\nself.objList["+this.id+"] =  FliImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

FontFile=new Object;
FontFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import FontFile\nself.objList["+this.id+"] =  FontFile");

	/*Methods*/
	
	this.puti16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].puti16 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

FpxImagePlugin=new Object;
FpxImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import FpxImagePlugin\nself.objList["+this.id+"] =  FpxImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

GDebi=new Object;
GDebi=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import GDebi\nself.objList["+this.id+"] =  GDebi");

	/*Methods*/
	
	
}

GbrImagePlugin=new Object;
GbrImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import GbrImagePlugin\nself.objList["+this.id+"] =  GbrImagePlugin");

	/*Methods*/
	
	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

GdImageFile=new Object;
GdImageFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import GdImageFile\nself.objList["+this.id+"] =  GdImageFile");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

GifImagePlugin=new Object;
GifImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import GifImagePlugin\nself.objList["+this.id+"] =  GifImagePlugin");

	/*Methods*/
	
	this.getdata=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getdata ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getheader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getheader ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o16 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

GimpGradientFile=new Object;
GimpGradientFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import GimpGradientFile\nself.objList["+this.id+"] =  GimpGradientFile");

	/*Methods*/
	
	this.curved=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].curved ("+putArgs+")");
		return pyReturn("_out");
	}

	this.linear=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].linear ("+putArgs+")");
		return pyReturn("_out");
	}

	this.sine=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].sine ("+putArgs+")");
		return pyReturn("_out");
	}

	this.sphere_decreasing=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].sphere_decreasing ("+putArgs+")");
		return pyReturn("_out");
	}

	this.sphere_increasing=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].sphere_increasing ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

GimpPaletteFile=new Object;
GimpPaletteFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import GimpPaletteFile\nself.objList["+this.id+"] =  GimpPaletteFile");

	/*Methods*/
	
	
}

GnuPGInterface=new Object;
GnuPGInterface=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import GnuPGInterface\nself.objList["+this.id+"] =  GnuPGInterface");

	/*Methods*/
	
	
}

GribStubImagePlugin=new Object;
GribStubImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import GribStubImagePlugin\nself.objList["+this.id+"] =  GribStubImagePlugin");

	/*Methods*/
	
	this.register_handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_handler ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

HTMLParser=new Object;
HTMLParser=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import HTMLParser\nself.objList["+this.id+"] =  HTMLParser");

	/*Methods*/
	
	
}

Hdf5StubImagePlugin=new Object;
Hdf5StubImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Hdf5StubImagePlugin\nself.objList["+this.id+"] =  Hdf5StubImagePlugin");

	/*Methods*/
	
	this.register_handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_handler ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

IN=new Object;
IN=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import IN\nself.objList["+this.id+"] =  IN");

	/*Methods*/
	
	this.CMSG_FIRSTHDR=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].CMSG_FIRSTHDR ("+putArgs+")");
		return pyReturn("_out");
	}

	this.FD_ZERO=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].FD_ZERO ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_LINKLOCAL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_LINKLOCAL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_LOOPBACK=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_LOOPBACK ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_MC_GLOBAL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_MC_GLOBAL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_MC_LINKLOCAL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_MC_LINKLOCAL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_MC_NODELOCAL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_MC_NODELOCAL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_MC_ORGLOCAL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_MC_ORGLOCAL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_MC_SITELOCAL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_MC_SITELOCAL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_SITELOCAL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_SITELOCAL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_UNSPECIFIED=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_UNSPECIFIED ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_V4COMPAT=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_V4COMPAT ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN6_IS_ADDR_V4MAPPED=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN6_IS_ADDR_V4MAPPED ("+putArgs+")");
		return pyReturn("_out");
	}

	this.INT16_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].INT16_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.INT32_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].INT32_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.INT64_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].INT64_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.INT8_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].INT8_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.INTMAX_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].INTMAX_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN_BADCLASS=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN_BADCLASS ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN_CLASSA=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN_CLASSA ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN_CLASSB=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN_CLASSB ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN_CLASSC=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN_CLASSC ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN_CLASSD=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN_CLASSD ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN_EXPERIMENTAL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN_EXPERIMENTAL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IN_MULTICAST=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IN_MULTICAST ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UINT16_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UINT16_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UINT32_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UINT32_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UINT64_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UINT64_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UINT8_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UINT8_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UINTMAX_C=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UINTMAX_C ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htonl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htonl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htons=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htons ("+putArgs+")");
		return pyReturn("_out");
	}

	this.major=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].major ("+putArgs+")");
		return pyReturn("_out");
	}

	this.minor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].minor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ntohl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ntohl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ntohs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ntohs ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

IcnsImagePlugin=new Object;
IcnsImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import IcnsImagePlugin\nself.objList["+this.id+"] =  IcnsImagePlugin");

	/*Methods*/
	
	this.nextheader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nextheader ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_32t=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_32t ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_mk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_mk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

IcoImagePlugin=new Object;
IcoImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import IcoImagePlugin\nself.objList["+this.id+"] =  IcoImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImImagePlugin=new Object;
ImImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImImagePlugin\nself.objList["+this.id+"] =  ImImagePlugin");

	/*Methods*/
	
	this.number=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].number ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

Image=new Object;
Image=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Image\nself.objList["+this.id+"] =  Image");

	/*Methods*/
	
	this.blend=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].blend ("+putArgs+")");
		return pyReturn("_out");
	}

	this.composite=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].composite ("+putArgs+")");
		return pyReturn("_out");
	}

	this.eval=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].eval ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fromarray=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fromarray ("+putArgs+")");
		return pyReturn("_out");
	}

	this.frombuffer=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].frombuffer ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fromstring=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fromstring ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmodebandnames=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmodebandnames ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmodebands=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmodebands ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmodebase=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmodebase ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmodetype=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmodetype ("+putArgs+")");
		return pyReturn("_out");
	}

	this.init=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].init ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isDirectory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isDirectory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isImageType=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isImageType ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isStringType=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isStringType ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isTupleType=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isTupleType ("+putArgs+")");
		return pyReturn("_out");
	}

	this.merge=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].merge ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thai_new=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].new ("+putArgs+")");
		return pyReturn("_out");
	}

	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	this.preinit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].preinit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_extension=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_extension ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_mime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_mime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_open ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_save=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_save ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageChops=new Object;
ImageChops=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageChops\nself.objList["+this.id+"] =  ImageChops");

	/*Methods*/
	
	this.add=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].add ("+putArgs+")");
		return pyReturn("_out");
	}

	this.add_modulo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].add_modulo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.blend=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].blend ("+putArgs+")");
		return pyReturn("_out");
	}

	this.composite=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].composite ("+putArgs+")");
		return pyReturn("_out");
	}

	this.constant=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].constant ("+putArgs+")");
		return pyReturn("_out");
	}

	this.darker=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].darker ("+putArgs+")");
		return pyReturn("_out");
	}

	this.difference=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].difference ("+putArgs+")");
		return pyReturn("_out");
	}

	this.duplicate=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].duplicate ("+putArgs+")");
		return pyReturn("_out");
	}

	this.invert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].invert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lighter=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lighter ("+putArgs+")");
		return pyReturn("_out");
	}

	this.logical_and=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].logical_and ("+putArgs+")");
		return pyReturn("_out");
	}

	this.logical_or=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].logical_or ("+putArgs+")");
		return pyReturn("_out");
	}

	this.logical_xor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].logical_xor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.multiply=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].multiply ("+putArgs+")");
		return pyReturn("_out");
	}

	this.offset=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].offset ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thai_screen=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].screen ("+putArgs+")");
		return pyReturn("_out");
	}

	this.subtract=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].subtract ("+putArgs+")");
		return pyReturn("_out");
	}

	this.subtract_modulo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].subtract_modulo ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageColor=new Object;
ImageColor=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageColor\nself.objList["+this.id+"] =  ImageColor");

	/*Methods*/
	
	this.getcolor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getcolor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getrgb=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getrgb ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageDraw=new Object;
ImageDraw=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageDraw\nself.objList["+this.id+"] =  ImageDraw");

	/*Methods*/
	
	this.Draw=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Draw ("+putArgs+")");
		return pyReturn("_out");
	}

	this.floodfill=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].floodfill ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getdraw=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getdraw ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageDraw2=new Object;
ImageDraw2=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageDraw2\nself.objList["+this.id+"] =  ImageDraw2");

	/*Methods*/
	
	
}

ImageEnhance=new Object;
ImageEnhance=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageEnhance\nself.objList["+this.id+"] =  ImageEnhance");

	/*Methods*/
	
	
}

ImageFile=new Object;
ImageFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageFile\nself.objList["+this.id+"] =  ImageFile");

	/*Methods*/
	
	this.raise_ioerror=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].raise_ioerror ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageFileIO=new Object;
ImageFileIO=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageFileIO\nself.objList["+this.id+"] =  ImageFileIO");

	/*Methods*/
	
	
}

ImageFilter=new Object;
ImageFilter=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageFilter\nself.objList["+this.id+"] =  ImageFilter");

	/*Methods*/
	
	
}

ImageFont=new Object;
ImageFont=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageFont\nself.objList["+this.id+"] =  ImageFont");

	/*Methods*/
	
	this.load=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].load ("+putArgs+")");
		return pyReturn("_out");
	}

	this.load_default=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].load_default ("+putArgs+")");
		return pyReturn("_out");
	}

	this.load_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].load_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.truetype=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].truetype ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageMath=new Object;
ImageMath=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageMath\nself.objList["+this.id+"] =  ImageMath");

	/*Methods*/
	
	this.eval=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].eval ("+putArgs+")");
		return pyReturn("_out");
	}

	this.imagemath_convert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].imagemath_convert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.imagemath_equal=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].imagemath_equal ("+putArgs+")");
		return pyReturn("_out");
	}

	this.imagemath_float=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].imagemath_float ("+putArgs+")");
		return pyReturn("_out");
	}

	this.imagemath_int=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].imagemath_int ("+putArgs+")");
		return pyReturn("_out");
	}

	this.imagemath_max=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].imagemath_max ("+putArgs+")");
		return pyReturn("_out");
	}

	this.imagemath_min=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].imagemath_min ("+putArgs+")");
		return pyReturn("_out");
	}

	this.imagemath_notequal=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].imagemath_notequal ("+putArgs+")");
		return pyReturn("_out");
	}

	this.v=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].v ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageMode=new Object;
ImageMode=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageMode\nself.objList["+this.id+"] =  ImageMode");

	/*Methods*/
	
	this.getmode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmode ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageOps=new Object;
ImageOps=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageOps\nself.objList["+this.id+"] =  ImageOps");

	/*Methods*/
	
	this.autocontrast=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].autocontrast ("+putArgs+")");
		return pyReturn("_out");
	}

	this.colorize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].colorize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.crop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].crop ("+putArgs+")");
		return pyReturn("_out");
	}

	this.deform=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].deform ("+putArgs+")");
		return pyReturn("_out");
	}

	this.equalize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].equalize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expand=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expand ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.flip=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].flip ("+putArgs+")");
		return pyReturn("_out");
	}

	this.gaussian_blur=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].gaussian_blur ("+putArgs+")");
		return pyReturn("_out");
	}

	this.gblur=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].gblur ("+putArgs+")");
		return pyReturn("_out");
	}

	this.grayscale=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].grayscale ("+putArgs+")");
		return pyReturn("_out");
	}

	this.invert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].invert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mirror=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mirror ("+putArgs+")");
		return pyReturn("_out");
	}

	this.posterize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].posterize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.solarize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].solarize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unsharp_mask=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unsharp_mask ("+putArgs+")");
		return pyReturn("_out");
	}

	this.usm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].usm ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImagePalette=new Object;
ImagePalette=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImagePalette\nself.objList["+this.id+"] =  ImagePalette");

	/*Methods*/
	
	this.load=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].load ("+putArgs+")");
		return pyReturn("_out");
	}

	this.negative=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].negative ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thai_new=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].new ("+putArgs+")");
		return pyReturn("_out");
	}

	this.random=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].random ("+putArgs+")");
		return pyReturn("_out");
	}

	this.raw=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].raw ("+putArgs+")");
		return pyReturn("_out");
	}

	this.sepia=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].sepia ("+putArgs+")");
		return pyReturn("_out");
	}

	this.wedge=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].wedge ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImagePath=new Object;
ImagePath=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImagePath\nself.objList["+this.id+"] =  ImagePath");

	/*Methods*/
	
	
}

ImageQt=new Object;
ImageQt=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageQt\nself.objList["+this.id+"] =  ImageQt");

	/*Methods*/
	
	this.rgb=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].rgb ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageSequence=new Object;
ImageSequence=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageSequence\nself.objList["+this.id+"] =  ImageSequence");

	/*Methods*/
	
	
}

ImageShow=new Object;
ImageShow=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageShow\nself.objList["+this.id+"] =  ImageShow");

	/*Methods*/
	
	this.register=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register ("+putArgs+")");
		return pyReturn("_out");
	}

	this.show=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].show ("+putArgs+")");
		return pyReturn("_out");
	}

	this.which=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].which ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ImageStat=new Object;
ImageStat=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageStat\nself.objList["+this.id+"] =  ImageStat");

	/*Methods*/
	
	
}

ImageTransform=new Object;
ImageTransform=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageTransform\nself.objList["+this.id+"] =  ImageTransform");

	/*Methods*/
	
	
}

ImageWin=new Object;
ImageWin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImageWin\nself.objList["+this.id+"] =  ImageWin");

	/*Methods*/
	
	
}

ImtImagePlugin=new Object;
ImtImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ImtImagePlugin\nself.objList["+this.id+"] =  ImtImagePlugin");

	/*Methods*/
	
	
}

IptcImagePlugin=new Object;
IptcImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import IptcImagePlugin\nself.objList["+this.id+"] =  IptcImagePlugin");

	/*Methods*/
	
	this.dump=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dump ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getiptcinfo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getiptcinfo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

JpegImagePlugin=new Object;
JpegImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import JpegImagePlugin\nself.objList["+this.id+"] =  JpegImagePlugin");

	/*Methods*/
	
	this.APP=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].APP ("+putArgs+")");
		return pyReturn("_out");
	}

	this.COM=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].COM ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DQT=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DQT ("+putArgs+")");
		return pyReturn("_out");
	}

	this.SOF=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].SOF ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Skip=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Skip ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

LanguageSelector=new Object;
LanguageSelector=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import LanguageSelector\nself.objList["+this.id+"] =  LanguageSelector");

	/*Methods*/
	
	
}

McIdasImagePlugin=new Object;
McIdasImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import McIdasImagePlugin\nself.objList["+this.id+"] =  McIdasImagePlugin");

	/*Methods*/
	
	
}

MicImagePlugin=new Object;
MicImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import MicImagePlugin\nself.objList["+this.id+"] =  MicImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

MimeWriter=new Object;
MimeWriter=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import MimeWriter\nself.objList["+this.id+"] =  MimeWriter");

	/*Methods*/
	
	
}

MpegImagePlugin=new Object;
MpegImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import MpegImagePlugin\nself.objList["+this.id+"] =  MpegImagePlugin");

	/*Methods*/
	
	
}

MspImagePlugin=new Object;
MspImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import MspImagePlugin\nself.objList["+this.id+"] =  MspImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o16 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

NtfsConfig=new Object;
NtfsConfig=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import NtfsConfig\nself.objList["+this.id+"] =  NtfsConfig");

	/*Methods*/
	
	
}

OleFileIO=new Object;
OleFileIO=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import OleFileIO\nself.objList["+this.id+"] =  OleFileIO");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

PSDraw=new Object;
PSDraw=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PSDraw\nself.objList["+this.id+"] =  PSDraw");

	/*Methods*/
	
	
}

PaletteFile=new Object;
PaletteFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PaletteFile\nself.objList["+this.id+"] =  PaletteFile");

	/*Methods*/
	
	
}

PalmImagePlugin=new Object;
PalmImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PalmImagePlugin\nself.objList["+this.id+"] =  PalmImagePlugin");

	/*Methods*/
	
	this.build_prototype_image=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].build_prototype_image ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o16b=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o16b ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

PcdImagePlugin=new Object;
PcdImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PcdImagePlugin\nself.objList["+this.id+"] =  PcdImagePlugin");

	/*Methods*/
	
	
}

PcfFontFile=new Object;
PcfFontFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PcfFontFile\nself.objList["+this.id+"] =  PcfFontFile");

	/*Methods*/
	
	this.b16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].b16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.b32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].b32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.l16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].l16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.l32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].l32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.sz=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].sz ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

PcxImagePlugin=new Object;
PcxImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PcxImagePlugin\nself.objList["+this.id+"] =  PcxImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o16 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

PdfImagePlugin=new Object;
PdfImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PdfImagePlugin\nself.objList["+this.id+"] =  PdfImagePlugin");

	/*Methods*/
	
	
}

PixarImagePlugin=new Object;
PixarImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PixarImagePlugin\nself.objList["+this.id+"] =  PixarImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

PngImagePlugin=new Object;
PngImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PngImagePlugin\nself.objList["+this.id+"] =  PngImagePlugin");

	/*Methods*/
	
	this.getchunks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getchunks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.putchunk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].putchunk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

PpmImagePlugin=new Object;
PpmImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PpmImagePlugin\nself.objList["+this.id+"] =  PpmImagePlugin");

	/*Methods*/
	
	
}

PsdImagePlugin=new Object;
PsdImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PsdImagePlugin\nself.objList["+this.id+"] =  PsdImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

PyICU=new Object;
PyICU=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import PyICU\nself.objList["+this.id+"] =  PyICU");

	/*Methods*/
	
	
}

Queue=new Object;
Queue=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Queue\nself.objList["+this.id+"] =  Queue");

	/*Methods*/
	
	
}

ScrolledText=new Object;
ScrolledText=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ScrolledText\nself.objList["+this.id+"] =  ScrolledText");

	/*Methods*/
	
	this.example=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].example ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

SgiImagePlugin=new Object;
SgiImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import SgiImagePlugin\nself.objList["+this.id+"] =  SgiImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

SimpleDialog=new Object;
SimpleDialog=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import SimpleDialog\nself.objList["+this.id+"] =  SimpleDialog");

	/*Methods*/
	
	this.At=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].At ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtEnd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtEnd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtInsert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtInsert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelFirst=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelFirst ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelLast=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelLast ("+putArgs+")");
		return pyReturn("_out");
	}

	this.NoDefaultRoot=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].NoDefaultRoot ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Tcl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Tcl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getboolean=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getboolean ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_names=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_names ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_types=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_types ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mainloop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mainloop ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

SimpleHTTPServer=new Object;
SimpleHTTPServer=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import SimpleHTTPServer\nself.objList["+this.id+"] =  SimpleHTTPServer");

	/*Methods*/
	
	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

SimpleXMLRPCServer=new Object;
SimpleXMLRPCServer=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import SimpleXMLRPCServer\nself.objList["+this.id+"] =  SimpleXMLRPCServer");

	/*Methods*/
	
	this.list_public_methods=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].list_public_methods ("+putArgs+")");
		return pyReturn("_out");
	}

	this.remove_duplicates=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].remove_duplicates ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resolve_dotted_attribute=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resolve_dotted_attribute ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

SocketServer=new Object;
SocketServer=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import SocketServer\nself.objList["+this.id+"] =  SocketServer");

	/*Methods*/
	
	
}

SpiderImagePlugin=new Object;
SpiderImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import SpiderImagePlugin\nself.objList["+this.id+"] =  SpiderImagePlugin");

	/*Methods*/
	
	this.isInt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isInt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isSpiderHeader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isSpiderHeader ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isSpiderImage=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isSpiderImage ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loadImageSeries=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loadImageSeries ("+putArgs+")");
		return pyReturn("_out");
	}

	this.makeSpiderHeader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].makeSpiderHeader ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

StringIO=new Object;
StringIO=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import StringIO\nself.objList["+this.id+"] =  StringIO");

	/*Methods*/
	
	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

SunImagePlugin=new Object;
SunImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import SunImagePlugin\nself.objList["+this.id+"] =  SunImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

TYPES=new Object;
TYPES=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import TYPES\nself.objList["+this.id+"] =  TYPES");

	/*Methods*/
	
	this.FD_ZERO=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].FD_ZERO ("+putArgs+")");
		return pyReturn("_out");
	}

	this.major=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].major ("+putArgs+")");
		return pyReturn("_out");
	}

	this.minor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].minor ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

TarIO=new Object;
TarIO=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import TarIO\nself.objList["+this.id+"] =  TarIO");

	/*Methods*/
	
	
}

TgaImagePlugin=new Object;
TgaImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import TgaImagePlugin\nself.objList["+this.id+"] =  TgaImagePlugin");

	/*Methods*/
	
	this.i16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.o32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].o32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

TiffImagePlugin=new Object;
TiffImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import TiffImagePlugin\nself.objList["+this.id+"] =  TiffImagePlugin");

	/*Methods*/
	
	this.ib16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ib16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ib32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ib32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.il16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].il16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.il32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].il32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ob16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ob16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ob32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ob32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ol16=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ol16 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ol32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ol32 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

TiffTags=new Object;
TiffTags=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import TiffTags\nself.objList["+this.id+"] =  TiffTags");

	/*Methods*/
	
	
}

Tix=new Object;
Tix=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Tix\nself.objList["+this.id+"] =  Tix");

	/*Methods*/
	
	this.At=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].At ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtEnd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtEnd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtInsert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtInsert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelFirst=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelFirst ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelLast=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelLast ("+putArgs+")");
		return pyReturn("_out");
	}

	this.FileTypeList=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].FileTypeList ("+putArgs+")");
		return pyReturn("_out");
	}

	this.NoDefaultRoot=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].NoDefaultRoot ("+putArgs+")");
		return pyReturn("_out");
	}

	this.OptionName=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].OptionName ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Tcl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Tcl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getboolean=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getboolean ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_names=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_names ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_types=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_types ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mainloop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mainloop ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

Tkconstants=new Object;
Tkconstants=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Tkconstants\nself.objList["+this.id+"] =  Tkconstants");

	/*Methods*/
	
	
}

Tkdnd=new Object;
Tkdnd=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Tkdnd\nself.objList["+this.id+"] =  Tkdnd");

	/*Methods*/
	
	this.dnd_start=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dnd_start ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

Tkinter=new Object;
Tkinter=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import Tkinter\nself.objList["+this.id+"] =  Tkinter");

	/*Methods*/
	
	this.At=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].At ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtEnd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtEnd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtInsert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtInsert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelFirst=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelFirst ("+putArgs+")");
		return pyReturn("_out");
	}

	this.AtSelLast=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AtSelLast ("+putArgs+")");
		return pyReturn("_out");
	}

	this.NoDefaultRoot=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].NoDefaultRoot ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Tcl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Tcl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getboolean=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getboolean ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_names=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_names ("+putArgs+")");
		return pyReturn("_out");
	}

	this.image_types=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].image_types ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mainloop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mainloop ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

UpdateManager=new Object;
UpdateManager=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import UpdateManager\nself.objList["+this.id+"] =  UpdateManager");

	/*Methods*/
	
	
}

UserDict=new Object;
UserDict=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import UserDict\nself.objList["+this.id+"] =  UserDict");

	/*Methods*/
	
	
}

UserList=new Object;
UserList=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import UserList\nself.objList["+this.id+"] =  UserList");

	/*Methods*/
	
	
}

UserString=new Object;
UserString=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import UserString\nself.objList["+this.id+"] =  UserString");

	/*Methods*/
	
	
}

WalImageFile=new Object;
WalImageFile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import WalImageFile\nself.objList["+this.id+"] =  WalImageFile");

	/*Methods*/
	
	this.i32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].i32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

WmfImagePlugin=new Object;
WmfImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import WmfImagePlugin\nself.objList["+this.id+"] =  WmfImagePlugin");

	/*Methods*/
	
	this.dword=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dword ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thai_long=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].long ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_handler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thai_short=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].short ("+putArgs+")");
		return pyReturn("_out");
	}

	this.word=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].word ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

XVThumbImagePlugin=new Object;
XVThumbImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import XVThumbImagePlugin\nself.objList["+this.id+"] =  XVThumbImagePlugin");

	/*Methods*/
	
	
}

XbmImagePlugin=new Object;
XbmImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import XbmImagePlugin\nself.objList["+this.id+"] =  XbmImagePlugin");

	/*Methods*/
	
	
}

XpmImagePlugin=new Object;
XpmImagePlugin=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import XpmImagePlugin\nself.objList["+this.id+"] =  XpmImagePlugin");

	/*Methods*/
	
	
}

__future__=new Object;
__future__=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import __future__\nself.objList["+this.id+"] =  __future__");

	/*Methods*/
	
	
}

__init__=new Object;
__init__=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import __init__\nself.objList["+this.id+"] =  __init__");

	/*Methods*/
	
	
}

_abcoll=new Object;
_abcoll=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import _abcoll\nself.objList["+this.id+"] =  _abcoll");

	/*Methods*/
	
	this.abstractmethod=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].abstractmethod ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

_json=new Object;
_json=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import _json\nself.objList["+this.id+"] =  _json");

	/*Methods*/
	
	
}

_strptime=new Object;
_strptime=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import _strptime\nself.objList["+this.id+"] =  _strptime");

	/*Methods*/
	
	this.re_compile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].re_compile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.re_escape=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].re_escape ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

_threading_local=new Object;
_threading_local=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import _threading_local\nself.objList["+this.id+"] =  _threading_local");

	/*Methods*/
	
	this.RLock=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].RLock ("+putArgs+")");
		return pyReturn("_out");
	}

	this.current_thread=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].current_thread ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

abc=new Object;
abc=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import abc\nself.objList["+this.id+"] =  abc");

	/*Methods*/
	
	this.abstractmethod=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].abstractmethod ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

aifc=new Object;
aifc=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import aifc\nself.objList["+this.id+"] =  aifc");

	/*Methods*/
	
	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	this.openfp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].openfp ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

anydbm=new Object;
anydbm=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import anydbm\nself.objList["+this.id+"] =  anydbm");

	/*Methods*/
	
	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

apport_python_hook=new Object;
apport_python_hook=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import apport_python_hook\nself.objList["+this.id+"] =  apport_python_hook");

	/*Methods*/
	
	this.apport_excepthook=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].apport_excepthook ("+putArgs+")");
		return pyReturn("_out");
	}

	this.enabled=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].enabled ("+putArgs+")");
		return pyReturn("_out");
	}

	this.install=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].install ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ast=new Object;
ast=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ast\nself.objList["+this.id+"] =  ast");

	/*Methods*/
	
	this.copy_location=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].copy_location ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dump=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dump ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fix_missing_locations=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fix_missing_locations ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_docstring=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_docstring ("+putArgs+")");
		return pyReturn("_out");
	}

	this.increment_lineno=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].increment_lineno ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iter_child_nodes=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iter_child_nodes ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iter_fields=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iter_fields ("+putArgs+")");
		return pyReturn("_out");
	}

	this.literal_eval=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].literal_eval ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

asynchat=new Object;
asynchat=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import asynchat\nself.objList["+this.id+"] =  asynchat");

	/*Methods*/
	
	this.filterwarnings=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].filterwarnings ("+putArgs+")");
		return pyReturn("_out");
	}

	this.find_prefix_at_end=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].find_prefix_at_end ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

asyncore=new Object;
asyncore=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import asyncore\nself.objList["+this.id+"] =  asyncore");

	/*Methods*/
	
	this.close_all=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].close_all ("+putArgs+")");
		return pyReturn("_out");
	}

	this.compact_traceback=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compact_traceback ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loop ("+putArgs+")");
		return pyReturn("_out");
	}

	this.poll=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].poll ("+putArgs+")");
		return pyReturn("_out");
	}

	this.poll2=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].poll2 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.poll3=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].poll3 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readwrite=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readwrite ("+putArgs+")");
		return pyReturn("_out");
	}

	this.write=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].write ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

atexit=new Object;
atexit=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import atexit\nself.objList["+this.id+"] =  atexit");

	/*Methods*/
	
	this.register=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

audiodev=new Object;
audiodev=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import audiodev\nself.objList["+this.id+"] =  audiodev");

	/*Methods*/
	
	this.AudioDev=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AudioDev ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

base64=new Object;
base64=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import base64\nself.objList["+this.id+"] =  base64");

	/*Methods*/
	
	this.b16decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].b16decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.b16encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].b16encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.b32decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].b32decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.b32encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].b32encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.b64decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].b64decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.b64encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].b64encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.decodestring=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].decodestring ("+putArgs+")");
		return pyReturn("_out");
	}

	this.encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.encodestring=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].encodestring ("+putArgs+")");
		return pyReturn("_out");
	}

	this.standard_b64decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].standard_b64decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.standard_b64encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].standard_b64encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test1=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test1 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.urlsafe_b64decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].urlsafe_b64decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.urlsafe_b64encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].urlsafe_b64encode ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

bdb=new Object;
bdb=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import bdb\nself.objList["+this.id+"] =  bdb");

	/*Methods*/
	
	this.bar=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].bar ("+putArgs+")");
		return pyReturn("_out");
	}

	this.checkfuncname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].checkfuncname ("+putArgs+")");
		return pyReturn("_out");
	}

	this.effective=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].effective ("+putArgs+")");
		return pyReturn("_out");
	}

	this.foo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].foo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.set_trace=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].set_trace ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

binhex=new Object;
binhex=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import binhex\nself.objList["+this.id+"] =  binhex");

	/*Methods*/
	
	this.binhex=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].binhex ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getfileinfo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getfileinfo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.hexbin=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].hexbin ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

bisect=new Object;
bisect=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import bisect\nself.objList["+this.id+"] =  bisect");

	/*Methods*/
	
	
}

bugbuddy=new Object;
bugbuddy=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import bugbuddy\nself.objList["+this.id+"] =  bugbuddy");

	/*Methods*/
	
	this.install=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].install ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uninstall=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uninstall ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

cProfile=new Object;
cProfile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import cProfile\nself.objList["+this.id+"] =  cProfile");

	/*Methods*/
	
	this.help=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].help ("+putArgs+")");
		return pyReturn("_out");
	}

	this.label=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].label ("+putArgs+")");
		return pyReturn("_out");
	}

	this.main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].main ("+putArgs+")");
		return pyReturn("_out");
	}

	this.run=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].run ("+putArgs+")");
		return pyReturn("_out");
	}

	this.runctx=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].runctx ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

calendar=new Object;
calendar=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import calendar\nself.objList["+this.id+"] =  calendar");

	/*Methods*/
	
	this.calendar=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].calendar ("+putArgs+")");
		return pyReturn("_out");
	}

	this.firstweekday=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].firstweekday ("+putArgs+")");
		return pyReturn("_out");
	}

	this.format=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].format ("+putArgs+")");
		return pyReturn("_out");
	}

	this.formatstring=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].formatstring ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isleap=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isleap ("+putArgs+")");
		return pyReturn("_out");
	}

	this.leapdays=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].leapdays ("+putArgs+")");
		return pyReturn("_out");
	}

	this.main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].main ("+putArgs+")");
		return pyReturn("_out");
	}

	this.month=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].month ("+putArgs+")");
		return pyReturn("_out");
	}

	this.monthcalendar=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].monthcalendar ("+putArgs+")");
		return pyReturn("_out");
	}

	this.monthrange=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].monthrange ("+putArgs+")");
		return pyReturn("_out");
	}

	this.prcal=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].prcal ("+putArgs+")");
		return pyReturn("_out");
	}

	this.prmonth=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].prmonth ("+putArgs+")");
		return pyReturn("_out");
	}

	this.prweek=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].prweek ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setfirstweekday=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setfirstweekday ("+putArgs+")");
		return pyReturn("_out");
	}

	this.timegm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].timegm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.week=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].week ("+putArgs+")");
		return pyReturn("_out");
	}

	this.weekday=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].weekday ("+putArgs+")");
		return pyReturn("_out");
	}

	this.weekheader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].weekheader ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

cdrom=new Object;
cdrom=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import cdrom\nself.objList["+this.id+"] =  cdrom");

	/*Methods*/
	
	
}

cgi=new Object;
cgi=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import cgi\nself.objList["+this.id+"] =  cgi");

	/*Methods*/
	
	this.dolog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dolog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.escape=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].escape ("+putArgs+")");
		return pyReturn("_out");
	}

	this.filterwarnings=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].filterwarnings ("+putArgs+")");
		return pyReturn("_out");
	}

	this.initlog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].initlog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.log=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].log ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nolog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nolog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_header=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_header ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_multipart=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_multipart ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_qs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_qs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_qsl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_qsl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.print_arguments=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].print_arguments ("+putArgs+")");
		return pyReturn("_out");
	}

	this.print_directory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].print_directory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.print_environ=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].print_environ ("+putArgs+")");
		return pyReturn("_out");
	}

	this.print_environ_usage=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].print_environ_usage ("+putArgs+")");
		return pyReturn("_out");
	}

	this.print_exception=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].print_exception ("+putArgs+")");
		return pyReturn("_out");
	}

	this.print_form=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].print_form ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.valid_boundary=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].valid_boundary ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

cgitb=new Object;
cgitb=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import cgitb\nself.objList["+this.id+"] =  cgitb");

	/*Methods*/
	
	this.enable=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].enable ("+putArgs+")");
		return pyReturn("_out");
	}

	this.grey=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].grey ("+putArgs+")");
		return pyReturn("_out");
	}

	this.handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].handler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.html=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].html ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lookup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lookup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.reset=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].reset ("+putArgs+")");
		return pyReturn("_out");
	}

	this.scanvars=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].scanvars ("+putArgs+")");
		return pyReturn("_out");
	}

	this.small=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].small ("+putArgs+")");
		return pyReturn("_out");
	}

	this.strong=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].strong ("+putArgs+")");
		return pyReturn("_out");
	}

	this.text=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].text ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

checkbox=new Object;
checkbox=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import checkbox\nself.objList["+this.id+"] =  checkbox");

	/*Methods*/
	
	
}

chunk=new Object;
chunk=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import chunk\nself.objList["+this.id+"] =  chunk");

	/*Methods*/
	
	
}

cmd=new Object;
cmd=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import cmd\nself.objList["+this.id+"] =  cmd");

	/*Methods*/
	
	
}

code=new Object;
code=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import code\nself.objList["+this.id+"] =  code");

	/*Methods*/
	
	this.compile_command=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compile_command ("+putArgs+")");
		return pyReturn("_out");
	}

	this.interact=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].interact ("+putArgs+")");
		return pyReturn("_out");
	}

	this.softspace=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].softspace ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

codecs=new Object;
codecs=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import codecs\nself.objList["+this.id+"] =  codecs");

	/*Methods*/
	
	this.EncodedFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].EncodedFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getdecoder=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getdecoder ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getencoder=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getencoder ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getincrementaldecoder=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getincrementaldecoder ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getincrementalencoder=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getincrementalencoder ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getreader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getreader ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getwriter=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getwriter ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iterdecode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iterdecode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iterencode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iterencode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.make_encoding_map=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].make_encoding_map ("+putArgs+")");
		return pyReturn("_out");
	}

	this.make_identity_dict=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].make_identity_dict ("+putArgs+")");
		return pyReturn("_out");
	}

	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

codeop=new Object;
codeop=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import codeop\nself.objList["+this.id+"] =  codeop");

	/*Methods*/
	
	this.compile_command=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compile_command ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

collections=new Object;
collections=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import collections\nself.objList["+this.id+"] =  collections");

	/*Methods*/
	
	this.namedtuple=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].namedtuple ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

colorsys=new Object;
colorsys=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import colorsys\nself.objList["+this.id+"] =  colorsys");

	/*Methods*/
	
	this.hls_to_rgb=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].hls_to_rgb ("+putArgs+")");
		return pyReturn("_out");
	}

	this.hsv_to_rgb=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].hsv_to_rgb ("+putArgs+")");
		return pyReturn("_out");
	}

	this.rgb_to_hls=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].rgb_to_hls ("+putArgs+")");
		return pyReturn("_out");
	}

	this.rgb_to_hsv=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].rgb_to_hsv ("+putArgs+")");
		return pyReturn("_out");
	}

	this.rgb_to_yiq=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].rgb_to_yiq ("+putArgs+")");
		return pyReturn("_out");
	}

	this.yiq_to_rgb=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].yiq_to_rgb ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

commands=new Object;
commands=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import commands\nself.objList["+this.id+"] =  commands");

	/*Methods*/
	
	this.getoutput=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getoutput ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getstatus=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getstatus ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getstatusoutput=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getstatusoutput ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mk2arg=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mk2arg ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mkarg=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mkarg ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

compileall=new Object;
compileall=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import compileall\nself.objList["+this.id+"] =  compileall");

	/*Methods*/
	
	this.compile_dir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compile_dir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.compile_file=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compile_file ("+putArgs+")");
		return pyReturn("_out");
	}

	this.compile_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compile_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expand_args=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expand_args ("+putArgs+")");
		return pyReturn("_out");
	}

	this.main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].main ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

compiler=new Object;
compiler=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import compiler\nself.objList["+this.id+"] =  compiler");

	/*Methods*/
	
	this.compile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.compileFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compileFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

configobj=new Object;
configobj=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import configobj\nself.objList["+this.id+"] =  configobj");

	/*Methods*/
	
	this.flatten_errors=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].flatten_errors ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getObj=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getObj ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_extra_values=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_extra_values ("+putArgs+")");
		return pyReturn("_out");
	}

	this.match_utf8=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].match_utf8 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unrepr=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unrepr ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

contextlib=new Object;
contextlib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import contextlib\nself.objList["+this.id+"] =  contextlib");

	/*Methods*/
	
	this.contextmanager=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].contextmanager ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nested=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nested ("+putArgs+")");
		return pyReturn("_out");
	}

	this.wraps=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].wraps ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

cookielib=new Object;
cookielib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import cookielib\nself.objList["+this.id+"] =  cookielib");

	/*Methods*/
	
	this.deepvalues=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].deepvalues ("+putArgs+")");
		return pyReturn("_out");
	}

	this.domain_match=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].domain_match ("+putArgs+")");
		return pyReturn("_out");
	}

	this.eff_request_host=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].eff_request_host ("+putArgs+")");
		return pyReturn("_out");
	}

	this.escape_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].escape_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.http2time=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].http2time ("+putArgs+")");
		return pyReturn("_out");
	}

	this.is_HDN=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].is_HDN ("+putArgs+")");
		return pyReturn("_out");
	}

	this.is_third_party=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].is_third_party ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iso2time=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iso2time ("+putArgs+")");
		return pyReturn("_out");
	}

	this.join_header_words=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].join_header_words ("+putArgs+")");
		return pyReturn("_out");
	}

	this.liberal_is_HDN=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].liberal_is_HDN ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lwp_cookie_str=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lwp_cookie_str ("+putArgs+")");
		return pyReturn("_out");
	}

	this.offset_from_tz_string=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].offset_from_tz_string ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_ns_headers=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_ns_headers ("+putArgs+")");
		return pyReturn("_out");
	}

	this.reach=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].reach ("+putArgs+")");
		return pyReturn("_out");
	}

	this.request_host=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].request_host ("+putArgs+")");
		return pyReturn("_out");
	}

	this.request_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].request_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.request_port=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].request_port ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split_header_words=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split_header_words ("+putArgs+")");
		return pyReturn("_out");
	}

	this.time2isoz=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].time2isoz ("+putArgs+")");
		return pyReturn("_out");
	}

	this.time2netscape=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].time2netscape ("+putArgs+")");
		return pyReturn("_out");
	}

	this.timegm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].timegm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unmatched=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unmatched ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uppercase_escaped_char=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uppercase_escaped_char ("+putArgs+")");
		return pyReturn("_out");
	}

	this.user_domain_match=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].user_domain_match ("+putArgs+")");
		return pyReturn("_out");
	}

	this.vals_sorted_by_key=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].vals_sorted_by_key ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

copy=new Object;
copy=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import copy\nself.objList["+this.id+"] =  copy");

	/*Methods*/
	
	this.copy=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].copy ("+putArgs+")");
		return pyReturn("_out");
	}

	this.deepcopy=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].deepcopy ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

copy_reg=new Object;
copy_reg=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import copy_reg\nself.objList["+this.id+"] =  copy_reg");

	/*Methods*/
	
	this.add_extension=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].add_extension ("+putArgs+")");
		return pyReturn("_out");
	}

	this.clear_extension_cache=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].clear_extension_cache ("+putArgs+")");
		return pyReturn("_out");
	}

	this.constructor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].constructor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pickle=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pickle ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pickle_complex=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pickle_complex ("+putArgs+")");
		return pyReturn("_out");
	}

	this.remove_extension=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].remove_extension ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

csv=new Object;
csv=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import csv\nself.objList["+this.id+"] =  csv");

	/*Methods*/
	
	
}

cupshelpers=new Object;
cupshelpers=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import cupshelpers\nself.objList["+this.id+"] =  cupshelpers");

	/*Methods*/
	
	this.activateNewPrinter=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].activateNewPrinter ("+putArgs+")");
		return pyReturn("_out");
	}

	this.copyPPDOptions=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].copyPPDOptions ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getDevices=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getDevices ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getPrinters=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getPrinters ("+putArgs+")");
		return pyReturn("_out");
	}

	this.missingPackagesAndExecutables=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].missingPackagesAndExecutables ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseDeviceID=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseDeviceID ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setPPDPageSize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setPPDPageSize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.set_debugprint_fn=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].set_debugprint_fn ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

dateutil=new Object;
dateutil=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dateutil\nself.objList["+this.id+"] =  dateutil");

	/*Methods*/
	
	
}

dbhash=new Object;
dbhash=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dbhash\nself.objList["+this.id+"] =  dbhash");

	/*Methods*/
	
	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

dbus_bindings=new Object;
dbus_bindings=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dbus_bindings\nself.objList["+this.id+"] =  dbus_bindings");

	/*Methods*/
	
	this.bus_release_name=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].bus_release_name ("+putArgs+")");
		return pyReturn("_out");
	}

	this.bus_request_name=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].bus_request_name ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

deb822=new Object;
deb822=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import deb822\nself.objList["+this.id+"] =  deb822");

	/*Methods*/
	
	this.function_deprecated_by=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].function_deprecated_by ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

debconf=new Object;
debconf=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import debconf\nself.objList["+this.id+"] =  debconf");

	/*Methods*/
	
	this.runFrontEnd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].runFrontEnd ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

decimal=new Object;
decimal=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import decimal\nself.objList["+this.id+"] =  decimal");

	/*Methods*/
	
	this.getcontext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getcontext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.localcontext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].localcontext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setcontext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setcontext ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

demjson=new Object;
demjson=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import demjson\nself.objList["+this.id+"] =  demjson");

	/*Methods*/
	
	this.auto_unicode_decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].auto_unicode_decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.decode_hex=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].decode_hex ("+putArgs+")");
		return pyReturn("_out");
	}

	this.decode_octal=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].decode_octal ("+putArgs+")");
		return pyReturn("_out");
	}

	this.determine_float_precision=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].determine_float_precision ("+putArgs+")");
		return pyReturn("_out");
	}

	this.encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.extend_and_flatten_list_with_sep=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].extend_and_flatten_list_with_sep ("+putArgs+")");
		return pyReturn("_out");
	}

	this.extend_list_with_sep=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].extend_list_with_sep ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isnumbertype=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isnumbertype ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isstringtype=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isstringtype ("+putArgs+")");
		return pyReturn("_out");
	}

	this.skipstringsafe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].skipstringsafe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.skipstringsafe_slow=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].skipstringsafe_slow ("+putArgs+")");
		return pyReturn("_out");
	}

	this.surrogate_pair_as_unicode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].surrogate_pair_as_unicode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unicode_as_surrogate_pair=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unicode_as_surrogate_pair ("+putArgs+")");
		return pyReturn("_out");
	}

	this.utf32be_decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].utf32be_decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.utf32be_encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].utf32be_encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.utf32le_decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].utf32le_decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.utf32le_encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].utf32le_encode ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

difflib=new Object;
difflib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import difflib\nself.objList["+this.id+"] =  difflib");

	/*Methods*/
	
	this.IS_CHARACTER_JUNK=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IS_CHARACTER_JUNK ("+putArgs+")");
		return pyReturn("_out");
	}

	this.IS_LINE_JUNK=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].IS_LINE_JUNK ("+putArgs+")");
		return pyReturn("_out");
	}

	this.context_diff=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].context_diff ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_close_matches=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_close_matches ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ndiff=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ndiff ("+putArgs+")");
		return pyReturn("_out");
	}

	this.restore=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].restore ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unified_diff=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unified_diff ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

dircache=new Object;
dircache=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dircache\nself.objList["+this.id+"] =  dircache");

	/*Methods*/
	
	this.annotate=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].annotate ("+putArgs+")");
		return pyReturn("_out");
	}

	this.listdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].listdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.opendir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].opendir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.reset=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].reset ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

dis=new Object;
dis=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dis\nself.objList["+this.id+"] =  dis");

	/*Methods*/
	
	this.dis=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dis ("+putArgs+")");
		return pyReturn("_out");
	}

	this.disassemble=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].disassemble ("+putArgs+")");
		return pyReturn("_out");
	}

	this.disassemble_string=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].disassemble_string ("+putArgs+")");
		return pyReturn("_out");
	}

	this.disco=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].disco ("+putArgs+")");
		return pyReturn("_out");
	}

	this.distb=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].distb ("+putArgs+")");
		return pyReturn("_out");
	}

	this.findlabels=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].findlabels ("+putArgs+")");
		return pyReturn("_out");
	}

	this.findlinestarts=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].findlinestarts ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

doctest=new Object;
doctest=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import doctest\nself.objList["+this.id+"] =  doctest");

	/*Methods*/
	
	this.DocFileSuite=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DocFileSuite ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DocFileTest=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DocFileTest ("+putArgs+")");
		return pyReturn("_out");
	}

	this.DocTestSuite=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].DocTestSuite ("+putArgs+")");
		return pyReturn("_out");
	}

	this.debug=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].debug ("+putArgs+")");
		return pyReturn("_out");
	}

	this.debug_script=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].debug_script ("+putArgs+")");
		return pyReturn("_out");
	}

	this.debug_src=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].debug_src ("+putArgs+")");
		return pyReturn("_out");
	}

	this.namedtuple=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].namedtuple ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_optionflag=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_optionflag ("+putArgs+")");
		return pyReturn("_out");
	}

	this.run_docstring_examples=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].run_docstring_examples ("+putArgs+")");
		return pyReturn("_out");
	}

	this.script_from_examples=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].script_from_examples ("+putArgs+")");
		return pyReturn("_out");
	}

	this.set_unittest_reportflags=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].set_unittest_reportflags ("+putArgs+")");
		return pyReturn("_out");
	}

	this.testfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].testfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.testmod=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].testmod ("+putArgs+")");
		return pyReturn("_out");
	}

	this.testsource=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].testsource ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

drv_libxml2=new Object;
drv_libxml2=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import drv_libxml2\nself.objList["+this.id+"] =  drv_libxml2");

	/*Methods*/
	
	this.create_parser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].create_parser ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

dsextras=new Object;
dsextras=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dsextras\nself.objList["+this.id+"] =  dsextras");

	/*Methods*/
	
	this.get_m4_define=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_m4_define ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getoutput=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getoutput ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getstatusoutput=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getstatusoutput ("+putArgs+")");
		return pyReturn("_out");
	}

	this.have_pkgconfig=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].have_pkgconfig ("+putArgs+")");
		return pyReturn("_out");
	}

	this.list_files=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].list_files ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pkgc_version_check=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pkgc_version_check ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

dumbdbm=new Object;
dumbdbm=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dumbdbm\nself.objList["+this.id+"] =  dumbdbm");

	/*Methods*/
	
	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

dummy_thread=new Object;
dummy_thread=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dummy_thread\nself.objList["+this.id+"] =  dummy_thread");

	/*Methods*/
	
	this.allocate_lock=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].allocate_lock ("+putArgs+")");
		return pyReturn("_out");
	}

	this.exit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].exit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_ident=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_ident ("+putArgs+")");
		return pyReturn("_out");
	}

	this.interrupt_main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].interrupt_main ("+putArgs+")");
		return pyReturn("_out");
	}

	this.stack_size=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].stack_size ("+putArgs+")");
		return pyReturn("_out");
	}

	this.start_new_thread=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].start_new_thread ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

dummy_threading=new Object;
dummy_threading=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import dummy_threading\nself.objList["+this.id+"] =  dummy_threading");

	/*Methods*/
	
	this.BoundedSemaphore=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].BoundedSemaphore ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Condition=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Condition ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Event=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Event ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Lock=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Lock ("+putArgs+")");
		return pyReturn("_out");
	}

	this.RLock=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].RLock ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Semaphore=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Semaphore ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Timer=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Timer ("+putArgs+")");
		return pyReturn("_out");
	}

	this.activeCount=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].activeCount ("+putArgs+")");
		return pyReturn("_out");
	}

	this.active_count=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].active_count ("+putArgs+")");
		return pyReturn("_out");
	}

	this.currentThread=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].currentThread ("+putArgs+")");
		return pyReturn("_out");
	}

	this.current_thread=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].current_thread ("+putArgs+")");
		return pyReturn("_out");
	}

	this.enumerate=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].enumerate ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setprofile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setprofile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.settrace=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].settrace ("+putArgs+")");
		return pyReturn("_out");
	}

	this.stack_size=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].stack_size ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

easy_install=new Object;
easy_install=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import easy_install\nself.objList["+this.id+"] =  easy_install");

	/*Methods*/
	
	
}

exceptions=new Object;
exceptions=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import exceptions\nself.objList["+this.id+"] =  exceptions");

	/*Methods*/
	
	
}

fdpexpect=new Object;
fdpexpect=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import fdpexpect\nself.objList["+this.id+"] =  fdpexpect");

	/*Methods*/
	
	this.run=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].run ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split_command_line=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split_command_line ("+putArgs+")");
		return pyReturn("_out");
	}

	this.which=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].which ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

feedparser=new Object;
feedparser=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import feedparser\nself.objList["+this.id+"] =  feedparser");

	/*Methods*/
	
	this.parse=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerDateHandler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerDateHandler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.zopeCompatibilityHack=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].zopeCompatibilityHack ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

filecmp=new Object;
filecmp=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import filecmp\nself.objList["+this.id+"] =  filecmp");

	/*Methods*/
	
	this.cmp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cmp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cmpfiles=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cmpfiles ("+putArgs+")");
		return pyReturn("_out");
	}

	this.demo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].demo ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

fileinput=new Object;
fileinput=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import fileinput\nself.objList["+this.id+"] =  fileinput");

	/*Methods*/
	
	this.close=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].close ("+putArgs+")");
		return pyReturn("_out");
	}

	this.filelineno=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].filelineno ("+putArgs+")");
		return pyReturn("_out");
	}

	this.filename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].filename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fileno=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fileno ("+putArgs+")");
		return pyReturn("_out");
	}

	this.hook_compressed=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].hook_compressed ("+putArgs+")");
		return pyReturn("_out");
	}

	this.hook_encoded=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].hook_encoded ("+putArgs+")");
		return pyReturn("_out");
	}

	this.input=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].input ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isfirstline=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isfirstline ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isstdin=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isstdin ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lineno=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lineno ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nextfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nextfile ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

fnmatch=new Object;
fnmatch=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import fnmatch\nself.objList["+this.id+"] =  fnmatch");

	/*Methods*/
	
	this.filter=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].filter ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fnmatch=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fnmatch ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fnmatchcase=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fnmatchcase ("+putArgs+")");
		return pyReturn("_out");
	}

	this.translate=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].translate ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

formatter=new Object;
formatter=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import formatter\nself.objList["+this.id+"] =  formatter");

	/*Methods*/
	
	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

fpformat=new Object;
fpformat=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import fpformat\nself.objList["+this.id+"] =  fpformat");

	/*Methods*/
	
	this.extract=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].extract ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fix=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fix ("+putArgs+")");
		return pyReturn("_out");
	}

	this.roundfrac=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].roundfrac ("+putArgs+")");
		return pyReturn("_out");
	}

	this.sci=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].sci ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unexpo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unexpo ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

fractions=new Object;
fractions=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import fractions\nself.objList["+this.id+"] =  fractions");

	/*Methods*/
	
	this.gcd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].gcd ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

fstab=new Object;
fstab=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import fstab\nself.objList["+this.id+"] =  fstab");

	/*Methods*/
	
	
}

ftplib=new Object;
ftplib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ftplib\nself.objList["+this.id+"] =  ftplib");

	/*Methods*/
	
	this.ftpcp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ftpcp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse150=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse150 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse227=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse227 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse229=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse229 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse257=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse257 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.print_line=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].print_line ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

functools=new Object;
functools=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import functools\nself.objList["+this.id+"] =  functools");

	/*Methods*/
	
	this.update_wrapper=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].update_wrapper ("+putArgs+")");
		return pyReturn("_out");
	}

	this.wraps=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].wraps ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

genericpath=new Object;
genericpath=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import genericpath\nself.objList["+this.id+"] =  genericpath");

	/*Methods*/
	
	this.commonprefix=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].commonprefix ("+putArgs+")");
		return pyReturn("_out");
	}

	this.exists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].exists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getatime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getatime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getctime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getctime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmtime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmtime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getsize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isfile ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

getopt=new Object;
getopt=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import getopt\nself.objList["+this.id+"] =  getopt");

	/*Methods*/
	
	this.do_longs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].do_longs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.do_shorts=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].do_shorts ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getopt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getopt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.gnu_getopt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].gnu_getopt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.long_has_args=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].long_has_args ("+putArgs+")");
		return pyReturn("_out");
	}

	this.short_has_arg=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].short_has_arg ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

getpass=new Object;
getpass=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import getpass\nself.objList["+this.id+"] =  getpass");

	/*Methods*/
	
	this.fallback_getpass=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fallback_getpass ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getpass=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getpass ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getuser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getuser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unix_getpass=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unix_getpass ("+putArgs+")");
		return pyReturn("_out");
	}

	this.win_getpass=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].win_getpass ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

gettext=new Object;
gettext=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import gettext\nself.objList["+this.id+"] =  gettext");

	/*Methods*/
	
	this.Catalog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Catalog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.bind_textdomain_codeset=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].bind_textdomain_codeset ("+putArgs+")");
		return pyReturn("_out");
	}

	this.bindtextdomain=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].bindtextdomain ("+putArgs+")");
		return pyReturn("_out");
	}

	this.c2py=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].c2py ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dgettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dgettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dngettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dngettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.find=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].find ("+putArgs+")");
		return pyReturn("_out");
	}

	this.gettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].gettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.install=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].install ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ldgettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ldgettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ldngettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ldngettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lgettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lgettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lngettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lngettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ngettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ngettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.textdomain=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].textdomain ("+putArgs+")");
		return pyReturn("_out");
	}

	this.translation=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].translation ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

glchess=new Object;
glchess=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import glchess\nself.objList["+this.id+"] =  glchess");

	/*Methods*/
	
	
}

glib=new Object;
glib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import glib\nself.objList["+this.id+"] =  glib");

	/*Methods*/
	
	
}

glob=new Object;
glob=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import glob\nself.objList["+this.id+"] =  glob");

	/*Methods*/
	
	this.glob=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].glob ("+putArgs+")");
		return pyReturn("_out");
	}

	this.glob0=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].glob0 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.glob1=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].glob1 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.has_magic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].has_magic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iglob=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iglob ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

gnome_sudoku=new Object;
gnome_sudoku=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import gnome_sudoku\nself.objList["+this.id+"] =  gnome_sudoku");

	/*Methods*/
	
	
}

google=new Object;
google=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import google\nself.objList["+this.id+"] =  google");

	/*Methods*/
	
	
}

gzip=new Object;
gzip=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import gzip\nself.objList["+this.id+"] =  gzip");

	/*Methods*/
	
	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read32=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read32 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.write32u=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].write32u ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

hashlib=new Object;
hashlib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import hashlib\nself.objList["+this.id+"] =  hashlib");

	/*Methods*/
	
	this.thai_new=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].new ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

heapq=new Object;
heapq=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import heapq\nself.objList["+this.id+"] =  heapq");

	/*Methods*/
	
	this.merge=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].merge ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nlargest=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nlargest ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nsmallest=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nsmallest ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

hmac=new Object;
hmac=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import hmac\nself.objList["+this.id+"] =  hmac");

	/*Methods*/
	
	this.thai_new=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].new ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

htmlentitydefs=new Object;
htmlentitydefs=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import htmlentitydefs\nself.objList["+this.id+"] =  htmlentitydefs");

	/*Methods*/
	
	
}

htmllib=new Object;
htmllib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import htmllib\nself.objList["+this.id+"] =  htmllib");

	/*Methods*/
	
	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

httplib=new Object;
httplib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import httplib\nself.objList["+this.id+"] =  httplib");

	/*Methods*/
	
	this.FakeSocket=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].FakeSocket ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.urlsplit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].urlsplit ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

ihooks=new Object;
ihooks=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ihooks\nself.objList["+this.id+"] =  ihooks");

	/*Methods*/
	
	this.install=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].install ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uninstall=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uninstall ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

imaplib=new Object;
imaplib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import imaplib\nself.objList["+this.id+"] =  imaplib");

	/*Methods*/
	
	this.Int2AP=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Int2AP ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Internaldate2tuple=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Internaldate2tuple ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ParseFlags=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ParseFlags ("+putArgs+")");
		return pyReturn("_out");
	}

	this.Time2Internaldate=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].Time2Internaldate ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

imghdr=new Object;
imghdr=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import imghdr\nself.objList["+this.id+"] =  imghdr");

	/*Methods*/
	
	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_bmp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_bmp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_exif=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_exif ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_gif=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_gif ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_jpeg=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_jpeg ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_pbm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_pbm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_pgm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_pgm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_png=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_png ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_ppm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_ppm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_rast=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_rast ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_rgb=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_rgb ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_tiff=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_tiff ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test_xbm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test_xbm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.testall=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].testall ("+putArgs+")");
		return pyReturn("_out");
	}

	this.what=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].what ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

imputil=new Object;
imputil=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import imputil\nself.objList["+this.id+"] =  imputil");

	/*Methods*/
	
	this.py_suffix_importer=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].py_suffix_importer ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

inspect=new Object;
inspect=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import inspect\nself.objList["+this.id+"] =  inspect");

	/*Methods*/
	
	this.classify_class_attrs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].classify_class_attrs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleandoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleandoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.findsource=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].findsource ("+putArgs+")");
		return pyReturn("_out");
	}

	this.formatargspec=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].formatargspec ("+putArgs+")");
		return pyReturn("_out");
	}

	this.formatargvalues=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].formatargvalues ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getabsfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getabsfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getargs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getargs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getargspec=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getargspec ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getargvalues=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getargvalues ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getblock=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getblock ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getclasstree=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getclasstree ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getcomments=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getcomments ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getdoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getdoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getframeinfo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getframeinfo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getinnerframes=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getinnerframes ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getlineno=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getlineno ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmembers=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmembers ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmodule=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmodule ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmoduleinfo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmoduleinfo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmodulename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmodulename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmro=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmro ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getouterframes=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getouterframes ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsource=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getsource ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsourcefile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getsourcefile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsourcelines=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getsourcelines ("+putArgs+")");
		return pyReturn("_out");
	}

	this.indentsize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].indentsize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isabstract=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isabstract ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isbuiltin=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isbuiltin ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isclass=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isclass ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iscode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iscode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isdatadescriptor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isdatadescriptor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isframe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isframe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isfunction=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isfunction ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isgenerator=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isgenerator ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isgeneratorfunction=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isgeneratorfunction ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isgetsetdescriptor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isgetsetdescriptor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ismemberdescriptor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ismemberdescriptor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ismethod=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ismethod ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ismethoddescriptor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ismethoddescriptor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ismodule=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ismodule ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isroutine=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isroutine ("+putArgs+")");
		return pyReturn("_out");
	}

	this.istraceback=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].istraceback ("+putArgs+")");
		return pyReturn("_out");
	}

	this.joinseq=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].joinseq ("+putArgs+")");
		return pyReturn("_out");
	}

	this.namedtuple=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].namedtuple ("+putArgs+")");
		return pyReturn("_out");
	}

	this.stack=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].stack ("+putArgs+")");
		return pyReturn("_out");
	}

	this.strseq=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].strseq ("+putArgs+")");
		return pyReturn("_out");
	}

	this.trace=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].trace ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walktree=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walktree ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

io=new Object;
io=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import io\nself.objList["+this.id+"] =  io");

	/*Methods*/
	
	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

json=new Object;
json=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import json\nself.objList["+this.id+"] =  json");

	/*Methods*/
	
	this.dump=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dump ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dumps=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dumps ("+putArgs+")");
		return pyReturn("_out");
	}

	this.load=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].load ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loads=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loads ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

keyword=new Object;
keyword=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import keyword\nself.objList["+this.id+"] =  keyword");

	/*Methods*/
	
	this.main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].main ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

kiki=new Object;
kiki=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import kiki\nself.objList["+this.id+"] =  kiki");

	/*Methods*/
	
	this.main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].main ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ni=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ni ("+putArgs+")");
		return pyReturn("_out");
	}

	this.speCreate=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].speCreate ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

libxml2=new Object;
libxml2=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import libxml2\nself.objList["+this.id+"] =  libxml2");

	/*Methods*/
	
	this.SAXDefaultVersion=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].SAXDefaultVersion ("+putArgs+")");
		return pyReturn("_out");
	}

	this.SAXParseFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].SAXParseFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.URIEscape=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].URIEscape ("+putArgs+")");
		return pyReturn("_out");
	}

	this.URIEscapeStr=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].URIEscapeStr ("+putArgs+")");
		return pyReturn("_out");
	}

	this.URIUnescapeString=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].URIUnescapeString ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UTF8Charcmp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UTF8Charcmp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UTF8Size=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UTF8Size ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UTF8Strlen=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UTF8Strlen ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UTF8Strloc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UTF8Strloc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UTF8Strndup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UTF8Strndup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UTF8Strpos=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UTF8Strpos ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UTF8Strsize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UTF8Strsize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.UTF8Strsub=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].UTF8Strsub ("+putArgs+")");
		return pyReturn("_out");
	}

	this.addEncodingAlias=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].addEncodingAlias ("+putArgs+")");
		return pyReturn("_out");
	}

	this.boolToText=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].boolToText ("+putArgs+")");
		return pyReturn("_out");
	}

	this.buildQName=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].buildQName ("+putArgs+")");
		return pyReturn("_out");
	}

	this.buildRelativeURI=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].buildRelativeURI ("+putArgs+")");
		return pyReturn("_out");
	}

	this.buildURI=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].buildURI ("+putArgs+")");
		return pyReturn("_out");
	}

	this.canonicPath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].canonicPath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogAdd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogAdd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogCleanup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogCleanup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogConvert=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogConvert ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogDump=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogDump ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogGetPublic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogGetPublic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogGetSystem=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogGetSystem ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogRemove=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogRemove ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogResolve=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogResolve ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogResolvePublic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogResolvePublic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogResolveSystem=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogResolveSystem ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogResolveURI=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogResolveURI ("+putArgs+")");
		return pyReturn("_out");
	}

	this.catalogSetDebug=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].catalogSetDebug ("+putArgs+")");
		return pyReturn("_out");
	}

	this.checkFilename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].checkFilename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.checkLanguageID=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].checkLanguageID ("+putArgs+")");
		return pyReturn("_out");
	}

	this.checkUTF8=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].checkUTF8 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.checkVersion=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].checkVersion ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanupCharEncodingHandlers=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanupCharEncodingHandlers ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanupEncodingAliases=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanupEncodingAliases ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanupGlobals=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanupGlobals ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanupInputCallbacks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanupInputCallbacks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanupOutputCallbacks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanupOutputCallbacks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanupParser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanupParser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanupPredefinedEntities=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanupPredefinedEntities ("+putArgs+")");
		return pyReturn("_out");
	}

	this.compressMode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compressMode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.copyChar=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].copyChar ("+putArgs+")");
		return pyReturn("_out");
	}

	this.copyCharMultiByte=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].copyCharMultiByte ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createDocParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createDocParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createEntityParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createEntityParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createFileParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createFileParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createInputBuffer=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createInputBuffer ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createMemoryParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createMemoryParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createOutputBuffer=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createOutputBuffer ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createPushParser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createPushParser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createURI=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createURI ("+putArgs+")");
		return pyReturn("_out");
	}

	this.createURLParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].createURLParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.debugDumpString=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].debugDumpString ("+putArgs+")");
		return pyReturn("_out");
	}

	this.debugMemory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].debugMemory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.defaultSAXHandlerInit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].defaultSAXHandlerInit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.delEncodingAlias=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].delEncodingAlias ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dictCleanup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dictCleanup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.docbDefaultSAXHandlerInit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].docbDefaultSAXHandlerInit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dumpMemory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dumpMemory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.encodingAlias=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].encodingAlias ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fileMatch=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fileMatch ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlCreateFileParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlCreateFileParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlCreateMemoryParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlCreateMemoryParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlCreatePushParser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlCreatePushParser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlDefaultSAXHandlerInit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlDefaultSAXHandlerInit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlHandleOmittedElem=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlHandleOmittedElem ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlInitAutoClose=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlInitAutoClose ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlIsBooleanAttr=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlIsBooleanAttr ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlIsScriptAttribute=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlIsScriptAttribute ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlNewDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlNewDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlNewDocNoDtD=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlNewDocNoDtD ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlNewParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlNewParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlParseDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlParseDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlParseFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlParseFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlReadDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlReadDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlReadFd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlReadFd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlReadFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlReadFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlReadMemory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlReadMemory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.htmlSAXParseFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].htmlSAXParseFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iOFTPMatch=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iOFTPMatch ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iOHTTPMatch=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iOHTTPMatch ("+putArgs+")");
		return pyReturn("_out");
	}

	this.initCharEncodingHandlers=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].initCharEncodingHandlers ("+putArgs+")");
		return pyReturn("_out");
	}

	this.initGlobals=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].initGlobals ("+putArgs+")");
		return pyReturn("_out");
	}

	this.initParser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].initParser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.initializeCatalog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].initializeCatalog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.initializePredefinedEntities=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].initializePredefinedEntities ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isBaseChar=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isBaseChar ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isBlank=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isBlank ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isChar=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isChar ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isCombining=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isCombining ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isDigit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isDigit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isExtender=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isExtender ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isIdeographic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isIdeographic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isLetter=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isLetter ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isPubidChar=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isPubidChar ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isXHTML=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isXHTML ("+putArgs+")");
		return pyReturn("_out");
	}

	this.keepBlanksDefault=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].keepBlanksDefault ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lastError=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lastError ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lineNumbersDefault=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lineNumbersDefault ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loadACatalog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loadACatalog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loadCatalog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loadCatalog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loadCatalogs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loadCatalogs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loadSGMLSuperCatalog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loadSGMLSuperCatalog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.memoryUsed=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].memoryUsed ("+putArgs+")");
		return pyReturn("_out");
	}

	this.namePop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].namePop ("+putArgs+")");
		return pyReturn("_out");
	}

	this.namePush=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].namePush ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nanoFTPCleanup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nanoFTPCleanup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nanoFTPInit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nanoFTPInit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nanoFTPProxy=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nanoFTPProxy ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nanoFTPScanProxy=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nanoFTPScanProxy ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nanoHTTPCleanup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nanoHTTPCleanup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nanoHTTPInit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nanoHTTPInit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nanoHTTPScanProxy=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nanoHTTPScanProxy ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newCatalog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newCatalog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newComment=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newComment ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newNode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newNode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newPI=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newPI ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newText=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newText ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newTextLen=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newTextLen ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newTextReaderFilename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newTextReaderFilename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newValidCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newValidCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nodePop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nodePop ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nodePush=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nodePush ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nodeWrap=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nodeWrap ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normalizeURIPath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normalizeURIPath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normalizeWindowsPath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normalizeWindowsPath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseCatalogFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseCatalogFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseDTD=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseDTD ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseEntity=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseEntity ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseMemory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseMemory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseURI=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseURI ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseURIRaw=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseURIRaw ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parserGetDirectory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parserGetDirectory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pathToURI=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pathToURI ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pedanticParserDefault=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pedanticParserDefault ("+putArgs+")");
		return pyReturn("_out");
	}

	this.popInputCallbacks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].popInputCallbacks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pos_id=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pos_id ("+putArgs+")");
		return pyReturn("_out");
	}

	this.predefinedEntity=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].predefinedEntity ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pythonCleanupParser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pythonCleanupParser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readFd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readFd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readMemory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readMemory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readerForDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readerForDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readerForFd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readerForFd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readerForFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readerForFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readerForMemory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readerForMemory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.recoverDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].recoverDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.recoverFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].recoverFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.recoverMemory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].recoverMemory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.regexpCompile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].regexpCompile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerDefaultInputCallbacks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerDefaultInputCallbacks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerDefaultOutputCallbacks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerDefaultOutputCallbacks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerErrorHandler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerErrorHandler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerHTTPPostCallbacks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerHTTPPostCallbacks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerXPathFunction=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerXPathFunction ("+putArgs+")");
		return pyReturn("_out");
	}

	this.relaxNGCleanupTypes=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].relaxNGCleanupTypes ("+putArgs+")");
		return pyReturn("_out");
	}

	this.relaxNGInitTypes=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].relaxNGInitTypes ("+putArgs+")");
		return pyReturn("_out");
	}

	this.relaxNGNewMemParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].relaxNGNewMemParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.relaxNGNewParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].relaxNGNewParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resetLastError=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resetLastError ("+putArgs+")");
		return pyReturn("_out");
	}

	this.schemaCleanupTypes=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].schemaCleanupTypes ("+putArgs+")");
		return pyReturn("_out");
	}

	this.schemaCollapseString=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].schemaCollapseString ("+putArgs+")");
		return pyReturn("_out");
	}

	this.schemaInitTypes=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].schemaInitTypes ("+putArgs+")");
		return pyReturn("_out");
	}

	this.schemaNewMemParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].schemaNewMemParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.schemaNewParserCtxt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].schemaNewParserCtxt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.schemaWhiteSpaceReplace=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].schemaWhiteSpaceReplace ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setCompressMode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setCompressMode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setEntityLoader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setEntityLoader ("+putArgs+")");
		return pyReturn("_out");
	}

	this.shellPrintXPathError=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].shellPrintXPathError ("+putArgs+")");
		return pyReturn("_out");
	}

	this.substituteEntitiesDefault=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].substituteEntitiesDefault ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefDefaultBufferSize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefDefaultBufferSize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefDoValidityCheckingDefaultValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefDoValidityCheckingDefaultValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefGetWarningsDefaultValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefGetWarningsDefaultValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefIndentTreeOutput=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefIndentTreeOutput ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefKeepBlanksDefaultValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefKeepBlanksDefaultValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefLineNumbersDefaultValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefLineNumbersDefaultValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefLoadExtDtdDefaultValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefLoadExtDtdDefaultValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefParserDebugEntities=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefParserDebugEntities ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefPedanticParserDefaultValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefPedanticParserDefaultValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefSaveNoEmptyTags=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefSaveNoEmptyTags ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefSubstituteEntitiesDefaultValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefSubstituteEntitiesDefaultValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.thrDefTreeIndentString=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].thrDefTreeIndentString ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsAegeanNumbers=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsAegeanNumbers ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsAlphabeticPresentationForms=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsAlphabeticPresentationForms ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsArabic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsArabic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsArabicPresentationFormsA=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsArabicPresentationFormsA ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsArabicPresentationFormsB=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsArabicPresentationFormsB ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsArmenian=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsArmenian ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsArrows=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsArrows ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBasicLatin=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBasicLatin ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBengali=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBengali ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBlock=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBlock ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBlockElements=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBlockElements ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBopomofo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBopomofo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBopomofoExtended=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBopomofoExtended ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBoxDrawing=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBoxDrawing ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBraillePatterns=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBraillePatterns ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsBuhid=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsBuhid ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsByzantineMusicalSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsByzantineMusicalSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKCompatibility=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKCompatibility ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKCompatibilityForms=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKCompatibilityForms ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKCompatibilityIdeographs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKCompatibilityIdeographs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKCompatibilityIdeographsSupplement=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKCompatibilityIdeographsSupplement ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKRadicalsSupplement=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKRadicalsSupplement ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKSymbolsandPunctuation=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKSymbolsandPunctuation ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKUnifiedIdeographs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKUnifiedIdeographs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKUnifiedIdeographsExtensionA=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKUnifiedIdeographsExtensionA ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCJKUnifiedIdeographsExtensionB=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCJKUnifiedIdeographsExtensionB ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCat=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCat ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatC=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatC ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatCc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatCc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatCf=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatCf ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatCo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatCo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatCs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatCs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatL=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatL ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatLl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatLl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatLm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatLm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatLo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatLo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatLt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatLt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatLu=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatLu ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatM=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatM ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatMc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatMc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatMe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatMe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatMn=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatMn ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatN=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatN ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatNd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatNd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatNl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatNl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatNo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatNo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatP=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatP ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatPc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatPc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatPd=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatPd ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatPe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatPe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatPf=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatPf ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatPi=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatPi ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatPo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatPo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatPs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatPs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatS=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatS ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatSc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatSc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatSk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatSk ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatSm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatSm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatSo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatSo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatZ=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatZ ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatZl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatZl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatZp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatZp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCatZs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCatZs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCherokee=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCherokee ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCombiningDiacriticalMarks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCombiningDiacriticalMarks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCombiningDiacriticalMarksforSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCombiningDiacriticalMarksforSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCombiningHalfMarks=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCombiningHalfMarks ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCombiningMarksforSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCombiningMarksforSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsControlPictures=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsControlPictures ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCurrencySymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCurrencySymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCypriotSyllabary=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCypriotSyllabary ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCyrillic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCyrillic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsCyrillicSupplement=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsCyrillicSupplement ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsDeseret=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsDeseret ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsDevanagari=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsDevanagari ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsDingbats=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsDingbats ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsEnclosedAlphanumerics=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsEnclosedAlphanumerics ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsEnclosedCJKLettersandMonths=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsEnclosedCJKLettersandMonths ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsEthiopic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsEthiopic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGeneralPunctuation=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGeneralPunctuation ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGeometricShapes=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGeometricShapes ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGeorgian=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGeorgian ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGothic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGothic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGreek=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGreek ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGreekExtended=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGreekExtended ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGreekandCoptic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGreekandCoptic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGujarati=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGujarati ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsGurmukhi=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsGurmukhi ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHalfwidthandFullwidthForms=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHalfwidthandFullwidthForms ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHangulCompatibilityJamo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHangulCompatibilityJamo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHangulJamo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHangulJamo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHangulSyllables=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHangulSyllables ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHanunoo=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHanunoo ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHebrew=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHebrew ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHighPrivateUseSurrogates=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHighPrivateUseSurrogates ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHighSurrogates=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHighSurrogates ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsHiragana=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsHiragana ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsIPAExtensions=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsIPAExtensions ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsIdeographicDescriptionCharacters=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsIdeographicDescriptionCharacters ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsKanbun=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsKanbun ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsKangxiRadicals=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsKangxiRadicals ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsKannada=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsKannada ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsKatakana=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsKatakana ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsKatakanaPhoneticExtensions=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsKatakanaPhoneticExtensions ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsKhmer=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsKhmer ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsKhmerSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsKhmerSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLao=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLao ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLatin1Supplement=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLatin1Supplement ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLatinExtendedA=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLatinExtendedA ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLatinExtendedAdditional=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLatinExtendedAdditional ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLatinExtendedB=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLatinExtendedB ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLetterlikeSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLetterlikeSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLimbu=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLimbu ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLinearBIdeograms=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLinearBIdeograms ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLinearBSyllabary=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLinearBSyllabary ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsLowSurrogates=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsLowSurrogates ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMalayalam=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMalayalam ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMathematicalAlphanumericSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMathematicalAlphanumericSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMathematicalOperators=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMathematicalOperators ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMiscellaneousMathematicalSymbolsA=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMiscellaneousMathematicalSymbolsA ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMiscellaneousMathematicalSymbolsB=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMiscellaneousMathematicalSymbolsB ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMiscellaneousSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMiscellaneousSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMiscellaneousSymbolsandArrows=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMiscellaneousSymbolsandArrows ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMiscellaneousTechnical=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMiscellaneousTechnical ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMongolian=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMongolian ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMusicalSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMusicalSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsMyanmar=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsMyanmar ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsNumberForms=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsNumberForms ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsOgham=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsOgham ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsOldItalic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsOldItalic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsOpticalCharacterRecognition=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsOpticalCharacterRecognition ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsOriya=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsOriya ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsOsmanya=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsOsmanya ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsPhoneticExtensions=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsPhoneticExtensions ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsPrivateUse=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsPrivateUse ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsPrivateUseArea=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsPrivateUseArea ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsRunic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsRunic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsShavian=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsShavian ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSinhala=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSinhala ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSmallFormVariants=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSmallFormVariants ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSpacingModifierLetters=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSpacingModifierLetters ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSpecials=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSpecials ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSuperscriptsandSubscripts=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSuperscriptsandSubscripts ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSupplementalArrowsA=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSupplementalArrowsA ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSupplementalArrowsB=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSupplementalArrowsB ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSupplementalMathematicalOperators=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSupplementalMathematicalOperators ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSupplementaryPrivateUseAreaA=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSupplementaryPrivateUseAreaA ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSupplementaryPrivateUseAreaB=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSupplementaryPrivateUseAreaB ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsSyriac=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsSyriac ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsTagalog=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsTagalog ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsTagbanwa=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsTagbanwa ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsTags=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsTags ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsTaiLe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsTaiLe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsTaiXuanJingSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsTaiXuanJingSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsTamil=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsTamil ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsTelugu=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsTelugu ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsThaana=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsThaana ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsThai=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsThai ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsTibetan=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsTibetan ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsUgaritic=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsUgaritic ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsUnifiedCanadianAboriginalSyllabics=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsUnifiedCanadianAboriginalSyllabics ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsVariationSelectors=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsVariationSelectors ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsVariationSelectorsSupplement=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsVariationSelectorsSupplement ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsYiRadicals=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsYiRadicals ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsYiSyllables=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsYiSyllables ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uCSIsYijingHexagramSymbols=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uCSIsYijingHexagramSymbols ("+putArgs+")");
		return pyReturn("_out");
	}

	this.validateNCName=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].validateNCName ("+putArgs+")");
		return pyReturn("_out");
	}

	this.validateNMToken=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].validateNMToken ("+putArgs+")");
		return pyReturn("_out");
	}

	this.validateName=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].validateName ("+putArgs+")");
		return pyReturn("_out");
	}

	this.validateNameValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].validateNameValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.validateNamesValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].validateNamesValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.validateNmtokenValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].validateNmtokenValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.validateNmtokensValue=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].validateNmtokensValue ("+putArgs+")");
		return pyReturn("_out");
	}

	this.validateQName=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].validateQName ("+putArgs+")");
		return pyReturn("_out");
	}

	this.valuePop=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].valuePop ("+putArgs+")");
		return pyReturn("_out");
	}

	this.xpathObjectRet=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].xpathObjectRet ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

libxslt=new Object;
libxslt=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import libxslt\nself.objList["+this.id+"] =  libxslt");

	/*Methods*/
	
	this.calibrateAdjust=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].calibrateAdjust ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanupGlobals=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanupGlobals ("+putArgs+")");
		return pyReturn("_out");
	}

	this.debugDumpExtensions=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].debugDumpExtensions ("+putArgs+")");
		return pyReturn("_out");
	}

	this.debuggerStatus=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].debuggerStatus ("+putArgs+")");
		return pyReturn("_out");
	}

	this.init=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].init ("+putArgs+")");
		return pyReturn("_out");
	}

	this.initGlobals=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].initGlobals ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isBlank=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isBlank ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loadStylesheetPI=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loadStylesheetPI ("+putArgs+")");
		return pyReturn("_out");
	}

	this.newStylesheet=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].newStylesheet ("+putArgs+")");
		return pyReturn("_out");
	}

	this.nsProp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].nsProp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseStylesheetDoc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseStylesheetDoc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseStylesheetFile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseStylesheetFile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pythonCleanup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pythonCleanup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerAllExtras=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerAllExtras ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerErrorHandler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerErrorHandler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerExtModuleElement=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerExtModuleElement ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerExtModuleFunction=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerExtModuleFunction ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerExtensionClass=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerExtensionClass ("+putArgs+")");
		return pyReturn("_out");
	}

	this.registerTestModule=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].registerTestModule ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setDebuggerStatus=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setDebuggerStatus ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setLoaderFunc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setLoaderFunc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.timestamp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].timestamp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uninit=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uninit ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unregisterExtModule=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unregisterExtModule ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unregisterExtModuleElement=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unregisterExtModuleElement ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unregisterExtModuleFunction=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unregisterExtModuleFunction ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unregisterExtModuleTopLevel=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unregisterExtModuleTopLevel ("+putArgs+")");
		return pyReturn("_out");
	}

	this.xslDropCall=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].xslDropCall ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

linecache=new Object;
linecache=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import linecache\nself.objList["+this.id+"] =  linecache");

	/*Methods*/
	
	this.checkcache=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].checkcache ("+putArgs+")");
		return pyReturn("_out");
	}

	this.clearcache=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].clearcache ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getline=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getline ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getlines=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getlines ("+putArgs+")");
		return pyReturn("_out");
	}

	this.updatecache=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].updatecache ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

locale=new Object;
locale=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import locale\nself.objList["+this.id+"] =  locale");

	/*Methods*/
	
	this.atof=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].atof ("+putArgs+")");
		return pyReturn("_out");
	}

	this.atoi=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].atoi ("+putArgs+")");
		return pyReturn("_out");
	}

	this.currency=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].currency ("+putArgs+")");
		return pyReturn("_out");
	}

	this.format=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].format ("+putArgs+")");
		return pyReturn("_out");
	}

	this.format_string=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].format_string ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getdefaultlocale=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getdefaultlocale ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getlocale=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getlocale ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getpreferredencoding=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getpreferredencoding ("+putArgs+")");
		return pyReturn("_out");
	}

	this.localeconv=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].localeconv ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normalize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normalize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resetlocale=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resetlocale ("+putArgs+")");
		return pyReturn("_out");
	}

	this.setlocale=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].setlocale ("+putArgs+")");
		return pyReturn("_out");
	}

	this.str=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].str ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

lsb_release=new Object;
lsb_release=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import lsb_release\nself.objList["+this.id+"] =  lsb_release");

	/*Methods*/
	
	this.check_modules_installed=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].check_modules_installed ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_distro_information=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_distro_information ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_lsb_information=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_lsb_information ("+putArgs+")");
		return pyReturn("_out");
	}

	this.guess_debian_release=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].guess_debian_release ("+putArgs+")");
		return pyReturn("_out");
	}

	this.guess_release_from_apt=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].guess_release_from_apt ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lookup_codename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lookup_codename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_apt_policy=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_apt_policy ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_policy_line=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_policy_line ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.valid_lsb_versions=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].valid_lsb_versions ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

macpath=new Object;
macpath=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import macpath\nself.objList["+this.id+"] =  macpath");

	/*Methods*/
	
	this.S_IFMT=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_IFMT ("+putArgs+")");
		return pyReturn("_out");
	}

	this.S_IMODE=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_IMODE ("+putArgs+")");
		return pyReturn("_out");
	}

	this.S_ISBLK=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_ISBLK ("+putArgs+")");
		return pyReturn("_out");
	}

	this.S_ISCHR=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_ISCHR ("+putArgs+")");
		return pyReturn("_out");
	}

	this.S_ISDIR=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_ISDIR ("+putArgs+")");
		return pyReturn("_out");
	}

	this.S_ISFIFO=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_ISFIFO ("+putArgs+")");
		return pyReturn("_out");
	}

	this.S_ISLNK=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_ISLNK ("+putArgs+")");
		return pyReturn("_out");
	}

	this.S_ISREG=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_ISREG ("+putArgs+")");
		return pyReturn("_out");
	}

	this.S_ISSOCK=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].S_ISSOCK ("+putArgs+")");
		return pyReturn("_out");
	}

	this.abspath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].abspath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.basename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].basename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.commonprefix=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].commonprefix ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dirname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dirname ("+putArgs+")");
		return pyReturn("_out");
	}

	this.exists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].exists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expanduser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expanduser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expandvars=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expandvars ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getatime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getatime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getctime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getctime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmtime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmtime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getsize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isabs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isabs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.islink=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].islink ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ismount=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ismount ("+putArgs+")");
		return pyReturn("_out");
	}

	this.join=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].join ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lexists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lexists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normcase=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normcase ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.realpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].realpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitdrive=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitdrive ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

macurl2path=new Object;
macurl2path=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import macurl2path\nself.objList["+this.id+"] =  macurl2path");

	/*Methods*/
	
	this.pathname2url=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pathname2url ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.url2pathname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].url2pathname ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

mailbox=new Object;
mailbox=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mailbox\nself.objList["+this.id+"] =  mailbox");

	/*Methods*/
	
	
}

mailcap=new Object;
mailcap=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mailcap\nself.objList["+this.id+"] =  mailcap");

	/*Methods*/
	
	this.findmatch=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].findmatch ("+putArgs+")");
		return pyReturn("_out");
	}

	this.findparam=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].findparam ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getcaps=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getcaps ("+putArgs+")");
		return pyReturn("_out");
	}

	this.listmailcapfiles=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].listmailcapfiles ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lookup=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lookup ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parsefield=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parsefield ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parseline=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parseline ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readmailcapfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readmailcapfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.show=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].show ("+putArgs+")");
		return pyReturn("_out");
	}

	this.subst=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].subst ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

mako=new Object;
mako=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mako\nself.objList["+this.id+"] =  mako");

	/*Methods*/
	
	
}

markupbase=new Object;
markupbase=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import markupbase\nself.objList["+this.id+"] =  markupbase");

	/*Methods*/
	
	
}

md5=new Object;
md5=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import md5\nself.objList["+this.id+"] =  md5");

	/*Methods*/
	
	
}

metacity=new Object;
metacity=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import metacity\nself.objList["+this.id+"] =  metacity");

	/*Methods*/
	
	
}

mhlib=new Object;
mhlib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mhlib\nself.objList["+this.id+"] =  mhlib");

	/*Methods*/
	
	this.isnumeric=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isnumeric ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pickline=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pickline ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	this.updateline=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].updateline ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

mimetools=new Object;
mimetools=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mimetools\nself.objList["+this.id+"] =  mimetools");

	/*Methods*/
	
	this.choose_boundary=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].choose_boundary ("+putArgs+")");
		return pyReturn("_out");
	}

	this.copybinary=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].copybinary ("+putArgs+")");
		return pyReturn("_out");
	}

	this.copyliteral=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].copyliteral ("+putArgs+")");
		return pyReturn("_out");
	}

	this.decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.filterwarnings=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].filterwarnings ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pipethrough=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pipethrough ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pipeto=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pipeto ("+putArgs+")");
		return pyReturn("_out");
	}

	this.warnpy3k=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].warnpy3k ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

mimetypes=new Object;
mimetypes=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mimetypes\nself.objList["+this.id+"] =  mimetypes");

	/*Methods*/
	
	this.add_type=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].add_type ("+putArgs+")");
		return pyReturn("_out");
	}

	this.guess_all_extensions=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].guess_all_extensions ("+putArgs+")");
		return pyReturn("_out");
	}

	this.guess_extension=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].guess_extension ("+putArgs+")");
		return pyReturn("_out");
	}

	this.guess_type=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].guess_type ("+putArgs+")");
		return pyReturn("_out");
	}

	this.init=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].init ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_mime_types=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_mime_types ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

mimify=new Object;
mimify=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mimify\nself.objList["+this.id+"] =  mimify");

	/*Methods*/
	
	this.mime_decode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mime_decode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mime_decode_header=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mime_decode_header ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mime_encode=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mime_encode ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mime_encode_header=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mime_encode_header ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mimify=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mimify ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mimify_part=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mimify_part ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unmimify=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unmimify ("+putArgs+")");
		return pyReturn("_out");
	}

	this.unmimify_part=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].unmimify_part ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

mlt=new Object;
mlt=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mlt\nself.objList["+this.id+"] =  mlt");

	/*Methods*/
	
	
}

modulefinder=new Object;
modulefinder=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import modulefinder\nself.objList["+this.id+"] =  modulefinder");

	/*Methods*/
	
	this.AddPackagePath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].AddPackagePath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ReplacePackage=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ReplacePackage ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

multifile=new Object;
multifile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import multifile\nself.objList["+this.id+"] =  multifile");

	/*Methods*/
	
	
}

mutex=new Object;
mutex=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mutex\nself.objList["+this.id+"] =  mutex");

	/*Methods*/
	
	
}

mylib=new Object;
mylib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import mylib\nself.objList["+this.id+"] =  mylib");

	/*Methods*/
	
	this.listDir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].listDir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read ("+putArgs+")");
		return pyReturn("_out");
	}

	this.write=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].write ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

nautilus_scripts_manager_ui=new Object;
nautilus_scripts_manager_ui=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import nautilus_scripts_manager_ui\nself.objList["+this.id+"] =  nautilus_scripts_manager_ui");

	/*Methods*/
	
	
}

netrc=new Object;
netrc=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import netrc\nself.objList["+this.id+"] =  netrc");

	/*Methods*/
	
	
}

thai_new=new Object;
thai_new=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import new\nself.objList["+this.id+"] =  new");

	/*Methods*/
	
	
}

nntplib=new Object;
nntplib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import nntplib\nself.objList["+this.id+"] =  nntplib");

	/*Methods*/
	
	
}

ntpath=new Object;
ntpath=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import ntpath\nself.objList["+this.id+"] =  ntpath");

	/*Methods*/
	
	this.abspath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].abspath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.basename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].basename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.commonprefix=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].commonprefix ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dirname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dirname ("+putArgs+")");
		return pyReturn("_out");
	}

	this.exists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].exists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expanduser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expanduser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expandvars=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expandvars ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getatime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getatime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getctime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getctime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmtime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmtime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getsize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isabs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isabs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.islink=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].islink ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ismount=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ismount ("+putArgs+")");
		return pyReturn("_out");
	}

	this.join=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].join ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lexists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lexists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normcase=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normcase ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.realpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].realpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.relpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].relpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitdrive=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitdrive ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitunc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitunc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

nturl2path=new Object;
nturl2path=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import nturl2path\nself.objList["+this.id+"] =  nturl2path");

	/*Methods*/
	
	this.pathname2url=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pathname2url ("+putArgs+")");
		return pyReturn("_out");
	}

	this.url2pathname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].url2pathname ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

numbers=new Object;
numbers=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import numbers\nself.objList["+this.id+"] =  numbers");

	/*Methods*/
	
	this.abstractmethod=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].abstractmethod ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

oauth=new Object;
oauth=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import oauth\nself.objList["+this.id+"] =  oauth");

	/*Methods*/
	
	
}

opcode=new Object;
opcode=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import opcode\nself.objList["+this.id+"] =  opcode");

	/*Methods*/
	
	
}

openshot=new Object;
openshot=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import openshot\nself.objList["+this.id+"] =  openshot");

	/*Methods*/
	
	
}

optparse=new Object;
optparse=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import optparse\nself.objList["+this.id+"] =  optparse");

	/*Methods*/
	
	this.check_builtin=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].check_builtin ("+putArgs+")");
		return pyReturn("_out");
	}

	this.check_choice=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].check_choice ("+putArgs+")");
		return pyReturn("_out");
	}

	this.gettext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].gettext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isbasestring=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isbasestring ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

orca=new Object;
orca=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import orca\nself.objList["+this.id+"] =  orca");

	/*Methods*/
	
	
}

os=new Object;
os=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import os\nself.objList["+this.id+"] =  os");

	/*Methods*/
	
	this.execl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].execl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.execle=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].execle ("+putArgs+")");
		return pyReturn("_out");
	}

	this.execlp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].execlp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.execlpe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].execlpe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.execvp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].execvp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.execvpe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].execvpe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getenv=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getenv ("+putArgs+")");
		return pyReturn("_out");
	}

	this.makedirs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].makedirs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.popen2=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].popen2 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.popen3=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].popen3 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.popen4=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].popen4 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.removedirs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].removedirs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.renames=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].renames ("+putArgs+")");
		return pyReturn("_out");
	}

	this.spawnl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].spawnl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.spawnle=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].spawnle ("+putArgs+")");
		return pyReturn("_out");
	}

	this.spawnlp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].spawnlp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.spawnlpe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].spawnlpe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.spawnv=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].spawnv ("+putArgs+")");
		return pyReturn("_out");
	}

	this.spawnve=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].spawnve ("+putArgs+")");
		return pyReturn("_out");
	}

	this.spawnvp=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].spawnvp ("+putArgs+")");
		return pyReturn("_out");
	}

	this.spawnvpe=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].spawnvpe ("+putArgs+")");
		return pyReturn("_out");
	}

	this.urandom=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].urandom ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

os.path=new Object;
os.path=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import os.path\nself.objList["+this.id+"] =  os.path");

	/*Methods*/
	
	this.abspath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].abspath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.basename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].basename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.commonprefix=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].commonprefix ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dirname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dirname ("+putArgs+")");
		return pyReturn("_out");
	}

	this.exists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].exists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expanduser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expanduser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expandvars=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expandvars ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getatime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getatime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getctime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getctime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmtime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmtime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getsize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isabs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isabs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.islink=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].islink ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ismount=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ismount ("+putArgs+")");
		return pyReturn("_out");
	}

	this.join=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].join ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lexists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lexists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normcase=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normcase ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.realpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].realpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.relpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].relpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.samefile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].samefile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.sameopenfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].sameopenfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.samestat=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].samestat ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitdrive=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitdrive ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

os2emxpath=new Object;
os2emxpath=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import os2emxpath\nself.objList["+this.id+"] =  os2emxpath");

	/*Methods*/
	
	this.abspath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].abspath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.basename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].basename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.commonprefix=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].commonprefix ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dirname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dirname ("+putArgs+")");
		return pyReturn("_out");
	}

	this.exists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].exists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expanduser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expanduser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expandvars=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expandvars ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getatime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getatime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getctime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getctime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmtime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmtime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getsize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isabs=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isabs ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isfile=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isfile ("+putArgs+")");
		return pyReturn("_out");
	}

	this.islink=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].islink ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ismount=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ismount ("+putArgs+")");
		return pyReturn("_out");
	}

	this.join=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].join ("+putArgs+")");
		return pyReturn("_out");
	}

	this.lexists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].lexists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normcase=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normcase ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.realpath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].realpath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitdrive=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitdrive ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitext=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitext ("+putArgs+")");
		return pyReturn("_out");
	}

	this.splitunc=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].splitunc ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walk=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walk ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

parser=new Object;
parser=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import parser\nself.objList["+this.id+"] =  parser");

	/*Methods*/
	
	
}

pdb=new Object;
pdb=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import pdb\nself.objList["+this.id+"] =  pdb");

	/*Methods*/
	
	this.find_function=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].find_function ("+putArgs+")");
		return pyReturn("_out");
	}

	this.help=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].help ("+putArgs+")");
		return pyReturn("_out");
	}

	this.main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].main ("+putArgs+")");
		return pyReturn("_out");
	}

	this.pm=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].pm ("+putArgs+")");
		return pyReturn("_out");
	}

	this.post_mortem=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].post_mortem ("+putArgs+")");
		return pyReturn("_out");
	}

	this.run=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].run ("+putArgs+")");
		return pyReturn("_out");
	}

	this.runcall=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].runcall ("+putArgs+")");
		return pyReturn("_out");
	}

	this.runctx=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].runctx ("+putArgs+")");
		return pyReturn("_out");
	}

	this.runeval=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].runeval ("+putArgs+")");
		return pyReturn("_out");
	}

	this.set_trace=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].set_trace ("+putArgs+")");
		return pyReturn("_out");
	}

	this.test=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].test ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

pexpect=new Object;
pexpect=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import pexpect\nself.objList["+this.id+"] =  pexpect");

	/*Methods*/
	
	this.run=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].run ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split_command_line=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split_command_line ("+putArgs+")");
		return pyReturn("_out");
	}

	this.which=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].which ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

pickle=new Object;
pickle=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import pickle\nself.objList["+this.id+"] =  pickle");

	/*Methods*/
	
	this.decode_long=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].decode_long ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dump=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dump ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dumps=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dumps ("+putArgs+")");
		return pyReturn("_out");
	}

	this.encode_long=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].encode_long ("+putArgs+")");
		return pyReturn("_out");
	}

	this.load=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].load ("+putArgs+")");
		return pyReturn("_out");
	}

	this.loads=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].loads ("+putArgs+")");
		return pyReturn("_out");
	}

	this.whichmodule=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].whichmodule ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

pickletools=new Object;
pickletools=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import pickletools\nself.objList["+this.id+"] =  pickletools");

	/*Methods*/
	
	this.decode_long=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].decode_long ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dis=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dis ("+putArgs+")");
		return pyReturn("_out");
	}

	this.genops=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].genops ("+putArgs+")");
		return pyReturn("_out");
	}

	this.optimize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].optimize ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_decimalnl_long=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_decimalnl_long ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_decimalnl_short=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_decimalnl_short ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_float8=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_float8 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_floatnl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_floatnl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_int4=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_int4 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_long1=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_long1 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_long4=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_long4 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_string1=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_string1 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_string4=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_string4 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_stringnl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_stringnl ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_stringnl_noescape=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_stringnl_noescape ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_stringnl_noescape_pair=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_stringnl_noescape_pair ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_uint1=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_uint1 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_uint2=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_uint2 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_unicodestring4=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_unicodestring4 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_unicodestringnl=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_unicodestringnl ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

pipes=new Object;
pipes=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import pipes\nself.objList["+this.id+"] =  pipes");

	/*Methods*/
	
	this.makepipeline=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].makepipeline ("+putArgs+")");
		return pyReturn("_out");
	}

	this.quote=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].quote ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

pkg_resources=new Object;
pkg_resources=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import pkg_resources\nself.objList["+this.id+"] =  pkg_resources");

	/*Methods*/
	
	this.StringIO=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].StringIO ("+putArgs+")");
		return pyReturn("_out");
	}

	this.add_activation_listener=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].add_activation_listener ("+putArgs+")");
		return pyReturn("_out");
	}

	this.cleanup_resources=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].cleanup_resources ("+putArgs+")");
		return pyReturn("_out");
	}

	this.compatible_platforms=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].compatible_platforms ("+putArgs+")");
		return pyReturn("_out");
	}

	this.declare_namespace=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].declare_namespace ("+putArgs+")");
		return pyReturn("_out");
	}

	this.ensure_directory=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].ensure_directory ("+putArgs+")");
		return pyReturn("_out");
	}

	this.extraction_error=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].extraction_error ("+putArgs+")");
		return pyReturn("_out");
	}

	this.file_ns_handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].file_ns_handler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.find_distributions=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].find_distributions ("+putArgs+")");
		return pyReturn("_out");
	}

	this.find_in_zip=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].find_in_zip ("+putArgs+")");
		return pyReturn("_out");
	}

	this.find_nothing=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].find_nothing ("+putArgs+")");
		return pyReturn("_out");
	}

	this.find_on_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].find_on_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.fixup_namespace_packages=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fixup_namespace_packages ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_build_platform=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_build_platform ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_cache_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_cache_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_default_cache=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_default_cache ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_distribution=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_distribution ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_entry_info=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_entry_info ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_entry_map=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_entry_map ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_importer=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_importer ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_platform=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_platform ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_provider=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_provider ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_supported_platform=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_supported_platform ("+putArgs+")");
		return pyReturn("_out");
	}

	this.isdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].isdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.issue_warning=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].issue_warning ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iter_entry_points=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iter_entry_points ("+putArgs+")");
		return pyReturn("_out");
	}

	this.load_entry_point=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].load_entry_point ("+putArgs+")");
		return pyReturn("_out");
	}

	this.normalize_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].normalize_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.null_ns_handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].null_ns_handler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_requirements=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_requirements ("+putArgs+")");
		return pyReturn("_out");
	}

	this.parse_version=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].parse_version ("+putArgs+")");
		return pyReturn("_out");
	}

	this.postprocess=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].postprocess ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_finder=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_finder ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_loader_type=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_loader_type ("+putArgs+")");
		return pyReturn("_out");
	}

	this.register_namespace_handler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].register_namespace_handler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.require=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].require ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resource_exists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resource_exists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resource_filename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resource_filename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resource_isdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resource_isdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resource_listdir=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resource_listdir ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resource_stream=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resource_stream ("+putArgs+")");
		return pyReturn("_out");
	}

	this.resource_string=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].resource_string ("+putArgs+")");
		return pyReturn("_out");
	}

	this.run_main=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].run_main ("+putArgs+")");
		return pyReturn("_out");
	}

	this.run_script=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].run_script ("+putArgs+")");
		return pyReturn("_out");
	}

	this.safe_extra=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].safe_extra ("+putArgs+")");
		return pyReturn("_out");
	}

	this.safe_name=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].safe_name ("+putArgs+")");
		return pyReturn("_out");
	}

	this.safe_version=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].safe_version ("+putArgs+")");
		return pyReturn("_out");
	}

	this.set_extraction_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].set_extraction_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split ("+putArgs+")");
		return pyReturn("_out");
	}

	this.split_sections=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].split_sections ("+putArgs+")");
		return pyReturn("_out");
	}

	this.to_filename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].to_filename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.yield_lines=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].yield_lines ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

pkgutil=new Object;
pkgutil=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import pkgutil\nself.objList["+this.id+"] =  pkgutil");

	/*Methods*/
	
	this.extend_path=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].extend_path ("+putArgs+")");
		return pyReturn("_out");
	}

	this.find_loader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].find_loader ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_data=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_data ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_importer=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_importer ("+putArgs+")");
		return pyReturn("_out");
	}

	this.get_loader=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].get_loader ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iter_importer_modules=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iter_importer_modules ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iter_importers=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iter_importers ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iter_modules=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iter_modules ("+putArgs+")");
		return pyReturn("_out");
	}

	this.iter_zipimport_modules=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].iter_zipimport_modules ("+putArgs+")");
		return pyReturn("_out");
	}

	this.read_code=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].read_code ("+putArgs+")");
		return pyReturn("_out");
	}

	this.simplegeneric=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].simplegeneric ("+putArgs+")");
		return pyReturn("_out");
	}

	this.walk_packages=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].walk_packages ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

platform=new Object;
platform=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import platform\nself.objList["+this.id+"] =  platform");

	/*Methods*/
	
	this.architecture=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].architecture ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dist=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dist ("+putArgs+")");
		return pyReturn("_out");
	}

	this.java_ver=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].java_ver ("+putArgs+")");
		return pyReturn("_out");
	}

	this.libc_ver=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].libc_ver ("+putArgs+")");
		return pyReturn("_out");
	}

	this.linux_distribution=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].linux_distribution ("+putArgs+")");
		return pyReturn("_out");
	}

	this.mac_ver=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].mac_ver ("+putArgs+")");
		return pyReturn("_out");
	}

	this.machine=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].machine ("+putArgs+")");
		return pyReturn("_out");
	}

	this.node=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].node ("+putArgs+")");
		return pyReturn("_out");
	}

	this.platform=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].platform ("+putArgs+")");
		return pyReturn("_out");
	}

	this.popen=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].popen ("+putArgs+")");
		return pyReturn("_out");
	}

	this.processor=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].processor ("+putArgs+")");
		return pyReturn("_out");
	}

	this.python_branch=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].python_branch ("+putArgs+")");
		return pyReturn("_out");
	}

	this.python_build=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].python_build ("+putArgs+")");
		return pyReturn("_out");
	}

	this.python_compiler=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].python_compiler ("+putArgs+")");
		return pyReturn("_out");
	}

	this.python_implementation=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].python_implementation ("+putArgs+")");
		return pyReturn("_out");
	}

	this.python_revision=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].python_revision ("+putArgs+")");
		return pyReturn("_out");
	}

	this.python_version=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].python_version ("+putArgs+")");
		return pyReturn("_out");
	}

	this.python_version_tuple=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].python_version_tuple ("+putArgs+")");
		return pyReturn("_out");
	}

	this.release=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].release ("+putArgs+")");
		return pyReturn("_out");
	}

	this.system=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].system ("+putArgs+")");
		return pyReturn("_out");
	}

	this.system_alias=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].system_alias ("+putArgs+")");
		return pyReturn("_out");
	}

	this.uname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].uname ("+putArgs+")");
		return pyReturn("_out");
	}

	this.version=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].version ("+putArgs+")");
		return pyReturn("_out");
	}

	this.win32_ver=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].win32_ver ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

plistlib=new Object;
plistlib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import plistlib\nself.objList["+this.id+"] =  plistlib");

	/*Methods*/
	
	this.readPlist=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readPlist ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readPlistFromResource=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readPlistFromResource ("+putArgs+")");
		return pyReturn("_out");
	}

	this.readPlistFromString=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].readPlistFromString ("+putArgs+")");
		return pyReturn("_out");
	}

	this.writePlist=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].writePlist ("+putArgs+")");
		return pyReturn("_out");
	}

	this.writePlistToResource=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].writePlistToResource ("+putArgs+")");
		return pyReturn("_out");
	}

	this.writePlistToString=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].writePlistToString ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

popen2=new Object;
popen2=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import popen2\nself.objList["+this.id+"] =  popen2");

	/*Methods*/
	
	this.popen2=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].popen2 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.popen3=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].popen3 ("+putArgs+")");
		return pyReturn("_out");
	}

	this.popen4=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].popen4 ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

poplib=new Object;
poplib=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import poplib\nself.objList["+this.id+"] =  poplib");

	/*Methods*/
	
	
}

posixfile=new Object;
posixfile=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import posixfile\nself.objList["+this.id+"] =  posixfile");

	/*Methods*/
	
	this.fileopen=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].fileopen ("+putArgs+")");
		return pyReturn("_out");
	}

	this.open=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].open ("+putArgs+")");
		return pyReturn("_out");
	}

	
}

posixpath=new Object;
posixpath=function() {
	this.id=_newPyObj();
	this.args=arguments;
	py("import posixpath\nself.objList["+this.id+"] =  posixpath");

	/*Methods*/
	
	this.abspath=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].abspath ("+putArgs+")");
		return pyReturn("_out");
	}

	this.basename=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].basename ("+putArgs+")");
		return pyReturn("_out");
	}

	this.commonprefix=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].commonprefix ("+putArgs+")");
		return pyReturn("_out");
	}

	this.dirname=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].dirname ("+putArgs+")");
		return pyReturn("_out");
	}

	this.exists=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].exists ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expanduser=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expanduser ("+putArgs+")");
		return pyReturn("_out");
	}

	this.expandvars=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].expandvars ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getatime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getatime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getctime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getctime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getmtime=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}
			else if (typeof(args[i])=="string") {
				try{
					putArgs+='\"\"\"'+args[i]+'\"\"\"';
				}
				catch(e){
					print(e);
				}
			}
			else {
				try{
					putArgs+=args[i];
				}
				catch(e){
					print(e);
				}
			}
		}
		
		py("self._out=self.objList["+this.id+"].getmtime ("+putArgs+")");
		return pyReturn("_out");
	}

	this.getsize=function() {
		args=arguments;
		putArgs="";
		for(i=0;i<args.length;i++) {
			if (i>=1) 
				putArgs+=", ";
			if (typeof(args[i])=="object") {
				try{
					putArgs+="self.objList["+args[i].id+"]";
				}
				catch(e){
					print(e);
				}
			}