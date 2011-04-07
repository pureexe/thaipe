#!/bin/bash
#       Copyright (C) 2011 Vorapol Anjalisangas <thaithonpe@gmai.com>
#       Use under BSD License, thank you.

echo "- Remove current install version ..."
if [ -s /opt/thaipe ] ;then 
    sudo /opt/thaipe/.config/uninstall.sh
else
    echo "- Don't have any version to remove ..."
fi

echo "- Starting ... ThaiPE v. REPLACE_FULLREV installation ..."
xthaipexml="/usr/share/mime/packages/x-thaipe.xml"
sudo mv -f ./thaipe /opt
cd /opt/thaipe/.config
sudo cp -rf ./usr /
sudo cp -rf ./.local ~/
echo "- Copying files success ..."
echo - regiter step 1 ...
sudo update-mime-database /usr/share/mime
echo - regiter step 2 ...
sudo xdg-mime install $xthaipexml
echo - regiter step 3 ...
xdg-mime install $xthaipexml
echo - regiter step 4 ...
xdg-mime default thaipe.desktop text/x-thaipe
echo "- Done configuration ..."
echo "- ThaiPE v. REPLACE_FULLREV installation success ..."
echo "- Starting ... ThaiPE Application Manager ...."

thaipe
