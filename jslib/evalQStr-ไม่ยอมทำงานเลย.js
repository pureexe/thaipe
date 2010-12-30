
try{
	var q=window.location.search.strip();
	if ( q!= "") {

		q=unescape(q.substring(1)).replace("'","\\'").replace('"','\\"');
		
		q=q.split("&");
			
		for (i=0;i<q.length;i++) {
			var v=q[i];
			var varName=v.split("=")[0];
			var varValue=v.split("=");
			varValue.shift();
			varValue=varValue.join("").trim();
			if (! (varValue.search(/[^0-9]/)>-1) || varValue[0]=="[") {
				eval(varName+" = "+varValue);
			}
			else {
				eval(varName+" = '"+varValue+"'");
			}
		}
	}
}
catch(e) {print("Js query string error : "+e)}
