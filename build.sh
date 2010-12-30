#!/bin/sh

pkgName="thaipe-0.1b1.tar.bz2"
des="./thaipe"
rm -r $pkgName


	rm -r $des 
	mkdir  $des 
	#python ./pylib/compileFiles.py ./thaipe.py
	#chmod 777 ./thaipe.pyc
	chmod 777 ./thaipe.py
	for dir in  pylib example doc link jslib thaipe.py readme.txt
	do
			cp -Rf "./$dir" "$des" 
	done
	tar cjfv $pkgName thaipe install.sh readme.txt

	
