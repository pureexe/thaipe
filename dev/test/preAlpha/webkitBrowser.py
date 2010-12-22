#!/usr/bin/env python

import gtk, webkit, os, demjson
x=111
   
class Web(gtk.Window):
   def __init__(self):
      gtk.Window.__init__(self)
      self.set_title("WebView")
      self.connect("destroy", gtk.main_quit)
      self.resize(800,600)
      self.filename = None

      self.browser = webkit.WebView()
      
      self.browser.open("/home/a/Desktop/test.html")

      self.browser.execute_script("""

         function py (python_code) {
            document.title = "null";
            document.title=python_code;
         }
         
         function pyVar (/*arguments[0],...[n]*/ ) {
            args=arguments;
              for (i=0;i<args.length;i++) {
              
                 jscode=" ' "+args[i]+"  =  ' + " + args[i].replace("var","") 
                 
                 py( "js("+jscode+") ");
                 
              }
         }
         

      """)

      def title_changed(widget, frame, title):
         
         if title != 'null':
            try:
               exec title in globals()
            except  Exception, e:
              print 'Python Error : '+demjson.encode(e)


      def document_load_finished (widget, argv) :
         pass
         #mycode
            



      #ต้องหามาว่ามันมีวิธีคอนเนคอื่นไหม ? ตอบ ไม่มี
      self.browser.connect('title-changed', title_changed)
      self.browser.connect('document-load-finished',document_load_finished)

      scroll = gtk.ScrolledWindow()
      scroll.add(self.browser)
      scroll.set_policy(gtk.POLICY_AUTOMATIC, gtk.POLICY_AUTOMATIC)

      self.add(scroll)




e = Web()
def js (javascript_code) :
   print "in js func of "+javascript_code
   e.browser.execute_script(javascript_code)
e.show_all()
gtk.main()

      

