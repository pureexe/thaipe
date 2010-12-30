function cmd (cmdStr) {
	require("commands");
	return commands.getoutput(cmdStr);
}
