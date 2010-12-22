function import(mod){
	// sanitize input
	mod = mod.replace("'", "\\'");
	py("classMaker([\'"+mod+"\'])");
}