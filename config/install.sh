#!/bin/bash
#       Copyright (C) 2011 Vorapol Anjalisangas <thaithonpe@gmai.com>
#       Use under BSD License, thank you.

echo "- Starting ... ThaiPE v.REPLACE_FULLREV installation ..."
xthaipexml="/usr/share/mime/packages/x-thaipe.xml"

cd /opt/thaipe/config
sudo cp -Rf --remove-destination ./usr /
sudo cp -Rf --remove-destination ./.local ~/

echo - register step 1 ...
echo sudo xdg-mime install $xthaipexml
sudo xdg-mime install $xthaipexml
echo - register step 2 ...
echo sudo update-mime-database /usr/share/mime
sudo update-mime-database /usr/share/mime
echo - register step 3 ...
echo xdg-mime install $xthaipexml
xdg-mime install $xthaipexml
#echo - register step 4 ...
#echo xdg-mime default thaipe.desktop text/html
#xdg-mime default thaipe.desktop text/html

echo "- Done configuration ..."
echo "- ThaiPE v.REPLACE_FULLREV installation success ..."
echo "- Starting ... ThaiPE Application Manager ...."

thaipe
