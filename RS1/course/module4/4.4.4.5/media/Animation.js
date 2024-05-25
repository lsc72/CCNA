(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,293);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt05",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt05,W:100,A:c,e:u+d", "11px 'Courier New'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,29.4);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt03",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt03,W:100,A:c,e:u+d", "11px 'Courier New'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,29.4);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt02",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt02,W:100,A:c,e:u+d", "11px 'Courier New'");
	this.text.lineHeight = 13;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,162.6,29.4);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt01",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt01,", "11px 'Courier New'");
	this.text.lineHeight = 13;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.6,15.7);


(lib.Frame4FrameRelay = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt04",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt04,W:100,A:c,e:u+d", "11px 'Courier New'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,29.4);


(lib.Frame5Ethernet = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(0,0,1,1,0,0,0,50,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-5,104,29.4);


(lib.Frame3HDLC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(0,0,1,1,0,0,0,50,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-5,104,29.4);


(lib.Frame2PPP = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,0,1,1,0,0,0,50,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-5,162.6,29.4);


(lib.Frame1Wireless = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,0,1,1,0,0,0,50,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-5,63.6,15.7);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_456 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(456).call(this.frame_456).wait(1));

	// Frames
	this.instance = new lib.Frame1Wireless();
	this.instance.setTransform(52.7,80.3);
	this.instance._off = true;

	this.instance_1 = new lib.Frame2PPP();
	this.instance_1.setTransform(52.7,218.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Frame3HDLC();
	this.instance_2.setTransform(176.7,112.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Frame4FrameRelay();
	this.instance_3.setTransform(280.7,165.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.Frame5Ethernet();
	this.instance_4.setTransform(177.7,293.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(31).to({y:218.3},29).wait(15).to({alpha:0},5).to({_off:true},1).wait(362));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({alpha:1},5).wait(30).to({x:176.7,y:112.3},30).wait(15).to({alpha:0},5).to({_off:true},1).wait(276));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({_off:false},0).to({alpha:1},5).wait(29).to({x:310.7,y:165.3},30).wait(20).to({alpha:0},5).to({_off:true},1).wait(186));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(271).to({_off:false},0).wait(29).to({x:137.7,y:283.3},38).wait(25).to({alpha:0},4).to({_off:true},1).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(368).to({_off:false},0).wait(30).to({x:309.7,y:329.5},27).to({x:414.7},22).wait(10));

	// icons
	this.instance_5 = new lib.Bitmap1();
	this.instance_5.setTransform(16.2,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(457));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.2,39.9,444,293);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(128,42);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(144.2,81.9,444,293);


// stage content:
(lib.media_4445 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(484.2,326.9,444,293);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;