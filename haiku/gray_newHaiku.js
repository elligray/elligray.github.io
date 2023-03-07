(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gray_newHaiku_atlas_1", frames: [[0,0,562,95]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["gray_newHaiku_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ripples = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ripples
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066CC").ss(10,1,1).p("AErwnQC9i9FxiEQB+gtB8geQBjgYAcAAQAcAABKAeQBNAfBRAtQDSB2AtBgQBnDbDABaQDCBbFzAAQCnAACUg0QBHgZCyhYQCehPB5gjQC2gzDhAAQCVAABRAJQBiALBMAeQBOAgBaBBQBPA5CBB0QByBkG+BqQCnAoChAcQCVAZA1ABEhZggdlQDBjFD3g8QBegXCSAAQBTAABWA4QBlBPA7AtQBrBTBnApQCOA4CzAAQBwAABigfQCkg5C6g0QBLgVDtgqQDTglAtAEQgJAGgJAAQBcAABiBCQAXAPChCEQB8BmBrAzQCYBJC1ALEhX8gHtQAogZCkg7QCmg7C0g2QGsiBAmAlQgJAIgMABQDKAABYBGQAiAbAcAtQAeA3APAcQA8BqBmAwQCWBHEyAAQCSAAGyhvQDng7AkgIQBRgSAXABQgHAFgJAAQB0AAAtBrQAPAkASBLQAVBaAMAkQAzCdBzBPQCcBrEwAAQAZAAAmgHQAvgJAUgOEhIEgMOQAEADAAAFQAAgMgDADQgBABAAAAgEgv0ggBQAMACAAAEQAAgOgGAEQgDADgDABgEgprgIGQAJABAAAEQAAgNgDADQgDADgDACgA36rJQAKAAAwAFQAxAFANAAQA1AADBgZQDCgZAjAAQDnAAByBlQArAmArBCQAvBOAbApQBjCYCZBHQDYBlGWAAQDmAAERgkQDyggBaggEgoIAQoQARAAA8gRQBMgWBrgpQBkgmCtgPQCagHABAAQBpAABiBFQAjAZAzAtQA6A2AgAbQB1BmBwAyQCcBEDOAAQB3AACTgZQB/gZARAAIAAgUEhNeAY6QB8gfBYgoQBTgrAmgSQA/gdBPgNQBkgQC0AAQC6AAA9BZQAXAiANA6QAIAhAOBHQAeCGBeA+QCHBZE3AAQCZAACogcQBigQDDguQDAgsBpgSQCsgcCgAAQBLAAAaAJQAYAHASAaQApA9AKAMQAxA7BSBCQA/AyCzAwQCcAqA+AAAQZU2QGkjOB1grQDChHDgAAQFFAACyBSQBxAzBuB/QA9BHAZAZQA1AzA8AgQCXBREXAAQAVAAHshpQIDhpCEAAQDPAACEBDQBCAhCABxQB1BnBvAsQCpBEEOAC");
	this.shape.setTransform(-81.925,30.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0066CC").ss(10,1,1).p("AAe1OQCMCyEzBlQEWBbE7AAQCsAACpgkQBLgQDcg/QC/g3CRgYQDWgkD5AAQDUAACnBIQBAAbBOAuQAtAbBbA6QCwBtChAxQDrBIFGAAQCXAAGHhBQGGhBDfAAQD6AABBAoEhNKgc5QDQgDCbhHQBwgzACgBQA/gXBBAAQB+AACnA1QBcAdDZBYQDNBTB0AiQC0A1CTAAQCpAAFhhzQC+g+AqgMQBtgeApAJEhcKghGQBIAwChBCQCcBACkAzQCxA2BsANQB6AQAAgqIAAgBQAAgMgDADQgJAJgMABQAMAAAMgBEhacgOgQBiBOB4CGQCTCkAnAkQBpBlBuAwQCFA7CtAAQBMAACVgyQDKhEBigWQA4gNC6gLQB2gIAoAAQgFACgEAAQCvAABrBfQA9A2BZCbQBWCWBKA6QB2BfDCAAQBSAAAsgKQAcgGAygXQCCg6DmgqQBxgVB9gPQDcgcBwgQEg9igHgQAUAAAAACQAAgOgFAEQgIAGgHACgA4/s8QB8DvDyCgQD/CpENAAQCcAACIgfQBVgTCHgxQCKgyBJgSQCAgfCPAAQDNAACSBAQBsAwB7BwQAjAfBHBEQBDA9A0AqQCVB2CzBJEgpEAMfQBUBUBfB2QBgB7ArAyQBHBTA5AlQBFAtBPAAQCrg8C5g8QFxh4CMAAQASAAB9AZQB+AZAVAAEhPqAVPQBeCMAvBBQBRBvBOBBQDLCpFvAAQBaAABSglQAogTBjhAQBZg5BCgZQBkgmB3AAQDTAACWBHQBOAkCbB2QCOBtB2AuQC2BGEHAAQEmAADZh7QBLgqBZhIQBehOAugjAMWPnQCpCrBgBWQCKB8B6BLQEZCuFdAAQDVAADYhTQCFgyDriEQDwiGB6gwQDShTDJAAQBsAACUBnQA1AmBTBEQAvAnBkBSQC9CaCTBJQDOBnDRAAQBAAACXgnQBEgRDrhFQGuh9CSAA");
	this.shape_1.setTransform(-60,26.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-659.8,-191.8,1194.6999999999998,444.8);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(10,1,1).p("AQGAAQAAGrkuEtQktEumrAAQmqAAkukuQktktAAmrQAAmqEtkuQEuktGqAAQGrAAEtEtQEuEuAAGqg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("ArXLYQkuktAAmrQAAmqEuktQEtkuGqAAQGrAAEtEuQEuEtAAGqQAAGrkuEtQktEumrAAQmqAAktkug");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9900").ss(10,1,1).p("AQGAAQAAGrkuEtQktEumrAAQmqAAkukuQktktAAmrQAAmqEtkuQEuktGqAAQGrAAEtEtQEuEuAAGqg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("ArXLYQkuktAAmrQAAmqEuktQEtkuGqAAQGrAAEtEuQEuEtAAGqQAAGrkuEtQktEumrAAQmqAAktkug");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9900").ss(10,1,1).p("ATPAAQAAH+lpFoQloFpn+AAQn9AAlolpQlploAAn+QAAn9FploQFolpH9AAQH+AAFoFpQFpFoAAH9g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC33").s().p("AtlNlQloloAAn9QAAn9FoloQFoloH9AAQH9AAFoFoQFqFogBH9QABH9lqFoQloFqn9gBQn9ABlolqg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-128,256.1,256.1);


(lib.bird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bird
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(4,1,1).p("AhAipQBABHAbBdQAQA1AWB6");
	this.shape.setTransform(104.5,73);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("A4GhiQAXAMAZALQC3BPDtAAQE3AACgh3QAtgiAfgrQBJhjAAiQQAAk7jIi3Qivigj1AAQg6AAg5AqQhCA5g1AlQg3AVgnATQhpA0hBBAQgvAtggA8QhJCFAADLQAAAyARAsQAAABABABQAkBdBwBAQAIAFAIAEQgCACgDACQgSAPgXAWQgcAbgaAeQgWAagVAeQh3CpAACfQAAFUEOC0QEdC+I6AAQBEAABBgOQAogKAngOQgCAAgCAAIAAAAQgKABgPACQgnAFgOAAQldAAk4kNQh5hphTh4QhNhvgNhLA30qNQA8AAAbABQAuACAbAHAygvrQhGAYg2AWEAhcAD4QhDAOjdAqQkkA4hpAOQgKAKgKAAQAlglBWhGQBlhQAjghQCYiJgVhcQgDAAgEgFQgDgFgPAAQgaAAoQClQoDCiiSA0QmkCWjxBQQgPl2izjGQhDhLhPgmQg8gdgcAFEAhcAD4QACgCADgCIAKAAQgGACgJACgAk7PNQAhgPAjgPQDnhfFbhjQEChIHehxQHqh0CpgvQBOgWBCgVQC8g7BSgzAnaQKQAAhXh2jSQhmi3gygyAnHQbQgBADgLACQABgBAAAAQAFgCAGgCQBIgdBEgxQAfgWAegbQBThJAxhUQAwhVAAhJQAAgmgCglA3qhzQgMAGgQALA6Aq/QgKAIj1C9Qi5CQgkAhQATgFAdgEQAmgHAUAAQBOAAD5BPEghcgFJQgCACgCACIgKAAQAGgCAIgCg");
	this.shape_1.setTransform(260.5,54.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AiKCMQgTAAgmAGQgdAFgTAFQAkgiC5iOID9jGIANAHQhJCGABDKQgBAyASAsQj4hPhPAAg");
	this.shape_2.setTransform(70.85,6.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("A0CMqQh5hphTh4QhNhvgNhLIAKgeQgXh5gQg3QgahchBhIIgSgOQAageAcgbQAWgWATgOIAFgFQAWAMAaALQC3BPDtAAQE3AACfh3QAugiAfgrQgfArguAiQifB3k3AAQjtAAi3hPQgagLgWgMQAPgLANgGQgNAGgPALIgRgJQhvhAglhdIAAgCQgRgsAAgyQAAjLBIiFQAhg8AvgtQBBhABpg0QAngTA3gVQA0glBDg5QA5gqA6AAQD1AACvCgQDIC3AAE7QAACQhJBjIAXARQAcgFA8AdQBPAmBDBLQCyDGAQF2QDxhQGkiWQCSg0IDiiQIPilAbAAQAOAAAEAFQAEAFADAAQAVBciYCJQgkAhhkBQQhWBGglAlQAKAAAKgKQBpgOEkg4IARA2QhBAVhOAWQipAvnqB0QnfBxkBBIQlcBjjmBfIgHgTQBThJAwhUQAxhVAAhJQAAgmgCglQACAlAAAmQAABJgxBVQgwBUhTBJQgeAbgfAWQhEAxhJAdIgMACIgGgTQAAhXh2jSQhmi3gygyQAyAyBmC3QB2DSAABXIhLAeQleAAk3kNgA3lp9QAuACAbAHQgbgHgugCQgbgBg8AAQA8AAAbABgA1kuuQA2gWBGgYQhGAYg2AWg");
	this.shape_3.setTransform(267.7375,53.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AlmFlQkOi0AAlTQAAifB3ipQAVgeAWgaIASAOQBBBIAaBcQAQA3AXB5IgKAeQANBLBNBuQBTB4B5BpQE2ENFeAAIADAPQhBAPhEAAQo5AAkdi+g");
	this.shape_4.setTransform(142.925,109.2875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(4,1,1).p("Agyi4QAuBZAZBUQAkBwgIBU");
	this.shape_5.setTransform(104.0628,73.4625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("A6trTQgIACgHACQivAxiCBDQBXAMBBAoQAhAUBHA+QACACACACQgCABgDABQgFAxAAA2QAAAyARAsQAAABABABQAkBdBwBAQAHAEAHAEQABABABAAQAXAMAZALQC3BPDtAAQE3AACgh3QAtgiAfgrQBJhjAAiQQAAk7jIi3Qivigj1AAQg6AAg5AqQhCA5g1AlQg3AVgnATQhpA0hBBAQgnAmgeAwQgFAJgFAJQg0BggPCEQgBADAAADQjYBXhjAzIgKAAQA1AJB2AlQBZAcAygEA63q/QgBABgDACA3mqjQgBAAgBABQgBgDgCgEQAEAAADgBQAHgBANAAQAEAAAFAAQgHAGgIADQgFABgLgCgA3oqiQgEABgDAAIgKAAQAFgFAJgDQgEgLAAgLIAHgBQAKgDANgGIAcAAIAWAAQgFAFgIAFQAJALAOATIAAAUQgDAAgOAFQgKADgKABQgEAAgHAAQgHABgKAAQgTAAgcgKQgcgKgKAAQARgyAMgHQAFgDApAAQAfAAAJAHQABABACACQADAEAGAGQgMAJgSAIQgDACgDABQgNAGgJACA3FqEQgPgBgNgSQgEgGgDgFA26qEQgEABgEAAQgBAAgCgBA2VqNQgHAGgUADQgEAAgGAAAzXvrQhGAYg2AWEAglAD4QhDAOjdAqQkkA4hpAOQgKAKgKAAQAlglBWhGQBlhQAjghQCYiJgVhcQgDAAgEgFQgDgFgPAAQgaAAoQClQoDCiiSA0QmkCWjxBQQgPl2izjGQhDhLhPgmQg8gdgcAFEAglAD4QACgCADgCIAKAAQgGACgJACgAlyPNQAhgPAjgPQDnhfFbhjQEChIHehxQHqh0CpgvQBOgWBCgVQC8g7BSgzAoRQKQAAhXh2jSQhmi3gygyAn+QbQgBADgLACQABgBAAAAQAFgCAGgCQBIgdBEgxQAfgWAegbQBThJAxhUQAwhVAAhJQAAgmgCglAoKQgQgCAAgCAAIAAAAQgKABgPACQgnAFgOAAQldAAk4kNQh5hphTh4QhNhvgNhLA49hiQgCACgDACQgSAPgXAWQgWAWgWAYQAAAAAAABQgBAAAAAAQgbAfgZAjQh3CpAACfQAAFUEOC0QEdC+I6AAQBEAABAgOQABAAAAAAQAogKAngOA7/kTQAEABADABQALAEALADA4hhzQgMAGgQAL");
	this.shape_6.setTransform(266,54.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AlmFrQkOi0AAlTQAAigB3ipQAZgjAbgfIAAgBIATAQQAtBYAbBVQAjBxgHBTIAKALQANBLBNBtQBTB4B5BpQE2EOFeAAIADAPIgBAAQhAAPhEAAQo5AAkdi+g");
	this.shape_7.setTransform(142.925,108.7375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663333").s().p("A0CMqQh5hphTh4QhNhvgNhLIgKgKQAHhUgjhxQgbhUgthZIgTgPIABgBQAVgXAXgWQAWgWATgOIAFgFQAWAMAaALQC3BPDtAAQE3AACfh3QAugiAfgrQgfArguAiQifB3k3AAQjtAAi3hPQgagLgWgMQAPgLANgGQgNAGgPALIgCgBIgPgIQhvhAglhdIAAgCQgRgsAAgyQAAg2AFgxIAFgCIgFgEQAPiEA1hgIAKgSQAdgwAogmQBBhABpg0QAngTA3gVQA0glBDg5QA5gqA6AAQD1AACvCgQDIC3AAE7QAACQhJBjIAXARQAcgFA8AdQBPAmBDBLQCyDGAQF2QDxhQGkiWQCSg0IDiiQIPilAbAAQAOAAAEAFQAEAFADAAQAVBciYCJQgkAhhkBQQhWBGglAlQAKAAAKgKQBpgOEkg4IARA2QhBAVhOAWQipAvnqB0QnfBxkBBIQlcBjjmBfIgHgTQBThJAwhUQAxhVAAhJQAAgmgCglQACAlAAAmQAABJgxBVQgwBUhTBJQgeAbgfAWQhEAxhJAdIgKAEIgIgVIACAWIgYADQgnAFgOAAQleAAk3kNgAqYLwQB2DSAABXQAAhXh2jSQhmi3gygyQAyAyBmC3gA3Tp0IAIgBIAKAAQAUgDAHgGIAAgUIgXgeIANgKIgWAAIgDgDQgJgHgfAAQgpAAgFADQgMAHgRAyQAKAAAcAKQAcAKATAAIARAAIADAAgA1kuuQA2gWBGgYQhGAYg2AWg");
	this.shape_8.setTransform(267.7375,53.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9966").s().p("AgYDQQh3glg1gJIAKAAQBjgzDYhXQgGAxABA2QgBAyASAsIgWgHIgHgCIAHACIgFASIgMAAQgwAAhOgYgAAag/QhBgohXgMQCBhECwgwIAEAQIAOAGQg1BggPCDQhGg9ghgUgACzjUIAEgDIgEADg");
	this.shape_9.setTransform(75.65,5.7944);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},9).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43,-56.8,435,222.8);


// stage content:
(lib.gray_newHaiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {haiku:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndStop("artwork");
		}
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1")
			root.line01_txt.text = line01;
		}
		
		var line01 = "The water flows by";
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2")
			root.line02_txt.text = line02;
		}
		
		var line02 = "On down the river it goes";
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3")
			root.line03_txt.text = line03;
		}
		
		var line03 = "Untouched by many";
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame01_btn.addEventListener("click",toFrame01);
		
		function toFrame01(){
			console.log("will go to frame 1");
			root.gotoAndStop("haiku");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// button
	this.toFrame02_btn = new lib.button();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(480,502.9,0.5242,0.5242);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.button(), 3);

	this.toFrame01_btn = new lib.button();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(887.25,75.35,0.5126,0.5126);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line Three", "35px 'Franklin Gothic Heavy'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 42;
	this.line03_txt.lineWidth = 595;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(480,166.4);

	this.line02_txt = new cjs.Text("Line Two", "35px 'Franklin Gothic Heavy'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 42;
	this.line02_txt.lineWidth = 779;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(480,118.8);

	this.line01_txt = new cjs.Text("Line One", "35px 'Franklin Gothic Heavy'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 42;
	this.line01_txt.lineWidth = 351;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(480,71.2);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(339.55,21.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// bird
	this.instance_1 = new lib.bird();
	this.instance_1.setTransform(792.05,463.55,0.2253,0.2253,0,0,0,260.5,54.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// ripples
	this.instance_2 = new lib.ripples();
	this.instance_2.setTransform(882.95,640.4,0.437,0.437,0,0,0,-82,30.6);

	this.instance_3 = new lib.ripples();
	this.instance_3.setTransform(490.65,530.45,0.2735,0.2735,0,0,0,-81.9,30.6);

	this.instance_4 = new lib.ripples();
	this.instance_4.setTransform(128.3,482.45,0.307,0.307,11.9605,0,0,-81.7,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// river
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066CC").ss(10,1,1).p("EheygeEICIAAQLaBII9EIQDGBbEVChQGSDoBEAlQCRBPIsAfQCsAKKtARQGKAJGSAeQInAqHPBMQI1BeHLC2QEOBrGmDmQGNDYDlBUQF1CIHHAcQCMAIE5AJQIpAPAQABQLXAXDjAwQDcAtFsB3QFBBqBaAtEhfcgeOQhoEHhQDlQiiHKAAB/QAABLBJE6QAmCiAvDAQAgCTBaBYQAcAbAvAhQAxAkAPANQAgAdEvBcQGbB8AwARQEIBcDPB0QByBACpBpQCQBRCfAiQDFAqFLAAQAJAAHhglQIXglEVAAQMsAAH9BmQG3BYE3C7QCPBWFYBZQIaCKLmArQFuAVIMAuQEvAaJgA5QRdBkJMAAQPJAAFUmNQBuiCAhiiQANg+AAhrQAAhth/hGQg7ggi/g7QgOgFiHgeQhBgOgsgOQghgKgXgL");
	this.shape.setTransform(546.125,516.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("EAzVAcrQpgg5kvgaQoMgulugVQrmgroaiKQlYhZiPhWQk3i7m3hYQn9hmssAAQkVAAoXAlInqAlQlLAAjFgqQifgiiQhRQiphphyhAQjPh0kIhcQgwgRmbh8QkvhcgggdQgPgNgxgkQgvghgcgbQhahYggiTQgvjAgmiiQhJk6AAhLQAAh/CinKQBQjlBokHIAqAKICIAAQLaBII9EIQDGBbEVChQGSDoBEAlQCRBPIsAfQCsAKKtARQGKAJGSAeQInAqHPBMQI1BeHLC2QEOBrGmDmQGNDYDlBUQF1CIHHAcQCMAIE5AJII5AQQLXAXDjAwQDcAtFsB3QFBBqBaAtIgHAVQAsAOBBAOQCHAeAOAFQC/A7A7AgQB/BGAABtQAABrgNA+QghCihuCCQlUGNvJAAQpMAAxdhkgEBa8ALoQghgKgXgLQAXALAhAKg");
	this.shape_1.setTransform(546.125,516.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// ground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006600").ss(4,1,1).p("AeFpaQA4gfAwggQBCgrAHgSIALAAQgFARgNA7QgMA2gCAFIAABeIA/AAQAdAABmgvQBmgvASAAQgLAagqA7QgnBEgMBjIAJAJQADABASAAQAJAABIgpQBng0CYgrEBBPgBEQAHgNAohCQAdgxAIgTEA+xABEQAAgjAwhvQAvhvAAgPIAKAAEA2GAJOQAXgHBLhFQAagaA/g/QgGAHgBAIQgCAFAAAKQA7ABAXAWQAUAUADAzIAFABQAFADAAAGQAygUA9gnQAqgbAugHAMbrBQAUAABRgrQBKgoANgMEg45gUXQAVgGDWhMQDahOASgGEg7LgUhQAUgVBAgsQA8gpACACA+FsqQBCgkAHgGEghBgMLQBSgtAngiQAcgdAHgHEg/xAW+QAXgGA+g6QA7g6ADgEEhCiAW+QANgMAeg2QAdg0AAgIAPXqCIAAATQBDAABihDQAwghAngjAmDp5QAOgLA/giQBLgoAQACIAACSQAGAFABAEQACABARAAQAPAABhgsQBzg1Axgw");
	this.shape_2.setTransform(458.25,467.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006600").ss(10,1,1).p("EhHqgmkIG/AAQD0AZG0AIQLgAOAPAAQGvAOEcAqQFnA0DYBqQBTApBmAGQA1ADBBABQAbAHCBAmQBpAgB+AcQB4AcCiArQCRAnBCAOQDSAsFrAAQJ5gVAaAAQBrAAF0AsQGLAuCNAFQCEAFE6AfQF6AmBMAeQJ0DtEyA+QA/ANDaAiQDFAfC+ApQClAkEtA8QDtAvBhAYQCOAkBIAmQBOArAaA9QAHARBNBhQBmB/A6BSQDkE/AUDZQAFA5AgDrQAYCrACBvQABBqgBCcQAAA5ABB4QgCBrgXBZQg9Dxj6D+QnxH462DIUgTTACQghJAAAQpJAAzvgvQ0AgwguAAQu4gEkxgDQp/gHmVgRQm7gUiTgiQhbgVgugjQgtgigMg3Qg6jLgzjMQhkmTAAijQAAiHBejsQBKi4CXkhQC1lQBWihQCYkeBEihQA3iDAtioQAWhOAyjZQAqi3AghoQAviZA+h0QCfkqB6ivQAxhGAKgRQAWglAPg1");
	this.shape_3.setTransform(427.475,550.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("EgYfAl2Q0AgwguAAQu4gEkxgDQp/gHmVgRQm7gUiTgiQhbgVgugjQgtgigMg3Qg6jLgzjMQhkmTAAijQAAiHBejsQBKi4CXkhIELnxQCYkeBEihQA3iDAtioQAWhOAyjZQAqi3AghoQAviZA+h0QCfkqB6ivQAxhGAKgRQAWglAPg1IA/gzIG/AAQD0AZG0AIILvAOQGvAOEcAqQFnA0DYBqQBTApBmAGQA1ADBBABICcAtQBpAgB+AcQB4AcCiArQCRAnBCAOQDSAsFrAAQJ5gVAaAAQBrAAF0AsQGLAuCNAFQCEAFE6AfQF6AmBMAeQJ0DtEyA+QA/ANDaAiQDFAfC+ApQClAkEtA8QDtAvBhAYQCOAkBIAmQBOArAaA9QAHARBNBhQBmB/A6BSQDkE/AUDZQAFA5AgDrQAYCrACBvQABBqgBCcIABCxQgCBrgXBZQg9Dxj6D+QnxH462DIUgTTACQghJAAAQpJAAzvgvgEg5oAI+Qg+A6gXAGQAXgGA+g6IA+g+Ig+A+gEg9DAI8QgeA1gNANQANgNAeg1QAdg0AAgIQAAAIgdA0gEA8bgE+QhKBGgYAHQAYgHBKhGIBahYQgGAHgCAIQgBAFAAAKQA7ABAWAWQAVATADAzIAFACQAFACAAAHQAxgUA+gnQAqgbAugHQguAHgqAbQg+AngxAUQAAgHgFgCIgFgCQgDgzgVgTQgWgWg7gBQAAgKABgFQACgIAGgHIhaBYgEBEUgOOQgvBvAAAkQAAgkAvhvQAvhvAAgPIALAAIgLAAQAAAPgvBvgEBGygPTIgwBPIAwhPQAcgxAIgTQgIATgcAxgEAongSTIAJAJQADABASAAQAJAABHgpQBog0CYgrQiYArhoA0QhHApgJAAQgSAAgDgBIgJgJQAMhjAnhEQAqg7AKgaQgSAAhmAvQhmAvgcAAIg/AAIAAheQACgFALg2QANg7AFgRIgKAAQgHAShCArQgwAgg5AfQA5gfAwggQBCgrAHgSIAKAAQgFARgNA7QgLA2gCAFIAABeIA/AAQAcAABmgvQBmgvASAAQgKAagqA7QgnBEgMBjIAAAAgABY16IAHAJQACABARAAQAPAABhgsQB0g1AxgwQgxAwh0A1QhhAsgPAAQgRAAgCgBIgHgJIAAiSIgCAAIAAAAIgEAAIAAAAQgRADguAYIgEACIgDABIgCABIgGADIgBABIgCABIgBABIgCABQhAAigNALQANgLBAgiIACgBIABgBIACgBIABgBIAGgDIACgBIADgBIAEgCQAugYARgDIAAAAIAEAAIAAAAIACAAIAACSgAUK2vQBDAABihDQAxghAmgjQgmAjgxAhQhiBDhDAAIAAgTgAS04sQhRArgVAAQAVAABRgrQBKgoAMgMQgMAMhKAogA6U6aQgnAihSAtQBSgtAngiIAjgkIgjAkgA5R5qQBCgkAHgGQgHAGhCAkgEgwagipQjWBMgVAGQAVgGDWhMIDshUIjsBUgEg1DgiiQhAAsgUAVQAUgVBAgsIABgBIAFgDIACgBIAAAAIAEgDIAAAAQAugfAEAAIAAAAIAAAAIAAAAIAAAAQgEAAguAfIAAAAIgEADIAAAAIgCABIgFADIgBABg");
	this.shape_4.setTransform(427.475,550.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// trees
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#003333").ss(5,1,1).p("A1669QABGtAIByQBiAAB/AQQB+AQB5AAQAAA+AvBlQAYAzAXAwQBHg0BFhbQAzhDAXAAQAcAAA+AsQBBAtASAlQECkIBKhZQAwg5CPiwQAAAggWCrQgLCmA2AxQAJAJBkAmQBkAmAVAUQAwgYA+gsQA4goArgnQAAgmgbgXQgagWAAgGQAAgmAwgYQAUgKBvglQAAgQgHgsQgHgugHgeIAAhzQBNAxA1BMQAdAqAxBMQAwA6BQAYQBjAdC1gKQgTA8gvAlQAAAAgoAcQgYARgPAQQBpAlBXBNQAuApAHAFQAZATAWAAQAeAAA+gwQBMg7A+hdQBuDeBiBxQAKANBVBcQBDBIA7BLQATgTBChsQA2haAxgZIAVAAQAPA7AVAuQAdA/AZAAQCpgfAEAAQATAAAlAQQAkAPAVAAQgGjEAIheQAJhoAig+QAeg3BIg9QAugmCFhlQgWCmAmCUQAiCEArAEQBWAHAmASQAnAUAPArQALAjADBVQAIDCAAAGIAAAGQAFAFAQAAQCTAABNhHQA7g1BIigQBOBEBkBkQByjjAmhOQBAh/AZg9QAehKALhCQALg9ABhlIAAgLQAQBeCVD9QBMCBBRCDQAVAAAngaQAUgNAPgOQBFAiBZEEIAAALQATgjBVgqQAqgVApgSQDzFhCiEgQDrGhAACqQAAF7i8DsQi6DqmRCCQl8B7qEA0Qo0AsumAAQsAAAqMgxQqXgyqchvQqHhrsMi4Qq7imvpkSQsyjgnHkDQpXlVAAmaQAAkZBGhWQAggnA2gNQAmgJBOgBQAAAPgGAWQgGATgJARQB3g7DTjtQDRjpAkhtQAAAxAlBuQAfBbAaA1QATAAAqgXQA1geAggpQADA+AmAyQAiAtAeAAQAzAABGhFQAjgnARgRQAdgfARgMQA9gpA+jXQA3jDAAhxIALAAQAABOBWDXQBbDlBKBKQAOgGA2gZQAygWAMAAQADAAAmAcQApAdARARQAFgEBUhNQBIhEAcgHQBaCNAjArQBGBXA4AAQAhAAAWgVQATgSATgrQAviEAxhjQDNErBRBTQBhBiBsAAQBBAAANgKQAFgFACgJQADgNAEgFQAgg8Eng2QgDAbAQBIQASBMAAAYIABAFQAEAFAQAAQA3AABchaQBThQAAgNQAAgGg+htQg+hugLgLQAugwA8g1QA6gyAXgYQBQhWBtjmIAAgL");
	this.shape_5.setTransform(470.85,352.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#05463F").s().p("AMna2QqWgyqdhuQqHhrsMi4Qq7imvpkSQsyjgnHkEQpXlUAAmaQAAkaBGhVQAggmA2gOQAmgJBPgBQAAAPgHAWQgGATgJARQB3g6DTjuQDRjpAkhtQAAAyAlBtQAfBbAbA1QASABAqgYQA1gdAggqQADA+AmAyQAjAtAdAAQA0AABFhFIA0g4QAdgfARgMQA9gpA+jWQA4jEAAhxIAKAAQAABOBWDXQBcDlBJBKQAOgGA2gYQAygXAMAAQADABAnAbQAoAdARARQAFgDBUhOQBIhDAcgIQBaCNAjArQBGBYA4gBQAiAAAVgUQAUgTASgrQAviEAxhjQDNErBSBTQBgBjBsAAQBBAAANgMQAFgDACgKQADgMAEgGQAhg8Emg2QgDAbARBHQASBNAAAXIAAAGQAEAFAQAAQA3AABchZQBThQAAgOQAAgGg9htQg/hugLgLQAugwA8g0QA7gzAWgYQBRhWBsjmQABGtAIBzQBjgBB+ARQB+APB5AAQAAA+AvBlIAvBjQBHg0BFhaQAzhDAXgBQAcAAA+AsQBBAtASAlQECkIBKhYQAwg6CPiwQAAAggWCsQgKClA1AxQAJAJBlAmQBjAmAVAUQAwgYA9grQA5gpAqgmQAAgmgZgYQgbgWAAgFQAAgnAwgYQATgKBvgkQABgRgHgsQgHgugIgeIAAhyQBOAwA1BNQAdAqAxBLQAwA7BQAXQBjAeC2gLQgUA9gvAkIgoAcQgZARgOAQQBpAlBYBNQAtApAIAFQAYASAWAAQAeAAA9gvQBNg7A+hdQBuDeBiBxIBfBoQBDBJA7BLQATgTBDhtQA2haAwgXIAVAAQAQA6AUAuQAdA/AYAAICugfQATAAAlAQQAkAPAVAAQgGjDAIhfQAJhoAig+QAeg3BIg8QAugnCFhlQgXCmAnCUQAiCEAsAEQBVAHAmASQAnATAOAsQAMAjADBVIAIDJIAAAFQAFAFAQAAQCTAABNhHQA7g1BJigQBMBEBlBkICYkxQBAh+AZg+QAehJALhCQALg9ABhmIAAgLQAQBeCVD+QBMCABRCDQAVAAAngaQAUgOAPgNQBEAiBaEFIAAAKQASgiBWgrQAqgWAqgRQDyFiCiEfQDqGhABCqQgBF7i7DsQi6DqmRCCQl8B7qEA0Qo0AsumAAQsAAAqMgyg");
	this.shape_6.setTransform(470.85,352.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A8CDE9").s().p("EhMUA1wMAAAhrfMCYpAAAMAAABrfg");
	this.shape_7.setTransform(478.5,316.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#9BADFF","#A2D0FF"],[0,1],-0.1,-357.5,0.2,357.5).s().p("EhNjA3FMAAAhuJMCbIAAAMAAABuJg");
	this.shape_8.setTransform(478.5,337.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(283.7,292.1,912.8999999999999,510.1);
// library properties:
lib.properties = {
	id: '496AB0421D0DFE49A3E07638FC150D67',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/gray_newHaiku_atlas_1.png", id:"gray_newHaiku_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['496AB0421D0DFE49A3E07638FC150D67'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;