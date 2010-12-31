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
from jslib import modengine

#my import
import os, re, glob, urllib
import traceback #to show error

try:
    import json #python 2.6
except ImportError:
    import simplejson as json #pypi it

ABOUT_PAGE = """
<html><head><title>THAI Programming Environment - About</title></head><body>
<h1>Welcome to <code>THAI Programming Environment (THAI PE)</code></h1>
<p><a
href="http://code.google.com/p/thaipe/">http://code.google.com/p/thaipe/</a><br/>
</p>
</body></html>
"""

_PROJECT_NANE="Thai's HTML Application Idea Programming Environment"
_PROJECT_ABBR="thaipe"
_PROJECT_VERSION="0"
_PROJECT_SUBVERSION="1"
_PROJECT_STATUS="beta"
_PROJECT_BUILDING="1"

_PROJECT_RELEASE_VERSION="*"*70+"\n\n"+ \
_PROJECT_NANE+" ("+_PROJECT_ABBR+") ... \n\n \
starting up... easier... develop.....\n\n"+ \
"\nrelease version : "+_PROJECT_VERSION+ \
"\nsubversion : "+_PROJECT_SUBVERSION+ \
"\nstatus : "+_PROJECT_STATUS+ \
"\nbuilding : "+_PROJECT_BUILDING+ \
"\n\n\nstarted.\n\n"+ \
"*"*70+"\n"

_dev=False

objIdRange=-1

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


