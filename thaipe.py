#! /usr/bin/env python
#-*-coding:utf8-*-
# Copyright (C) 2007, 2008, 2009 Jan Michael Alonzo <jmalonzo@gmai.com>
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

# TODO:
#
# * fix tab relabelling
# * search page interface
# * custom button - w/o margins/padding to make tabs thin
#

from gettext import gettext as _

import sys
import gobject
import gtk
import pango
import webkit
from pylib.inspector import Inspector

#my import
import os, re, glob
import traceback #to show error

ABOUT_PAGE = """
<html><head><title>PyWebKitGtk - About</title></head><body>
<h1>Welcome to <code>webbrowser.py</code></h1>
<p><a
href="http://code.google.com/p/pywebkitgtk/">http://code.google.com/p/pywebkitgtk/</a><br/>
</p>
</body></html>
"""
objIdRange=-1
_PWD=sys.path[0]
_dev=False


class BrowserPage(webkit.WebView):

    def __init__(self):
        webkit.WebView.__init__(self)
        settings = self.get_settings()
        settings.set_property("enable-developer-extras", True)

        # scale other content besides from text as well
        self.set_full_content_zoom(True)

        # make sure the items will be added in the end
        # hence the reason for the connect_after
        self.connect_after("populate-popup", self.populate_popup)



    def populate_popup(self, view, menu):
        # zoom buttons
        zoom_in = gtk.ImageMenuItem(gtk.STOCK_ZOOM_IN)
        zoom_in.connect('activate', zoom_in_cb, view)
        menu.append(zoom_in)

        zoom_out = gtk.ImageMenuItem(gtk.STOCK_ZOOM_OUT)
        zoom_out.connect('activate', zoom_out_cb, view)
        menu.append(zoom_out)

        zoom_hundred = gtk.ImageMenuItem(gtk.STOCK_ZOOM_100)
        zoom_hundred.connect('activate', zoom_hundred_cb, view)
        menu.append(zoom_hundred)

        printitem = gtk.ImageMenuItem(gtk.STOCK_PRINT)
        menu.append(printitem)
        printitem.connect('activate', print_cb, view)

        page_properties = gtk.ImageMenuItem(gtk.STOCK_PROPERTIES)
        menu.append(page_properties)
        page_properties.connect('activate', page_properties_cb, view)

        menu.append(gtk.SeparatorMenuItem())

        aboutitem = gtk.ImageMenuItem(gtk.STOCK_ABOUT)
        menu.append(aboutitem)
        aboutitem.connect('activate', about_pywebkitgtk_cb, view)

        menu.show_all()
        return False

class TabLabel (gtk.HBox):
    """A class for Tab labels"""

    __gsignals__ = {
        "close": (gobject.SIGNAL_RUN_FIRST,
                  gobject.TYPE_NONE,
                  (gobject.TYPE_OBJECT,))
        }

    def __init__ (self, title, child):
        """initialize the tab label"""
        gtk.HBox.__init__(self, False, 4)
        self.title = title
        self.child = child
        self.label = gtk.Label(title)
        self.label.props.max_width_chars = 30
        self.label.set_ellipsize(pango.ELLIPSIZE_MIDDLE)
        self.label.set_alignment(0.0, 0.5)

        icon = gtk.image_new_from_stock(gtk.STOCK_ORIENTATION_PORTRAIT, gtk.ICON_SIZE_BUTTON)
        close_image = gtk.image_new_from_stock(gtk.STOCK_CLOSE, gtk.ICON_SIZE_MENU)
        close_button = gtk.Button()
        close_button.set_relief(gtk.RELIEF_NONE)
        close_button.connect("clicked", self._close_tab, child)
        close_button.set_image(close_image)
        self.pack_start(icon, False, False, 0)
        self.pack_start(self.label, True, True, 0)
        self.pack_start(close_button, False, False, 0)

        self.set_data("label", self.label)
        self.set_data("close-button", close_button)
        self.connect("style-set", tab_label_style_set_cb)

    def set_label (self, text):
        """sets the text of this label"""
        self.label.set_label(text)

    def _close_tab (self, widget, child):
        self.emit("close", child)

