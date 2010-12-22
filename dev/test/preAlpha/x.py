"""
portablewebbrowser.py
=====================

Version 1.0.1, 2010-06-23

Python provides a ``webbrowser`` module for opening web pages and other URLs in
browsers, but by default this launches the system's default browser. For
portable apps, it's helpful to make this instead launch a portable browser, of
the user's choice if possible, rather than a local browser. This module does
just that by finding and registering a portable browser with ``webbrowser`` if
it can.

Usage::

    import webbrowser
    import portablewebbrowser

    webbrowser.open('http://www.example.com')

If you want to use this without using webbrowser, just for getting the path to
a portable browser so you can use it directly or something like that, use
this::

    import portablewebbrowser

    portablewebbrowser.get_portable_browser_path()

This returns the path to the portable browser, or None if one wasn't found.

At present this module does not support running Thunderbird or another portable
mail client for a mailto: link; this is something which I'm not decided about
yet. At least one thing uses webbrowser for mailto: links (googsystray), but it
is a tad harder requiring extending one of the classes to provide a bit of
parsing. I'll think about it more.

If an app uses webbrowser.register() itself, the ``import portablewebbrowser``
should come after all that code to make sure that it takes highest precedence.

License information
===================

Copyright 2010 Chris Morgan of PortableApps.com
Website: http://PortableApps.com/node/23921

This software is OSI Certified Open Source Software.
OSI Certified is a certification mark of the Open Source Initiative.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

EXCEPTION: This Python module can be used with open source applications
licensed under OSI-approved licenses as well as freeware provided it is
unmodified. It may also be used with commercial software by contacting
PortableApps.com.

Version history
===============

1.0, 2010-06-19: initial release
1.0.1, 2010-06-23: fixed search order bug
"""

import webbrowser, os

_portable_browser = None

def _register_portable_browser(path):
    "Register a portable browser with webbrowser."
    if webbrowser._iscommand(path):
        # Insert the browser to the start of the lookup order
        webbrowser.register('%s-portable' % os.path.basename(path).lower(), None, webbrowser.GenericBrowser(path), -1)
        global _portable_browser
        _portable_browser = path
        return True
    return False

def _find_portable_browser():
    """
    Attempt to find a portable browser.

    First it looks for an environment variable called PortableApps.comBrowser.

    If that's not set, then in the PortableApps directory it looks for portable
    browsers known about at the time of writing. These are Firefox and Google
    Chrome, which are official, and some which are in development, Iron,
    K-Meleon, Arora, QtWeb and Midori.

    If the app isn't in PortableApps.com Format or none of these work out, the
    browser will be left as the system default.
    """

    if 'PortableApps.comBrowser' in os.environ:
        # At the time of writing, this environment variable had not been
        # implemented, nor was it clearly on the roadmap. It had been
        # mentioned, so here's a proposal for it.
        _register_portable_browser(os.environ['PortableApps.comBrowser'])

    if _portable_browser == None:
        # Try looking for it. First of all see if it's in PAF.
        package_dir, _, _ = __file__.rpartition(os.path.sep + 'App' + os.path.sep)

        # If there's not a directory App in the tree somewhere, package_dir
        # will be empty and so portableapps_dir will be empty.
        portableapps_dir = os.path.dirname(package_dir)

        if portableapps_dir != '':
            browser_list = (
                    # Officially released
                    'Firefox',
                    'GoogleChrome',

                    # In development
                    'Iron',
                    'K-Meleon',
                    'Arora',
                    'QtWeb',
                    'Midori',
            )

            for browser in browser_list:
                found_portable_browser = _register_portable_browser(
                        os.path.join(portableapps_dir,
                            '%sPortable' % browser,
                            '%sPortable.exe' % browser
                        ))
                if found_portable_browser: break

    # If we've found a portable browser by now, then all calls to
    # webbrowser.open() will invoke this portable browser rather than the
    # system's default browser.

def get_portable_browser_path():
    """
    Get the path to the user's portable browser if it can be found. If no
    portable browser can be found, this will be None.
    """
    return _portable_browser

_find_portable_browser()