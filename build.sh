#!/bin/sh
pkgName="thaipe-0.1a2.tar.bz2"
des="./thaipe"
rm -r $des 
rm -r $pkgName
mkdir  $des 
python ./dev/compileFiles.py ./thaipe.py
chmod 777 ./thaipe.pyc
for dir in  pylib example doc link thaipe.py thaipe.pyc readme.txt
do
		cp -Rf "./$dir" "$des" 
done

mkdir $des/jslib
for file in func.js jquery.js mainLibrary.js
do 
	cp -Rf "./jslib/$file" "$des/jslib"
done

tar cjfv $pkgName thaipe install.sh readme.txt
