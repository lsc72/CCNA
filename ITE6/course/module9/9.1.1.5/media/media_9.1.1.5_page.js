function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
    
   if(_id==1){
   	var totalBtns=3;
	var btnXPosArr=[482.2,528.1,482.2];
  	var btnYPosArr=[80.8,104.8,202.8];
    var popImgXYArr = [[399.05,73.4], [397.25,71.55], [264.3,185.1]];
    var popImgWHArr = [[101.7, 74.1], [103.7, 81.4], [176.7, 61.3]];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var bubbleTitleArr=["ID_s01_titleTxt01","ID_s01_titleTxt02","ID_s01_titleTxt03"];
	var bubbleTextArr=["ID_s01_bodyTxt01","ID_s01_bodyTxt02","ID_s01_bodyTxt03"];
	var popupImageArr=["popup1.png","popup2.png","popup3.png"];
	var popupArr=[];
	var crossArr=[];
	var clickBool=false;
	
  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(208,47.55,330,253);
		hit.alpha=0.2;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<3;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectLines1.png"});
			_container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:popImgXYArr[i][0],y:popImgXYArr[i][1],width:popImgWHArr[i][0],height:popImgWHArr[i][1],src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;
	
		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:315,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}
  }else if(_id==2){
  	var totalBtns=15;
  	var btnXPosArr=[154.6,203.7,273.3, 336.95, 383.35, 432.85, 407.35, 484.3, 488.4, 465.15, 431.05, 370.1, 308.3, 267.4, 238.05];
  	var btnYPosArr=[229.65,78.45,78.45, 78.45, 40.05, 40.05, 78.45, 73.45, 229.65, 265.55, 229.65, 229.65, 229.65, 265.55, 224.65];
  	/*var crossXPosArr=[225,250,516];
  	var crossYPosArr=[75,96,96];*/
    var popImgXYArr = [[148.65,80.5], [190.35,81.3], [216.6,89.45], [325.7, 98.7], [376.45, 96.2], [424.8, 88.95], [433.6, 104.45], [429.9, 87.8], [497.45, 139.2], [471.7, 139.35], [413.05, 140.6], [337.9, 141.35], [301.7, 140.95], [274.85, 133.4], [241.5, 133.4]];
    var popImgWHArr = [[117.6, 106.05], [89.85, 85], [185.7, 79.05], [100.7, 65.95], [116.7, 65.6], [83.7, 73.55], [71.7, 63.15], [138.7, 81.15], [62.7, 70.2], [63.7, 70.35], [115.7, 63.15], [148.7, 65.7], [100.7, 70.85], [62.7, 66.1], [70.7, 65.65]];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var sampleArray=[];
	var lastBtnClick;
	var bubbleTitleArr=["ID_s02_titleTxt01","ID_s02_titleTxt02","ID_s02_titleTxt03","ID_s02_titleTxt04","ID_s02_titleTxt05","ID_s02_titleTxt06","ID_s02_titleTxt07","ID_s02_titleTxt08","ID_s02_titleTxt09","ID_s02_titleTxt10","ID_s02_titleTxt11","ID_s02_titleTxt12","ID_s02_titleTxt13","ID_s02_titleTxt14","ID_s02_titleTxt15"];
	var bubbleTextArr=["ID_s02_bodyTxt01","ID_s02_bodyTxt02","ID_s02_bodyTxt03","ID_s02_bodyTxt04","ID_s02_bodyTxt05","ID_s02_bodyTxt06","ID_s02_bodyTxt07","ID_s02_bodyTxt08","ID_s02_bodyTxt09","ID_s02_bodyTxt10","ID_s02_bodyTxt11","ID_s02_bodyTxt12","ID_s02_bodyTxt13","ID_s02_bodyTxt14","ID_s02_bodyTxt15"];
	var popupImageArr=["popup_s2_1.png","popup_s2_2.png","popup_s2_3.png","popup_s2_4.png","popup_s2_5.png","popup_s2_6.png","popup_s2_7.png","popup_s2_8.png","popup_s2_9.png","popup_s2_10.png","popup_s2_11.png","popup_s2_12.png","popup_s2_13.png","popup_s2_14.png","popup_s2_15.png"];
	var popupArr=[];
	var crossArr=[];
	var clickBool=false;
	var textContainer;

  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(138,123.9,420.6,95.7);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<totalBtns;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectLines2.png"});
			_container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:popImgXYArr[i][0],y:popImgXYArr[i][1],width:popImgWHArr[i][0],height:popImgWHArr[i][1],src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;

		/*var btn2 = getCJSElement("IMAGE",{x:crossXPosArr[i],y:crossYPosArr[i],width:45,height:45,src:"cross.png"});
		container2.addChild(btn2);
		crossArr[i]=btn2;
		crossArr[i].visible=false;*/
	
		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:285,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}

  }else if(_id==3){
  	var totalBtns=1;
  	var btnXPosArr=[365.25];
  	var btnYPosArr=[229.05];
  	/*var crossXPosArr=[225,250,516];
  	var crossYPosArr=[75,96,96];*/
    var popImgXYArr = [[356.3,98.8]];
    var popImgWHArr = [[84.7, 83]];
	var buttonArr=[];
	var buttonClickArr=[];
	var buttonOverArr=[];
	var bubbleArr=[];
	var sampleArray=[];
	var lastBtnClick;
	var bubbleTitleArr=["ID_s03_titleTxt01"];
	var bubbleTextArr=["ID_s03_bodyTxt01"];
	var popupImageArr=["popup_s3_1.png"];
	var popupArr=[];
	var crossArr=[];
	var clickBool=false;
	var textContainer;

  	var hit = new createjs.Shape();
		hit.graphics.beginFill("#FFFFFF").drawRect(138,123.9,420.6,95.7);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

	for(var i=0;i<totalBtns;i++){
		var container=new createjs.Container()
		var container2=new createjs.Container()
		_container.addChild(container);
		_container.addChild(container2);
		container.cursor="pointer";
		container2.cursor="pointer";
		container.id=i; 

		if(i==0){
			var connection = getCJSElement("IMAGE",{x:0,y:0,width:680,height:490,src:"connectLines3.png"});
			_container.addChild(connection);
		}
		btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png"});
		buttonArr.push(btn);
		container.addChild(btn);

		btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png"});
		buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;

		popupimage = getCJSElement("IMAGE",{x:popImgXYArr[i][0],y:popImgXYArr[i][1],width:popImgWHArr[i][0],height:popImgWHArr[i][1],src:popupImageArr[i]});
		container2.addChild(popupimage);
		popupArr[i]=popupimage;
		popupArr[i].visible=false;

		/*var btn2 = getCJSElement("IMAGE",{x:crossXPosArr[i],y:crossYPosArr[i],width:45,height:45,src:"cross.png"});
		container2.addChild(btn2);
		crossArr[i]=btn2;
		crossArr[i].visible=false;*/
	
		container2.addEventListener("click", handlerMethod);
		container.addEventListener("click", handlerMethod);
		container.addEventListener("mouseover", handlerOverMethod);
		container.addEventListener("mouseout", handlerOutMethod);

		var txtbox = getCJSElement("TEXTBOX",{x:90,y:285,width:500,height:170,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(txtbox);

		bubbleArr[i]=txtbox;
		bubbleArr[i].visible=false;
	}

  }



	function showButtons(val) {
		for(var i = 0; i < totalBtns; i++) {
			buttonArr[i].visible = val;
			
		}
		connection.visible = val;
	}

	 function handlerMethod(event) {
		for(var i = 0; i < totalBtns; i++) {
			popupArr[i].visible=false;
			bubbleArr[i].visible=false;
			if(clickBool==false)
			{
				showButtons(false);
				
				hit.visible=true;
				clickBool=true;
			}
			else 
			{
				
				showButtons(true);
				clickBool=false;
				
				hit.visible=false;
			}
		
		}
		
		popupArr[event.target.id].visible=true;
		bubbleArr[event.target.id].visible=true;
		buttonOverArr[event.target.id].visible=false;
 	}

 
 function handlerOverMethod(event)
 {
	buttonOverArr[event.target.id].visible=true;
 }

  function handlerOutMethod(event)
 {
	buttonOverArr[event.target.id].visible=false;
 }

	
});