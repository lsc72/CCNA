function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
var clickBool=false;
btnXPos=111.5
btnYPos=54;
var textContainer;




  var hit = new createjs.Shape();
		hit.graphics.beginFill("#000000").drawRect(0,0,680,490);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

var container=new createjs.Container()
_container.addChild(container);
container.cursor="pointer";


  

btn = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"trans_btn.png",});
container.addChild(btn);


btn1 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"trans_btn_over.png",});
container.addChild(btn1);
btn1.visible=false;


btn2 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"cross.png",});
container.addChild(btn2);
btn2.visible=false;



		ID_txt01 = getCJSElement("TEXT",{x:447.75,y:81.1,compId:"ID_s1_trans01",width:95.5,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt01);
		ID_txt01.visible=false;
		
		ID_txt02 = getCJSElement("TEXT",{x:344.2,y:206.1,compId:"ID_s1_trans02",width:98.55,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt02);
		ID_txt02.visible=false;
		
		ID_txt03 = getCJSElement("TEXT",{x:315.25,y:315.65,compId:"ID_s1_trans03",width:81.5,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt03);
		ID_txt03.visible=false;
	
		
			ID_txt04 = getCJSElement("TEXT",{x:434.75,y:388.05,compId:"ID_s1_trans04",width:50.5,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt04);
		ID_txt04.visible=false;
		
			


container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
//var btn2 = getCJSElement("TEXTBOX",{x:405.95,y:96,width:234.75,height:287,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
//_container.addChild(btn2);






	 function handlerMethod(event) {
		
		if(clickBool==false)
		{
	
		ID_txt02.visible=true;
		ID_txt01.visible=true;
		ID_txt03.visible=true;
		ID_txt04.visible=true;
	
		btn2.visible=true;
		
		hit.visible=true;
		$("#ID_title").css("opacity","0.4");
		clickBool=true;
		}
		else 
		{
			
		ID_txt02.visible=false;
		ID_txt01.visible=false;
		ID_txt03.visible=false;
		ID_txt04.visible=false;
		
			clickBool=false;
			
			btn2.visible=false;
			hit.visible=false;
			$("#ID_title").css("opacity","1");
		}
	
	   
 }
 
 function handlerOverMethod(event)
 {

	btn1.visible=true;
	

 }
  function handlerOutMethod(event)
 {
	btn1.visible=false;
	}

	
});