class thaipe (gtk.Notebook):

    __gsignals__ = {
        "focus-view-title-changed": (gobject.SIGNAL_RUN_FIRST,
                                     gobject.TYPE_NONE,
                                     (gobject.TYPE_OBJECT, gobject.TYPE_STRING,)),
        "new-window-requested": (gobject.SIGNAL_RUN_FIRST,
                                 gobject.TYPE_NONE,
                                 (gobject.TYPE_OBJECT,))
        }

    def __init__ (self):
        self._modengine=modengine
        self._objList=[]
        self._strList=[]
        self._lastURL=""
        self._lastTitle=""
        self._lastSendExacProblem=""
        self._lastExacModName=""
        self._lastExacMtdName=""
        self._lastExacArgs=""
        self._out=""
        self._dummy=""
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
        view.load_uri(text)
        if text != None :
            self._lastURL=text
        #self.web_view.execute_script(open(sys.path[0]+'/jslib/evalQueryString.js').read())
        
    def new_tab_with_webview (self, webview):
        """creates a new tab with the given webview as its child"""
        self._construct_tab_view(webview)

    def new_tab (self, url=None):
        """creates a new page in a new tab"""
        # create the tab content
        if url!=None :
            self._lastURL=url
        browser = BrowserPage()
        self._construct_tab_view(browser, url)
        #self.web_view.execute_script(open(sys.path[0]+'/jslib/evalQueryString.js').read())

    def _construct_tab_view (self, web_view, url=None):
        if url!=None :
            self._lastURL=url
        
        self.web_view=web_view
        web_view.connect('resource-request-starting', self._resource_cb)
        web_view.connect("hovering-over-link", self._hovering_over_link_cb)
        web_view.connect("populate-popup", self._populate_page_popup_cb)
        web_view.connect("load-finished", self._view_load_finished_cb)
        web_view.connect("create-web-view", self._new_web_view_request_cb)
        web_view.connect("title-changed", self._title_changed_cb)
        web_view.connect('document-load-finished',self._document_load_finished_cb)
        web_view.connect('load-started', self._load_started_cb)
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
            
        #web_view.execute_script(open(sys.path[0]+'/jslib/evalQueryString.js').read())

        #Define all query string to javascript
        """
             When first time load or when i open in new tab, i can't get real url
        from window.location, that object show me "about:blank", and i can't get
        query, too. That why i write a code to define query string in python.
        
            But when i click a link in current tab, that code doesn't work.
        Although in this case, i can get real url from window.location, but
        when i write a code to define query string in javascript, it defined (in mainLibrary.js),
        but it can't be call from page (eg: 1.htma and in new tab it work by python js
        just doesn't work).

            Can anybody do it truth ?
        """
        try :
            _queryVars=""
            _queryVars=_queryVars.join(self._lastURL.split("?")[1:]).split("&")
            
            for v in _queryVars:
                
                v=v.split("=")
                if len(v) > 1:
                    
                    _varName = v[0].strip()
                    
                    _varValue = ""
                    _varValue = _varValue.join(v[1:]).strip()
                    _varValue=urllib.unquote(_varValue).replace("'","\\'").replace('"','\\"')

                    if _varValue[0] == "[" or not re.search("[^0-9]",_varValue) :
                        self.js(_varName+"="+_varValue)
                    else :
                        self.js(_varName+"='"+_varValue+"'")
        except Exception, e:
            self._showError()

    def _showError(self):
        argsType=""
        for arg in  self._lastExacArgs:
            arg=arg[0]
            if argsType!="":
                argsType+=","
            argsType+=str(type(arg))
            
        exc_type, exc_value, exc_traceback = sys.exc_info()
        
        err="Error -- problem : "+self._lastSendExacProblem+" > module : "+self._lastExacModName+" > method : "+self._lastExacMtdName+" ("+argsType+") : \n"
        
        tb=traceback.format_exception(exc_type, exc_value,exc_traceback)

        for i in range(0, len(tb)): # return error string
            if _dev :
                err+="\t"+tb[i]
            else:
                if i>=2:
                    err+="\t"+tb[i]
                    
        print err+"\n"+("*"*70)
        
    #my Function
    def addslashes (self,t) :
        re="""\n,\r,\r\n,",'""".split(",")
        to="""\\n,\\r,\\r\\n,\\",\\'""".split(",")
        for i in range(0, len(re)):
            t=t.replace(re[i], to[i])
            
        return t
        """
        #Thai encode problem
        #repr("กด")
        #"'\\xe0\\xb8\\x81\\xe0\\xb8\\x94'"
        t=repr(t)
        return  t[1:len(t)-1]"""

    def _unquote(self, text):
        def unicode_unquoter(match):
            return unichr(int(match.group(1),16))
        return re.sub(r'%u([0-9a-fA-F]{4})',unicode_unquoter,text)


    def _title_changed_cb (self, view, frame, title):
        self._lastUseMtd="title_changed_cb"
        child = self.get_nth_page(self.get_current_page())
        label = self.get_tab_label(child)
        label.set_label(title)
        webview=self.web_view
        self.emit("focus-view-title-changed", frame, title)

        #title=self._unquote(urllib.unquote(title)).replace("\\\n", "\\n")
        title=title.replace("__NEW_LINE__","\n").replace("\\\n", "\\n")
        
        if title[0:2]=="!!" :
            title=re.sub("^!!", "", title)
            os.chdir(os.path.dirname(re.sub("/*/", "/", self._lastURL.replace("file:","").replace("http:", ""))))
            try :
                if _dev:
                    print self._lastUseMtd+" > value of title before exec is : "+title
                exec title in locals()
            except  Exception, e:
                if _dev:
                    print self._lastUseMtd+" > value of False title is : "+title
                self._showError()
                  
            os.chdir(sys.path[0])
        else :
            if title != self._lastTitle:
                self._lastTitle=title
                self.js("document.title='"+self.addslashes(title)+"'")
              
    def js (self, javascript_code) :
        if _dev :
           print "in self.js func of "+javascript_code
        self.web_view.execute_script(javascript_code)

    def pyVar(self, varName):
        if _dev :
           print "in self.pyVar func of "+varName
           
        var=getattr(self, varName)
        try :
            jsCode=varName+" = "+json.dumps(var)+";"

        except Exception, e: 
            print "\nCore bug !!!, can't return python file type to javascript.\nif you use any method of "+varName+",eg : "+varName+".writelines('test'), it will be error.\nI don't have any idea to correct this function. \nIf you can, join with our to develope THAIPE, please.\n"+"*"*70
            jsCode=varName+" = "+str(var)+";"
            self._showError()
            
        self.js(jsCode)
        
    def _view_load_finished_cb(self, view, frame):
        child = self.get_nth_page(self.get_current_page())
        label = self.get_tab_label(child)
        title = frame.get_title()
        if not title:
            title = frame.get_uri()
        if title:
            label.set_label(title)

    def _resource_cb(self, view, frame, resource, request, response):
        pass
        #request.set_uri('...whatever...')
        #print request.get_uri()
        #self.web_view.execute_script(open(sys.path[0]+'/jslib/evalQueryString.js').read())
            
    def _load_started_cb (self, widget, argv) :
        #mycode pre define script
        self.js(open(sys.path[0]+'/jslib/main.js').read())
        #self.js(open(sys.path[0]+'/jslib/evalQueryString.js').read())

    def _document_load_finished_cb (self, widget, argv) :
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
        if uri != None :
            self._lastURL = uri

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

            """gotoPageButton = gtk.ToolButton(gtk.STOCK_GO_FORWARD)
            gotoPageButton.connect("clicked", self._go_to_uri_cb)
            self.insert(gotoPageButton, -1)
            gotoPageButton.show()"""
            
            addTabButton = gtk.ToolButton(gtk.STOCK_ADD)
            addTabButton.connect("clicked", self._add_tab_cb)
            self.insert(addTabButton, -1)
            addTabButton.show()

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
        content_tabs = thaipe()
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
        
        try:
            urlToOpen = sys.argv[1]
            # check for abs path
            urlToOpen = os.path.abspath(urlToOpen)
        except IndexError:
            urlToOpen = sys.path[0]+"/example/firstPage.htma"
        
        url="file:///"+urlToOpen
        content_tabs.url=url
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
        self.set_title(_("%s - THAIPE") % title)
        load_committed_cb(tabbed_pane, frame, toolbar)

# event handlers
def new_tab_requested_cb (toolbar, content_pane):
    content_pane.new_tab("about:blank")

def load_requested_cb (widget, text, content_pane):
    if not text:
        return
    content_pane.load(text)
    #content_pane.execute_script(open(sys.path[0]+'/jslib/evalQueryString.js').read())

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
    web_view.open("http://code.google.com/p/thaipe")

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
    print _PROJECT_RELEASE_VERSION
    gtk.main()
