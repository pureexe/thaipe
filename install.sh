#!/bin/sh
progDir="thaipe"
installDir="/opt/$progDir"

if [ $1 ]
then 
	if [ $1 = "-d" ]
	then
		tar xf thaipe-0.1a2.tar.bz2
	fi
fi

sudo rm -r $installDir

sudo mv -f   $progDir $installDir

cd $installDir/link
sudo ln -sf $PWD/pixmaps/thaipe.xpm /usr/share/pixmaps/thaipe.xpm
sudo ln -sf $PWD/thaipe.desktop /usr/share/applications/thaipe.desktop
sudo ln -sf $PWD/thaipe-shell.desktop /usr/share/applications/thaipe-shell.desktop
sudo ln -sf /usr/share/applications/thaipe-shell.desktop ~/Desktop/thaipe-shell.desktop
sudo ln -sf $PWD/thaipe /usr/bin/thaipe

thaipe /opt/$progDir/example/thaipe-shell.htma
