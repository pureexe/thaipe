#!/bin/bash
#       Copyright (C) 2011 Vorapol Anjalisangas <thaithonpe@gmai.com>
#       Use under BSD License, thank you.

a=0
b=1
c1=1
c2="b"
c3="beta"
d=2

numrev=$a.$b.$c1.$d
halfrev=$a.$b$c2$d
fullrev=$a.$b$c3$d

pkgName="thaipe-"$halfrev".tar.bz2"
des="./bin/thaipe"

if [ -s $des ]
then
    sudo rm -r $des;
fi

mkdir -p $des 

python ./pylib/_preBuild.py
chmod 777 ./thaipe.py
for dir in  pylib example doc jslib test .config thaipe.py install.sh readme.txt
do
        cp -Rf "./$dir" "$des" 
done

cd $des

echo "---------------------------------------------------"
rpl -R "REPLACE_NUMREV" "$numrev" ./*
rpl -R "REPLACE_HALFREV" "$halfrev" ./*
rpl -R "REPLACE_FULLREV" "$fullrev" ./*
echo "---------------------------------------------------"

mv -f ./install.sh ../
cp -f ./../../install.sh ./
cd ..
if [ -s $pkgName ]
then
    rm -r $pkgName
fi
tar cjf $pkgName thaipe install.sh
cp $pkgName ../../release