def tab_label_style_set_cb (tab_label, style):
    context = tab_label.get_pango_context()
    metrics = context.get_metrics(tab_label.style.font_desc, context.get_language())
    char_width = metrics.get_approximate_digit_width()
    (width, height) = gtk.icon_size_lookup(gtk.ICON_SIZE_MENU)
    tab_label.set_size_request(20 * pango.PIXELS(char_width) + 2 * width,
                               pango.PIXELS(metrics.get_ascent() +
    metrics.get_descent()) + 8)


class ContentPane (gtk.Notebook):

    __gsignals__ = {
        "focus-view-title-changed": (gobject.SIGNAL_RUN_FIRST,
                                     gobject.TYPE_NONE,
                                     (gobject.TYPE_OBJECT, gobject.TYPE_STRING,)),
        "new-window-requested": (gobject.SIGNAL_RUN_FIRST,
                                 gobject.TYPE_NONE,
                                 (gobject.TYPE_OBJECT,))
        }

    def __init__ (self):
        self.objList=[]
        self._runTitle=False
        self._preRunTitle=False
        self._title=""
        """initialize the content pane"""
        gtk.Notebook.__init__(self)
        self.props.scrollable = True
        self.props.homogeneous = True
        self.connect("switch-page", self._switch_page)

        self.show_all()
        self._hovered_uri = None

    def load (self, text):
        """load the given uri in the current web view"""
        child = self.get_nth_page(self.get_current_page())
        view = child.get_child()

    def new_tab_with_webview (self, webview):
        """creates a new tab with the given webview as its child"""
        self._construct_tab_view(webview)

    def new_tab (self, url=None):
        """creates a new page in a new tab"""
        # create the tab content
        browser = BrowserPage()
        self._construct_tab_view(browser, url)

    def _construct_tab_view (self, web_view, url=None):
        global _PWD
        self.web_view=web_view
        web_view.connect("hovering-over-link", self._hovering_over_link_cb)
        web_view.connect("populate-popup", self._populate_page_popup_cb)
        web_view.connect("load-finished", self._view_load_finished_cb)
        web_view.connect("create-web-view", self._new_web_view_request_cb)
        web_view.connect("title-changed", self._title_changed_cb)
        web_view.connect('document-load-finished',self.document_load_finished_cb)
        web_view.connect('load-started', self.load_started_cb)
        inspector = Inspector(web_view.get_web_inspector())

        scrolled_window = gtk.ScrolledWindow()
        scrolled_window.props.hscrollbar_policy = gtk.POLICY_AUTOMATIC
        scrolled_window.props.vscrollbar_policy = gtk.POLICY_AUTOMATIC
        scrolled_window.add(web_view)
        scrolled_window.show_all()

        # create the tab
        label = TabLabel(url, scrolled_window)
        label.connect("close", self._close_tab)
        label.show_all()

        new_tab_number = self.append_page(scrolled_window, label)
        self.set_tab_label_packing(scrolled_window, False, False, gtk.PACK_START)
        self.set_tab_label(scrolled_window, label)

        # hide the tab if there's only one
        self.set_show_tabs(self.get_n_pages() > 1)

        self.show_all()
        self.set_current_page(new_tab_number)

        # load the content
        self._hovered_uri = None
        if not url:
            web_view.load_string(ABOUT_PAGE, "text/html", "tis-620", "about")
        else:
            web_view.load_uri(url)
        self.uri=url

        #mycode pre define script
        self._out=""
        #คำสั่งสำคัญๆ ที่จะรวมกับสคริปปกติไม่ได้ เพราะใช้บ่อย เสียแล้วจะใช้ไม่ได้
        self.web_view.execute_script(open(_PWD+'/jslib/jquery.js').read())
        self.web_view.execute_script(open(_PWD+'/jslib/mainLibrary.js').read())
        self.web_view.execute_script(open(_PWD+'/jslib/func.js').read())


        #ถ้ายังไม่เรียกใช้ สคริปที่เสีย หรือหลัังจากสคริปที่เสีย ก็ใช้ได้,
        #แต่ถ้าเรียกไปแล้ว ทั้งก่อนและหลังจะไม่รันทั้งหมด แม้จะเปิดแล้วปิดใหม่ก็ตาม
        
        self.web_view.execute_script("""
        //to import .js file
        if (typeof(importList) == 'undefined') var importList = new Object();
        function jsImport(jsFile) {
            if (importList[jsFile] != null) return;
            var scriptElt = document.createElement('script');
            scriptElt.type = 'text/javascript';
            scriptElt.src = jsFile;
            //document.getElementsByTagName('head')[0].appendChild(scriptElt);
            importList[jsFile] = jsFile; // or whatever value your prefer
        }
        """)
       

    def _showError(self):
        exc_type, exc_value, exc_traceback = sys.exc_info()
        err=""
        for i in traceback.format_exception(exc_type, exc_value,exc_traceback): # return error string
            err+=i
        print err

    def _title_changed_cb (self, view, frame, title):
        
        child = self.get_nth_page(self.get_current_page())
        label = self.get_tab_label(child)
        label.set_label(title)
        webview=self.web_view# สำหนับตอนรัน _local เพราะไม่เห็น self
        self.emit("focus-view-title-changed", frame, title)

        if title != 'null' and title[0:2]!="--":
            os.chdir(os.path.dirname(re.sub("/*/", "/", self.uri.replace("file:","").replace("http:", ""))))
            try :
                title=title.replace("_NEWLINE","\n")
                if _dev:
                    print "in py or _title_changed_cb func : "+title
                exec title in locals()
            except  Exception, e:
              self._showError()
            os.chdir(_PWD)
        if title[0]=="--":
            self.js("document.title='"+title+"'")
              
    def js (self, javascript_code) :
        if _dev :
           print "in js func of "+javascript_code

        self.web_view.execute_script(javascript_code)

    def pyVar(self, varName):
        var=eval("str(self."+varName+")").replace("\n","\\n")
        jsCode=varName+" = '"+var.replace('"','\\"').replace("'","\\'")+"';"
        self.js(jsCode)
        

    def _view_load_finished_cb(self, view, frame):
        child = self.get_nth_page(self.get_current_page())
        label = self.get_tab_label(child)
        title = frame.get_title()
        if not title:
            title = frame.get_uri()
        if title:
            label.set_label(title)
            
    def load_started_cb (self, widget, argv) :
        pass #ใช้ไม่ได้จริงๆ สงสัยโดนตัดทิ้งไปแล้ว เมทอดนี้
        

    def document_load_finished_cb (self, widget, argv) :
        pass
    
    def _populate_page_popup_cb(self, view, menu):
        # misc
        if self._hovered_uri:
            open_in_new_tab = gtk.MenuItem(_("Open Link in New Tab"))
            open_in_new_tab.connect("activate", self._open_in_new_tab, view)
            menu.insert(open_in_new_tab, 0)
            menu.show_all()

    def _open_in_new_tab (self, menuitem, view):
        self.new_tab(self._hovered_uri)

    def _close_tab (self, label, child):
        page_num = self.page_num(child)
        if page_num != -1:
            view = child.get_child()
            view.destroy()
            self.remove_page(page_num)
        self.set_show_tabs(self.get_n_pages() > 1)

    def _switch_page (self, notebook, page, page_num):
        child = self.get_nth_page(page_num)
        view = child.get_child()
        frame = view.get_main_frame()
        self.emit("focus-view-title-changed", frame, frame.props.title)

    def _hovering_over_link_cb (self, view, title, uri):
        self._hovered_uri = uri

    def _new_web_view_request_cb (self, web_view, web_frame):
        scrolled_window = gtk.ScrolledWindow()
        scrolled_window.props.hscrollbar_policy = gtk.POLICY_AUTOMATIC
        scrolled_window.props.vscrollbar_policy = gtk.POLICY_AUTOMATIC
        view = BrowserPage()

        scrolled_window.add(view)
        scrolled_window.show_all()

        vbox = gtk.VBox(spacing=1)
        vbox.pack_start(scrolled_window, True, True)

        window = gtk.Window()
        window.add(vbox)
        view.connect("web-view-ready", self._new_web_view_ready_cb)

        return view

    def _new_web_view_ready_cb (self, web_view):
        self.emit("new-window-requested", web_view)


