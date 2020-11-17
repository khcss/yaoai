if (maccms.auto_collect != '') {
	var aclist = maccms.auto_collect.split(',');
	for (var i = 0; i < aclist.length; i ++) {
		$.get("/api.php/timming/index?name="+aclist[i]);
	}
}else{
	console.log("auto collect error");
}
if (maccms.auto_cache != '') {
	$.get("/api.php/timming/index?name="+maccms.auto_cache);
}else{
	console.log("auto cache error");
}
if (maccms.auto_make != '') {
	var amlist = maccms.auto_make.split(',');
	for (var i = 0; i < amlist.length; i ++) {
		$.get("/api.php/timming/index?name="+amlist[i]);
	}
}else{
	console.log("auto make error");
}