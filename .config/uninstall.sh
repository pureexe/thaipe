#!/bin/bash
#       Copyright (C) 2011 Vorapol Anjalisangas <thaithonpe@gmai.com>
#       Use under BSD License, thank you.

xthaipexml="/usr/share/mime/packages/x-thaipe.xml"
sudo rm -rf /opt/thaipe
sudo xdg-mime uninstall $xthaipexml
xdg-mime uninstall $xthaipexml
sudo rm -rf $xthaipexml
sudo update-mime-database /usr/share/mime