class WebToolbar(gtk.Toolbar):

    __gsignals__ = {
        "load-requested": (gobject.SIGNAL_RUN_FIRST,
                           gobject.TYPE_NONE,
                           (gobject.TYPE_STRING,)),
        "new-tab-requested": (gobject.SIGNAL_RUN_FIRST,
                              gobject.TYPE_NONE, ()),
        "view-source-mode-requested": (gobject.SIGNAL_RUN_FIRST,
                                       gobject.TYPE_NONE,
                                       (gobject.TYPE_BOOLEAN, ))
        }

    def __init__(self, location_enabled=True, toolbar_enabled=True):
        gtk.Toolbar.__init__(self)

        # location entry
        if location_enabled:
            self._entry = gtk.Entry()
            self._entry.connect('activate', self._entry_activate_cb)
            entry_item = gtk.ToolItem()
            entry_item.set_expand(True)
            entry_item.add(self._entry)
            self._entry.show()
            self.insert(entry_item, -1)
            entry_item.show()

        # add tab button
        if toolbar_enabled:

            """addTabButton = gtk.ToolButton(gtk.STOCK_GO_FORWARD)
            addTabButton.connect("clicked", self._go_to_uri_cb)
            self.insert(addTabButton, -1)
            addTabButton.show()"""
            
            """addTabButton = gtk.ToolButton(gtk.STOCK_ADD)
            addTabButton.connect("clicked", self._add_tab_cb)
            self.insert(addTabButton, -1)
            addTabButton.show()"""

            viewSourceItem = gtk.ToggleToolButton(gtk.STOCK_PROPERTIES)
            viewSourceItem.set_label("View Source Mode")
            viewSourceItem.connect('toggled', self._view_source_mode_cb)
            self.insert(viewSourceItem, -1)
            viewSourceItem.show()

    def location_set_text (self, text):
        self._entry.set_text(text)

    """def _go_to_uri_cb(self, entry):
        self.emit("load-requested", entry.props.text)"""

    def _entry_activate_cb(self, entry):
        self.emit("load-requested", entry.props.text)

    def _add_tab_cb(self, button):
        self.emit("new-tab-requested")

    def _view_source_mode_cb(self, button):
        self.emit("view-source-mode-requested", button.get_active())

