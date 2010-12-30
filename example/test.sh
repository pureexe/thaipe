#!/bin/sh

for i in `ls -R` ; do
	if [ -f $i ] ; then
		python ../thaipe.py $PWD/$i
	fi
done
