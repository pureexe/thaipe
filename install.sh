#!/bin/bash

SKIP=`awk '/^__BEGIN_GZIP__/ { print NR +1; exit 0; }'  $0`
tail -n +$SKIP $0 | gzip -dc | tar x

#mycode
echo "- Remove current install version ..."
if [ -s /opt/thaipe ] ;then 
    if [ -s /opt/thaipe/.config ] ;then 
        sudo /opt/thaipe/.config/uninstall.sh
    elif [ -s  /opt/thaipe/config ] ;then 
        sudo /opt/thaipe/config/uninstall.sh
    fi
else
    echo "- Don't have any version to remove ..."
fi

echo - Copying files  ...
sudo mv -f ./thaipe /opt
chmod -R 755 /opt/thaipe/config
/opt/thaipe/config/install.sh
#end mycode

exit 0;

__BEGIN_GZIP__