class WebBrowser(gtk.Window):

    def __init__(self):
        gtk.Window.__init__(self)

        toolbar = WebToolbar()
        content_tabs = ContentPane()
        self.content_tabs=content_tabs
        content_tabs.connect("focus-view-title-changed", self._title_changed_cb, toolbar)
        content_tabs.connect("new-window-requested", self._new_window_requested_cb)
        toolbar.connect("load-requested", load_requested_cb, content_tabs)
        toolbar.connect("new-tab-requested", new_tab_requested_cb, content_tabs)
        toolbar.connect("view-source-mode-requested", view_source_mode_requested_cb, content_tabs)

        vbox = gtk.VBox(spacing=1)
        vbox.pack_start(toolbar, expand=False, fill=False)
        vbox.pack_start(content_tabs)

        self.add(vbox)
        self.set_default_size(800, 600)
        self.connect('destroy', destroy_cb, content_tabs)

        self.show_all()
        
        try :
            url="file:///"+sys.argv[1]
        except:
            #url="file:///"+os.getcwdu()+"/test.htma"
            url="file:///"+sys.path[0]+"/example/firstPage.htma"
        
        content_tabs.new_tab(url)
        

    def _new_window_requested_cb (self, content_pane, view):
        features = view.get_window_features()
        window = view.get_toplevel()

        scrolled_window = view.get_parent()
        if features.get_property("scrollbar-visible"):
            scrolled_window.props.hscrollbar_policy = gtk.POLICY_NEVER
            scrolled_window.props.vscrollbar_policy = gtk.POLICY_NEVER

        isLocationbarVisible = features.get_property("locationbar-visible")
        isToolbarVisible = features.get_property("toolbar-visible")
        if isLocationbarVisible or isToolbarVisible:
            toolbar = WebToolbar(isLocationbarVisible, isToolbarVisible)
            scrolled_window.get_parent().pack_start(toolbar, False, False, 0)

        window.set_default_size(features.props.width, features.props.height)
        window.move(features.props.x, features.props.y)

        window.show_all()
        return True

    def _title_changed_cb (self, tabbed_pane, frame, title, toolbar):
        if not title:
           title = frame.get_uri()
        self.set_title(_("PyWebKitGtk - %s") % title)
        load_committed_cb(tabbed_pane, frame, toolbar)

