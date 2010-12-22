# ======== Select a directory:

import Tkinter, tkFileDialog, tkMessageBox, tkSimpleDialog

root = Tkinter.Tk()
root.withdraw()
dirname = tkFileDialog.askdirectory(parent=root,initialdir="/",title='Please select a directory')
if len(dirname ) > 0:
    print "You chose %s" % dirname 


# ======== Select a file for opening:
import Tkinter,tkFileDialog

root = Tkinter.Tk()
root.withdraw()
file = tkFileDialog.askopenfile(parent=root,mode='rb',title='Choose a file')
if file != None:
    data = file.read()
    file.close()
    print "I got %d bytes from this file." % len(data)


# ======== "Save as" dialog:
import Tkinter,tkFileDialog

myFormats = [
    ('Windows Bitmap','*.bmp'),
    ('Portable Network Graphics','*.png'),
    ('JPEG / JFIF','*.jpg'),
    ('CompuServer GIF','*.gif'),
    ]

root = Tkinter.Tk()
root.withdraw()
fileName = tkFileDialog.asksaveasfilename(parent=root,filetypes=myFormats ,title="Save the image as...")
if len(fileName ) > 0:
    print "Now saving under %s" % nomFichier

# ======== Message boxes
root = Tkinter.Tk()
root.withdraw()
x=tkMessageBox.askquestion(title='Test',message='A user prompt') # has yes and no buttons returns strings "yes" or "no"
x=tkMessageBox.askyesno(title='Test',message='A user prompt')    # has yes and no buttons returns True False
x=tkMessageBox.askokcancel(title='Test',message='A user prompt') # returns True False
x=tkMessageBox.askretrycancel(title='Test',message='A user prompt')  # returns True False

# ======== Data Entry Dialogs
root = Tkinter.Tk()
root.withdraw()
x=tkSimpleDialog.askstring('Test', 'Enter string: ')  # has OK and Cancel buttons - returns None on Cancel
x=tkSimpleDialog.askinteger('Test', 'Enter an integer: ')
x=tkSimpleDialog.askfloat('Test', 'Enter an float: ')