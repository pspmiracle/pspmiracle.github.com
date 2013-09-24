(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib._404flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance = new lib.Symbol3();
	this.instance.setTransform(219.5,69.5,1,1,0,0,0,103.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(30));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(187,40.5,1,1,0,0,0,196,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:22.9,x:186.3,y:41.9},0).wait(1).to({x:185.5},0).wait(1).to({x:184.7},0).wait(1).to({x:183.9},0).wait(1).to({x:183.1},0).wait(1).to({x:182.3},0).wait(1).to({x:181.5},0).wait(1).to({x:180.8},0).wait(1).to({x:180},0).wait(1).to({x:179.2},0).wait(1).to({x:178.4},0).wait(1).to({x:177.6},0).wait(1).to({x:176.8},0).wait(1).to({x:176},0).wait(1).to({x:176.8},0).wait(1).to({x:177.5},0).wait(1).to({x:178.2},0).wait(1).to({x:179},0).wait(1).to({x:179.7},0).wait(1).to({x:180.4},0).wait(1).to({x:181.2},0).wait(1).to({x:181.9},0).wait(1).to({x:182.6},0).wait(1).to({x:183.4},0).wait(1).to({x:184.1},0).wait(1).to({x:184.8},0).wait(1).to({x:185.6},0).wait(1).to({x:186.3},0).wait(1).to({x:187},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,19,392,62);


// symbols:
(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Please check the URL", "17px Arial", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 203;
	this.text.setTransform(101.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207,23);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text("Oops! Page not found.", "34px Arial", "#666666");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 388;
	this.text_1.setTransform(194,0);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,392,43);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(103.5,11.5,1,1,0,0,0,103.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:12.5,y:12.5,alpha:0.901},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,23);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;