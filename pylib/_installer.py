#!/usr/bin/python

if __name__ == "__main__":
    
    from commands import  *

    getoutput("""progDir="thaipe"
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

    thaipe $installDir/example/thaipe-shell.htma
    """)
    

    cases=[
    ["/usr/share/applications/mimeinfo.cache", "text/x-thaipe=thaipe.desktop;"], 
    ["/usr/share/applications/defaults.list", "text/x-thaipe=thaipe.desktop;"], 
    ["/usr/share/mime/globs", "text/x-thaipe:*.htma"]
    ]
    
    for case in cases :
        if open(case[0]).read().find(case[1])<0 :
            print getoutput("echo '"+case[1]+"' >> '"+case[0]+"'")

