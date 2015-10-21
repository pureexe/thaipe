# สำหรับนักพัฒนา #

  * ใช้ `py(PythonCodeString)` สำหรับสั่งงานเป็นภาษา python.
> > `py('print 1')`
  * สั่งให้แสดงเลข 1 บน Command Prompt ของ THAIPE.
  * การเรียกใช้ตัวแปรใน python หรือประกาศตัวแปร ต้องใช้ `self.<ชื่อตัวแปร>` นำเสมอ.
> > `py('self.text=open("test.html").read()') // สั่งให้ตัวแปร self.file ในไพธอน รับตัวหนังสือใน file ชื่อ test.html.`
  * การรับค่าคืนจากตัวแปรในไพธอน ใช้ฟังก์ชั้น `pyReturn(varName)` คืนค่าตัวแปรชื่อนั้นๆ กลับ.
> > `text=pyReturn("text")`
> > text จะได้รับค่าทั้งหมดจาก self.text.
  * ใช้ `pyVar('varName1,...,varNameN')` เพื่อส่งตัวแปร varName ที่มีอยู่ในแบบ python มาเป็นตัวแปรชื่อเดียวกันใน Browser.
  * `py('self.myString="THAIPE Prgramming is Very Easy"'); pyVar( "myString")`
  * myString ใน Browser จะมีค่า เป็น "THAIPE Prgramming is Very Easy"
  * ตัวอย่าง ฟังก์ชั่นเลียนแบบ `open()` วิธีสร้าง Object ใหม่ เพื่อติดต่อกับ Object ของ Python.
```
function fileOpen () {
	try {
		this.id=_newPyObj();
		this.args=arguments;
		this.fn=this.args[0];
		this.mod=this.args[1];
		if (typeof this.mod=="undefined")
			this.mod="r";
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
			py("self._out=self._objList["+this.id+"].write(self.addslashes('"+t.addslashes()+"'))");
		}
		
		this.writeFile =function(t) {
			py("self._out=self._objList["+this.id+"].write(self.addslashes('"+t.addslashes()+"'))");
			this.close();
			return pyReturn("_out");
		}
		
		this.close =function() {
			py("self._objList["+this.id+"].close()");
		}
	} catch(e){_ERR(e);};
}
```

เพิ่มเติม: http://forum.ubuntuclub.com/forum/topic,18908.0.html