# event handlers
def new_tab_requested_cb (toolbar, content_pane):
    content_pane.new_tab("about:blank")

def load_requested_cb (widget, text, content_pane):
    if not text:
        return
    content_pane.load(text)

def load_committed_cb (tabbed_pane, frame, toolbar):
    uri = frame.get_uri()
    if uri:
        toolbar.location_set_text(uri)

def destroy_cb(window, content_pane):
    """destroy window resources"""
    num_pages = content_pane.get_n_pages()
    while num_pages != -1:
        child = content_pane.get_nth_page(num_pages)
        if child:
            view = child.get_child()
        num_pages = num_pages - 1
    window.destroy()
    gtk.main_quit()

# context menu item callbacks
def about_pywebkitgtk_cb(menu_item, web_view):
    web_view.open("http://live.gnome.org/PyWebKitGtk")

def zoom_in_cb(menu_item, web_view):
    """Zoom into the page"""
    web_view.zoom_in()

def zoom_out_cb(menu_item, web_view):
    """Zoom out of the page"""
    web_view.zoom_out()

def zoom_hundred_cb(menu_item, web_view):
    """Zoom 100%"""
    if not (web_view.get_zoom_level() == 1.0):
        web_view.set_zoom_level(1.0)

def print_cb(menu_item, web_view):
    mainframe = web_view.get_main_frame()
    mainframe.print_full(gtk.PrintOperation(), gtk.PRINT_OPERATION_ACTION_PRINT_DIALOG);

def page_properties_cb(menu_item, web_view):
    mainframe = web_view.get_main_frame()
    datasource = mainframe.get_data_source()
    main_resource = datasource.get_main_resource()
    window = gtk.Window()
    window.set_default_size(100, 60)
    vbox = gtk.VBox()
    hbox = gtk.HBox()
    hbox.pack_start(gtk.Label("MIME Type :"), False, False)
    hbox.pack_end(gtk.Label(main_resource.get_mime_type()), False, False)
    vbox.pack_start(hbox, False, False)
    hbox2 = gtk.HBox()
    hbox2.pack_start(gtk.Label("URI : "), False, False)
    hbox2.pack_end(gtk.Label(main_resource.get_uri()), False, False)
    vbox.pack_start(hbox2, False, False)
    hbox3 = gtk.HBox()
    hbox3.pack_start(gtk.Label("Encoding : "), False, False)
    hbox3.pack_end(gtk.Label(main_resource.get_encoding()), False, False)
    vbox.pack_start(hbox3, False, False)
    window.add(vbox)
    window.show_all()
    window.present()


def view_source_mode_requested_cb(widget, is_active, content_pane):
    currentTab = content_pane.get_nth_page(content_pane.get_current_page())
    childView = currentTab.get_child()
    childView.set_view_source_mode(is_active)
    childView.reload()

if __name__ == "__main__":
    webbrowser = WebBrowser()
       
    gtk.main()
