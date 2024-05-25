function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
if(_id==1){
clickBool=false;
btnXPos=5;
btnYPos=25;

  var hit = new createjs.Shape();
		hit.graphics.beginFill("#000000").drawRect(0,0,680,490);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

var container=new createjs.Container()
_container.addChild(container);
container.cursor="pointer";


  

btn = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:50,height:50,src:"trans_btn.png",});
container.addChild(btn);


btn1 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:50,height:50,src:"trans_btn_over.png",});
container.addChild(btn1);
btn1.visible=false;


btn2 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:50,height:50,src:"cross.png",});
container.addChild(btn2);
btn2.visible=false;



		ID_s1_trans01 = getCJSElement("TEXT",{x:50,y:57,compId:"ID_s1_trans01",width:346,color:"#ffffff",class:"blackText",align:"center",expand:"right",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans01);
		ID_s1_trans01.visible=false;
		
		ID_s1_trans02 = getCJSElement("TEXT",{x:55,y:210,compId:"ID_s1_trans02",width:346,color:"#ffffff",bgColor:"#000000",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans02);
		ID_s1_trans02.visible=false;
		
		ID_s1_trans03 = getCJSElement("TEXT",{x:53,y:275,compId:"ID_s1_trans03",width:299,color:"#ffffff",bgColor:"#000000",align:"center",expand:"right",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans03);
		ID_s1_trans03.visible=false;

		ID_s1_trans04 = getCJSElement("TEXT",{x:46,y:314.5,compId:"ID_s1_trans04",width:136.5,color:"#ffffff",class:"blackText",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans04);
		ID_s1_trans04.visible=false;

		ID_s1_trans05 = getCJSElement("TEXT",{x:49,y:345,compId:"ID_s1_trans05",size:7,width:135.5,color:"#ffffff",bgColor:"#000000",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans05);
		ID_s1_trans05.visible=false;

		ID_s1_trans06 = getCJSElement("TEXT",{x:191,y:314.5,compId:"ID_s1_trans06",width:136.5,color:"#ffffff",class:"blackText",align:"center",expand:"right",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans06);
		ID_s1_trans06.visible=false;

		ID_s1_trans07 = getCJSElement("TEXT",{x:195,y:345,compId:"ID_s1_trans07",size:7,width:135.5,color:"#ffffff",bgColor:"#000000",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans07);
		ID_s1_trans07.visible=false;

		ID_s1_trans08 = getCJSElement("TEXT",{x:341,y:314.5,compId:"ID_s1_trans08",width:139.5,color:"#ffffff",class:"blackText",align:"center",expand:"right",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans08);
		ID_s1_trans08.visible=false;

		ID_s1_trans09 = getCJSElement("TEXT",{x:344,y:340,compId:"ID_s1_trans09",size:7,width:139.5,color:"#ffffff",class:"blackText",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans09);
		ID_s1_trans09.visible=false;

		ID_s1_trans10 = getCJSElement("TEXT",{x:491,y:314.5,compId:"ID_s1_trans10",width:141.5,color:"#ffffff",class:"blackText",align:"center",expand:"right",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans10);
		ID_s1_trans10.visible=false;

		ID_s1_trans11 = getCJSElement("TEXT",{x:494,y:345,compId:"ID_s1_trans11",size:7,width:140.5,color:"#ffffff",bgColor:"#000000",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s1_trans11);
		ID_s1_trans11.visible=false;		

     


container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
//var btn2 = getCJSElement("TEXTBOX",{x:405.95,y:96,width:234.75,height:287,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
//_container.addChild(btn2);





	}

if(_id==2){
clickBool1=false;
btnXPos=5;
btnYPos=25;

  var hit1 = new createjs.Shape();
		hit1.graphics.beginFill("#000000").drawRect(0,0,680,490);
		hit1.alpha=0.4;
		 _container.addChild(hit1);
		 hit1.visible=false;

var container1=new createjs.Container();
_container.addChild(container1);
container1.cursor="pointer";


  

btn3 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:50,height:50,src:"trans_btn.png",});
container1.addChild(btn3);


btn4 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:50,height:50,src:"trans_btn_over.png",});
container1.addChild(btn4);
btn1.visible=false;


btn5 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:50,height:50,src:"cross.png",});
container1.addChild(btn5);
btn5.visible=false;



		ID_s2_trans01 = getCJSElement("TEXT",{x:111,y:80.50,compId:"ID_s2_trans01",width:100.50,color:"#ffffff",bgColor:"#000000",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s2_trans01);
		ID_s2_trans01.visible=false;
		
		ID_s2_trans02 = getCJSElement("TEXT",{x:48,y:132.55,compId:"ID_s2_trans02",size:9,width:170,color:"#ffffff",bgColor:"#000000",align:"left",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s2_trans02);
		ID_s2_trans02.visible=false;
		
		ID_s2_trans03 = getCJSElement("TEXT",{x:305,y:80.50,compId:"ID_s2_trans03",width:100.5,color:"#ffffff",bgColor:"#000000",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s2_trans03);
		ID_s2_trans03.visible=false;

		ID_s2_trans04 = getCJSElement("TEXT",{x:228.5,y:127.55,compId:"ID_s2_trans04",size:9,width:200.45,color:"#ffffff",class:"blackText",align:"left",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s2_trans04);
		ID_s2_trans04.visible=false;

		ID_s2_trans05 = getCJSElement("TEXT",{x:526,y:80.5,compId:"ID_s2_trans05",width:100.5,color:"#ffffff",bgColor:"#000000",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s2_trans05);
		ID_s2_trans05.visible=false;

		ID_s2_trans06 = getCJSElement("TEXT",{x:442,y:127.55,compId:"ID_s2_trans06",size:9,width:199,color:"#ffffff",class:"blackText",align:"left",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s2_trans06);
		ID_s2_trans06.visible=false;

		ID_s2_trans07 = getCJSElement("TEXT",{x:36.90,y:344.5,compId:"ID_s2_trans07",width:608.55,color:"#ffffff",bgColor:"#000000",align:"center",expand:"down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_s2_trans07);
		ID_s2_trans07.visible=false;
     


container1.addEventListener("click", handlerMethod);
container1.addEventListener("mouseover", handlerOverMethod);
container1.addEventListener("mouseout", handlerOutMethod);
//var btn2 = getCJSElement("TEXTBOX",{x:405.95,y:96,width:234.75,height:287,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
//_container.addChild(btn2);





	}


	 function handlerMethod(event) {
		if(_id == 1){
			
		if(clickBool==false)
		{
	
		ID_s1_trans01.visible=true;
		ID_s1_trans02.visible=true;
		ID_s1_trans03.visible=true;
		ID_s1_trans04.visible=true;
		ID_s1_trans05.visible=true;
		ID_s1_trans06.visible=true;
		ID_s1_trans07.visible=true;
		ID_s1_trans08.visible=true;
		ID_s1_trans09.visible=true;
		ID_s1_trans10.visible=true;
		ID_s1_trans11.visible=true;
	
		btn2.visible=true;
		
		hit.visible=true;
		clickBool=true;
		}
		else 
		{
			
		ID_s1_trans01.visible=false;
		ID_s1_trans02.visible=false;
		ID_s1_trans03.visible=false;
		ID_s1_trans04.visible=false;
		ID_s1_trans05.visible=false;
		ID_s1_trans06.visible=false;
		ID_s1_trans07.visible=false;
		ID_s1_trans08.visible=false;
		ID_s1_trans09.visible=false;
		ID_s1_trans10.visible=false;
		ID_s1_trans11.visible=false;
			clickBool=false;
			btn2.visible=false;
			hit.visible=false;
			
		}
	}

			if(_id == 2){
			
		if(clickBool1==false)
		{
	
		ID_s2_trans01.visible=true;
		ID_s2_trans02.visible=true;
		ID_s2_trans03.visible=true;
		ID_s2_trans04.visible=true;
		ID_s2_trans05.visible=true;
		ID_s2_trans06.visible=true;
		ID_s2_trans07.visible=true;
	
		btn5.visible=true;
		
		hit1.visible=true;
		clickBool1=true;
		}
		else 
		{
			
		ID_s2_trans01.visible=false;
		ID_s2_trans02.visible=false;
		ID_s2_trans03.visible=false;
		ID_s2_trans04.visible=false;
		ID_s2_trans05.visible=false;
		ID_s2_trans06.visible=false;
		ID_s2_trans07.visible=false;

			clickBool1=false;
			btn5.visible=false;
			hit1.visible=false;
			
		}
	}
	   
 }
 
 function handlerOverMethod(event)
 {
 	if(_id==1){

	btn1.visible=true;
 	}
 	if(_id==2){
	btn4.visible=true;

 	}
	

 }
  function handlerOutMethod(event)
 {
	
	if(_id==1){

	btn1.visible=false;
 	}
 	if(_id==2){
	btn4.visible=false;

 	}
	}
	
});