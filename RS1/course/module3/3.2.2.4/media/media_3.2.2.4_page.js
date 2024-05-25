function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap1_2.png", id:"Bitmap1_2"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap2_2.png", id:"Bitmap2_2"},
		{src:"images/Bitmap3_2.png", id:"Bitmap3_2"},
		{src:"images/Bitmap4.png", id:"Bitmap4"}
	];

	return manifest;			
});