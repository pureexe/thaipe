function selectDir () {
	require("commands");
	return commands.getoutput("zenity --file-selection  --directory")
}
