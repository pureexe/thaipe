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

pkgName="thaipe-"$halfrev".run"
des="./bin/thaipe"

if [ -s $des ]
then
    sudo rm -r ./bin;
fi

mkdir -p $des 
cd ./libpy; python ./_preBuild.py; cd ..
chmod  755 ./thaipe.py
for dir in  libpy applications doc libjs test config thaipe.py install.sh readme.txt
do
        cp -Rf "./$dir" "$des" 
done

cd $des

cp -f ./install.sh ../

echo "---------------------------------------------------"
rpl -Ra "REPLACE_NUMREV" "$numrev" ./*
rpl -Ra "REPLACE_HALFREV" "$halfrev" ./*
rpl -Ra "REPLACE_FULLREV" "$fullrev" ./*
echo "---------------------------------------------------"

cd ..
if [ -s $pkgName ]
then
    rm -r $pkgName
fi
tar czf thaipe.tar.gz thaipe
cat install.sh thaipe.tar.gz >$pkgName
chmod +x ./$pkgName
cp $pkgName ../../release
