 function thaithon {
	
	var noBlankLinelist=[];
	var thaithon="thaithon";
	var thaithonFileExt=".cl";

	
	function thaithon(openPage=""){
		
		this.preDefine(openPage);
			
	}
	
	function preDefine(openPage) {
		
		this.allkw();
		this.pathlis=new Array();
		this.pathlis();
		this.openPage=openPage;
		z=split("/",openPage);
		z.pop();
		this.openPath=implode("/",z);
		
		
		if(openPage!=""){
			this.includeCL (openPage.this.thaithonFileExt);
		}
	}
	
	function out(src) {
		#out_predefine
		curpath=this.openPath;

		if(strstr(src,("<?")) && strstr(src,("?>"))) {
			z=explode("?>",src);
			php="";
				
			for (i=0; i< count(z);i++) {
				code=explode("<?", z[i]);
				isJS=strpos(code[1],"#js");
				if (isJS)
					php+=this.HTMLToPHP(this.HTMChangeSpaces(code[0]))."\n echo'<script language=\"javascript\">'".this.convert(code[1])."echo '</script>';";
				else 
					php+=this.HTMLToPHP(this.HTMChangeSpaces(code[0]))."\n".code[1];
			}
			this.makeIncludeFile (php);	
			echo htmlentities(this.convert(php));
			
			if(__CLTestMode)
				echo htmlentities(this.convert(php));
			
			eval(this.convert(php));
		
		}
		
		else {
			echo htmlentities(this.convert(src));
			this.makeIncludeFile (src);	
			
			if(__CLTestMode)
				echo htmlentities(this.convert(src));
				
			if (isJS)
				eval(this.HTMLToPHP(this.convert(src)));
			else
				eval(this.convert(src));
		}

	}
	
	function convert(src, curLine=0){
		this.noBlankLine(src);
		var l=src.split("\n");
		
		lastIndentC=0;
		lineIndentC=0;
		
		for (var i=0; i< count(l);i++) {

				
			if (trim(l[i])=="")
				continue;

			var nextLineIndentC=this.countIndent(l[this.nextLine(i)]);
				
			l[i]=l[i].rtrim();
			set=l[i];
			
			set=this.Make_Word_Blank_And_Symbol_List(set);//set of char (Word Blank Symbol) in line
			
			this.Make_Line_Indent_Count_Var_And_Modify_Non_Indent_Line (set, lineIndentC);
			
			endLineChar=set[count(set)-1];
			
			if (endLineChar==":" 
				and !in_new Array(set[1], new Array("case","default"))) 	
			{
				set.pop();/* new Array_pop - delete colon assign  (":") */
				
				lastIndentC=nextLineIndentC;
				
				set[1].tolower(set[1]);
				
				if (set[1]=="def") {
					set[1]="function";
					#set[3]+="(";
					#set[]=")";
				}
				else if(in_new Array(set[1], new Array("public","private","protected"))) {
					/*Don't do anything*/
				}
				else if (in_new Array(set[1], new Array("class","do","else"))) {
					/*Don't do anything*/
				}
				else if (set[1]=="for"){
					if (!in_new Array(";",set) and !in_new Array("=",set)) {
						set[1]="";
						tab=set[0];
						set=implode("",set);
						set=explode(" in ", set);
						set[1]="foreach (set[1] as set[0])";
						set[0]=tab;
					}
					else {
						set[1]+=" (";
						set[]=")";
					}
				
				}
				else {					
					set[1]+=" (";
					set[]=")";
				}
				
				set=implode("",set)." {";
			}
			

			else 
			{ 
				if ( this.isIncludeCommand(set)) {
					set=this.modifyIncludeFileName(set);
					set[1] = "include('".substr(set[1],1).".php')"; #ต้อง ตัด  หน้าชื่อไฟล์ออก
				}
				else if (set[1]=="jinclude") {
					set=this.modifyIncludeFileName(set);
					set[1] = "echo \"<script type='text/javascript' language='javascript' src='".substr(set[1],1).".js'></script>\"";
				}
				else if (set[1]=="print") {
					set[1]="echo";
					set[count(set)-1] +=".'<br/>'";
				}

				if(endLineChar!="/")
					set[]=";";
				
				if (lastIndentC>nextLineIndentC ) 
				{
					set[]=str_repeat("}", lastIndentC-nextLineIndentC);
					lastIndentC=nextLineIndentC;			
				}
				
				
				
				set=implode("",set);
			}

		}
		
		return implode("\n", l);
			
	}
	
	function countIndent(l) { //return number of tab
	
		indentCount=0;
		l=str_replace("    ","\t",l);
		
		for (i=0; i<strlen(l); i++) {
			
			if (l{i}=="\t" ) {

				indentCount++;
			} 
			else return indentCount;
		}

		return indentCount;

	}
	
	function noBlankLine (src) {
		
		l=&explode("\n",src);
		
		noBlankLines=new Array();
		
		for (i=0; i< count(l);i++) {
			if (trim(l[i])!="") 
				noBlankLines[]=i;
		}
		
		this.noBlankLinelist=noBlankLines;

	}
	
	function nextLine (curLine) {
		
		foreach (this.noBlankLinelist as n ) {
			
			if (n>curLine)
				 return n;
			
		}
		
		return 0;
	}	
	
	function preWS(&arr,&cur) { # cross whitespace to the previous word or symbol
		for(i=cur-1;i>-1;i--) {
			if(!this.isBlankChar(arr[i]))
				return true;
			return false;
		}
	}
	
	function nextWS(&arr,&cur) { # cross whitespace to the previous word or symbol
		for(i=cur+1;i<count(arr);i++) {
			if(!this.isBlankChar(arr[i]))
				return true;
			return false;
		}
	}
	
	function HTMLToPHP(html) {
		l=&explode("\n",html);
		for (i=0; i< count(l);i++) {
			l[i]="echo \"l[i]\"";
		}
			
		return implode("\n", l);
	}
	
	function HTMChangeSpaces (html) {
		tabToHowSpace="7";
		splitHTML=&explode("<",  html);#["out tag", "in tag"]
		tag=&this.htmkw;
		for (i=0; i< count(splitHTML);i++) {
				endOfTagIs=false;
				if(endOfTagIs) {
					splitHTML[i]=substr_replace(splitHTML[i], " ", "&nbsp;",endOfTagIs);
					splitHTML[i]=substr_replace(splitHTML[i], "\t", str_repeat("&nbsp;",tabToHowSpace),endOfTagIs);
					continue;
				}
			if (strpos(splitHTML[i], ">")) {
				for (j=0; j< count(tag);j++) {

					sp=&splitHTML[i];
					
					#หาชื่อ tag
					trimsp=trim(sp);
					if (trimsp[0]=="/") {
						trimsp=substr(trimsp, 1);
						isCloseTag=true;
					}
					firstWord=strtolower(substr(trimsp,0,strlen(tag[j]))); 
					#จบหาชื่อ tag ไม่เกี่ยวกับข้างล่างแล้ว
					echo  firstWord."<br>";
					if (firstWord==tag[j]){
						
						for (k=0;k<strlen(sp);k++) {
							w=sp[k];
							if (w==">") {
								endOfTagIs=k;
								break 2;
							}

							notCrossing=!(sqc + dbqc + closetag );
							
							#single quote cross
							if (w=="'" && notCrossing ) {
								sqc=1;
								continue;
							}
							else if (w=="'" && sqc==1) { 
								sqc=0;
								continue;
							}
							else if (w!="'" && sqc==1) {
								continue;
							}
							
							#double quote cross
							if (w=='"' && notCrossing) {
								dbqc=1;
								continue;
							}
							else if (w=='"' && dbqc) { 
								dbqc=0;
								continue;
							}
							else if (w!='"' && dbqc) {
								continue;
							}
							}
						}
					}
				}
			}
		
		
		splitHTML=implode("<", splitHTML);
	}
	
	function pathlis (root=".") {
		if (handle = opendir(root)) {
			while (false !== (file = readdir(handle))) {
				path="root/file";
				if (file != "." && file != "..") {
					if (is_dir(path)) {
						this.pathlis(path);
					}
					else 
						this.pathlis[]=new Array(file, path);
				}
			}
			closedir(handle);
		}
	}
	
	function includeCL (path) {
		f=fopen(path, "r");
		CLCode=fread(f, filesize(path));
		fclose(f);
		this.out(CLCode);
	}
	
	function addDollar (src) {
		
		isJS=strpos(src,"#js");
		
		word=this.Make_Word_Blank_And_Symbol_List(src);	
		sqc=0; mcomc=0; dbqc=0; ocomc=0; 
		
		#double quote cross
		
		for (i=0;i<count(word);i++) {
			
			w=&word[i];
			w1=word[i+1];
			notCrossing=!(sqc + mcomc + dbqc + ocomc);
			
			#single quote cross

			if (w=="'" && notCrossing ) {
				sqc=1;
				continue;
			}
			else if (w=="'" && sqc==1) { 
				sqc=0;
				continue;
			}
			else if (w!="'" && sqc==1) {
				continue;
			}

			
			#double quote cross
			if (w=='"' && notCrossing) {
				dbqc=1;
				continue;
			}
			else if (w=='"' && dbqc) { 
				dbqc=0;
				continue;
			}
			else if (w!='"' && dbqc) {
				continue;
			}
			
			#multi line comment cross
			
			
			if (w.w1=='/*' && notCrossing) {
				mcomc=1;
				continue;
			}
			else if (w.w1=='*/' && mcomc==1) { 
				mcomc=0;
				continue;
			}
			else if (w.w1!='/*' && mcomc==1) {
				continue;
			}
			
			if ((w.w1=='//' or w=='#') && notCrossing) {
				if (isJS) w="//";
				ocomc=1;
				continue;
			}
			else if (w.w1=='\n' && ocomc==1) { 
				ocomc=0;
				continue;
			}
			else if ((w.w1!='//') && ocomc==1) {
				continue;
			}
			
			if (this.isChar(w{0}) 
			and !in_new Array(w,this.allkw)) {
				
				if (word[i+1] != "(" and  trim(word[i+1]). word[i+2] != "(" and !isJS )  #just isn't function / can't mix with previous if
					w="\".w;
				
			}
				
		}
		
		
		return implode("",word);
		
	}
	
	
	function Make_Word_Blank_And_Symbol_List(src) { //return new Array("abc","/"," ","def","*",...)
		
		str=&src;
		list=new Array(str{0});
		
		
		for( i=1;i<strlen(str);i++) {
			
			c=str{i};
			listEnd=&list[count(list)-1];
			listEndChar=list[count(list)-1]{strlen(list[count(list)-1])-1};

			if (this.isSymbol(c)) {
					list[]=c; 
			} 
			else if (this.isBlankChar(c)) {
				
				if ( !this.isBlankChar(listEndChar)) {
					list[]=c; 
				} 
				else 
					listEnd+=c;
				
			}
			else {
				
				if ( !this.isChar(listEndChar) ) {
					list[]=c;
				} 
				else 
					listEnd+=c;
				
			}

		}
		
		return list;
	}
	
	function Make_Line_Indent_Count_Var_And_Modify_Non_Indent_Line (&set, &lineIndentC=0) {
		
		if (this.isBlankChar(set[0]{0})) {
			lineIndentC=this.countIndent(set[0]);
		}
		else {
			new Array_unshift(set,"");#เพิ่ม ตัวแปรเปล่าใน set แทน indent ที่ไม่มี\
			
			lineIndentC=0;
		}
	}
	
	function isChar (c) {
		if ((c>="ก" and c <= "ฺ") or (c >= "฿" and c <= "๙")or (c >= "A" and c <= "Z")or (c >= "a" and c <= "z") or c=="_" or c=="" )
			return true;
	}
	
	function isSymbol (c) {
		
		if (this.isChar(c) or this.isBlankChar (c) )
			return false;
		return true;
		
	}
	
	function isBlankChar (c) {

		if (c != " " and c!="\t")
			return false;
		return true;
		
	}
	
	function makeIncludeFile (src) { #จำเป็นต้องทำก่อน เพราะ ทำใน  this.convert(src) จะมีปัญหาเปลี่ยนค่าตัวแปร
		l=explode("\n",src);
		for (i=0;i<count(l);i++) {
			
			set=this.Make_Word_Blank_And_Symbol_List(l[i]);
			
			this.Make_Line_Indent_Count_Var_And_Modify_Non_Indent_Line (set);	

			if ( this.isIncludeCommand(set)) {	
				set=this.modifyIncludeFileName(set);
				code="<?".this.convert(file_get_contents(set[1].".".this.thaithonFileExt))."?>";
				file_put_contents("set[1].php", code);
				
			}
			else if (set[1]=="jinclude") {
				set=this.modifyIncludeFileName(set);
				code=this.convert(file_get_contents(set[1].".".this.thaithonFileExt));
				file_put_contents("set[1].js", code);
			}
				
		}
	}
	
	function modifyIncludeFileName (set) {
		tab=set[0];
		for(j=0;j<3;j++)
			new Array_shift(set);
		set[1]=implode("",set); 
		set[0]=tab;
		return set;
	}
		
	function isIncludeCommand (set) {
			if(set[1]=="include" && this.isBlankChar(set[2]) && this.isChar(set[3][0])) {
				return true;
			}
			else 
				return false;
	}

	function allkw() {
		this.allkw=new Array(
		"abstract",
		"&=",
		"Array",
		"as",
		"foreach",
		"&&",
		"||",
		"bool",
		"boolean",
		"break",
		"case",
		"switch",
		"catch",
		"class",
		"clone",
		"//",
		"#",
		"/*",
		"*/ ",
		".=",
		"const",
		'"',
		"'",
		"continue",
		"declare",
		"default",
		"switch",
		"/=",
		"/**",
		"do",
		"do",
		"while",
		"\{",
		"=>",
		"(real)",
		"(double) ",
		"(float)",
		"::",
		"echo",
		"else",
		"elseif",
		"empty",
		"enddeclare",
		"declare,",
		"endfor",
		"for",
		"endforeach",
		"foreach",
		"endif",
		"if",
		"endswitch",
		"switch",
		"endwhile",
		"while",
		"exit",
		"include",
		"die",
		"extends",
		"extends",
		"final",
		"function",
		"cfunction",
		"global",
		"++",
		"instanceof",
		"(int)",
		"(integer)",
		"interface",
		"==",
		">=",
		"===",
		"!=",
		"<>",
		"!==",
		"<=",
		"__LINE__",
		"and",
		"or",
		"xor",
		"__METHOD__",
		"-=",
		"%=",
		"*=",
		"__NAMESPACE__",
		"new",
		"(object)",
		".",
		"old_function",
		"|=",
		"::",
		"::.",
		"+=",
		"private",
		"public",
		"protected",
		"return",
		"<<",
		"<<=",
		">>",
		">>=",
		"<<<",
		"static",
		"(string)",
		"switch",
		"switch",
		"throw",
		"try",
		"use",
		"var",
		"",
		"^=",
		'and', 
		'as', 
		'assert', 
		'break', 
		'class', 
		'continue', 
		'def', 
		'del', 
		'elif', 
		'else', 
		'except', 
		'exec', 
		'finally', 
		'for', 
		'from', 
		'global', 
		'if', 
		'in', 
		'is', 
		'lambda', 
		'not', 
		'or', 
		'pass', 
		'print', 
		'raise', 
		'return', 
		'try', 
		'while', 
		'with', 
		'yield',
		"jinclude"
		);
		
		this.htmkw=new Array(	0=>'abbr', 
							1=>'above', 
							2=>'accept', 
							3=>'accept-charset', 
							4=>'accesskey', 
							5=>'action', 
							6=>'align', 
							7=>'alink', 
							8=>'alt', 
							9=>'archive', 
							10=>'autocomplete', 
							11=>'axis', 
							12=>'background', 
							13=>'balance', 
							14=>'behavior', 
							15=>'below', 
							16=>'bgcolor', 
							17=>'bgproperties', 
							18=>'border', 
							19=>'bordercolor', 
							20=>'bordercolordark', 
							21=>'bordercolorlight', 
							22=>'bottommargin', 
							23=>'cellpadding', 
							24=>'cellspacing', 
							25=>'challenge', 
							26=>'char', 
							27=>'charoff', 
							28=>'charset', 
							29=>'checked', 
							30=>'cite', 
							31=>'class', 
							32=>'classid', 
							33=>'clear', 
							34=>'clip', 
							35=>'code', 
							36=>'codebase', 
							37=>'codetype', 
							38=>'color', 
							39=>'cols', 
							40=>'colspan', 
							41=>'compact', 
							42=>'content', 
							43=>'contenteditable', 
							44=>'coords', 
							45=>'data', 
							46=>'datafld', 
							47=>'dataformatas', 
							48=>'datapagesize', 
							49=>'datasrc', 
							50=>'datetime', 
							51=>'declare', 
							52=>'defer', 
							53=>'dir', 
							54=>'direction', 
							55=>'disabled', 
							56=>'dynsrc', 
							57=>'enctype', 
							58=>'event', 
							59=>'face', 
							60=>'for', 
							61=>'frame', 
							62=>'frameborder', 
							63=>'framespacing', 
							64=>'galleryimg', 
							65=>'gutter', 
							66=>'headers', 
							67=>'height', 
							68=>'hidden', 
							69=>'href', 
							70=>'hreflang', 
							71=>'hspace', 
							72=>'http-equiv', 
							73=>'id', 
							74=>'ismap', 
							75=>'label', 
							76=>'lang', 
							77=>'language', 
							78=>'left', 
							79=>'leftmargin', 
							80=>'link', 
							81=>'longdesc', 
							82=>'loop', 
							83=>'lowsrc', 
							84=>'marginheight', 
							85=>'marginwidth', 
							86=>'maxlength', 
							87=>'mayscript', 
							88=>'media', 
							89=>'method', 
							90=>'methods', 
							91=>'multiple', 
							92=>'name', 
							93=>'nohref', 
							94=>'noresize', 
							95=>'noshade', 
							96=>'nowrap', 
							97=>'pagex', 
							98=>'pagey', 
							99=>'pluginspage', 
							100=>'pluginurl', 
							101=>'point-size', 
							102=>'profile', 
							103=>'prompt', 
							104=>'rbspan', 
							105=>'readonly', 
							106=>'rel', 
							107=>'rev', 
							108=>'rightmargin', 
							109=>'rows', 
							110=>'rowspan', 
							111=>'rules', 
							112=>'scheme', 
							113=>'scope', 
							114=>'scroll', 
							115=>'scrollamount', 
							116=>'scrolldelay', 
							117=>'scrolling', 
							118=>'security', 
							119=>'selected', 
							120=>'shape', 
							121=>'size', 
							122=>'span', 
							123=>'src', 
							124=>'standby', 
							125=>'start', 
							126=>'style', 
							127=>'summary', 
							128=>'tabindex', 
							129=>'target', 
							130=>'text', 
							131=>'title', 
							132=>'top', 
							133=>'topmargin', 
							134=>'truespeed', 
							135=>'type', 
							136=>'units', 
							137=>'unselectable', 
							138=>'urn', 
							139=>'usemap', 
							140=>'valign', 
							141=>'value', 
							142=>'valuetype', 
							143=>'version', 
							144=>'visibility', 
							145=>'vlink', 
							146=>'volume', 
							147=>'vspace', 
							148=>'weight', 
							149=>'width', 
							150=>'wrap', 
							151=>'z-index'
						);
	}
		
}


if (!isset(o) && __CLTestMode) {
	__cl=new thaithon();
	__cl.out(__CLExample);
}
else if(__CLTestMode){
	__cl=new thaithon(o);
}
