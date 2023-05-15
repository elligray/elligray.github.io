(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.trunkOutside = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A2109").ss(10,1,1).p("EgZjhflQEyAALWAZQQaAkI0AhQNqAzBGAEQILAlGDA6QOHCFU7B5QR4BoEdACQGYACC0D6QCbDVA2IBQA2H9B5HOQAWBXBLEHEB24gxAIAOAAQA2EaBiHdQA1EJAOBrQAPB7ACDDQAACHgDHRQAAFhgaEqQgQC/g2HnQgPCggMBLQgUCPgjBmQglBqhZBTQhkBShEBCQAMhQAHgbEBQ3Be/QKQkjHFp2QGLonEbttQBmlyBIonQBRphAiiUQAUhnA6ncQAikYAUiGQgLAMgLALEBEMhBjIAbAAIAADwQiuP/heaKQg+RJAAILEACfhG3IAbAAQgVBDCREqQBjDIFiLAQC7F/HZOpQDOGZEvLlQGiP3DJL4QBDD7ApDcQAWB1ATB9EgYVhHpQgJBEAQBGQARBDA3B7QBICiFIKyQCLExErKkQFJLoBjD0QDvJFCsLDQCYJrAAEAQAABlgEAPQgMAohCA7IgOAAQAAhXhcjSQhwjzgshkQhKiwhejuQhjj/gwh4Qi8nWg7jmQg6jfADjsEg9fhTzQBDgqAjhmQAUg7AhiIQAmh6BChIQBYhfCigqQChgqBrgPQBygQCmgDQDJgDMzAHQgBABAAABQAAAPBjgGQA0gDBKgGEg82hStQBEEnCHLTQCGLPBZGGQCSKDATGhQASF8gELaQAAElgIBmQgJBogeBRQgVA2hHCnQhNDKhWExQgvCkhkCzQhICih1CwQAAABgBABQibDnjpEAQgJAJgJAJQn6Ilq/H1QhOA4ihBpQjSCJg/ArQlPDih0CFQjRD0haCHQhsChgfCMEhZoBTHQBVAECJhnQBwhUCyi1QANgNFHlWQDcjmCYiNQRVwOFcmRQJJqjHOraQFDoAC3mRQHtGIAAJFQAAFXpWMqQiNC+lrHOQkvGDh3CtEhExAWMQgKAHgKAGQhqBIhtAvEhI4AYaQiBA3m9DFQmNCwjFBSQhBAbhmAZQh0Acg3AOQjIAzhDBJQgGAHi4C6QiICKhWBtQgwA+h5CjQhhCCg/BLQhwBxg8BGQhsB/gJBuQgEBKADC0QgICehJBEQhZBUhMB3QhmCggWAbEh51BF2IgpAAQgOB4AAErQAAAFgEC8QgCBjAJA2QAWCOCMBJQCdBRGVA6QFxA0M8BEUAOHABLAjFABfQSsAyb4BGUAjQABlAPGAAOQGCAGG+gDQEIgCJ1gGEAa+AjKQAuDNjyIJQhbDFi1FcQhoDJjvHJQjcGrlWH6QhFBmiaDeQhmCSgVAl");
	this.shape.setTransform(108.0854,-0.0105);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A3119").s().p("EA1eBfiUgPGgAOgjQgBlQ74hGysgyUgjFgBfgOHgBLQs8hElxg0QmVg6idhRQiMhJgWiOQgJg2AChjIAEjBQAAkrAOh4IApAAIgpAAIAAgUQAWgbBmigQBMh3BZhUQBJhEAIieQgDi0AEhKQAJhuBsh/QA8hGBwhxQA/hLBhiCQB5ijAwg+QBWhtCIiKIC+jBQBDhJDIgzQA3gOB0gcQBmgZBBgbQDFhSGNiwQG9jFCBg3IAcgKQBtgvBqhIIAUgNIBVA+IgSASQn6Ilq/H1QhOA4ihBpQjSCJg/ArQlPDih0CFQjRD0haCHQhsChgfCMQAfiMBsihQBaiHDRj0QB0iFFPjiQA/grDSiJQChhpBOg4QK/n1H6olIASgSQDpkACbjnIABgCQB1iwBIiiQBkizAvikQBWkxBNjKQBHinAVg2QAehRAJhoQAIhmAAklQAEragSl8QgTmhiSqDQhZmGiGrPQiHrThEknIgphGQBDgqAjhmQAUg7AhiIQAmh6BChIQBYhfCigqQChgqBrgPQBygQCmgDQDJgDMzAHIgBACQAAAPBjgGQA0gDBKgGIgBgOQEyAALWAZQQaAkI0AhIOwA3QILAlGDA6QOHCFU7B5QR4BoEdACQGYACC0D6QCbDVA2IBQA2H9B5HOQAWBXBLEHIARBOIgOAAIAOAAQA2EaBiHdQA1EJAOBrQAPB7ACDDQAACHgDHRQAAFhgaEqQgQC/g2HnQgPCggMBLQgUCPgjBmQglBqhZBTQhkBShEBCQAMhQAHgbQgHAbgMBQIgWAXIAWgXQgUCGgiEYQg6HcgUBnQgiCUhRJhQhIInhmFyQkbNtmLInQnFJ2qQEjIgcAeIt9AIIlAABQkMAAj0gEgEAX6AugQhbDFi1FcIlXKSQjcGrlWH6QhFBmiaDeQhmCSgVAlQAVglBmiSQCajeBFhmQFWn6DcmrIFXqSQC1lcBbjFQDLm2AAjWQAAgpgHghQAHAhAAApQAADWjLG2gEhZfBTHQBQgBB+hdIAAAAIADgCIACgCIAAAAIACgBQBwhUCyi1IFUljQDcjmCYiNQRVwOFcmRQJJqjHOraQFDoAC3mRQHtGIAAJFQAAFXpWMqQiNC+lrHOQkvGDh3CtQB3itEvmDQFrnOCNi+QJWsqAAlXQAApFntmIQi3GRlDIAQnOLapJKjQlcGRxVQOQiYCNjcDmIlUFjQiyC1hwBUIgCABIAAAAIgCACIgDACIAAAAQh+BdhQABIgCAAIAAAAIgFAAIgCAAIACAAIAFAAIAAAAIACAAgEAE2hBKQBjDIFiLAQC7F/HZOpQDOGZEvLlQGiP3DJL4QBDD7ApDcQAWB1ATB9QgTh9gWh1QgpjchDj7QjJr4miv3QkvrljOmZQnZupi7l/QlirAhjjIQh/kEAAhUQAAgMADgJIgbAAIAbAAQgDAJAAAMQAABUB/EEgAoryjQA7DmC8HWQAwB4BjD/QBeDuBKCwQAsBkBwDzQBcDSAABXIAOAAQBCg7AMgoQAEgPAAhlQAAkAiYprQisrDjvpFQhjj0lJroQkrqkiLkxQlIqyhIiiQg3h7gRhDQgKgsAAgsQAAgZADgZQgDAZAAAZQAAAsAKAsQARBDA3B7QBICiFIKyQCLExErKkQFJLoBjD0QDvJFCsLDQCYJrAAEAQAABlgEAPQgMAohCA7IgOAAQAAhXhcjSQhwjzgshkQhKiwhejuQhjj/gwh4Qi8nWg7jmQg4jVABjgIAAgWIAAAWQgBDgA4DVgEBEng9zQiuP/heaKQg+RJAAILQAAoLA+xJQBe6KCuv/IAAjwIgbAAIAbAAg");
	this.shape_1.setTransform(108.0854,-0.0105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trunkOutside, new cjs.Rectangle(-682.7,-616.8,1581.6,1233.6), null);


(lib.trunkInside = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A2109").ss(10,1,1).p("EgaohBSQhiKjiaMiQhEFjiOK8QiPLChDFbQjsTOhoOYQiGStAfRSIINAAQFrDYEIBuQD9BqDwAoQDIAiElACQCzACHAgFQKLAAIIjTQIXjXF3mvQMeuWAA74QAAr1l62yQiNoiiangQiMm3hDiDQhxjeiaiVQiAh6ivhaQhegwjfhXQjMhPhtg9QimhcoPjDQpJjZihAAQkUAAiuB1Qi2B7hYEIIjIAAQAAgMgUhlQgUhlAAhZ");
	this.shape.setTransform(0.0088,-0.0077);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A2109").s().p("EgKpBEQQklgCjIgiQjwgoj9hqQkIhulrjYIoNAAQgfxSCGytQBouYDszOQBDlbCPrCQCOq8BEljQCasiBiqjIAyAMQAABZAUBlQAUBlAAAMIDIAAQBYkIC2h7QCuh1EUAAQChAAJJDZQIPDDCmBcQBtA9DMBPQDfBXBeAwQCvBaCAB6QCaCVBxDeQBDCDCMG3QCaHgCNIiQF6WyAAL1QAAb4seOWQl3GvoXDXQoIDTqLAAQlYADi6AAIhhAAg");
	this.shape_1.setTransform(0.0088,-0.0077);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trunkInside, new cjs.Rectangle(-287.5,-441.8,575.1,883.7), null);


(lib.trees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(10,1,1).p("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");
	this.shape.setTransform(0,-0.0114);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#786544").s().p("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");
	this.shape_1.setTransform(-3.3,-0.0114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trees, new cjs.Rectangle(-2955.3,-517.8,5910.6,1035.6), null);


(lib.titletext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// walk
	this.text = new cjs.Text("walk", "96px 'Gogono Cocoa Mochi'", "#408BF2");
	this.text.textAlign = "center";
	this.text.lineHeight = 98;
	this.text.lineWidth = 422;
	this.text.parent = this;
	this.text.setTransform(0,64.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(7).to({skewX:4.0004,x:13.45,y:64.9},0).wait(9));

	// wooper
	this.text_1 = new cjs.Text("wooper", "96px 'Hugmate'", "#408BF2");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 129;
	this.text_1.lineWidth = 578;
	this.text_1.parent = this;
	this.text_1.setTransform(-4.45,-43.3,1,1,0,-3.9995,0);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(3).to({skewX:0,x:0,y:-43.5},0).wait(4).to({skewX:-3.9995,x:-4.45,y:-43.3},0).wait(4).to({skewX:0,x:0,y:-43.5},0).wait(4).to({skewX:-3.9995,x:-4.45,y:-43.3},0).wait(1));

	// very
	this.text_2 = new cjs.Text("very", "96px 'Gogono Cocoa Mochi'", "#408BF2");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 98;
	this.text_2.lineWidth = 494;
	this.text_2.parent = this;
	this.text_2.setTransform(-4.45,-149.2,1,1,0,-4.9984,0);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(6).to({skewX:0,x:0,y:-149.45},0).wait(5).to({skewX:-4.9984,x:-4.45,y:-149.2},0).wait(3).to({skewX:0,x:0,y:-149.45},0).wait(2));

	// a
	this.text_3 = new cjs.Text("a", "96px 'Gogono Cocoa Mochi'", "#408BF2");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 98;
	this.text_3.lineWidth = 100;
	this.text_3.parent = this;
	this.text_3.setTransform(0,-260.85);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(4).to({skewX:-4.0004,x:-3.7,y:-260.7},0).wait(4).to({skewX:0,x:0,y:-260.85},0).wait(4).to({skewX:-4.0004,x:-3.7,y:-260.7},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.6,-262.8,591.2,715.2);


(lib.stunfiskBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn
	this.text = new cjs.Text("stunfisk", "96px 'Gogono Cocoa Mochi'", "#B0C67F");
	this.text.textAlign = "center";
	this.text.lineHeight = 98;
	this.text.lineWidth = 462;
	this.text.parent = this;
	this.text.setTransform(0,-48);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#8CA358"},0).wait(1).to({color:"#5F7334"},0).wait(1).to({color:"#B0C67F"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-50,466,198);


(lib.stunfiskBody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(10,1,1).p("EAAigpYQDqCiCVDyQB5DGBbEsQAWBKB9HqQBdFrBfDxQDBHlFQJWQBVCWCMDzQBpC5AfBMIAAAoIAAAKQgSg3g0hBEBFcgG2QgRAIh4AhQAAABgBAAQgwANhBASQk1BUizA1QrPDWjeCjQjGCTjrChQhhBChkBgIAAAKQC2AZC+A3QB+AkBwAsQlyDWiiBRQj2B8hSgJIAAgKEgddAh5QAIAkAhAlQA3A9B/BDQAAAAABAAQA0AcB5A4QBtAyAsAZQBhA3GHAkQE3AdDiAAQBvAACOgPQDEgVETgOQAegBB5gzQCFg4AGgCQCcgtBqg0QBngyB0gfEhFbgHKQB6AeBKAXQBdAcChA5QAJAEDwBxQDqBuBLAXQDAA7C2CMQArAiBdBPQBOBEAqAdQgKAFkICaQkBCVgdAMQHjDJAtASQDjBdBSAbQACABABAAEgKFgoSQh3CAhoDcQhKCbhcEKQh7FcgYA/QhTDUhRBsQjqE5kdFPQkuFkg0BEQiQC8g6CeQhBCwAADzQAAAVADAUQACAUAFASQAKAmAAAh");
	this.shape.setTransform(42.575,35.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(10,1,1).p("AhFnaQhxAAhmhuQgogsgagxQgYguAAgfQAAgwASgpQAnhaB7g9QCOhGCYAAQBuAAAtBtQAFAMAEAMQAVBAAABYQAACzhQBBQhKA9jIAAgAlYLGQAADbCWBWQBYAyB+AAQDRAABXi/QA7iCAAjbQAAk3ibjxQg+hkhLg+QhGg6g5gHQgHAKhgB/QhCBYg9ByQgTBNgUCVQgfDeAACxg");
	this.shape_1.setTransform(18.5,-136.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(10,1,1).p("ANW3NQHgiFEjmKQB6imBCi5QA9iuAAiZQAAiFhFiTQAAAAAAAAQgVgrgagtQiEjgj8jBQiziKjugqQipgel7AAQlEAAkFAMQgBAAAAAAQl8ASj5AsQnNBRmsDrQgCABgCABQjWB1hcA+QhtBKgsBBQgqA+gKBfQgFAwAAC5QAAF2E1FMQB+CICjBuQCSBjCSA7EgCvg49QgOFHgoFQQgsE+gMBjEgFWA5mQgHgBgIAAQAAAAAAAAQgxgFhJgLQl5g/kOgkQhlgNjNiLQizh6hShYQgKgLgKgKQhJhShEhUIAAAAQj+k7iklcQg+iDguiCQAAAAAAAAQg9itgjipQgHgmgHgmQgEgYgDgYQg+msBLlBQAeh+A5h/QA8iGBbiHQA9hcBriKQCjjSAVgdQDmk0CEkfQB2j+Bel/QAMgzAShLIAAAAQARhHAWhcQAnifAlhoQAjhjAuhSIAAgBQBOiOBrhbQDMitFwg1QAZgDAbgBQBNAABkAYQCBAfCIBCQCMBDBrBWQBVBEAzBEQAAABABAAQARAYAOAXQC1FEBBD7QADANAEANQAAAAAAAAQAXBiAXCNQAfDMAVCAQA1FECVF7QBnEDDEGKQCiFFBLCcQAhBFAQAkQCGEvAdDFQAfDXgXDKQgBAGgBAGQAAAFgBAGQgVCeg2CVQgbBIgjBIQiqFfllEbQgJAHgKAIQkgDil0CaQlBCGkJAmQgCABgBAAEAb+guUQqcDfkZDtQhmBWhFBmQhBBwgfAxAaKObQAFgPBDg6QBLhBBihEQESi+DnhAQA6gQDCg4QDCgxCagIQCtgID6gXQDPgTBGAAQEZAAEmAUQBRAFBLAGQAUABAUACQApADAmADQgpAbgrAcQAAAAAAAAQltDrnPEQQnhEbjjByIAAAUQIdBBAaAFQBYAOAlASQAmATAAAdQAABSoXDdQkxB9leB6QlhB6hwAyQhfAxiDA5QgOAFgPAHEgFjA5MIAygHQBmgBBMgHQAdgDAtgFIAAAAQAagEAegEEgmDAJlQhChbppiQQjwg4jfgnQjbgnhJAAQiWAAmcAeQhCAFhIAFQAlAkAuArQDFC4FqEzQGZFVAHAIQgdAUneCeQjwBPj7BTQHiCWM8DSQGlBrGDBdEgafgzVQDHCNB7D5QBHCQBDD2QAMAoA3C0QAnB/AOBJ");
	this.shape_2.setTransform(41.575,-41.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Aj+c6QiWhXAAjaQAAixAfjeQAViVAShNQA9hzBDhYIBmiJQA6AHBFA6QBKA/BABiQCaDzAAE3QAADcg8CCQhWC+jQAAQh/AAhYgygAlYD6QgogsgagxQgYguAAgfQAAgwASgoQAnhaB7g9QCOhGCYAAQBuAAAtBtIAJAYQAVBAAABXQAAC0hPBAQhLA9jIAAQhxAAhmhugAyCE2QiSg7iShjQijhuh+iHQk1lLAAl3QAAi5AFgwQAJhfArg9QAshCBthKQBcg+DWh1IAEgCQGsjqHMhRQD6gtF8gSIABAAQEFgMFEAAQF7AACpAeQDuArCzCJQD8DCCEDfIAgBeIAPgGQBFCTAACFQAACZg+CuQhCC6h6ClQkiGJngCFIgeAHIAAgBIgGgaQhBj7i2lDIADhLIgiAbQgzhEhVhEQhrhViMhDQiIhCiCggQhjgYhNAAIAAgbIg0AgQlxA1jLCtQhsBahOCPIAAAAQgtBSgjBkQglBngnCeIgoCjgAyyxVQBHCQBDD2IBDDcQAnCAAOBIQgOhIgniAIhDjcQhDj2hHiQQh7j5jHiNQDHCNB7D5gAPzrNQhlBVhFBnQhCBwgeAwQAegwBChwQBFhnBlhVQEajuKcjfQqcDfkaDugAg7ysQgrE+gMBjQAMhjArk+QAplQAOlHQgOFHgpFQg");
	this.shape_3.setTransform(24.5,-219.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AB622D").s().p("EgM5Ao8QmGgkhhg3QgtgZhsgyQh5g4g1gcIgBAAQh+hDg4g9QghglgHgkQAHAkAhAlIgUAQQj+k7iklcQg9iEgviBIAAgBIAAAAQg9isgiipQAiCpA9CsIAAAAIAAABIgOAFQmDhcmlhrQs9jSniiXIHsihQHdieAegVQgIgImYlUQlrkyjFi4IA5g7QB6AeBKAXQBdAcChA5QAKAEDvBxQDqBuBMAXQDAA7C1CMQAsAiBcBPQBPBEAqAdIkTCfQkACVgdAMIIQDbQDiBdBTAbIADABIAngHIgOhNIAjgGQAAghgKgmQgFgTgDgTQgCgUAAgVQAAjzBAiwQA6ieCRi8QA0hEEulkQEdlPDqk5QBQhsBUjUQAYg/B6lcQBdkKBJibQBpjcB3iAIAwAUQgSAqAAAwQAAAfAYAuQAaAxAoAsQBmBuBxAAQDJAABKg9QBPhBAAizQAAhYgVhAIALgDQDpCiCVDyQB5DGBcEsQAWBKB9HqQBdFrBfDxQDAHlFRJWQBUCWCMDzQBpC5AgBMIAAAoIANAMIACgMIABgLIAOABIAAAKQBRAJD3h8QChhRFzjWQhxgsh9gkQi+g3i2gZIAAgKQBkhgBghCQDsihDGiTQDeijLOjWQC0g1E0hUIBygfIABAAQB4giARgIIAjA2QltDsnOEPQnhEajjByIAAAUQIdBCAZAEQBYAPAlASQAnASAAAdQAABToYDcQkxB+ldB5QliB7hvAyQhfAxiEA4QA2iVAVidQgVCdg2CVIgcAMIAcgMQgbBJgiBHQirFglkEbIgTAPQh0AfhnAyQhqA0icAtIiMA6Qh4AzgeABQkUAOjDAVQiOAPhvAAQjiAAk4gdgAdVS5IAAgKIAAAKQgTg3gzhBQAzBBATA3gAlt8nQhCBYg9BzQgTBNgUCVQgfDeAACxQAADaCWBXQBYAyB/AAQDQAABWi/QA8iCAAjbQAAk3ibjzQg+hjhKg+QhHg6g5gHIhnCJgAcXXtIAAAAg");
	this.shape_4.setTransform(40.3375,35.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("EgGjAwYQl5hAkOgkQhlgMjNiMQizh5hShZIgTgVIA8g1IABAAQA0AcB5A4QBtAyAsAZQBhA3GHAkQE3AdDiAAQBvAACNgPQDFgVETgOQAegBB5gzICLg6QCcgtBqg0QBngyB0gfQkgDhl0CbQlBCFkKAnIgDAAIABAKIAAAAIhJAJQhMAHhmABIgyAHIgDAZQgwgFhJgLgAeiVtIAAgKIgNgBIgCALIgPAAIAAgoQgfhMhpi5QiMjzhViWQlQpXjBnkQhfjxhdlrQh9nqgWhKQhbksh5jGQiVjyjqiiIgKADIgJgYQguhthtAAQiYAAiOBGQh8A9gnBaIgwgVQh3CAhoDcQhKCbhcEKQh7FcgYA/QhTDUhRBsQjqE5kdFPQkuFjg0BEQiQC9g6CeQhBCwAADzQAAAVADAUQACAUAFASQAKAmAAAhIgjAHIgHgwQgcjAAAirQAAjSApixQAeh9A5h/Qg5B/geB9QgpCxAADSQAACrAcDAIAHAwIAOBMIgnAHIgDgBQhSgbjjhdIoQjbQAdgMEBiVIESifQgqgdhOhEQhdhPgrgiQi2iNjAg7QhLgXjqhtQjwhxgJgEQihg5hdgcQhKgXh6geIgCgeQGcgeCWAAQBJAADbAmQDfAoDwA3QJpCQBCBaIAmARQA8iFBbiHQA9hcBriLIC4jwQDmkzCEkfQB2j+Bel/IAeh+IAAAAIAnijQAnifAlhoQAjhjAuhSIAAgBQBOiOBrhbQDMitFwg1QAZgDAbgBQBNAABkAYQCBAfCIBCQCMBDBrBWQBVBEAzBEIABABQARAXAOAYQC1FEBBD7IAHAaIAAAAQAXBiAXCNQAfDMAVCAQA1FECVF7QBnEEDEGKQCiFEBLCcIAxBpQCGEvAdDFQASB7AAB2QAABZgKBXQAKhXAAhZQAAh2gSh7QgdjFiGkvIgxhpIANgHQAFgOBDg6QBLhBBihFQESi9DnhAQA6gPDCg4QDCgxCagIQCtgJD6gWQDPgTBGAAQEZAAEmAUIARA+IhxAfQk1BUizA1QrPDVjeCkQjGCTjrChQhhBChkBgIAAAKQC2AZC+A3QB+AkBwAsQlyDWiiBRQjmB0hXAAIgLgBg");
	this.shape_5.setTransform(35.575,16.0612);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stunfiskBody, new cjs.Rectangle(-420.8,-414.8,924.8,747.2), null);


(lib.pond = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#54B09E").ss(10,1,1).p("EhlighBMDPJAAAIAKAAEBpngg3IDIAAQDqARBkDEQBMCVAAEAQAADDiBDkQibESk+EOQssKx6WILQhyAjmfC9Qk5CPkqCPQjhBtnYCZQqJDShoAmQnDCmulByQvPB4v1AAQmdAAuHhRQnLgpnqgwQkbgSi/gdQjkgji5g/QmLiGmElVQkukImCjbQhTgvjVhxQiphahXg2QkBifhui/QiFjnAAmHQAAiCAzjwQBPlwAAgCQADgXCbjaQCLjFArg0QBDhRA0hdQAxhhAUglQAgg+AegZQAmgfA+gC");
	this.shape.setTransform(-84.925,206.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7DEDD7").ss(42,1,1).p("AgvCKQg0ADg/gPQh1gcAAhTQAAhlCMhOQAugaA2gTQAqgPAMAAQBNAABiCWQAnA8AaA7QAZA8AAAeQAAAeg8AeQg6Aeg0AAQhbAAgmgUQgegPAAgeQAAgMACgKgAgTCHQgNACgPABQAEgOAHgKQAOgOADgF");
	this.shape_1.setTransform(-58,101.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7DEDD7").s().p("EgvBAfxQnLgpnqgwQkbgSi/gdQjkgji5g/QmLiGmElVQkukImCjbQhTgvjVhxQiphahXg2QkBifhui/QiFjnAAmHQAAiCAzjwIBPlyQADgXCbjaQCLjFArg0QBDhRA0hdIBFiGQAgg+AegZQAmgfA+gCIAygUMDPJAAAIAAAKIDIAAQDqARBkDEQBMCVAAEAQAADDiBDkQibESk+EOQssKx6WILQhyAjmfC9Qk5CPkqCPQjhBtnYCZQqJDShoAmQnDCmulByQvPB4v1AAQmdAAuHhRgADbt6QAAAeAeAPQAnAUBbAAQA0AAA6geQA8geAAgeQAAgegZg8Qgag8gng8QhiiWhNAAQgMAAgrAPQg2ATguAaQiLBPAABlQAABUB1AbQA+APA1gDQgDAKAAAMg");
	this.shape_2.setTransform(-84.925,206.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pond, new cjs.Rectangle(-826.8,-9.8,1483.8,432.8), null);


(lib.lombreBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn
	this.text = new cjs.Text("lombre", "96px 'Gogono Cocoa Mochi'", "#B0C67F");
	this.text.textAlign = "center";
	this.text.lineHeight = 98;
	this.text.lineWidth = 462;
	this.text.parent = this;
	this.text.setTransform(0,-48);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#8CA358"},0).wait(1).to({color:"#5F7334"},0).wait(1).to({color:"#B0C67F"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-50,466,100);


(lib.lombre = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(56));

	// ground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#253B11").ss(10,1,1).p("EA1TgCAQAFAGAFAGQAdAjAdAqAfnjuQAHAAALABQBzAGHfBEQIRBLC7AAQASAAARgGQARgGAIgIAfmjuIABAAAfwjwQgEACgFAAEg0ngCeIAAAKIAeAAIJhAAQMnhOGqhKQBugTBbgEQBngFFIAAQA+AAIyA8QIwA8AoAAQDFAAFhAKQCxAFCZAFQKkg1BpABQAFAAAFAAQAJAAAAACQAAgLgBABQgDAGgFACEg2WAFJQANgWAQgeQAohGACgkQAJiFAKgyQAPhNAjglQAAgBABgB");
	this.shape.setTransform(9.9125,158.4125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#253B11").s().p("AjJMOIoJg+QlFgnihgcQlohAoAigQhNgXlghyQkHhViogxIiegvQhZgchDgbQg6gYhMgkIgegQQgTgagNgWIgcg3IAdg0QAohGACglQAJiEAKgzQAPhNAjglIABgCIAAgVIJhAAQMnhNGqhKQBugUBbgEQBngEFIgBQA+ABIyA7QIwA9AoAAQDFgBFhALIFKAJQKkg1BpABIAAACIABAAIASACQBzAGHfBEQIRBKC7AAQASABARgHQARgGAIgHIAKgJQAdAkAdApIgmCtQgdCFgeBWQhGDNiKC0QiGCvi3CBQioB3jIBLMgqCAAAg");
	this.shape_1.setTransform(9.9125,203.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(56));

	// hat
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#003300").ss(10,1,1).p("EAiCgF6IAAgKEgiLAB5QADABADACQEZB1N5BRQLkBDIRAAQJAAAHfgsQJwg7D7h5EAiCABjIAAndA3TlcQAAAlBSCBQBYCDAKAVQADAAACACQAFACAAAGQBbhvA5hRQANgSBPh2EghxgF6IKSAAEgh7ABjIAAmrAwdl6MAyfAAA");
	this.shape_2.setTransform(5.1875,17.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("Av2E9Qt5hRkZh2IAKgYIAAmrIAKgyIKSAAIAMAeQAAAlBSCBQBYCDAKAVIAFACQAFACAAAGQBbhvA5hRIBciIIAHgeMAygAAAIAAHdIAKBCQj7B5pwA7QnfAspAAAQoRAArkhDg");
	this.shape_3.setTransform(5.5,17.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#003300").ss(10,1,1).p("EAiCgF6IAAgKEgiLAB5QADABADACQEZB1N5BRQLkBDIRAAQJAAAHfgsQJwg7D7h5EAiCABjIAAndA3TlcQAAAlBSCBQBXCDALAVQACAAADACQAFACAAAGQBbhvA5hRQANgSBPh2EghxgF6IKSAAEgh7ABjIAAmrAwel6MAygAAA");
	this.shape_4.setTransform(5.2,7.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("Av2E9Qt6hRkYh1IAKgZIAAmrIAKgyIKSAAIAMAeQAAAlBSCBQBYCDAKAVIAFACQAFACAAAGQBbhvA5hRIBciIIAHgeMAygAAAIAAHdIAKBCQj7B5pwA7QnfAspAAAQoRAArkhDg");
	this.shape_5.setTransform(5.5,7.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#003300").ss(10,1,1).p("EAiCgF6IAAgKEAiCABjIAAndEgiLAB5QADABADACQEZB1N5BRQLkBDIRAAQJAAAHfgsQJwg7D7h5Egh7ABjIAAmrA3TlcQAAAlBSCBQBXCDALAVQACAAADACQAFACAAAGQBbhvA5hRQANgSBPh2EghxgF6IKSAAAwel6MAygAAA");
	this.shape_6.setTransform(5.2,-12.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#003300").ss(10,1,1).p("EgiLAB5QADABADACQEZB1N5BRQLkBDIRAAQJAAAHfgsQJwg7D7h5EAiCgF6IAAgKEAiCABjIAAndEgh7ABjIAAmrA3TlcQAAAlBSCBQBXCDALAVQACAAADACQAFACAAAGQBbhvA5hRQANgSBPh2EghxgF6IKSAAAwel6MAygAAA");
	this.shape_7.setTransform(5.2,-42.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5,p:{y:7.575}},{t:this.shape_4,p:{y:7.075}}]},2).to({state:[{t:this.shape_5,p:{y:-2.425}},{t:this.shape_4,p:{y:-2.925}}]},2).to({state:[{t:this.shape_5,p:{y:-12.425}},{t:this.shape_6,p:{y:-12.925}}]},2).to({state:[{t:this.shape_5,p:{y:-22.425}},{t:this.shape_6,p:{y:-22.925}}]},2).to({state:[{t:this.shape_5,p:{y:-32.425}},{t:this.shape_6,p:{y:-32.925}}]},2).to({state:[{t:this.shape_5,p:{y:-42.425}},{t:this.shape_7,p:{y:-42.925}}]},2).to({state:[{t:this.shape_5,p:{y:-52.425}},{t:this.shape_7,p:{y:-52.925}}]},2).to({state:[{t:this.shape_5,p:{y:-62.425}},{t:this.shape_7,p:{y:-62.925}}]},2).to({state:[{t:this.shape_5,p:{y:-72.425}},{t:this.shape_7,p:{y:-72.925}}]},2).to({state:[{t:this.shape_5,p:{y:-62.425}},{t:this.shape_7,p:{y:-62.925}}]},20).to({state:[{t:this.shape_5,p:{y:-52.425}},{t:this.shape_7,p:{y:-52.925}}]},2).to({state:[{t:this.shape_5,p:{y:-42.425}},{t:this.shape_7,p:{y:-42.925}}]},2).to({state:[{t:this.shape_5,p:{y:-32.425}},{t:this.shape_6,p:{y:-32.925}}]},2).to({state:[{t:this.shape_5,p:{y:-22.425}},{t:this.shape_6,p:{y:-22.925}}]},2).to({state:[{t:this.shape_5,p:{y:-12.425}},{t:this.shape_6,p:{y:-12.925}}]},2).to({state:[{t:this.shape_5,p:{y:-2.425}},{t:this.shape_4,p:{y:-2.925}}]},2).to({state:[{t:this.shape_5,p:{y:7.575}},{t:this.shape_4,p:{y:7.075}}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgBQABgEAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGACQANAEAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIgXAAQACgLAKgJQAHgGAGgCQAAgBAAgBgAnDADQAAgBAAAAQgDgJAAgHQAAgHADgCQACgBAAgBQAEgBADgBAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_8.setTransform(1.55,139.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgBQABgEAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAAgBAAgBgAnDADIgXAAQACgLAKgJQAGgGAHgCQAEgBADgBAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_9.setTransform(1.55,129.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAAgBAAgBgAnBgZQAEgBADgBAmtgHQgCADgFACQgFACgDADIgHAAIgXAAQACgMAKgIQAGgGAHgC");
	this.shape_10.setTransform(1.55,119.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIgXAAQACgMAKgIQAGgGAHgCQAEgBADgBgAnDADIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAAgBAAgBIAHAAAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_11.setTransform(1.55,109.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAnDADIgXAAQACgMAKgIQAGgGAHgCQAEgBADgBIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAAgBAAgBIAHAAAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_12.setTransform(1.55,99.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAAgBAAgBgAmtgHQgCADgFACQgFACgDADIgHAAIgXAAQACgMAKgIQAGgGAHgCQAEgBADgB");
	this.shape_13.setTransform(1.55,89.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAAgBAAgBgAnBgZQAEgBADgBAnDADIgXAAQACgMAKgIQAGgGAHgCAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_14.setTransform(1.55,69.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgKAAgGQAAgHADgCQABgBABgBQAAgBAAgBgAnDADIgXAAQACgMAKgJQAGgFAHgCQAEgBADgBAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_15.setTransform(1.55,59.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAnDADIAAgBQgDgKAAgGQAAgHADgCQABgBABgBQAEgBADgBIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIgXAAQACgMAKgJQAGgFAHgCQAAgBAAgBIAHAAAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_16.setTransform(1.55,49.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAnBgZQAAgBAAgBIAHAAAnBgZQAEgBADgBIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIgXAAQACgMAKgJQAGgFAHgCgAnDADIAAgBQgDgKAAgGQAAgHADgCQABgBABgBAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_17.setTransform(1.55,49.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAAgBAAgBgAnDADIgXAAQACgMAKgJQAGgFAHgCQAEgBADgBAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_18.setTransform(1.55,65.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIgXAAQACgMAKgJQAGgFAHgCQAEgBADgBgAnDADIAAgBQgDgKAAgGQAAgHADgCQABgBABgBQAAgBAAgBIAHAAAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_19.setTransform(1.55,59.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAnDADIgXAAQACgMAKgIQAGgGAHgCQAEgBADgBAnBgZQAAgBAAgBIAHAAIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBgAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_20.setTransform(1.55,69.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAmtgHQgCADgFACQgFACgDADIgHAAIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAAgBAAgBIAHAAIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIgXAAQACgMAKgIQAGgGAHgCQAEgBADgB");
	this.shape_21.setTransform(1.55,89.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAnBgZQAAgBAAgBIAHAAAnBgZQAEgBADgBIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBgAnDADIgXAAQACgMAKgIQAGgGAHgCAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_22.setTransform(1.55,99.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgCQABgDAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGADQANADAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKIAAgBQgDgJAAgHQAAgHADgCQABgBABgBQAEgBADgBgAnDADIgXAAQACgMAKgIQAGgGAHgCQAAgBAAgBIAHAAAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_23.setTransform(1.55,109.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(10,1,1).p("AGuAcQgHgFgIgKQgKgNAAgHQgCgFAAgBQABgEAIAAQAQAAAYAKQAMAFALAFIgPAUIgeAAQAAgPAFgPAm6gbIABAAQAFAAAGACQANAEAIAJIAAAZQgHAAgNACQgMADgIAAQAAgFgCgKQAAgBAAAAQgDgJAAgHQAAgHADgCQACgBAAgBQAEgBADgBgAnDADIgXAAQACgLAKgJQAHgGAGgCQAAgBAAgBIAHAAAmtgHQgCADgFACQgFACgDADIgHAA");
	this.shape_24.setTransform(1.55,139.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13,p:{y:89.75}}]},2).to({state:[{t:this.shape_13,p:{y:79.75}}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15,p:{y:59.75}}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_15,p:{y:40.75}}]},4).to({state:[{t:this.shape_17}]},4).to({state:[{t:this.shape_18}]},4).to({state:[{t:this.shape_17}]},4).to({state:[{t:this.shape_19}]},4).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_13,p:{y:79.75}}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_24}]},2).wait(2));

	// face
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(10,1,1).p("APXhLQAEAIADAPQADAPAAAKQAABlhUBfQhiBuiRAAQkGAAhqibQg8hZAAh1QAAgXADglQAEgpADgHAQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgRAw6iFQA1AGAzADQD3AODUgwQCegjBQgzQAagQASgSAvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgH");
	this.shape_25.setTransform(-0.1,141.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#003300").ss(10,1,1).p("Amu2XQClgmC1AAQCzAAClAmQABAAABAAQGIBbEwEvQB4B4BXCGQDEEwAZF3QAEA3AAA2QAADPgyC6QgHAagIAaQAFAxgFAkAC+reQAPi2APkCQAQh/AThnQADgOACgNQAFgaAGgWAchtMQgIgLgHgJQgBAAAAgBQgTgZgKgNQgZgfgtgUQimhLhZAAQiQAAg+BTQgWAegQAtQgIAagNAuAV4hoQAKgKBBgzQBJg4A5gmQAogcAzhkQAthYAOg7QAWhjAFhbQAChXABghACqrKQgFAiAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAXQCUAyCPBOQAtAZEDCdQCpBmBkDrQAoBfARBdQAHAfACAcQhmFNkJEJQmwGwpiAAQpkAAmwmwQk8k8hVmdQgfiWAAikQAAhuAPhqQA6mnEhlIQAAAAABgBQAhglAkglQExkwGJhaQgDgJgDgJAtRMRQAshvFRhOQEhhCEFAAQBhAACFBCQBIAkBlA/QAkAUA3BTQA0BPAMArQi5gshAgOQhkgWhRAAQg8AAgZAKQgVAKgSAdQgLATgjA7QgoA+hABCIgDAAQgCACAAADQg9gvgng5Qgjg6gRgWQgcgkgugQQg2gShtgBQhWgBiQgMQiPgMgDAAIAAgFAklrZQgXApABA5QAAAgAEA4QgCAsgcAYQgjAdhXAMQiKASkfAjQjsAkhkA9QiFBRhXDsQgeBSgUBVQgPBFAAAaQAAAKADAKQACAKAFAKAklrjQgHjJg7jsQgahngtiYA7VtgQEXiWCaAAQA6AAA9AzQAKAJAKALQA4A4ARAwA4hjWQgPgHg6hPQg5hOgyhRQgyhTgQhCQgJglAAg0QAAgkAUgoQAZgqAKgT");
	this.shape_26.setTransform(11.05,129.0375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DA9063").s().p("AhBC1Qgig6gRgVQgcglgugPQg2gThugBQhVAAiQgNIiRgMIAAgFIgPgdQArhvFRhOQEhhCEFAAQBhAACFBCQBIAlBkA+QAlAUA2BUQA0BNAMArQi5gsg/gOQhlgWhQAAQg9AAgYAKQgVAKgSAeIguBNQgoA+hBBCIgDABQgDABAAADQg7gvgog5g");
	this.shape_27.setTransform(0.55,210.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADALAFAKQgFgKgDgLQgCgJAAgLQAAgaAPhEQAThVAehSQBXjsCGhRQBjg9DsgkQEfgkCKgSQBXgLAjgeQAcgXACgsQgDg4gBggQAAg5AWgqIAAgKQgHjIg7jsQgZhnguiYQClgmC1AAQC0AAClAmIgGAbQgTBmgQCAQgPECgPC2IgUAUQgFAiAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAXQCUAyCPBOQAtAZEDCcQCpBmBkDsQAoBfASBdQAGAfADAbQhnFOkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBvIAPAeIAAAEICRANQCQAMBWAAQBtACA3ASQAtAPAcAlQARAWAjA5QAnA5A9AwQAAgEACgBIADAAQBAhCAog+IAuhOQASgeAVgJQAZgKA8AAQBRgBBkAWQBAAOC5AtQgMgsg0hOQg3hTgkgUQhlg/hIgkQiFhDhhAAQkFAAkhBDgACQhHQgEAHgDApQgDAjAAAXQAAB3A8BZQBpCaEGAAQCRAABihtQBVhfAAhnQAAgJgDgQQgEgPgDgHIgEgtQAzgEA1gFQg1AFgzAEQj3AMjUguQiegkhRgzQgZgQgSgSQASASAZAQgAw6gGIgEAtQgEAIgDAQQgDAOAAAKQAABnBUBfQBiBuCRAAQEGgBBqiaQA8hZAAh3QAAgXgDgjQgEgpgDgHIgig0QAagQASgSQgSASgaAQQhQAzieAjQjUAwj3gOQgzgDg1gGQA1AGAzADgASUsUIAZgRQANgtAIgaQAQgtAWgeQA+hUCQABQBZAACmBKQAtAVAZAfIAdAmIABABIgZATIgDB5QgFBbgWBjQgOA7gtBYQgzBjgoAcQg5AnhJA4QhBAygKALIgOAAQgYl3jFkwgACxh7IAAAAgA4ZjcQgQgGg6hPQg5hOgxhSQgyhSgQhCQgJglAAg0QAAgkAUgoQAZgqAKgTIAUgfQEWiVCaAAQA7gBA8A0IgBABQkhFHg6Gog");
	this.shape_28.setTransform(10.3125,129.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AV6NyQgShdgohfQhkjsiphmQkCidgugZQiOhOiVgyQhJgXgqgPQhQgbgFgOQgNglgIg6QgJg9AFgiIAUgUQAPi2APkCQARh/AShnIAGgbIACABQGIBaEvEvQB4B5BXCGQDFEvAZF3QADA2AAA3QAADPgxC6IgPA0QgDgbgGgggA3CHwQAAhvAOhqQA6mmEilIIAAAAQAigmAkglQEwkwGJhaQAuCYAaBnQA6DsAHDJIAAAKQgWApABA5QAAAgADA4QgBAsgcAXQgkAdhXAMQiKASkfAjQjrAkhkA9QiFBRhYDtQgdBSgUBVQgPBFAAAaQAAAKACAKIgWAEQgfiWAAikgAxDnEQA4A4ARAwQgRgwg4g4IgVgTIAVATg");
	this.shape_29.setTransform(2.5,79.9125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AEqBrQg8hYAAh2QAAgXADgkQADgpAEgIIAigzQBQAzCeAjQDUAwD3gOIAEAuQADAIAEAPQADAPAAAKQAABlhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhlQAAgKADgPQADgPAEgIIAEguQD3AODUgwQCegjBQgzIAiAzQAEAIADApQADAkAAAXQAAB2g8BYQhpCbkHAAQiQAAhjhug");
	this.shape_30.setTransform(-0.1,143.0875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(10,1,1).p("AQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgRAPXhLQAEAHADAQQADAPAAAKQAABlhUBfQhiBuiRAAQkGAAhqibQg8hZAAh2QAAgWADglQAEgpADgHAw6iFQA0AFA0AEQD2AODVgwQCegkBQgyQAagRASgRAvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgH");
	this.shape_31.setTransform(-0.1,131.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#003300").ss(10,1,1).p("Amu2XQCkgmC2AAQCzAACmAmQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC7QgIAZgHAaQAFAygGAjAC+rfQAPi1APkDQAQh/AThmQADgOADgNQAFgbAFgVAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDsQAoBfARBdQAHAgADAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAhgmAkgkQEwkwGKhaQgDgJgDgJAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKA7VthQEXiWCaAAQA6AAA9A0QAKAJAKAKQA4A4ARAwA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgU");
	this.shape_32.setTransform(11.05,119.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DA9063").s().p("AhBC1Qgig5gRgWQgcglgugPQg2gThugBQhVAAiQgNIiRgMIAAgFIgPgdQArhuFRhPQEhhCEFAAQBhAACFBCQBIAlBkA+QAlAVA2BSQA0BOAMArQi5gsg/gOQhlgWhQAAQg9AAgYAKQgVAKgSAeIguBNQgoA+hBBCIgDAAQgDACAAADQg7gvgog5g");
	this.shape_33.setTransform(0.55,200.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AEqBrQg8hZAAh2QAAgWADgkQADgqAEgHIAigzQBQAzCeAjQDUAwD3gOIAEAuQADAHAEAQQADAPAAAJQAABmhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhmQAAgJADgPQADgPAEgIIAEguQD2AODVgwQCegjBQgzIAiAzQAEAHADApQADAlAAAXQAAB2g8BYQhpCbkHAAQiQAAhjhug");
	this.shape_34.setTransform(-0.1,133.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AV6NyQgShdgohfQhkjsiphmQkCidgugZQiOhOiVgyQhJgXgqgPQhQgbgFgOQgNglgIg6QgJg9AFgiIAUgUQAPi2APkCQARh/AShnIAGgbIACABQGHBaEwEvQB4B4BXCHQDEEuAaF4QADA2AAA3QAADPgxC6IgPA0QgDgbgGgggA3CHwQAAhvAOhqQA6mmEilIIABAAQAggmAlglQEwkwGKhaQAtCYAaBnQA6DsAHDJIAAAKQgWApABA5QAAAgADA4QgBAsgcAXQgkAdhXAMQiKASkfAjQjrAkhkA9QiFBRhYDtQgdBSgUBVQgPBFAAAaQAAAKACAKIgWAEQgfiWAAikgAxDnEQA4A4ARAwQgRgwg4g4IgUgTIAUATg");
	this.shape_35.setTransform(2.5,69.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADALAFAJQgFgJgDgLQgCgKAAgKQAAgaAPhEQAThWAehRQBXjsCGhRQBjg9DsgkQEfgkCKgRQBXgMAjgeQAcgXACgsQgDg4gBggQAAg5AWgqIAAgKQgHjIg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBmgQCAQgPECgPC2IgUAUQgFAiAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAXQCUAxCPBPQAtAZEDCcQCpBmBkDsQAoBfASBdQAGAgADAaQhnFOkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAfIAAAEICRANQCQAMBWAAQBtABA3ATQAtAPAcAlQARAWAjA6QAnA5A9AuQAAgCACgCIADAAQBAhCAog+IAuhOQASgeAVgJQAZgLA8ABQBRgBBkAWQBAAOC5AsQgMgrg0hOQg3hTgkgVQhlg+hIgkQiFhDhhAAQkFAAkhBDgACxh7IghA0QgEAHgDApQgDAkAAAWQAAB3A8BZQBpCaEGABQCRgBBihtQBVhfAAhnQAAgJgDgQQgEgPgDgHIgEguQj3ANjUguQiegkhRgzQgZgQgSgSQASASAZAQgAw6gGIgEAtQgEAIgDAQQgDAOAAAKQAABnBUBeQBiBvCRAAQEGAABqicQA8hYAAh3QAAgXgDgjQgEgpgDgIIgigyQAagRASgSQgSASgaARQhQAyieAjQjVAwj2gOQg0gDg0gGQA0AGA0ADgANrgDQAzgDA1gGQg1AGgzADgASUsUIAZgRQANgtAIgaQAQgtAWgeQA+hUCQABQBZAACmBKQAtAVAZAfIAdAmIABABIgZATIgDB5QgFBagWBkQgOA7gtBYQgzBjgoAcQg5AnhJA4QhBAzgKAKIgOABQgZl4jEkwgA4ZjcQgQgGg6hPQg5hOgxhSQgyhSgQhCQgJglAAg0QAAgkAUgoQAZgqAKgUIAUgeQEWiWCaAAQA7AAA8A0IgBABQkhFIg6Gng");
	this.shape_36.setTransform(10.325,119.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(10,1,1).p("AQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgRAPXhLQAEAHADAQQADAPAAAJQAABmhUBfQhiBuiRAAQkGAAhqibQg8hZAAh2QAAgWADglQAEgpADgHAw6iFQA0AFA0AEQD2AODVgwQCegkBQgyQAagRASgRAvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgH");
	this.shape_37.setTransform(-0.1,121.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#003300").ss(10,1,1).p("Amu2XQCkgmC2AAQCzAACmAmQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC7QgIAZgHAaQAFAygGAjAEF2XQAFgbAFgVAC+rfQAPi1APkDQAQh/AThmQADgOADgNAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDsQAoBfARBdQAHAgADAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAhgmAkgkQEwkwGKhaQgDgJgDgJAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKA7VthQEXiWCaAAQA6AAA9A0QAKAJAKAKQA4A4ARAwA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgU");
	this.shape_38.setTransform(11.05,109.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DA9063").s().p("AhBC1Qgig5gRgXQgcgkgugPQg2gThugBQhVgBiQgMIiRgMIAAgFIgPgdQArhuFRhOQEhhDEFAAQBhAACFBDQBIAkBkA+QAlAVA2BSQA0BOAMArQi5gsg/gOQhlgWhQAAQg9AAgYAKQgVAKgSAdIguBOQgoA+hBBCIgDAAQgDACAAADQg7gvgog5g");
	this.shape_39.setTransform(0.55,190.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AEqBrQg8hZAAh2QAAgWADgkQADgqAEgHIAigzQBQAzCeAjQDUAwD3gOIAEAuQADAIAEAPQADAPAAAJQAABmhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhlQAAgKADgPQADgPAEgIIAEguQD2AODVgwQCegkBQgyIAiAzQAEAIADAoQADAlAAAXQAAB2g8BYQhpCbkHAAQiQAAhjhug");
	this.shape_40.setTransform(-0.1,123.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADALAFAJQgFgJgDgLQgCgKAAgJQAAgbAPhEQAThVAehSQBXjsCGhSQBjg8DsgkQEfgkCKgRQBXgMAjgeQAcgYACgrQgDg4gBggQAAg5AWgqIAAgJQgHjJg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBmgQCAQgPECgPC1IgUAVQgFAiAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAXQCUAyCPBOQAtAZEDCcQCpBnBkDrQAoBfASBdQAGAfADAbQhnFNkJEKQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAfIAAAEICRANQCQAMBWAAQBtABA3ATQAtAQAcAkQARAWAjA6QAnA5A9AuQAAgDACgBIADAAQBAhCAog+IAuhOQASgdAVgKQAZgLA8AAQBRAABkAXQBAAOC5ArQgMgrg0hOQg3hTgkgVQhlg+hIgkQiFhDhhAAQkFAAkhBDgACxh7IghA0QgEAHgDApQgDAjAAAXQAAB3A8BZQBpCaEGABQCRAABihuQBVhfAAhnQAAgJgDgQQgEgPgDgIIgEgtQj3ANjUguQiegkhRgzQgZgQgSgSQASASAZAQgAw+AnQgEAIgDAQQgDAOAAAKQAABmBUBfQBiBuCRABQEGAABqicQA8hYAAh3QAAgXgDgjQgEgpgDgIIgigyQAagRASgRQgSARgaARQhQAyieAjQjVAwj2gNgANrgDQAzgDA1gGQg1AGgzADgAw6gFQg0gEg0gGQA0AGA0AEgASUsUIAZgRQANgtAIgaQAQgtAWgeQA+hTCQAAQBZgBCmBLQAtAUAZAgIAdAmIABABIgZATIgDB5QgFBagWBkQgOA7gtBYQgzBjgoAcQg5AnhJA4QhBAzgKAJIgOACQgZl4jEkwgA4ZjcQgQgGg6hPQg5hOgxhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUIAUgeQEWiWCaAAQA7AAA8A0IgBABQkhFIg6Gng");
	this.shape_41.setTransform(10.325,109.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(10,1,1).p("APXhLQAEAHADAQQADAPAAAJQAABmhUBfQhiBuiRAAQkGAAhqibQg8hZAAh2QAAgWADglQAEgpADgHAQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgRAvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgHAw6iFQA0AFA0AEQD2AODVgwQCegkBQgyQAagRASgR");
	this.shape_42.setTransform(-0.1,111.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#003300").ss(10,1,1).p("Amu2XQCkgmC2AAQCzAACmAmQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC7QgIAZgHAaQAFAygGAjAEF2XQAFgbAFgVAC+rfQAPi1APkDQAQh/AThmQADgOADgNAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAgADAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAhgmAkgkQEwkwGKhaQgDgJgDgJAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKAytvDQAKAJAKAKQA4A4ARAwA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUA7VthQEXiWCaAAQA6AAA9A0");
	this.shape_43.setTransform(11.05,99.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DA9063").s().p("AhBC1Qgig6gRgWQgcgkgugPQg2gThugBQhVgBiQgMIiRgMIAAgFIgPgdQArhuFRhOQEhhDEFAAQBhAACFBDQBIAjBkA/QAlAVA2BSQA0BOAMArQi5gsg/gOQhlgWhQAAQg9AAgYALQgVAJgSAdIguBPQgoA9hBBCIgDAAQgDACAAADQg7gvgog5g");
	this.shape_44.setTransform(0.55,180.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AEqBrQg8hYAAh3QAAgWADglQADgpAEgHIAigzQBQAzCeAjQDUAwD3gOIAEAuQADAIAEAPQADAPAAAJQAABmhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhlQAAgKADgPQADgQAEgHIAEguQD2AODVgwQCegkBQgyIAiAzQAEAIADAoQADAlAAAXQAAB1g8BZQhpCbkHAAQiQAAhjhug");
	this.shape_45.setTransform(-0.1,113.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADAKAFAKQgFgKgDgKQgCgJAAgKQAAgaAPhFQAThWAehRQBXjsCGhSQBjg8DsgkQEfgkCKgRQBXgMAjgeQAcgYACgrQgDg5gBgfQAAg5AWgpIAAgKQgHjJg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC1IgUAVQgFAiAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAXQCUAyCPBOQAtAZEDCcQCpBnBkDrQAoBfASBdQAGAfADAbQhnFOkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAfIAAAEICRAMQCQANBWABQBtAAA3ATQAtAQAcAkQARAWAjA6QAnA5A9AuQAAgDACgBIADAAQBAhCAog+IAuhOQASgdAVgKQAZgLA8AAQBRAABkAXQBAAOC5ArQgMgqg0hPQg3hTgkgVQhlg+hIgkQiFhChhAAQkFAAkhBCgACQhHQgEAHgDApQgDAjAAAXQAAB3A8BZQBpCaEGABQCRAABihuQBVhfAAhnQAAgKgDgOQgEgQgDgIIgEgtQAzgDA1gGQg1AGgzADQj3ANjUgvQiegjhRgyQgZgRgSgSQASASAZARgAw6gFIgEAsQgEAIgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGABBqicQA8hYAAh3QAAgWgDgkQgEgpgDgIIgigyQAagRASgRQgSARgaARQhQAyieAjQjVAwj2gNQg0gEg0gFQA0AFA0AEgASUsUIAZgRQANgtAIgaQAQgtAWgeQA+hTCQAAQBZgBCmBMQAtATAZAgIAdAmIABABIgZATIgDB5QgFBagWBkQgOA7gtBYQgzBkgoAbQg5AnhJA4QhBAzgKAJIgOABQgZl3jEkwgACxh6IAAAAgA4ZjcQgQgGg6hPQg5hOgxhRQgyhTgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUIAUgdQEWiWCagBQA7AAA8A1IgBAAQkhFIg6Gng");
	this.shape_46.setTransform(10.325,99.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#003300").ss(10,1,1).p("Amu2XQCkgmC2AAQCzAACmAmQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC7QgIAZgHAaQAFAygGAjAC+rfQAPi1APkDQAQh/AThmQADgOADgNQAFgbAFgVAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAgADAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAhgmAkgkQEwkwGKhaQgDgJgDgJAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFA7VthQEXiWCaAAQA6AAA9A0QAKAJAKAKQA4A4ARAwAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgU");
	this.shape_47.setTransform(11.05,89.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DA9063").s().p("AhBC1Qgig6gRgWQgcgkgugQQg2gShugBQhVAAiQgNIiRgMIAAgFIgPgdQArhvFRhNQEhhDEFAAQBhAACFBDQBIAjBkA/QAlAVA2BSQA0BOAMArQi5gsg/gOQhlgWhQAAQg9AAgYALQgVAJgSAdIguBPQgoA9hBBCIgDAAQgDACAAADQg7gvgog5g");
	this.shape_48.setTransform(0.55,170.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AEqBrQg8hYAAh2QAAgXADglQADgpAEgHIAigzQBQAzCeAjQDUAwD3gOIAEAuQADAIAEAPQADAPAAAJQAABmhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhlQAAgKADgPQADgQAEgHIAEguQD2AODVgwQCegkBQgyIAiAzQAEAIADAoQADAlAAAXQAAB1g8BZQhpCbkHAAQiQAAhjhug");
	this.shape_49.setTransform(-0.1,103.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9EDBB2").s().p("AxgQTQk9k9hUmcIAWgEQADAJAFAKQgFgKgDgJQgCgLAAgJQAAgaAPhFQAThWAehRQBXjsCGhSQBjg8DsglQEfgiCKgSQBXgMAjgeQAcgXACgtQgDg3gBggQAAg5AWgpIAAgKQgHjJg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC1IgUAUQgFAjAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCdQCpBlBkDrQAoBgASBdQAGAfADAcQhnFNkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAeIAAAFICRAMQCQANBWABQBtABA3ASQAtAQAcAkQARAWAjA6QAnA5A9AuQAAgDACgBIADAAQBAhDAog9IAuhOQASgdAVgKQAZgLA8AAQBRAABkAXQBAAOC5ArQgMgqg0hPQg3hTgkgVQhlg+hIgkQiFhChhAAQkFAAkhBCgACxh6IghAyQgEAIgDApQgDAjAAAXQAAB3A8BYQBpCcEGAAQCRAABihvQBVheAAhnQAAgKgDgOQgEgQgDgIIgEgtQj3AOjUgwQiegjhRgyQgZgRgSgSQASASAZARgAw+AoQgEAHgDAPQgDAQAAAJQAABmBUBfQBiBuCRAAQEGABBqicQA8hYAAh3QAAgWgDgkQgEgpgDgIIgigzQAagQASgRQgSARgaAQQhQAzieAjQjVAwj2gNgANrgDQAzgDA1gGQg1AGgzADgAw6gFQg0gEg0gFQA0AFA0AEgASUsTIAZgSQANguAIgZQAQguAWgdQA+hUCQAAQBZAACmBMQAtATAZAgIAdAmIABACIgZASIgDB5QgFBbgWBiQgOA8gtBYQgzBkgoAbQg5AnhJA4QhBAygKAKIgOABQgZl3jEkvgA4ZjcQgQgGg6hPQg5hOgxhRQgyhTgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUIAUgdQEWiWCagBQA7AAA8A1IgBAAQkhFIg6Gng");
	this.shape_50.setTransform(10.325,89.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#003300").ss(10,1,1).p("Amu2XQCkgmC2AAQCzAACmAmQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC6QgIAagHAaQAFAygGAjAC+rfQAPi1APkDQAQh/AThmQADgOADgNQAFgbAFgVAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAhgmAkgkQEwkwGKhaQgDgJgDgJAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFA7VthQEXiWCaAAQA6AAA9A0QAKAJAKAKQA4A4ARAwAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgU");
	this.shape_51.setTransform(11.05,79.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DA9063").s().p("AhBC1Qgig5gRgXQgcgkgugQQg2gShugBQhVAAiQgNIiRgMIAAgFIgPgdQArhvFRhNQEhhDEFAAQBhAACFBDQBIAjBkA/QAlAVA2BSQA0BOAMArQi5gsg/gOQhlgWhQAAQg9AAgYALQgVAJgSAdIguBPQgoA9hBBCIgDABQgDABAAADQg7gvgog5g");
	this.shape_52.setTransform(0.55,160.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AEqBrQg8hYAAh2QAAgXADglQADgoAEgIIAigzQBQAyCeAkQDUAwD3gOIAEAuQADAIAEAPQADAPAAAKQAABlhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhlQAAgKADgPQADgQAEgHIAEguQD2AODVgwQCegkBQgyIAiAzQAEAIADApQADAkAAAWQAAB2g8BZQhpCbkHAAQiQAAhjhug");
	this.shape_53.setTransform(-0.1,93.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9EDBB2").s().p("AxgQTQk9k9hUmcIAWgEQADAKAFAJQgFgJgDgKQgCgLAAgJQAAgaAPhFQAThWAehRQBXjtCGhRQBjg8DsglQEfgiCKgTQBXgLAjgdQAcgYACgtQgDg4gBgfQAAg5AWgpIAAgKQgHjJg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC1IgUAUQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCdQCpBlBkDrQAoBgASBdQAGAfADAcQhnFMkJEKQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAeIAAAGICRALQCQANBWABQBtABA3ASQAtAPAcAlQARAWAjA5QAnA6A9AvQAAgDACgCIADgBQBAhBAog+IAuhOQASgeAVgJQAZgLA8AAQBRAABkAXQBAAOC5ArQgMgqg0hPQg3hTgkgVQhlg+hIgkQiFhChhAAQkFAAkhBCgACxh6IghAyQgEAIgDApQgDAjAAAXQAAB3A8BYQBpCcEGAAQCRgBBihuQBVhfAAhmQAAgKgDgOQgEgQgDgIIgEgtQj3AOjUgwQiegjhRgyQgZgRgSgRQASARAZARgAw+AoQgEAHgDAPQgDAPAAAKQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDgkQgEgpgDgIIgigzQAagQASgRQgSARgaAQQhQAzieAkQjVAuj2gMgANrgDQAzgDA1gGQg1AGgzADgAw6gFQg0gEg0gFQA0AFA0AEgASUsTIAZgRQANgvAIgZQAQguAWgdQA+hUCQAAQBZAACmBMQAtAUAZAfIAdAmIABACIgZATIgDB4QgFBagWBjQgOA8gtBYQgzBkgoAcQg5AmhJA4QhBAzgKAJIgOABQgZl3jEkvgA4ZjbQgQgHg6hPQg5hOgxhRQgyhTgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUIAUgdQEWiWCagBQA7AAA8A1IgBAAQkhFIg6Gng");
	this.shape_54.setTransform(10.325,79.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(10,1,1).p("APXhLQAEAHADAQQADAPAAAJQAABmhUBfQhiBuiRAAQkGAAhqibQg8hZAAh2QAAgWADglQAEgpADgHAQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgRAw6iFQA0AFA0AEQD2AODVgwQCegkBQgyQAagRASgRAvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgH");
	this.shape_55.setTransform(-0.1,81.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#003300").ss(10,1,1).p("Amu2XQCkgmC2AAQCzAACmAmQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC6QgIAagHAaQAFAygGAjAC+rfQAPi1APkDQAQh/AThmQADgOADgNQAFgbAFgVAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAytvDQAhgmAkgkQEwkwGKhaQgDgJgDgJA7VthQEXiWCaAAQA6AAA9A0AklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAK");
	this.shape_56.setTransform(11.05,69.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DA9063").s().p("AhBC1Qgig5gRgXQgcgkgugQQg2gShugBQhVAAiQgNIiRgMIAAgFIgPgdQArhuFRhPQEhhCEFAAQBhAACFBCQBIAkBkA/QAlAUA2BUQA0BNAMArQi5gsg/gOQhlgWhQAAQg9AAgYALQgVAJgSAdIguBPQgoA9hBBCIgDABQgDABAAADQg7gvgog5g");
	this.shape_57.setTransform(0.55,150.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AEqBrQg8hZAAh1QAAgXADglQADgoAEgIIAigzQBQAyCeAkQDUAwD3gOIAEAuQADAHAEAQQADAPAAAKQAABlhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhmQAAgJADgPQADgQAEgHIAEguQD2AODVgwQCegkBQgyIAiAzQAEAHADAqQADAkAAAWQAAB2g8BZQhpCbkHAAQiQAAhjhug");
	this.shape_58.setTransform(-0.1,83.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#009900").s().p("AV6NyQgShdgohfQhkjsiphmQkCidgugZQiOhOiVgyQhJgXgqgPQhQgbgFgOQgNglgIg6QgJg9AFgiIAUgUQAPi2APkCQARh/AShnIAGgbIACABQGHBaEwEvQB4B4BXCHQDEEuAaF4QADA2AAA3QAADPgxC6IgPA0QgDgbgGgggA3CHwQAAhvAOhqQA6mmEilIIABAAIAUATQA4A4ARAwQgRgwg4g4IgUgTQAggmAlglQEwkwGKhaQAtCYAaBnQA6DsAHDJIAAAKQgWApABA5QAAAgADA4QgBAsgcAXQgkAdhXAMQiKASkfAjQjrAkhkA9QiFBRhYDtQgdBSgUBVQgPBFAAAaQAAAKACAKIgWAEQgfiWAAikg");
	this.shape_59.setTransform(2.5,19.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9EDBB2").s().p("AxgQTQk9k9hUmcIAWgEQADAJAFALQgFgLgDgJQgCgLAAgKQAAgZAPhFQAThVAehSQBXjtCGhRQBjg8DsglQEfgiCKgTQBXgLAjgdQAcgZACgsQgDg4gBgfQAAg5AWgpIAAgLQgHjIg7jsQgZhnguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC1IgUAUQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCdQCpBlBkDrQAoBgASBdQAGAgADAbQhnFMkJEKQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBvIAPAdIAAAGICRALQCQANBWABQBtABA3ASQAtAPAcAlQARAWAjA5QAnA6A9AvQAAgDACgCIADgBQBAhCAog9IAuhOQASgeAVgJQAZgLA8AAQBRABBkAVQBAAOC5AtQgMgrg0hPQg3hTgkgUQhlg/hIgkQiFhChhAAQkFAAkhBCgACxh6IghAyQgEAIgDApQgDAkAAAWQAAB3A8BYQBpCcEGgBQCRAABihuQBVhfAAhmQAAgJgDgPQgEgQgDgIIgEgsQAzgEA1gFQg1AFgzAEQj3ANjUgwQiegjhRgyQgZgRgSgRQASARAZARgAw+AoQgEAHgDAPQgDAQAAAJQAABnBUBfQBiBtCRAAQEGAABqiaQA8hZAAh3QAAgXgDgjQgEgpgDgHIgig0QAagQASgSQgSASgaAQQhQAzieAkQjVAuj2gMgAw6gFQg0gEg0gFQA0AFA0AEgASUsTIAZgRQANgvAIgZQAQguAWgdQA+hTCQgBQBZAACmBMQAtATAZAgIAdAmIABACIgZATIgDB4QgFBagWBjQgOA8gtBYQgzBjgoAdQg5AmhJA4QhBAzgKAJIgOABQgZl3jEkvgA4ZjbQgQgHg6hPQg5hOgxhRQgyhTgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgTIAUgeQEWiXCaABQA7AAA8A0IgBAAQkhFHg6Gog");
	this.shape_60.setTransform(10.325,69.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#003300").ss(10,1,1).p("AEF2XQAFgbAFgVAEF2XQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADPgxC5QgIAbgHAZQAFAygGAkAmu2XQCkgmC2AAQCzAACmAmAC+rfQAPi1APkDQAQh/AThmQADgOADgNACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiWAAikQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghAtRMQQAshuFRhOQEhhCEFAAQBhAACFBCQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUA7VthQEXiWCaAAQA6AAA9A0QAhgmAkgkQEwkwGKhaQgDgJgDgJAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBFAAAZQAAAKADAKQACAKAFAK");
	this.shape_61.setTransform(11.05,59.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DA9063").s().p("AhBC1Qgig5gRgWQgcglgugQQg2gShugBQhVgBiQgMIiRgMIAAgFIgPgdQArhuFRhPQEhhCEFAAQBhAACFBCQBIAkBkA/QAlAUA2BUQA0BNAMArQi5gsg/gOQhlgWhQAAQg9AAgYALQgVAJgSAeIguBOQgoA9hBBCIgDABQgDABAAADQg7gvgog5g");
	this.shape_62.setTransform(0.55,140.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AEqBrQg8hZAAh1QAAgXADglQADgoAEgIIAigzQBQAyCeAkQDUAwD3gOIAEAuQADAHAEAQQADAPAAAKQAABlhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhmQAAgJADgPQADgQAEgHIAEguQD2AODVgwQCegjBQgzIAiAzQAEAHADAqQADAkAAAWQAAB2g8BZQhpCbkHAAQiQAAhjhug");
	this.shape_63.setTransform(-0.1,73.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9EDBB2").s().p("AxgQTQk9k9hUmcIAWgEQADAJAFALQgFgLgDgJQgCgKAAgLQAAgaAPhEQAThVAehSQBXjtCGhQQBjg9DsglQEfgiCKgTQBXgLAjgdQAcgZACgsQgDg4gBgfQAAg5AWgqIAAgKQgHjIg7jsQgZhnguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC2IgUATQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAzCPBOQAtAZEDCdQCpBmBkDqQAoBgASBdQAGAgADAbQhnFMkJEKQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBvIAPAdIAAAGICRALQCQANBWAAQBtACA3ASQAtAPAcAlQARAWAjA5QAnA5A9AwQAAgDACgCIADgBQBAhCAog9IAuhOQASgeAVgJQAZgKA8AAQBRAABkAVQBAAPC5AsQgMgrg0hPQg3hTgkgUQhlg/hIgkQiFhDhhAAQkFAAkhBDgACxh7IghAzQgEAIgDApQgDAkAAAWQAAB3A8BYQBpCcEGgBQCRAABihuQBVhfAAhmQAAgJgDgQQgEgPgDgHIgEgtQj3ANjUgwQiegjhRgzQgZgQgSgRQASARAZAQgAw+AoQgEAHgDAPQgDAQAAAJQAABnBUBfQBiBtCRAAQEGAABqiaQA8hZAAh3QAAgWgDgkQgEgpgDgHIgig0QAagQASgSQgSASgaAQQhQAzieAkQjVAuj2gNgANrgCQAzgEA1gFQg1AFgzAEgAw6gGQg0gDg0gGQA0AGA0ADgASUsTIAZgRQANgvAIgZQAQgtAWgeQA+hTCQgBQBZABCmBKQAtAUAZAgIAdAmIABACIgZATIgDB4QgFBagWBjQgOA8gtBYQgzBjgoAdQg5AmhJA4QhBAygKALIgOAAQgZl3jEkvgA4ZjbQgQgHg6hPQg5hOgxhSQgyhSgQhCQgJglAAg0QAAgkAUgoQAZgqAKgTIAUgfQEWiWCaABQA7AAA8A0IgBAAQkhFHg6Gog");
	this.shape_64.setTransform(10.325,59.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(10,1,1).p("AQ7iCQg0AGg0ADQj2AOjVgwQiegkhQgyQgagRgSgRAPXhLQAEAHADAQQADAPAAAJQAABmhUBfQhiBuiRAAQkGAAhqibQg8hYAAh3QAAgWADglQAEgpADgHAw6iFQA0AFA0AEQD2AODVgwQCegjBQgzQAagRASgRAvWhOQgEAIgDAPQgDAPAAAKQAABlBUBfQBiBuCRAAQEGAABqibQA8hYAAh2QAAgXgDgkQgEgqgDgH");
	this.shape_65.setTransform(-0.1,61.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#003300").ss(10,1,1).p("AEF2XQAFgbAFgVAEF2XQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADPgxC5QgIAbgHAZQAFAygGAkAmu2XQCkgmC2AAQCzAACmAmAC+rfQAPi1APkDQAQh/AThmQADgOADgNACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k8hVmdQgfiWAAikQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghAtRMQQAshuFRhOQEhhCEFAAQBhAACFBCQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUA7VthQEXiWCaAAQA6AAA9A0QAhgmAkgkQEwkwGKhaQgDgJgDgJAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBFAAAZQAAAKADAKQACAKAFAK");
	this.shape_66.setTransform(11.05,49.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DA9063").s().p("AhBC1Qgig6gRgVQgcglgugQQg2gShugBQhVgBiQgMIiRgMIAAgFIgPgdQArhvFRhOQEhhCEFAAQBhAACFBCQBIAlBkA+QAlAVA2BTQA0BNAMArQi5gsg/gOQhlgWhQAAQg9AAgYAKQgVAKgSAeIguBNQgoA+hBBCIgDABQgDABAAADQg7gvgog5g");
	this.shape_67.setTransform(0.55,130.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AEqBrQg8hZAAh2QAAgWADgkQADgpAEgIIAigzQBQAyCeAkQDUAwD3gOIAEAuQADAHAEAQQADAPAAAKQAABlhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhmQAAgJADgPQADgPAEgIIAEguQD2AODVgwQCegjBQgzIAiAzQAEAHADAqQADAkAAAWQAAB2g8BZQhpCbkHAAQiQAAhjhug");
	this.shape_68.setTransform(-0.1,63.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADAKAFALQgFgLgDgKQgCgJAAgLQAAgaAPhEQAThVAehSQBXjtCGhQQBjg9DsgkQEfgkCKgSQBXgLAjgdQAcgZACgsQgDg4gBgfQAAg5AWgqIAAgKQgHjIg7jsQgZhnguiYQClgmC1AAQCzAACmAmIgGAbQgTBmgQCAQgPECgPC2IgUATQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAzCPBOQAtAZEDCcQCpBnBkDqQAoBgASBdQAGAgADAaQhnFOkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBvIAPAdIAAAGICRAMQCQAMBWAAQBtACA3ASQAtAPAcAlQARAWAjA5QAnA5A9AwQAAgEACgBIADgBQBAhCAog9IAuhOQASgdAVgKQAZgKA8AAQBRAABkAVQBAAOC5AtQgMgsg0hOQg3hTgkgUQhlg/hIgkQiFhDhhAAQkFAAkhBDgACxh7IghAzQgEAIgDApQgDAkAAAWQAAB3A8BYQBpCbEGAAQCRAABihuQBVhfAAhmQAAgKgDgPQgEgPgDgHIgEgtQj3AMjUguQiegkhRgzQgZgQgSgRQASARAZAQgAw+AnQgEAIgDAPQgDAQAAAJQAABnBUBfQBiBuCRAAQEGgBBqiaQA8hZAAh3QAAgXgDgjQgEgpgDgHIgig0QAagQASgSQgSASgaAQQhQAzieAkQjVAuj2gNgANrgCQAzgEA1gFQg1AFgzAEgAw6gGQg0gDg0gGQA0AGA0ADgASUsUIAZgQQANgvAIgZQAQgtAWgeQA+hTCQgBQBZABCmBKQAtAUAZAgIAdAmIABABIgZAUIgDB4QgFBbgWBiQgOA8gtBYQgzBjgoAdQg5AmhJA4QhBAygKALIgOABQgZl4jEkwgA4ZjbQgQgHg6hPQg5hOgxhSQgyhSgQhCQgJglAAg0QAAgkAUgoQAZgqAKgTIAUgfQEWiVCaAAQA7AAA8AzIgBABQkhFHg6Gog");
	this.shape_69.setTransform(10.325,49.55);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(10,1,1).p("Aw6iFQA0AFA0AEQD2AODVgwQCegkBQgyQAagRASgRAvWhOQgEAIgDAPQgDAPAAAKQAABlBUBfQBiBuCRAAQEGAABqibQA8hYAAh2QAAgXgDgkQgEgqgDgHAQ7iCQg0AGg0ADQj2AOjVgwQiegkhQgyQgagRgSgRAPXhLQAEAHADAQQADAPAAAJQAABmhUBfQhiBuiRAAQkGAAhqibQg8hYAAh3QAAgWADglQAEgpADgH");
	this.shape_70.setTransform(-0.1,51.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#003300").ss(10,1,1).p("AEF2XQAFgbAFgVAC+rfQAPi1APkDQAQh/AThmQADgOADgNQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADPgxC5QgIAbgHAZQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k8hVmdQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAmu2XQCkgmC2AAQCzAACmAmACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQAFAygGAkAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAmu2XQgDgJgDgJA7VthQEXiWCaAAQA6AAA9A0QAhgmAkgkQEwkwGKhaAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBFAAAZQAAAKADAKQACAKAFAKAklrkQgHjIg7jtQgahmgtiYAtRMQQAshuFRhOQEhhCEFAAQBhAACFBCQBIAkBlA+QAkAVA3BTQA0BPAMAqQi5gshAgNQhkgXhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgMQiPgNgDAAIAAgF");
	this.shape_71.setTransform(11.05,39.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AEqBrQg8hZAAh2QAAgWADgkQADgqAEgHIAigzQBQAyCeAkQDUAwD3gOIAEAuQADAHAEAQQADAPAAAJQAABmhVBfQhhBuiSAAQkFAAhqibgAuMCVQhUhfAAhmQAAgJADgPQADgPAEgIIAEguQD2AODVgwQCegjBQgzIAiAzQAEAHADApQADAlAAAXQAAB2g8BYQhpCbkHAAQiQAAhjhug");
	this.shape_72.setTransform(-0.1,53.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADALAFAKQgFgKgDgLQgCgJAAgLQAAgaAPhEQAThVAehSQBXjsCGhRQBjg9DsgkQEfgkCKgSQBXgLAjgeQAcgXACgsQgDg4gBggQAAg5AWgqIAAgKQgHjIg7jsQgZhnguiYQClgmC1AAQCzAACmAmIgGAbQgTBmgQCAQgPECgPC2IgUAUQgFAiAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAXQCUAyCPBOQAtAZEDCcQCpBmBkDsQAoBfASBdQAGAgADAaQhnFOkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBvIAPAeIAAAEICRANQCQAMBWAAQBtACA3ASQAtAPAcAlQARAWAjA5QAnA5A9AwQAAgEACgBIADAAQBAhCAog+IAuhOQASgeAVgJQAZgKA8AAQBRgBBkAWQBAAOC5AtQgMgsg0hOQg3hTgkgUQhlg/hIgkQiFhDhhAAQkFAAkhBDgACxh7IghA0QgEAHgDApQgDAjAAAXQAAB3A8BZQBpCaEGAAQCRAABihtQBVhfAAhnQAAgJgDgQQgEgPgDgHIgEgtQj3AMjUguQiegkhRgzQgZgQgSgSQASASAZAQgAw+AnQgEAIgDAQQgDAOAAAKQAABnBUBfQBiBuCRAAQEGgBBqiaQA8hZAAh3QAAgXgDgjQgEgpgDgHIgigzQAagRASgSQgSASgaARQhQAyieAjQjVAvj2gNgANrgCQAzgEA1gFQg1AFgzAEgAw6gGQg0gDg0gGQA0AGA0ADgASUsUIAZgRQANgtAIgaQAQgtAWgeQA+hUCQABQBZAACmBKQAtAVAZAfIAdAmIABABIgZATIgDB5QgFBbgWBjQgOA7gtBYQgzBjgoAcQg5AnhJA4QhBAygKALIgOABQgZl4jEkwgA4ZjcQgQgGg6hPQg5hOgxhSQgyhSgQhCQgJglAAg0QAAgkAUgoQAZgqAKgTIAUgfQEWiVCaAAQA7gBA8A0IgBABQkhFHg6Gog");
	this.shape_73.setTransform(10.325,39.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(10,1,1).p("AQ7iCQg0AGg0ADQj2AOjVgwQiegkhQgyQgagRgSgRAPXhLQAEAHADAQQADAPAAAJQAABmhUBfQhiBuiRAAQkGAAhqibQg8hYAAh3QAAgWADglQAEgpADgHAvWhOQgEAIgDAPQgDAPAAAKQAABlBUBfQBiBuCRAAQEGAABqibQA8hYAAh2QAAgXgDgkQgEgqgDgHAw6iFQA0AFA0AEQD2AODVgwQCegjBQgzQAagRASgR");
	this.shape_74.setTransform(-0.1,61.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#003300").ss(10,1,1).p("AC+rfQAPi1APkDQAQh/AThmQADgOADgNQAFgbAFgVAmu2XQCkgmC2AAQCzAACmAmQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADPgxC5QgIAbgHAZQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k8hVmdQgfiWAAikQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQAFAygGAkAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghAtRMQQAshuFRhOQEhhCEFAAQBhAACFBCQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAytvDQAhgmAkgkQEwkwGKhaA7VthQEXiWCaAAQA6AAA9A0AklrkQgHjIg7jtQgahmgtiYQgDgJgDgJAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBFAAAZQAAAKADAKQACAKAFAK");
	this.shape_75.setTransform(11.05,49.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADAKAFALQgFgLgDgKQgCgJAAgLQAAgaAPhEQAThVAehSQBXjtCGhQQBjg9DsgkQEfgkCKgSQBXgLAjgdQAcgZACgsQgDg4gBgfQAAg5AWgqIAAgKQgHjIg7jsQgZhnguiYQClgmC1AAQCzAACmAmIgGAbQgTBmgQCAQgPECgPC2IgUATQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAzCPBOQAtAZEDCcQCpBnBkDqQAoBgASBdQAGAgADAaQhnFOkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBvIAPAdIAAAGICRAMQCQAMBWAAQBtACA3ASQAtAPAcAlQARAWAjA5QAnA5A9AwQAAgEACgBIADgBQBAhCAog9IAuhOQASgdAVgKQAZgKA8AAQBRAABkAVQBAAOC5AtQgMgsg0hOQg3hTgkgUQhlg/hIgkQiFhDhhAAQkFAAkhBDgACxh7IghAzQgEAIgDApQgDAkAAAWQAAB3A8BYQBpCbEGAAQCRAABihuQBVhfAAhmQAAgKgDgPQgEgPgDgHIgEgtQj3AMjUguQiegkhRgzQgZgQgSgRQASARAZAQgAw6gGIgEAtQgEAIgDAPQgDAQAAAJQAABnBUBfQBiBuCRAAQEGgBBqiaQA8hZAAh3QAAgXgDgjQgEgpgDgHIgig0QAagQASgSQgSASgaAQQhQAzieAkQjVAuj2gNQg0gDg0gGQA0AGA0ADgANrgCQAzgEA1gFQg1AFgzAEgASUsUIAZgQQANgvAIgZQAQgtAWgeQA+hTCQgBQBZABCmBKQAtAUAZAgIAdAmIABABIgZAUIgDB4QgFBbgWBiQgOA8gtBYQgzBjgoAdQg5AmhJA4QhBAygKALIgOABQgZl4jEkwgA4ZjbQgQgHg6hPQg5hOgxhSQgyhSgQhCQgJglAAg0QAAgkAUgoQAZgqAKgTIAUgfQEWiVCaAAQA7AAA8AzIgBABQkhFHg6Gog");
	this.shape_76.setTransform(10.325,49.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#003300").ss(10,1,1).p("AC+rfQAPi1APkDQAQh/AThmQADgOADgNQAFgbAFgVAmu2XQCkgmC2AAQCzAACmAmQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADPgxC5QgIAbgHAZQAFAygGAkACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiWAAikQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghAtRMQQAshuFRhOQEhhCEFAAQBhAACFBCQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAytvDQAhgmAkgkQEwkwGKhaA7VthQEXiWCaAAQA6AAA9A0AklrkQgHjIg7jtQgahmgtiYQgDgJgDgJAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBFAAAZQAAAKADAKQACAKAFAK");
	this.shape_77.setTransform(11.05,59.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9EDBB2").s().p("AxgQTQk9k9hUmcIAWgEQADAJAFALQgFgLgDgJQgCgKAAgLQAAgaAPhEQAThVAehSQBXjtCGhQQBjg9DsglQEfgiCKgTQBXgLAjgdQAcgZACgsQgDg4gBgfQAAg5AWgqIAAgKQgHjIg7jsQgZhnguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC2IgUATQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAzCPBOQAtAZEDCdQCpBmBkDqQAoBgASBdQAGAgADAbQhnFMkJEKQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBvIAPAdIAAAGICRALQCQANBWAAQBtACA3ASQAtAPAcAlQARAWAjA5QAnA5A9AwQAAgDACgCIADgBQBAhCAog9IAuhOQASgeAVgJQAZgKA8AAQBRAABkAVQBAAPC5AsQgMgrg0hPQg3hTgkgUQhlg/hIgkQiFhDhhAAQkFAAkhBDgACxh7IghAzQgEAIgDApQgDAkAAAWQAAB3A8BYQBpCcEGgBQCRAABihuQBVhfAAhmQAAgJgDgQQgEgPgDgHIgEgtQAzgEA1gFQg1AFgzAEQj3ANjUgwQiegjhRgzQgZgQgSgRQASARAZAQgAw+AoQgEAHgDAPQgDAQAAAJQAABnBUBfQBiBtCRAAQEGAABqiaQA8hZAAh3QAAgWgDgkQgEgpgDgHIgig0QAagQASgSQgSASgaAQQhQAzieAkQjVAuj2gNgAw6gGQg0gDg0gGQA0AGA0ADgASUsTIAZgRQANgvAIgZQAQgtAWgeQA+hTCQgBQBZABCmBKQAtAUAZAgIAdAmIABACIgZATIgDB4QgFBagWBjQgOA8gtBYQgzBjgoAdQg5AmhJA4QhBAygKALIgOAAQgZl3jEkvgA4ZjbQgQgHg6hPQg5hOgxhSQgyhSgQhCQgJglAAg0QAAgkAUgoQAZgqAKgTIAUgfQEWiWCaABQA7AAA8A0IgBAAQkhFHg6Gog");
	this.shape_78.setTransform(10.325,59.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(10,1,1).p("Aw6iFQA0AFA0AEQD2AODVgwQCegkBQgyQAagRASgRAvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgHAQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgRAPXhLQAEAHADAQQADAPAAAJQAABmhUBfQhiBuiRAAQkGAAhqibQg8hZAAh2QAAgWADglQAEgpADgH");
	this.shape_79.setTransform(-0.1,81.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#003300").ss(10,1,1).p("AEF2XQAFgbAFgVAC+rfQAPi1APkDQAQh/AThmQADgOADgNQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC6QgIAagHAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAmu2XQCkgmC2AAQCzAACmAmAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAytvDQAhgmAkgkQEwkwGKhaQgDgJgDgJA7VthQEXiWCaAAQA6AAA9A0AklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQAFAygGAj");
	this.shape_80.setTransform(11.05,69.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9EDBB2").s().p("AxgQTQk9k9hUmcIAWgEQADAJAFALQgFgLgDgJQgCgLAAgKQAAgZAPhFQAThVAehSQBXjtCGhRQBjg8DsglQEfgiCKgTQBXgLAjgdQAcgZACgsQgDg4gBgfQAAg5AWgpIAAgLQgHjIg7jsQgZhnguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC1IgUAUQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCdQCpBlBkDrQAoBgASBdQAGAgADAbQhnFMkJEKQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBvIAPAdIAAAGICRALQCQANBWABQBtABA3ASQAtAPAcAlQARAWAjA5QAnA6A9AvQAAgDACgCIADgBQBAhCAog9IAuhOQASgeAVgJQAZgLA8AAQBRABBkAVQBAAOC5AtQgMgrg0hPQg3hTgkgUQhlg/hIgkQiFhChhAAQkFAAkhBCgACxh6IghAyQgEAIgDApQgDAkAAAWQAAB3A8BYQBpCcEGgBQCRAABihuQBVhfAAhmQAAgJgDgPQgEgQgDgIIgEgsQj3ANjUgwQiegjhRgyQgZgRgSgRQASARAZARgAw6gFIgEAtQgEAHgDAPQgDAQAAAJQAABnBUBfQBiBtCRAAQEGAABqiaQA8hZAAh3QAAgXgDgjQgEgpgDgHIgig0QAagQASgSQgSASgaAQQhQAzieAkQjVAuj2gMQg0gEg0gFQA0AFA0AEgANrgCQAzgEA1gFQg1AFgzAEgASUsTIAZgRQANgvAIgZQAQguAWgdQA+hTCQgBQBZAACmBMQAtATAZAgIAdAmIABACIgZATIgDB4QgFBagWBjQgOA8gtBYQgzBjgoAdQg5AmhJA4QhBAzgKAJIgOABQgZl3jEkvgA4ZjbQgQgHg6hPQg5hOgxhRQgyhTgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgTIAUgeQEWiXCaABQA7AAA8A0IgBAAQkhFHg6Gog");
	this.shape_81.setTransform(10.325,69.55);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(10,1,1).p("AvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgHAw6iFQA0AFA0AEQD2AODVgwQCegkBQgyQAagRASgRAPXhLQAEAHADAQQADAPAAAJQAABmhUBfQhiBuiRAAQkGAAhqibQg8hZAAh2QAAgWADglQAEgpADgHAQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgR");
	this.shape_82.setTransform(-0.1,91.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#003300").ss(10,1,1).p("AEF2XQAFgbAFgVAC+rfQAPi1APkDQAQh/AThmQADgOADgNQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC6QgIAagHAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAmu2XQCkgmC2AAQCzAACmAmAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuA7VthQEXiWCaAAQA6AAA9A0QAhgmAkgkQEwkwGKhaQgDgJgDgJAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAfADAbQAFAygGAj");
	this.shape_83.setTransform(11.05,79.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#9EDBB2").s().p("AxgQTQk9k9hUmcIAWgEQADAKAFAJQgFgJgDgKQgCgLAAgJQAAgaAPhFQAThWAehRQBXjtCGhRQBjg8DsglQEfgiCKgTQBXgLAjgdQAcgYACgtQgDg4gBgfQAAg5AWgpIAAgKQgHjJg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC1IgUAUQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCdQCpBlBkDrQAoBgASBdQAGAfADAcQhnFMkJEKQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAeIAAAGICRALQCQANBWABQBtABA3ASQAtAPAcAlQARAWAjA5QAnA6A9AvQAAgDACgCIADgBQBAhBAog+IAuhOQASgeAVgJQAZgLA8AAQBRAABkAXQBAAOC5ArQgMgqg0hPQg3hTgkgVQhlg+hIgkQiFhChhAAQkFAAkhBCgACxh6IghAyQgEAIgDApQgDAjAAAXQAAB3A8BYQBpCcEGAAQCRgBBihuQBVhfAAhmQAAgKgDgOQgEgQgDgIIgEgtQAzgDA1gGQg1AGgzADQj3AOjUgwQiegjhRgyQgZgRgSgRQASARAZARgAw6gFIgEAtQgEAHgDAPQgDAPAAAKQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDgkQgEgpgDgIIgigzQAagQASgRQgSARgaAQQhQAzieAkQjVAuj2gMQg0gEg0gFQA0AFA0AEgASUsTIAZgRQANgvAIgZQAQguAWgdQA+hUCQAAQBZAACmBMQAtAUAZAfIAdAmIABACIgZATIgDB4QgFBagWBjQgOA8gtBYQgzBkgoAcQg5AmhJA4QhBAzgKAJIgOABQgZl3jEkvgA4ZjbQgQgHg6hPQg5hOgxhRQgyhTgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUIAUgdQEWiWCagBQA7AAA8A1IgBAAQkhFIg6Gng");
	this.shape_84.setTransform(10.325,79.55);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#003300").ss(10,1,1).p("AEF2XQAFgbAFgVAC+rfQAPi1APkDQAQh/AThmQADgOADgNQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC7QgIAZgHAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAmu2XQCkgmC2AAQCzAACmAmAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuA7VthQEXiWCaAAQA6AAA9A0QAhgmAkgkQEwkwGKhaQgDgJgDgJAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAgADAaQAFAygGAj");
	this.shape_85.setTransform(11.05,89.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9EDBB2").s().p("AxgQTQk9k9hUmcIAWgEQADAJAFAKQgFgKgDgJQgCgLAAgJQAAgaAPhFQAThWAehRQBXjsCGhSQBjg8DsglQEfgiCKgSQBXgMAjgeQAcgXACgtQgDg3gBggQAAg5AWgpIAAgKQgHjJg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC1IgUAUQgFAjAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCdQCpBlBkDrQAoBgASBdQAGAfADAcQhnFNkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAeIAAAFICRAMQCQANBWABQBtABA3ASQAtAQAcAkQARAWAjA6QAnA5A9AuQAAgDACgBIADAAQBAhDAog9IAuhOQASgdAVgKQAZgLA8AAQBRAABkAXQBAAOC5ArQgMgqg0hPQg3hTgkgVQhlg+hIgkQiFhChhAAQkFAAkhBCgACxh6IghAyQgEAIgDApQgDAjAAAXQAAB3A8BYQBpCcEGAAQCRAABihvQBVheAAhnQAAgKgDgOQgEgQgDgIIgEgtQAzgDA1gGQg1AGgzADQj3AOjUgwQiegjhRgyQgZgRgSgSQASASAZARgAw6gFIgEAtQgEAHgDAPQgDAQAAAJQAABmBUBfQBiBuCRAAQEGABBqicQA8hYAAh3QAAgWgDgkQgEgpgDgIIgigzQAagQASgRQgSARgaAQQhQAzieAjQjVAwj2gNQg0gEg0gFQA0AFA0AEgASUsTIAZgSQANguAIgZQAQguAWgdQA+hUCQAAQBZAACmBMQAtATAZAgIAdAmIABACIgZASIgDB5QgFBbgWBiQgOA8gtBYQgzBkgoAbQg5AnhJA4QhBAygKAKIgOABQgZl3jEkvgA4ZjcQgQgGg6hPQg5hOgxhRQgyhTgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUIAUgdQEWiWCagBQA7AAA8A1IgBAAQkhFIg6Gng");
	this.shape_86.setTransform(10.325,89.55);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#003300").ss(10,1,1).p("AC+rfQAPi1APkDQAQh/AThmQADgOADgNQAFgbAFgVAEF2XQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC7QgIAZgHAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAhgmAkgkQEwkwGKhaQCkgmC2AAQCzAACmAmgAklrkQgHjIg7jtQgahmgtiYQgDgJgDgJAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKAytvDQAKAJAKAKQA4A4ARAwA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDrQAoBgARBdQAHAgADAaQAFAygGAjA7VthQEXiWCaAAQA6AAA9A0");
	this.shape_87.setTransform(11.05,99.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADAKAFAKQgFgKgDgKQgCgJAAgKQAAgaAPhFQAThWAehRQBXjsCGhSQBjg8DsgkQEfgkCKgRQBXgMAjgeQAcgYACgrQgDg5gBgfQAAg5AWgpIAAgKQgHjJg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBngQB+QgPEDgPC1IgUAVQgFAiAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAXQCUAyCPBOQAtAZEDCcQCpBnBkDrQAoBfASBdQAGAfADAbQhnFOkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAfIAAAEICRAMQCQANBWABQBtAAA3ATQAtAQAcAkQARAWAjA6QAnA5A9AuQAAgDACgBIADAAQBAhCAog+IAuhOQASgdAVgKQAZgLA8AAQBRAABkAXQBAAOC5ArQgMgqg0hPQg3hTgkgVQhlg+hIgkQiFhChhAAQkFAAkhBCgACxh6IghAzQgEAHgDApQgDAjAAAXQAAB3A8BZQBpCaEGABQCRAABihuQBVhfAAhnQAAgKgDgOQgEgQgDgIIgEgtQj3ANjUgvQiegjhRgyQgZgRgSgSQASASAZARgAw+AnQgEAIgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGABBqicQA8hYAAh3QAAgWgDgkQgEgpgDgIIgigyQAagRASgRQgSARgaARQhQAyieAjQjVAwj2gNgANrgDQAzgDA1gGQg1AGgzADgAw6gFQg0gEg0gFQA0AFA0AEgASUsUIAZgRQANgtAIgaQAQgtAWgeQA+hTCQAAQBZgBCmBMQAtATAZAgIAdAmIABABIgZATIgDB5QgFBagWBkQgOA7gtBYQgzBkgoAbQg5AnhJA4QhBAzgKAJIgOABQgZl3jEkwgA4ZjcQgQgGg6hPQg5hOgxhRQgyhTgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUIAUgdQEWiWCagBQA7AAA8A1IgBAAQkhFIg6Gng");
	this.shape_88.setTransform(10.325,99.55);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#003300").ss(10,1,1).p("AC+rfQAPi1APkDQAQh/AThmQADgOADgNQAFgbAFgVAEF2XQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC7QgIAZgHAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAmu2XQCkgmC2AAQCzAACmAmAklrkQgHjIg7jtQgahmgtiYQgDgJgDgJAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKA7VthQEXiWCaAAQA6AAA9A0QAhgmAkgkQEwkwGKhaA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDsQAoBfARBdQAHAgADAaQAFAygGAj");
	this.shape_89.setTransform(11.05,109.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(10,1,1).p("AvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgHAw6iFQA0AFA0AEQD2AODVgwQCegkBQgyQAagRASgRAPXhLQAEAHADAQQADAPAAAKQAABlhUBfQhiBuiRAAQkGAAhqibQg8hZAAh2QAAgWADglQAEgpADgHAQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgR");
	this.shape_90.setTransform(-0.1,131.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#003300").ss(10,1,1).p("AEF2XQAFgbAFgVAC+rfQAPi1APkDQAQh/AThmQADgOADgNQABAAABAAQGHBaEwEwQB4B4BXCGQDEEwAZF3QAEA2AAA3QAADOgxC7QgIAZgHAaQhnFOkJEJQmwGwpiAAQpkAAmwmwQk8k9hVmcQgfiXAAijQAAhvAPhpQA5moEilHQAAgBABAAQAKAJAKAKQA4A4ARAwAmu2XQCkgmC2AAQCzAACmAmAmu2XQgDgJgDgJAklrkQgHjIg7jtQgahmgtiYAklraQgXAqABA5QAAAfAEA4QgCAsgcAYQgjAehXALQiKASkfAjQjsAlhkA8QiFBRhXDtQgeBRgUBWQgPBEAAAaQAAAKADAKQACAKAFAKA7VthQEXiWCaAAQA6AAA9A0QAhgmAkgkQEwkwGKhaA4hjXQgPgGg6hPQg5hOgyhSQgyhSgQhDQgJgkAAg0QAAgkAUgoQAZgqAKgUAtRMQQAshuFRhOQEhhDEFAAQBhAACFBDQBIAkBlA+QAkAVA3BTQA0BOAMArQi5gshAgOQhkgWhRAAQg8AAgZALQgVAJgSAeQgLATgjA7QgoA+hABCIgDAAQgCABAAAEQg9gvgng6Qgjg5gRgWQgcglgugPQg2gThtgBQhWAAiQgNQiPgMgDAAIAAgFAV4hpQAKgKBBgyQBJg4A5gnQAogcAzhjQAthYAOg8QAWhjAFhaQAChYABghAchtNQgJgKgGgJQAAgBgBAAQgTgZgKgNQgZgggtgUQimhLhZAAQiQAAg+BUQgWAdgQAuQgIAZgNAuACqrLQgFAjAIA9QAIA6AOAkQAFAPBQAcQAqAPBJAWQCUAyCPBPQAtAZEDCcQCpBmBkDsQAoBfARBdQAHAgADAaQAFAygGAj");
	this.shape_91.setTransform(11.05,119.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9EDBB2").s().p("AxgQTQk9k8hUmdIAWgFQADALAFAJQgFgJgDgLQgCgKAAgKQAAgaAPhEQAThWAehRQBXjsCGhRQBjg9DsgkQEfgkCKgRQBXgMAjgeQAcgXACgsQgDg4gBggQAAg5AWgqIAAgKQgHjIg7jtQgZhmguiYQClgmC1AAQCzAACmAmIgGAbQgTBmgQCAQgPECgPC2IgUAUQgFAiAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAXQCUAxCPBPQAtAZEDCcQCpBmBkDsQAoBfASBdQAGAgADAaQhnFOkJEJQmwGwpiAAQpjAAmwmwgAnNJPQlRBOgrBuIAPAfIAAAEICRANQCQAMBWAAQBtABA3ATQAtAPAcAlQARAWAjA6QAnA5A9AuQAAgCACgCIADAAQBAhCAog+IAuhOQASgeAVgJQAZgLA8ABQBRgBBkAWQBAAOC5AsQgMgrg0hOQg3hTgkgVQhlg+hIgkQiFhDhhAAQkFAAkhBDgACQhHQgEAHgDApQgDAkAAAWQAAB3A8BZQBpCaEGABQCRgBBihtQBVhfAAhnQAAgJgDgQQgEgPgDgHIgEguQAzgDA1gGQg1AGgzADQj3ANjUguQiegkhRgzQgZgQgSgSQASASAZAQgAw6gGIgEAtQgEAIgDAQQgDAOAAAKQAABnBUBeQBiBvCRAAQEGAABqicQA8hYAAh3QAAgXgDgjQgEgpgDgIIgigyQAagRASgSQgSASgaARQhQAyieAjQjVAwj2gOQg0gDg0gGQA0AGA0ADgASUsUIAZgRQANgtAIgaQAQgtAWgeQA+hUCQABQBZAACmBKQAtAVAZAfIAdAmIABABIgZATIgDB5QgFBagWBkQgOA7gtBYQgzBjgoAcQg5AnhJA4QhBAzgKAKIgOABQgZl4jEkwgACxh7IAAAAgA4ZjcQgQgGg6hPQg5hOgxhSQgyhSgQhCQgJglAAg0QAAgkAUgoQAZgqAKgUIAUgeQEWiWCaAAQA7AAA8A0IgBABQkhFIg6Gng");
	this.shape_92.setTransform(10.325,119.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(10,1,1).p("AvWhOQgEAHgDAQQgDAPAAAJQAABmBUBfQBiBuCRAAQEGAABqibQA8hYAAh3QAAgWgDglQgEgpgDgHAw6iFQA1AGAzADQD3AODUgwQCegjBQgzQAagQASgSAQ7iCQg0AFg0AEQj2AOjVgwQiegkhQgyQgagRgSgRAPXhLQAEAIADAPQADAPAAAKQAABlhUBfQhiBuiRAAQkGAAhqibQg8hZAAh1QAAgXADglQAEgpADgH");
	this.shape_93.setTransform(-0.1,141.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#003300").ss(10,1,1).p("AEE2XQAFgaAGgWAC+reQAPi2APkCQAQh/AThnQADgOACgNQABAAABAAQGIBbEwEvQB4B4BXCGQDEEwAZF3QAEA3AAA2QAADPgyC6QgHAagIAaQhmFNkJEJQmwGwpiAAQpkAAmwmwQk8k8hVmdQgfiWAAikQAAhuAPhqQA6mnEhlIQAAAAABgBQAKAJAKALQA4A4ARAwAmu2XQClgmC1AAQCzAAClAmAmu2XQgDgJgDgJAklrZQgXApABA5QAAAgAEA4QgCAsgcAYQgjAdhXAMQiKASkfAjQjsAkhkA9QiFBRhXDsQgeBSgUBVQgPBFAAAaQAAAKADAKQACAKAFAKAklrjQgHjJg7jsQgahngtiYA7VtgQEXiWCaAAQA6AAA9AzQAhglAkglQExkwGJhaA4hjWQgPgHg6hPQg5hOgyhRQgyhTgQhCQgJglAAg0QAAgkAUgoQAZgqAKgTAtRMRQAshvFRhOQEhhCEFAAQBhAACFBCQBIAkBlA/QAkAUA3BTQA0BPAMArQi5gshAgOQhkgWhRAAQg8AAgZAKQgVAKgSAdQgLATgjA7QgoA+hABCIgDAAQgCACAAADQg9gvgng5Qgjg6gRgWQgcgkgugQQg2gShtgBQhWgBiQgMQiPgMgDAAIAAgFAchtMQgIgLgHgJQgBAAAAgBQgTgZgKgNQgZgfgtgUQimhLhZAAQiQAAg+BTQgWAegQAtQgIAagNAuAV4hoQAKgKBBgzQBJg4A5gmQAogcAzhkQAthYAOg7QAWhjAFhbQAChXABghACqrKQgFAiAIA9QAIA6AOAlQAFAOBQAcQAqAPBJAXQCUAyCPBOQAtAZEDCdQCpBmBkDrQAoBfARBdQAHAfACAcQAFAxgFAk");
	this.shape_94.setTransform(11.05,129.0375);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#009900").s().p("AV6NyQgShdgohfQhkjsiphmQkCidgugZQiOhOiVgyQhJgXgqgPQhQgbgFgOQgNglgIg6QgJg9AFgiIAUgUQAPi2APkCQARh/AShnIAGgbIACABQGIBaEvEvQB4B5BXCGQDFEvAZF3QADA2AAA3QAADPgxC6IgPA0QgDgbgGgggA3CHwQAAhvAOhqQA6mmEilIIAAAAIAVATQA4A4ARAwQgRgwg4g4IgVgTQAigmAkglQEwkwGJhaQAuCYAaBnQA6DsAHDJIAAAKQgWApABA5QAAAgADA4QgBAsgcAXQgkAdhXAMQiKASkfAjQjrAkhkA9QiFBRhYDtQgdBSgUBVQgPBFAAAaQAAAKACAKIgWAEQgfiWAAikg");
	this.shape_95.setTransform(2.5,79.9125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{y:210.5}},{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_36},{t:this.shape_35,p:{y:69.925}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},2).to({state:[{t:this.shape_41},{t:this.shape_35,p:{y:59.925}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{y:121.4}}]},2).to({state:[{t:this.shape_46},{t:this.shape_35,p:{y:49.925}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},2).to({state:[{t:this.shape_50},{t:this.shape_35,p:{y:39.925}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_37,p:{y:101.4}}]},2).to({state:[{t:this.shape_54},{t:this.shape_35,p:{y:29.925}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_37,p:{y:91.4}}]},2).to({state:[{t:this.shape_60},{t:this.shape_59,p:{y:19.925}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{y:81.4}}]},2).to({state:[{t:this.shape_64},{t:this.shape_35,p:{y:9.925}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_37,p:{y:71.4}}]},2).to({state:[{t:this.shape_69},{t:this.shape_59,p:{y:-0.075}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},2).to({state:[{t:this.shape_73},{t:this.shape_59,p:{y:-10.075}},{t:this.shape_72},{t:this.shape_27,p:{y:120.5}},{t:this.shape_71},{t:this.shape_70}]},2).to({state:[{t:this.shape_76},{t:this.shape_59,p:{y:-0.075}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_75},{t:this.shape_74}]},20).to({state:[{t:this.shape_78},{t:this.shape_59,p:{y:9.925}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_77},{t:this.shape_55,p:{y:71.4}}]},2).to({state:[{t:this.shape_81},{t:this.shape_59,p:{y:19.925}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_80},{t:this.shape_79,p:{y:81.4}}]},2).to({state:[{t:this.shape_84},{t:this.shape_59,p:{y:29.925}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_83},{t:this.shape_82,p:{y:91.4}}]},2).to({state:[{t:this.shape_86},{t:this.shape_59,p:{y:39.925}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_85},{t:this.shape_82,p:{y:101.4}}]},2).to({state:[{t:this.shape_88},{t:this.shape_59,p:{y:49.925}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_87},{t:this.shape_79,p:{y:111.4}}]},2).to({state:[{t:this.shape_41},{t:this.shape_59,p:{y:59.925}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_89},{t:this.shape_79,p:{y:121.4}}]},2).to({state:[{t:this.shape_92},{t:this.shape_59,p:{y:69.925}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_91},{t:this.shape_90}]},2).to({state:[{t:this.shape_30},{t:this.shape_95},{t:this.shape_28},{t:this.shape_27,p:{y:210.5}},{t:this.shape_94},{t:this.shape_93}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.9,-116.8,705.7,398.90000000000003);


(lib.headSide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AIPCCQACABABABQAAgCAAgDQAAABgDACQgYAKj+gVQlDgbkdhBQh2gQhAgUQh3gmgJhVAISB/QgHAAgHAAQAHAAAEADAKeB1QgTAJh5AB");
	this.shape.setTransform(165,24.31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AL9olQj5gxmSgcQlPgXkgAAQgFAAhiAFQhjAFg1AAIAAAKIAKAAQAsHCEnFVQDVD1GXDz");
	this.shape_1.setTransform(162.5,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},6).to({state:[{t:this.shape}]},7).wait(8));

	// tounge
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC6699").ss(10,1,1).p("AoClOQAWAAAtgDQANgBAOgBQBCgFAKAAQECAADvB9QB+BBDsCzQg/A/hSBrQhFBZgpAtQgIAJgHAHAmykwIgKAAIAABaQBrCFDHCUQCzCHDCBn");
	this.shape_2.setTransform(156.5,100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6699").s().p("ADIE5QjChoiziGQjHiUhriFIAAhaIAKAAIBagoQECAADvB8QB+BCDsCzQg/A/hSBrQhFBZgpAtg");
	this.shape_3.setTransform(160,99.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).to({state:[]},7).wait(8));

	// mouthInside
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#993366").ss(10,1,1).p("ALLl2QgBANgCAMQgCARgCARQgYC4g3CiQhFDSh0CeQgCADgCAEQgIAJgHAKAIDlqQBOACA3AEQAJABAIABAIDlqQABAEAEAFQAFAIAAALIiIAAQgCgDgJgHQgVgOgWgGQBmAABOACgADrlsQAFAAAFAAQAcgCAogNQAugPApAAQA6AAACACQANANAqAPQAAABAAABAKFlEQgTAOglASQgnASgPAAQhaAAj2hBQjjhBgBAAQgNAAigAKQigAKgMAAQgiAAhbgUQhagUgoAAQghAAgJAEQgIADgPAXAnaBBIAAAUQBWAXB6AwQBHAcCUA/QEcBzC8AXIAAAKAq2lsQgFAAgFADQgKAGAAAQQAAAaBYCoQARAgAOAcQAAAAAAABQgDABgEACIgDABQgYALgFgFIAAAoQAAAVAdAiQAdAjA9AkQAHASAEAPIAKAAIAAgoIAAgeQgHgMgDgcQgBghgCgQQgHg8gyAAQgJAAgWAKQA4BtAYBD");
	this.shape_4.setTransform(165.5,55.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993366").s().p("AGsGOQi8gXkbh0QiUg+hIgcQh6gxhWgWIAAgUIAAAUIgTAAIAAgeQgHgMgDgdQgBgggCgQQgIg8gyAAQgJAAgVAJIAAAAIggg8QhXiogBgaQAAgQALgGQAEgDAGAAIAAgeQAOgXAJgDQAIgEAiAAQAoAABaAUQBbAUAhAAICtgKICtgKIDjBBQD3BBBZAAQAPAAAngSQAlgSAUgOIA/AJQgZC4g2CiQhGDShzCeg");
	this.shape_5.setTransform(165.15,54.2125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},6).to({state:[]},7).wait(8));

	// eyes
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(15,1,1).p("ADIAAQAABTg6A7Qg7A6hTAAQhSAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BSAAQBTAAA7A6QA6A7AABSg");
	this.shape_6.setTransform(133,-41.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");
	this.shape_7.setTransform(133,-41.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(15,1,1).p("ADIAAQAAA7g6ApQg7AqhTAAQhSAAg7gqQg6gpAAg7QAAg6A6gpQA7gqBSAAQBTAAA7AqQA6ApAAA6g");
	this.shape_8.setTransform(133,-41.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiMBkQg7gpAAg7QAAg6A7gpQA6gqBSAAQBTAAA6AqQA7ApAAA6QAAA7g7ApQg6AqhTAAQhSAAg6gqg");
	this.shape_9.setTransform(133,-41.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(15,1,1).p("ADIAAQAAAog6AcQg7AchTAAQhSAAg7gcQg6gcAAgoQAAgnA6gcQA7gcBSAAQBTAAA7AcQA6AcAAAng");
	this.shape_10.setTransform(133,-41.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiMBEQg7gcAAgoQAAgnA7gcQA6gcBSAAQBTAAA6AcQA7AcAAAnQAAAog7AcQg6AchTAAQhSAAg6gcg");
	this.shape_11.setTransform(133,-41.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(15,1,1).p("ADIAAQAAgLg6gIQg7gIhTAAQhSAAg7AIQg6AIAAALQAAALA6AIQA7AJBSAAQBTAAA7gJQA6gIAAgLg");
	this.shape_12.setTransform(133,-41.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiMATQg7gIAAgLQAAgLA7gHQA6gJBSABQBTgBA6AJQA7AHAAALQAAALg7AIQg6AJhTAAQhSAAg6gJg");
	this.shape_13.setTransform(133,-41.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},3).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).wait(7));

	// antennae
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#895972").ss(10,1,1).p("ACvAuQgRgWgQgnQgQgngBgTIh4AAQhFAigkAYQhKAxAAAoQAAA0AoAwQAqAyA1AAQA2AABRhBQARgPBShOAjWBCQAPB/A+CaQARArAkBUQAgBMASA2QAPgeBujUQBNiTAvhvQgfiHhWjdQhWjegfhXQgFgOgEgLQgEgKgCgHAgipHIgeAAQAAAOgKAcQgBACAAABQgQApgDAOAheoVQgDAYgDAZQgQB1ggCQQgtDDgVBe");
	this.shape_14.setTransform(2.5,-7.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BA90A6").s().p("AhUHEIg1h+Qg+ibgPh/IBCkhQAgiQAQh0IAGAAQADgOAQgpIABgCIA3gUQAfBXBWDdQBVDeAgCHQgvBvhNCTIh9DyQgSg2gghNgAiuA1QAAA0AoAwQAqAyA1AAQA1AABShCQARgOBShPQhSBPgRAOQhSBCg1AAQg1AAgqgyQgogwAAg0QAAgpBKgxQAlgYBEgiIB4AAQABAUAPAmQAQAoASAVQgSgVgQgoQgPgmgBgUIh4AAQhEAiglAYQhKAxAAApIAAAAg");
	this.shape_15.setTransform(2.5,-5.2875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(21));

	// head
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#517D96").ss(10,1,1).p("EAlWAAAQAANWq8JbQq8JbveAAQtfAAqEnMQhdhDhZhMQhshehchjQn0ofAArRQAAnMDMmFQCjkzEikHQAVgSAWgTQK8pbPdAAQPeAAK8JbQK8JbAANVg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#97C6E0").s().p("A3jZAQhdhDhZhNQhshdhchjQn0ofAArRQAAnMDNmFQCikzEikGIArgmQK8pbPdAAQPeAAK8JbQK8JcAANUQAANWq8JaQq8JcveAAQtfAAqEnMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244,-211,488,422);


(lib.headforButtonHover = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15,1,1).p("AH5AAQAADRiUCUQiUCUjRAAQjQAAiUiUQiUiUAAjRQAAjQCUiUQCUiUDQAAQDRAACUCUQCUCUAADQg");
	this.shape.setTransform(0,60.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993366").s().p("AlkFlQiUiUAAjRQAAjQCUiUQCUiUDQAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRAAQjQAAiUiUg");
	this.shape_1.setTransform(0,60.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(21));

	// eyes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(15,1,1).p("ARlARQAABTg6A7Qg7A6hTAAQhTAAg6g6Qg7g7AAhTQAAhSA7g6QA6g7BTAAQBTAAA7A7QA6A6AABSgArUgQQAABSg7A6Qg6A7hTAAQhTAAg7g7Qg6g6AAhSQAAhTA6g7QA7g6BTAAQBTAAA6A6QA7A7AABTg");
	this.shape_2.setTransform(-2.5,-43.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AMQCfQg7g7AAhTQAAhSA7g6QA6g7BTAAQBTAAA6A7QA7A6AABSQAABTg7A7Qg6A6hTAAQhTAAg6g6gAwqB8Qg6g6AAhSQAAhTA6g7QA7g6BTAAQBTAAA7A6QA6A7AABTQAABSg6A6Qg7A7hTAAQhTAAg7g7g");
	this.shape_3.setTransform(-2.5,-43.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(15,1,1).p("ARlAMQAAA9g6AqQg7ArhTAAQhTAAg6grQg7gqAAg9QAAg7A7gqQA6grBTAAQBTAAA7ArQA6AqAAA7gArUgMQAAA8g7AqQg6ArhTAAQhTAAg7grQg6gqAAg8QAAg8A6gqQA7grBTAAQBTAAA6ArQA7AqAAA8g");
	this.shape_4.setTransform(-2.5,-43.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AMQBzQg7gqAAg9QAAg7A7gqQA6grBTAAQBTAAA6ArQA7AqAAA7QAAA9g7AqQg6ArhTAAQhTAAg6grgAwqBaQg6gqAAg8QAAg8A6gqQA7grBTAAQBTAAA7ArQA6AqAAA8QAAA8g6AqQg7ArhTAAQhTAAg7grg");
	this.shape_5.setTransform(-2.5,-43.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(15,1,1).p("ARlAIQAAAog6AbQg7AdhTAAQhTAAg6gdQg7gbAAgoQAAgmA7gcQA6gcBTAAQBTAAA7AcQA6AcAAAmgArUgIQAAAng7AcQg6AchTAAQhTAAg7gcQg6gcAAgnQAAgnA6gbQA7gdBTAAQBTAAA6AdQA7AbAAAng");
	this.shape_6.setTransform(-2.5,-43.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AMQBLQg7gcAAgnQAAgnA7gbQA6gcBTAAQBTAAA6AcQA7AbAAAnQAAAng7AcQg6AchTAAQhTAAg6gcgAwqA7Qg6gbAAgoQAAgmA6gcQA7gdBTAAQBTAAA7AdQA6AcAAAmQAAAog6AbQg7AchTAAQhTAAg7gcg");
	this.shape_7.setTransform(-2.5,-43.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(15,1,1).p("ARlgBQAAgKg6gIQg7gHhTAAQhTAAg6AHQg7AIAAAKQAAAJA7AIQA6AHBTAAQBTAAA7gHQA6gIAAgJgArUACQAAgJg7gHQg6gIhTAAQhTAAg7AIQg6AHAAAJQAAALA6AHQA7AHBTAAQBTAAA6gHQA7gHAAgLg");
	this.shape_8.setTransform(-2.5,-43.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AwqAUQg6gHAAgLQAAgJA6gHQA7gIBTAAQBTAAA7AIQA6AHAAAJQAAALg6AHQg7AHhTAAQhTAAg7gHgAMQAQQg7gIAAgJQAAgKA7gIQA6gHBTAAQBTAAA6AHQA7AIAAAKQAAAJg7AIQg6AHhTAAQhTAAg6gHg");
	this.shape_9.setTransform(-2.5,-43.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},5).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},5).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(5));

	// head
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#517D96").ss(10,1,1).p("EAlWAAAQAANWq8JbQq8JbveAAQtfAAqEnMQhdhDhZhMQhshehchjQn0ofAArRQAAnMDMmFQCjkzEikHQAVgSAWgTQK8pbPdAAQPeAAK8JbQK8JbAANVg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#97C6E0").s().p("A3jZAQhdhDhZhNQhshdhchjQn0ofAArRQAAnMDNmFQCikzEikGIArgmQK8pbPdAAQPeAAK8JbQK8JcAANUQAANWq8JaQq8JcveAAQtfAAqEnMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(21));

	// antennae
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#895972").ss(10,1,1).p("EAhkgC/IhzgOIiMgyIhagKQgPgPgRgMEAgygBoQgiAHgiAJQiQAkg1A2QgPAQgIARQgXAxAuArQAaAZAyAYQBJAjB0AUEArogBdIm3g0IgFgDIgZgRIjhgaEAkdgB9QhygGh5ATEAsPgHuIgIgfEAuTgB9Ihkj6Iggh3IgnGREA6AAAOIrzhYIilgTEAsRgIDIgCAVEA6KAAsIgFABIrzBsIivAZIoRBMIigAXEAtNAIWQACAPAXglQAFgIAAgKIAnlVEArpADWIBGEiQgBAIAAAHEAgyADvQBJAJBXAGEAhkAEUIg3AIIksAKIiWAUEg6JAAgIAFABILzBrICvAZIGeA7IBOAMIAgAEEgsQgIPIACAUIAIgeEguSgCJIBkj6IAgh4IAnGSEg5/AACILzhYIClgTIG3g0IAFgDIAZgRIA8gHEgkcgCKQAAAAAAAAQAEAAADAAQAggBAfAAEgjWgCEQBVAJBYAWQCQAkA1A3QAQAPAHARQAXAxguArQgaAagyAXQhKAkh2AUQgvAIg3AFEglEgC4IEYghICMgyIBagKQAPgPARgNEgk/ADxIDXAfIEsAKICWAUEglEADwIAFABEgj2ADsQgjADgmACEgtMAIKQgCAOgXglQgFgHAAgKIgnlWEgroADKIhGEiQABAHAAAI");
	this.shape_12.setTransform(0.25,-7.1209);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BA90A6").s().p("EAtNAIHIgggPIABgPIhFkiIgGglICvgZIgnFWQgBAKgEAHQgRAbgFAAQgDAAAAgEgEgtlAHkQgFgIABgKIgolVICvAZIgGAkIhGEiIABAPIgeAPQgBAFgDAAQgFAAgRgbgEAgxADfIAAgIQhzgUhKgjQgxgXgagZQgugsAWgxQAJgRAPgOQA1g4CQgkQAigIAhgHIAAgJQB5gTByAHIAQgXIAFADIG3A0IClATILzBZIAEAeIryBrIivAZIoRBMQhXgFhKgKgEglDADhIAAgQImfg7IivgZIrzhsIAFgeIL0hZIgHgzIBkj6IAhh3IAmGRIG4g0IAEgDIAPAXIAAAAIAIAAQAfgBAgAAIAAAGQBUAKBYAWQCQAkA1A3QAQAQAIAQQAWAxguArQgaAagxAXQhLAjh2AUQgvAJg2AFIAAAIIghgFIhNgLIBNALIhJAGgEguLgBmICkgTgEAuNgBZIilgTIAnmSIAfB4IBkD6IgFAzg");
	this.shape_13.setTransform(0.25,-5.5959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-376.9,-211,754.4,422);


(lib.headforButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15,1,1).p("Azch3IgUAAQCgCCGZA8QFFAxGzAAQCIAAD0AAQDGgCCBgRQFCgrCrix");
	this.shape.setTransform(0,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15,1,1).p("AUUpNQhRI8mPFEQiyCRjgBLQjXBJjoAAQkPAAj/h1Qjshsi3i8Qixi3hVjUQhSjMAZi4A0EpXMAoEAAA");
	this.shape_1.setTransform(3.0375,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).wait(11));

	// tongue
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC6699").ss(15,1,1).p("AvxhAQAUgoBSgmQAWgJAZgKQCug4BrglQBwgnCOgNQBTgIB2AAQCCAAEfAeQE4AgA3AcQBeAvB2AoQBLAaAXAbAPyhUQgMAKgLAKQgBAAAAAAQikCFjhBEQgtAOg7ANQiGAfjRAeIgKAAQAFAAAFABQC/ATAYAAQAAAAAogPQANgEAQgGQBEgZAIAAQgEgBgGABQgUADgqASQgRAHgQAHQgUAJgTAIQgkAQgeAMQg/AahRAKQgpAEgeAAQlDAAjVhbQiohHj6jP");
	this.shape_2.setTransform(1,85.5025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6699").s().p("AAuE7QlDAAjVhbQiohHj6jPIgmhYQAVgJAagKQCug4BrglQBwgnCOgNQBTgIB2AAQCDAAEeAeQE4AgA3AcQBeAvB1AoQBMAaAXAbIAQAUIAAAAQilCFjhBEQgsAOg8ANQiFAfjRAeIgKAAIAKABQC+ATAZAAIAogPIgnARIhCAcQhAAahQAKQglAEgcAAIgGAAg");
	this.shape_3.setTransform(4.9375,85.5025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},10).wait(11));

	// mouth
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#993366").ss(15,1,1).p("APNEUQA6jrBDhrQARgdAggxQAaguAThEQgdAIgvAGQgtAGgTAAQhaAAi2gUQi2gUgzAAQoogDlJABQpdACjGAUAPNEUQAEADAFACIgKAAQAAgCABgDgAyjkMQgBAEAAADQgQCvBVB4QAWAeA8BDQA2A7AaApQHRiEHqg5QApgFAogEQBqgLBbgGQBJgEA/gBQBIAABKAUQBaAXByA5IAAAKIhuAAQiYgSjdgPQivgNgMgEIgKAAQBjAUBdASQEfA5DlAsQBNARAlAPQAaAJArAZ");
	this.shape_4.setTransform(2.8346,40.8875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993366").s().p("AOID0QglgOhNgRIgchZIAAgKQhyg5hagYQhKgThIAAQg/AAhJAFQhbAFhqALIhRAJQnqA5nRCFQgagpg2g8Qg8hCgWgfQhVh4AQivIAzAEQDGgUJdgCQFJgBIoADQAzAAC2AUQC2AUBaAAQATAAAtgGQAvgHAdgHQgTBDgaAvIgxBNQhDBrg6DsQgrgZgagKg");
	this.shape_5.setTransform(2.8346,40.6375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},10).wait(11));

	// eyes
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(15,1,1).p("ARlARQAABTg6A7Qg7A6hTAAQhTAAg6g6Qg7g7AAhTQAAhSA7g6QA6g7BTAAQBTAAA7A7QA6A6AABSgArUgQQAABSg7A6Qg6A7hTAAQhTAAg7g7Qg6g6AAhSQAAhTA6g7QA7g6BTAAQBTAAA6A6QA7A7AABTg");
	this.shape_6.setTransform(-2.5,-43.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AMQCfQg7g7AAhTQAAhSA7g6QA6g7BTAAQBTAAA6A7QA7A6AABSQAABTg7A7Qg6A6hTAAQhTAAg6g6gAwqB8Qg6g6AAhSQAAhTA6g7QA7g6BTAAQBTAAA7A6QA6A7AABTQAABSg6A6Qg7A7hTAAQhTAAg7g7g");
	this.shape_7.setTransform(-2.5,-43.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(15,1,1).p("ARlAMQAAA9g6AqQg7ArhTAAQhTAAg6grQg7gqAAg9QAAg7A7gqQA6grBTAAQBTAAA7ArQA6AqAAA7gArUgMQAAA8g7AqQg6ArhTAAQhTAAg7grQg6gqAAg8QAAg8A6gqQA7grBTAAQBTAAA6ArQA7AqAAA8g");
	this.shape_8.setTransform(-2.5,-43.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AMQBzQg7gqAAg9QAAg7A7gqQA6grBTAAQBTAAA6ArQA7AqAAA7QAAA9g7AqQg6ArhTAAQhTAAg6grgAwqBaQg6gqAAg8QAAg8A6gqQA7grBTAAQBTAAA7ArQA6AqAAA8QAAA8g6AqQg7ArhTAAQhTAAg7grg");
	this.shape_9.setTransform(-2.5,-43.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(15,1,1).p("ARlAIQAAAog6AbQg7AdhTAAQhTAAg6gdQg7gbAAgoQAAgmA7gcQA6gcBTAAQBTAAA7AcQA6AcAAAmgArUgIQAAAng7AcQg6AchTAAQhTAAg7gcQg6gcAAgnQAAgnA6gbQA7gdBTAAQBTAAA6AdQA7AbAAAng");
	this.shape_10.setTransform(-2.5,-43.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AMQBLQg7gcAAgnQAAgnA7gbQA6gcBTAAQBTAAA6AcQA7AbAAAnQAAAng7AcQg6AchTAAQhTAAg6gcgAwqA7Qg6gbAAgoQAAgmA6gcQA7gdBTAAQBTAAA7AdQA6AcAAAmQAAAog6AbQg7AchTAAQhTAAg7gcg");
	this.shape_11.setTransform(-2.5,-43.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(15,1,1).p("ARlgBQAAgKg6gIQg7gHhTAAQhTAAg6AHQg7AIAAAKQAAAJA7AIQA6AHBTAAQBTAAA7gHQA6gIAAgJgArUACQAAgJg7gHQg6gIhTAAQhTAAg7AIQg6AHAAAJQAAALA6AHQA7AHBTAAQBTAAA6gHQA7gHAAgLg");
	this.shape_12.setTransform(-2.5,-43.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AwqAUQg6gHAAgLQAAgJA6gHQA7gIBTAAQBTAAA7AIQA6AHAAAJQAAALg6AHQg7AHhTAAQhTAAg7gHgAMQAQQg7gIAAgJQAAgKA7gIQA6gHBTAAQBTAAA6AHQA7AIAAAKQAAAJg7AIQg6AHhTAAQhTAAg6gHg");
	this.shape_13.setTransform(-2.5,-43.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},5).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).wait(5));

	// head
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#517D96").ss(10,1,1).p("EAlWAAAQAANWq8JbQq8JbveAAQtfAAqEnMQhdhDhZhMQhshehchjQn0ofAArRQAAnMDMmFQCjkzEikHQAVgSAWgTQK8pbPdAAQPeAAK8JbQK8JbAANVg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#97C6E0").s().p("A3jZAQhdhDhZhNQhshdhchjQn0ofAArRQAAnMDNmFQCikzEikGIArgmQK8pbPdAAQPeAAK8JbQK8JcAANUQAANWq8JaQq8JcveAAQtfAAqEnMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(21));

	// antennae
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#895972").ss(10,1,1).p("EAgygBoQgiAHgiAJQiQAkg1A2QgPAQgIARQgXAxAuArQAaAZAyAYQBJAjB0AUEAhkgC/IhzgOIiMgyIhagKQgPgPgRgMEAkdgB9QhygGh5ATEArogBdIm3g0IgFgDIgZgRIjhgaEAsPgHuIgIgfEAuTgB9Ihkj6Iggh3IgnGREAsRgIDIgCAVEA6AAAOIrzhYIilgTEA6KAAsIgFABIrzBsEArpADWIBGEiQgBAIAAAHEAtNAIWQACAPAXglQAFgIAAgKIAnlVIivAZIoRBMEAhkAEUIg3AIIksAKIiWAUEAgyADvQBJAJBXAGIigAXEg6JAAgIAFABILzBrICvAZIGeA7IBOAMQgjADgmACIDXAfIEsAKICWAUEgsOgH7IAIgeEgsQgIPIACAUIAnGSIG3g0IAFgDIAZgRIA8gHEguSgCJIBkj6IAgh4Eg5/AACILzhYIClgTEgkcgCKQAAAAAAAAQAEAAADAAQAggBAfAAEglEgC4IEYghICMgyIBagKQAPgPARgNEgjWgCEQBVAJBYAWQCQAkA1A3QAQAPAHARQAXAxguArQgaAagyAXQhKAkh2AUQgvAIg3AFEgj2ADsIAgAEEglEADwIAFABEgroADKIhGEiQABAHAAAIEgtMAIKQgCAOgXglQgFgHAAgKIgnlW");
	this.shape_16.setTransform(0.25,-7.1209);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BA90A6").s().p("EAtNAIHIgggPIABgPIhFkiIgGglICvgZIgnFWQgBAKgEAHQgRAbgFAAQgDAAAAgEgEgtlAHkQgFgIABgKIgolVICvAZIgGAkIhGEiIABAPIgeAPQgBAFgDAAQgFAAgRgbgEAgxADfIAAgIQhzgUhKgjQgxgXgagZQgugsAWgxQAJgRAPgOQA1g4CQgkQAigIAhgHIAAgJQB5gTByAHIAQgXIAFADIG3A0IClATIilgTIAnmSIAfB4IBkD6IgFAzILzBZIAEAeIryBrIivAZIoRBMQhXgFhKgKgEglDADhIAAgQIBNALIhJAGgEgj2ADcIhNgLImfg7IivgZIrzhsIAFgeIL0hZIgHgzIBkj6IAhh3IAmGRIG4g0IAEgDIAPAXIAAAAIAIAAQAfgBAgAAIAAAGQBUAKBYAWQCQAkA1A3QAQAQAIAQQAWAxguArQgaAagxAXQhLAjh2AUQgvAJg2AFIAAAIgEguLgBmICkgTgEAuSACJg");
	this.shape_17.setTransform(0.25,-5.5959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-376.9,-211,754.4,422);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15,1,1).p("Azch3IgUAAQCgCCGZA8QFFAxGzAAQCIAAD0AAQDGgCCBgRQFCgrCrix");
	this.shape.setTransform(0,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// eyes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15,1,1).p("ARlARQAABTg6A7Qg7A6hTAAQhTAAg6g6Qg7g7AAhTQAAhSA7g6QA6g7BTAAQBTAAA7A7QA6A6AABSgArUgQQAABSg7A6Qg6A7hTAAQhTAAg7g7Qg6g6AAhSQAAhTA6g7QA7g6BTAAQBTAAA6A6QA7A7AABTg");
	this.shape_1.setTransform(-2.5,-43.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AMQCfQg7g7AAhTQAAhSA7g6QA6g7BTAAQBTAAA6A7QA7A6AABSQAABTg7A7Qg6A6hTAAQhTAAg6g6gAwqB8Qg6g6AAhSQAAhTA6g7QA7g6BTAAQBTAAA7A6QA6A7AABTQAABSg6A6Qg7A7hTAAQhTAAg7g7g");
	this.shape_2.setTransform(-2.5,-43.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15,1,1).p("ARlAMQAAA9g6AqQg7ArhTAAQhTAAg6grQg7gqAAg9QAAg7A7gqQA6grBTAAQBTAAA7ArQA6AqAAA7gArUgMQAAA8g7AqQg6ArhTAAQhTAAg7grQg6gqAAg8QAAg8A6gqQA7grBTAAQBTAAA6ArQA7AqAAA8g");
	this.shape_3.setTransform(-2.5,-43.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AMQBzQg7gqAAg9QAAg7A7gqQA6grBTAAQBTAAA6ArQA7AqAAA7QAAA9g7AqQg6ArhTAAQhTAAg6grgAwqBaQg6gqAAg8QAAg8A6gqQA7grBTAAQBTAAA7ArQA6AqAAA8QAAA8g6AqQg7ArhTAAQhTAAg7grg");
	this.shape_4.setTransform(-2.5,-43.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(15,1,1).p("ARlAIQAAAog6AbQg7AdhTAAQhTAAg6gdQg7gbAAgoQAAgmA7gcQA6gcBTAAQBTAAA7AcQA6AcAAAmgArUgIQAAAng7AcQg6AchTAAQhTAAg7gcQg6gcAAgnQAAgnA6gbQA7gdBTAAQBTAAA6AdQA7AbAAAng");
	this.shape_5.setTransform(-2.5,-43.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AMQBLQg7gcAAgnQAAgnA7gbQA6gcBTAAQBTAAA6AcQA7AbAAAnQAAAng7AcQg6AchTAAQhTAAg6gcgAwqA7Qg6gbAAgoQAAgmA6gcQA7gdBTAAQBTAAA7AdQA6AcAAAmQAAAog6AbQg7AchTAAQhTAAg7gcg");
	this.shape_6.setTransform(-2.5,-43.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(15,1,1).p("ARlgBQAAgKg6gIQg7gHhTAAQhTAAg6AHQg7AIAAAKQAAAJA7AIQA6AHBTAAQBTAAA7gHQA6gIAAgJgArUACQAAgJg7gHQg6gIhTAAQhTAAg7AIQg6AHAAAJQAAALA6AHQA7AHBTAAQBTAAA6gHQA7gHAAgLg");
	this.shape_7.setTransform(-2.5,-43.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AwqAUQg6gHAAgLQAAgJA6gHQA7gIBTAAQBTAAA7AIQA6AHAAAJQAAALg6AHQg7AHhTAAQhTAAg7gHgAMQAQQg7gIAAgJQAAgKA7gIQA6gHBTAAQBTAAA6AHQA7AIAAAKQAAAJg7AIQg6AHhTAAQhTAAg6gHg");
	this.shape_8.setTransform(-2.5,-43.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},5).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(5));

	// head
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#517D96").ss(10,1,1).p("EAlWAAAQAANWq8JbQq8JbveAAQtfAAqEnMQhdhDhZhMQhshehchjQn0ofAArRQAAnMDMmFQCjkzEikHQAVgSAWgTQK8pbPdAAQPeAAK8JbQK8JbAANVg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#97C6E0").s().p("A3jZAQhdhDhZhNQhshdhchjQn0ofAArRQAAnMDNmFQCikzEikGIArgmQK8pbPdAAQPeAAK8JbQK8JcAANUQAANWq8JaQq8JcveAAQtfAAqEnMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(21));

	// antennae
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#895972").ss(10,1,1).p("EAhkgC/IhzgOIiMgyIhagKQgPgPgRgMEAgygBoQgiAHgiAJQiQAkg1A2QgPAQgIARQgXAxAuArQAaAZAyAYQBJAjB0AUEArogBdIm3g0IgFgDIgZgRIjhgaEAkdgB9QhygGh5ATEAsPgHuIgIgfEAuTgB9Ihkj6Iggh3IgnGREA6AAAOIrzhYIilgTEAsRgIDIgCAVEA6KAAsIgFABIrzBsIivAZIoRBMIigAXEAtNAIWQACAPAXglQAFgIAAgKIAnlVEArpADWIBGEiQgBAIAAAHEAgyADvQBJAJBXAGEAhkAEUIg3AIIksAKIiWAUEg6JAAgIAFABILzBrICvAZIGeA7IBOAMIAgAEEgsQgIPIACAUIAIgeEguSgCJIBkj6IAgh4IAnGSEg5/AACILzhYIClgTIG3g0IAFgDIAZgRIA8gHEgkcgCKQAAAAAAAAQAEAAADAAQAggBAfAAEgjWgCEQBVAJBYAWQCQAkA1A3QAQAPAHARQAXAxguArQgaAagyAXQhKAkh2AUQgvAIg3AFEglEgC4IEYghICMgyIBagKQAPgPARgNEgk/ADxIDXAfIEsAKICWAUEglEADwIAFABEgj2ADsQgjADgmACEgtMAIKQgCAOgXglQgFgHAAgKIgnlWEgroADKIhGEiQABAHAAAI");
	this.shape_11.setTransform(0.25,-7.1209);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BA90A6").s().p("EAtNAIHIgggPIABgPIhFkiIgGglICvgZIgnFWQgBAKgEAHQgRAbgFAAQgDAAAAgEgEgtlAHkQgFgIABgKIgolVICvAZIgGAkIhGEiIABAPIgeAPQgBAFgDAAQgFAAgRgbgEAgxADfIAAgIQhzgUhKgjQgxgXgagZQgugsAWgxQAJgRAPgOQA1g4CQgkQAigIAhgHIAAgJQB5gTByAHIAQgXIAFADIG3A0IClATILzBZIAEAeIryBrIivAZIoRBMQhXgFhKgKgEglDADhIAAgQImfg7IivgZIrzhsIAFgeIL0hZIgHgzIBkj6IAhh3IAmGRIG4g0IAEgDIAPAXIAAAAIAIAAQAfgBAgAAIAAAGQBUAKBYAWQCQAkA1A3QAQAQAIAQQAWAxguArQgaAagxAXQhLAjh2AUQgvAJg2AFIAAAIIghgFIhNgLIBNALIhJAGgEguLgBmICkgTgEAuNgBZIilgTIAnmSIAfB4IBkD6IgFAzg");
	this.shape_12.setTransform(0.25,-5.5959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-376.9,-211,754.4,422);


(lib.ground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// water
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7DEDD7").ss(10,1,1).p("EAySgdLQgpAOhQANQhMANgoAAQgNAAgMgBQg/gShBgQQhagthMhkQhFhagghaQAAhaDdhaQBWgjBdgXQBZgWAzAAQBVAAIVBGQIWBGBCAAQBnAACcgyQEVhZBTgVQJwigQ+AAQDhAAF4AjQFTAgAeANQEiB5CUCtQA2A9AbA8QAVAvAAAcQAADfj/DFQjhCtmQCJQljB5mlBHQmKBBlAAAQnqAAl6hOQkfg7lSiHQg2gWjzhlQi9hPiHgzQlSh/lkhjEB/bASTQggAAoAgeQoBgeiFAAQmpAAjKBQQjcBZAADJQAABVAtA3QA3BDCMArQE/BkN4AAQHeAADoi0QB2haAWhkQAAhmiChdQgJgHhQgzQgpgbAAgKgAwPR/QgpAOhQANQhNANgoAAQgMAAgNgBQg/gShAgQQhbgthMhkQhEhaghhaQAAhaDdhaQBXgjBcgXQBZgWAzAAQBVAAIWBGQIVBGBBAAQBnAACcgyQEVhZBTgVQJwigQ/AAQDgAAF5AjQFSAgAfANQEiB5CUCsQA1A+AbA8QAWAvAAAcQAADfkADFQjhCtmPCJQljB5mmBHQmKBBk/AAQnrAAl5hOQkgg7lSiHQg1gWjyhlQi9hPiHgzQlTh/lkhkAr50xQggAAoAgeQoBgeiFAAQmqAAjJBRQjdBYAADJQAABWAtA2QA4BDCLAsQFABjN4AAQHeAADoizQB2hbAWhkQAAhmiChdQgJgHhQgzQgpgaAAgLgEgsEAc7QggAAoBgeQoAgeiFAAQmqAAjJBQQjdBZAADJQAABWAtA2QA4BDCLAsQFABjN4AAQHeAADoi0QB1haAXhkQAAhmiChdQgKgHhQgzQgogbAAgKgEDB+gc3QghAAoAgeQoBgeiEAAQmqAAjKBRQjcBYAADJQAABWAtA2QA3BDCMAsQFABjN4AAQHdAADpi0QB1haAXhkQAAhmiChdQgKgHhQgzQgogaAAgLgEibkgVFQgqAOhQANQhMANgoAAQgMAAgNgBQg/gRhAgRQhbgthMhkQhFhagghaQAAhaDdhaQBWgjBdgXQBZgWAzAAQBVAAIVBGQIWBGBCAAQBnAACcgyQEVhZBTgVQJwigQ/AAQDgAAF4AjQFTAgAfANQEhB5CVCtQA1A9AbA8QAWAvAAAcQAADfkADFQjhCtmQCJQljB5mlBHQmKBBk/AAQnrAAl6hOQkfg6lSiIQg2gWjyhlQi+hPiHgzQlRh/llhjEi7vAcnQgqAOhQANQhMANgoAAQgMAAgNgBQg/gShAgQQhbgthMhkQhFhagghaQAAhaDdhaQBWgjBdgXQBZgWAzAAQBVAAIVBGQIWBGBCAAQBnAACcgyQEVhZBTgVQJwigQ/AAQDgAAF4AjQFTAgAfANQEhB5CVCtQA1A9AbA8QAWAvAAAcQAADfkADFQjhCtmQCJQljB5mlBHQmKBBk/AAQnrAAl6hOQkfg7lSiHQg2gWjyhlQi+hPiHgzQlSh/lkhk");
	this.shape.setTransform(327.95,239);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#33FFFF").ss(10,1,1).p("EB4NgckQgMgDgMgDQhDgFg8geEA1qASmQgMgEgLgDQhDgFg9gdEhVqgUeQgMgDgMgEQhCgEg9geEh11AdOQgMgEgLgDQhDgFg9gd");
	this.shape_1.setTransform(-143.375,239.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7DEDD7").s().p("EihKAn2Qkfg7lSiHIkoh8Qi+hPiGgyQlSh/llhjIACgGQAnAABNgNQBQgNApgPQgpAPhQANQhNANgnAAIgagBQg/gShAgRQhbgshMhkQhEhaghhaQAAhaDdhaQBXgjBcgYQBZgVAzgBQBVABIWBGQIVBGBCAAQBnAACcgzQEVhYBTgVQJwihQ/AAQDgABF4AjQFTAgAfANQEhB5CVCtQA1A9AcA8QAVAuAAAcQAADfkADFQjhCumQCIQliB6mmBHQmKBBk/AAQnrAAl6hOgEhIKAlrQiLgrg3hDQgug3ABhWQgBjIDdhZQDJhRGqAAQCFAAIAAeQIBAfAgAAQAAAKAoAbIBaA6QCCBdAABmQgXBjh1BbQjoCzneAAQt4AAlAhjgAKWdOQkgg7lSiIIknh6Qi+hQiHgyQlSh/lkhkIABgGIgYAAQhAgShAgRQhbgshMhlQhFhZgfhbQgBhZDdhaQBWgjBdgXQBZgXA0AAQBUAAIVBGQIXBGBAAAQBnAACdgyQEUhYBUgWQJvigQ/AAQDgAAF5AkQFSAfAfANQEiB6CUCsQA1A+AbA8QAWAuAAAdQAADekADFQjhCumPCJQljB5mmBGQmKBCk/AAQnrAAl5hOgAyJSaQhMAMgoAAQAoAABMgMQBQgNAqgOQgqAOhQANgEBjWAbDQiMgrg4hEQgsg2gBhVQABjJDchZQDJhRGqAAQCFABIBAeQIAAdAgAAQAAALApAaIBZA7QCCBdAABlQgXBlh1BaQjoCzneAAQt4ABk/hkgEiA/gJ2Qkfg6lSiIIkoh7Qi9hPiHgzQlSh/llhjIACgGIgagBIh/giQhbgthMhkQhFhagghaQABhaDchZQBWgkBdgXQBagWAyAAQBVAAIWBGQIVBGBCAAQBnAACcgyQEVhZBTgVQJwigQ/AAQDgAAF5AkQFSAfAfANQEiB5CUCtQA1A9AcA9QAVAuAAAcQAADfkADFQjhCtmQCJQliB6mmBGQmKBCk/AAQnrAAl6hPgEiddgUqQhNANgnAAQAnAABNgNQBQgMApgPQgpAPhQAMgEgn/gMAQiLgrg4hEQgtg2AAhWQAAjIDdhZQDJhRGqAAQCFAAIAAeQIBAeAgAAQAAALAoAaIBaA7QCCBcAABmQgXBkh1BbQjpCzndAAQt4AAlAhjgEBM4gR8Qkgg7lRiHIkoh7Qi+hPiHgyQlSiAllhjIACgGIgZAAQhAgSg/gRQhbgthNhkQhEhagghaQAAhZDchbQBXgjBcgXQBagWAzAAQBVAAIVBGQIWBGBBAAQBoAACcgyQEUhYBUgWQJwigQ+AAQDgAAF5AjQFSAgAgANQEhB5CUCtQA1A+AcA7QAWAvAAAcQgBDfkADFQjgCtmQCJQljB5mlBHQmLBBk+AAQnsAAl5hOgEAwZgcvQhNAMgnAAQAnAABNgMQBQgNApgPQgpAPhQANgECl4gUGQiLgsg4hDQgtg2AAhWQAAjJDdhYQDJhRGpAAQCGAAIAAeQIAAeAhAAQAAALAoAaIBZA6QCDBeAABlQgXBkh2BaQjoC0neAAQt4AAk/hjg");
	this.shape_2.setTransform(327.95,239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ground
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#253B11").ss(10,1,1).p("ECKEg3MIAAAAQAAgHAmgBQCggGNLBaQOQBiClAaQB4AVBoATIVMAAECKEg3MQATAAATAAQgaAAgKATQgDADAAgBQABgMAAgJgEB03gzcID1AAMAyeAAAIDgAAQICBdCIAoQBGAUAxAbQBnA6AEACEjddgy0QhaIFhHHAQiLNoAAFUQAAByBGHpQBGHoAAA4QAABRgcDtQgRCPgtFjQhaLbAAFNQAAF/BUCSQAMAWAxA8QAeAmAFApQAHAzgGBvQgGB3AFA7QAFAxBgAmQBlAoDcAlQGiBERgBYQRABVKxAOQENAFGQgCQMagCAIAAQAYAAKTA8QKTA8AcAAQDnAAFmAKQE8AKAZAAQJiAAVJhWQFXgWJbgoQHRgdCtgDQLZgRPYABQOrAANhAQMBZ9AAAUAFygAUAnsAAAQXBAASoiJQGqgxE7g6QEBgvBBgdQDFhYFZgnQDmgaGFgKQGbgLBhgJQDTgTAAg6QAAiJisnoQh2lOkor3Qlxu0iEleQkZruiYnrQjDp3hgo2Qgqj8gQhDQghiQg6h1EAZ7g1BQAEgPCHgFQGygOb5BeQD2ANHpAcMAqnAAAEAZjgzcIA1AAMAkZAAAILfAAQGNAWItAfQMzAvBbAAQFzAAEgg1QBXgRB1geQBtgdCIgpQEUhUC4ghQEcgzFwgCEhg9gzcQUwjIHLAAQKHBGLLBGQFdAiEsAaMApFAAAQDDg5AqgDQGrgoBggCQAigBBHAAQgVAEgZAHQhRAXgdAIQBHAACYAFQCuAFA1AAQgJAAgJAGQgMAHAAAHEhg9gzcMAxNAAAIKJAAQNUBJHHAGQAEgeGvACQDmABFjAIQBfAADBg4QAHgCAHgCIWFAAQhagYiqguQhSgXg8gKQgxgIghAAQgYAAgoAIQA8AABWAAQClAAEFACQBDAABJABQgDAAhWATQgNACgJABQgdAAAAgWQAAgBAAAAEgRMgyNQApABAmAAQgSAAgoATQgVAJAAgcgEAavgzJQgZgGgzgNEAOPg0ZIAUAAEibcgzcID8AAMA2jAAAEibcgzcQB7AJCBALQQxBVQaBVQgXAEgdAGQAeAAA/gHQAfgDAogEQCEgQDeghQI6hXFMgyEh1sgwbQAmADAnAEQAAgJgGgFQgOgNguAIQgVADgfAGQAUACAVABgEjO+gzcQAggGAjgGQFwhFC7giQFPg8CigPQAygFAngBQBngCASAZQAEAFAAAHEjO+gzcIBDAAIZtAAIYyAAEjchgzcQAUAABagIQAygEAAAMILDAAEjUFgy0QBZAADugoEi4Ig1qQBBAfBPAuQA8AjAuAeQBXA2ApAjEi9yg1VIB4AAQA5AXAUAEQAKADAcAAIAtAAQgLgFhNg0QgEgDgEgDQAWABAaACQA4AEBKAFQH4AkU0BqEi6Ng2JQgMgPgyAJQgJABgKACQgegPgSAAQACgDAGgCQARgFAtAAQBEAAB8A7Ei66g12QgUgNgQgJQgiAGgzAKQAXAABiAGg");
	this.shape_3.setTransform(457.875,207.5956);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#253B11").s().p("Ehv+A3MQlmgKjnAAQgcAAqTg8QqTg8gYAAIsiACQmQACkNgFQqxgOxAhVQxghYmihEQjcglhlgoQhggmgFgxQgFg7AGh3QAGhvgHgzQgFgpgegmQgxg8gMgWQhUiSAAl/QAAlNBarbIA+nyQAcjtAAhRQAAg4hGnoQhGnpAAhyQAAlUCLtoQBHnABaoFIA8goQAUAABagIQAygEAAAMILDAAIBDAAIAAgMQFwhFC7giQFPg8CigPIAsAeQAXAABiAGIAIAGQBNA0ALAFIgtAAQgcAAgKgDQgUgEg5gXIh4AAIB4AAQA5AXAUAEQAKADAcAAIAtAAQgLgFhNg0IgIgGIAwADICCAJQH4AkU0BqI4yAAQgugeg8gjQhPguhBgfQBBAfBPAuQA8AjAuAeI5tAAIZtAAQBXA2ApAjQgpgjhXg2IYyAAID8AUIAAgUMA2jAAAIuGCJQjeAhiEAQQCEgQDeghIOGiJMAxNAAAMgxNAAAQUwjIHLAAQKHBGLLBGIAAA8IKJAAQNUBJHHAGIAAABQAAAcAVgJQAogTASAAIhPgBQAEgeGvACQDmABFjAIQBfAADBg4IAOgEIWFAAIBMATIhMgTIA1AAIAAhOQAJgBANgCIBZgTIgBgVQGygOb5BeIAAApILfAAIO6A1QMzAvBbAAQFzAAEgg1QBXgRB1geID1AAIAAhGQEUhUC4ghQEcgzFwgCIgBAVQAAAAAAAAQABAAAAAAQAAAAABgBQAAgBABAAQAKgTAaAAIAAgIQCggGNLBaQOQBiClAaIAAAoMgyeAAAMAyeAAAIDgAAQICBdCIAoQBGAUAxAbIBrA8Ihrg8QgxgbhGgUQiIgooChdIVMAAIAUAUQA6B1AhCQQAQBDAqD8QBgI2DDJ3QCYHrEZLuQCEFeFxO0QEoL3B2FOQCsHoAACJQAAA6jTATQhhAJmbALQmFAKjmAaQlZAnjFBYQhBAdkBAvQk7A6mqAxQyoCJ3BAAUgnsAAAgFyAAUMhZ9AAAQthgQurAAQvYgBrZARQitADnRAdIuyA+Q1JBWpiAAIlVgKgEh0fgwUQAAgJgGgFQgOgNguAIIg0AJIg0AKQAeAAA/gHIBNAHIAAAAgEh2VgweQwahVwxhVQQxBVQaBVgEjUFgy0QBZAADugoQjuAohZAAgEA+xgzcMgkZAAAgEi0Ogzcg");
	this.shape_4.setTransform(457.875,207.5956);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ground, new cjs.Rectangle(-998.5,-151.5,2912.8,718.3), null);


(lib.endScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("EkDHhw1MIGPAAAMAAADhrMoGPAAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EkDHBw2MAAAjhrMIGPAAAMAAADhrg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endScreen, new cjs.Rectangle(-1663.4,-727.1,3326.8,1454.3000000000002), null);


(lib.credit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("by elli gray", "96px 'Minecraftia'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 170;
	this.text.lineWidth = 790;
	this.text.parent = this;
	this.text.setTransform(71.95,-81.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit, new cjs.Rectangle(-325,-83.4,794,342), null);


(lib.clodsireBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn
	this.text = new cjs.Text("clodsire", "96px 'Gogono Cocoa Mochi'", "#B0C67F");
	this.text.textAlign = "center";
	this.text.lineHeight = 98;
	this.text.lineWidth = 536;
	this.text.parent = this;
	this.text.setTransform(0,-48);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#8CA358",lineWidth:462},0).wait(1).to({color:"#5F7334"},0).wait(1).to({color:"#B0C67F",lineWidth:536},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-50,540,198);


(lib.clodsire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46));

	// spikesTop
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EED6E2").ss(10,1,1).p("AkIipQAIADAMAIQAjAZBGBGQAMAMAMANQAyAIBRAyQANAIAPAKQBCAtBLA5AkSjbQAYAOAZAQQBDAqBOA0QB1BRAeASQAGAFACABQA5AlAxAuQAKAJAPAOQATASAcAaQATASAXAWAkmj5QAAAQAAAPQACAbAFAbQAgCfCyB3QBVA7BrAlQAVAIAVAGQAAABABgBQBFAVA6AFAgEBQQgKgHgJgHQAAAAAAgBQhIg4gngmIgKgKQANgCAQADQA0A0ArAxQADAEADADQAFAFAFAFQAaAcAnAWQghgYgggagAA9CCQAOAIAPAGQAiAQAyAPQAYAIAbAHIAAAKIg8AAQg0ghg0glg");
	this.shape.setTransform(339.4888,-203.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EED6E2").ss(10,1,1).p("AiXhrQBwg9AZgQQBMgzADgnIAFgBQAFgCAAgHQCFDAAZBcQANAtgBA1QAAAbgGA5QgCAPgCASAkIiGQAfAMBeBeQAMAMAMANQA6AIBlBEQBCAtBLA5AgEBzQgKgHgJgIQhIg4gngnIgKgJQANgCAQADQA4A4AtA0QAFAFAFAFgAiXhrQAiAXAlAYQCPBhAMAIQA5AlAxAuQATASAnAkQAYAXAgAeAA9ClQAOAIAPAGQAzAYBUAWIAAAKIg8AAQg0ghg0glQghgYgggaQAaAcAnAWgAkmjWQgHDUDgCXQBVA7BrAlQBeAiBMAGAkSi4QA5AiBCArAiuheQAMgGALgH");
	this.shape_1.setTransform(339.4879,-207.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EED6E2").s().p("ACGCzQgxgtg5gmIibhoIhHgvQBwg9AZgQQBMg0ADgmIAFgCQAFgCAAgHQCFDBAZBaQANAvgBA1QAAAagGA5Ig6g2g");
	this.shape_2.setTransform(344.1536,-212.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#EED6E2").ss(10,1,1).p("AlOEnQAmAXAqAbQAVANAWAPQBwg+AZgQQBMgzADgnIAFgBQAFgCAAgHQCFDBAZBbQANAvgBA1QAAAagGA5QgCAPgCASAkIFtQAFgKAFgKQCzlzBaj8QB0lBgQibIAAgKQACAEACAEQCREdArCpQAwC/AAFLQAACFg/C9QggBgggBGQADAEAEADAlEFZQAfAMBeBeQAMAMAMANQA6AJBmBEQBBAtBLA5AhAJTQgKgHgJgHQhIg5gngnIgKgKQANgCAQADQA4A5AtA0QAFAFAFAFgAjTF1QAiAWAlAZQCPBhAMAIQA5AlAxAuQATASAnAkQAVAUAcAaQgHAOgGANAABKFQAOAIAPAHQAzAXBUAWIAAAKIg8AAQg0ghg0glQgggYghgaQAbAcAmAWgAliEJQgHDVDgCXQBWA7BqAmQBeAhBMAGAjqGBQAMgGALgG");
	this.shape_3.setTransform(345.4879,-255.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EED6E2").s().p("ACBKuQAGg5AAgaIAAgIQAAgxgMgrQgZhbiEjBQAAAHgFACIgFABQgDAnhNAzQgZARhwA9IgrgcQCzlzBbj8QBzlBgQibIAEgCQCREdArCpQAwC/AAFLQAACFg/C9QggBgggBGIgxgugABHJ4Qgxgug4glIichpIhHgvQBwg9AZgRQBNgzADgnIAFgBQAFgCAAgHQCEDBAZBbQAMArAAAxIAAAIQAAAagGA5Ig6g2g");
	this.shape_4.setTransform(350.4875,-257.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EED6E2").ss(10,1,1).p("AmFJEQAmAXAqAbQCzl0Bbj8QBzlAgQibIAAgKQACAEACAEQCREdArCpQAwC+AAFMQAACCg8C4QgCAEgBAEQggBgggBGQADAEAEADAl7J2QAQAGAgAcQAfAaAuAuQAMAMAMANQAyAIBSAzQANAIAPAKQBCAtBKA5Ak/KKQAFgKAFgKQAVANAWAPQBwg+AZgQQBNgzADgnIAFgBQAFgCAAgHQCEDBAZBbQANAvgBA1QAAAagGA5QgCAPgCASAmZImQAAAQAAAPQACAbAFAbQAgCfCyB4QASANAUAMQBHAqBTAeQAVAHAVAHQA+ASA1AGQAHAAAGABAmPH+QBRkDA7jxQAiiLA4kEQAgiXALkIQAFiEAChxQD4DzCTFWQCGE4AAEGQAAElg+DOQgqBzggBqQggBpgWBfAh3NwQgKgHgJgHQhIg5gngnIgKgKQANgCAQADQA4A5AtA0QAFAFAFAFgAkKKSQAiAWAlAZQCQBhAMAIQA4AlAxAuQAKAJAPAPQAOANATARQAVAUAcAaQgHAOgGANAg1OiQAOAIAPAHQAyAXBUAWIAAAKIg8AAQgzghg0glQghgYghgaQAbAcAnAWgAkfKdQALgGAKgF");
	this.shape_5.setTransform(350.9888,-283.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EED6E2").s().p("AB3PPQAGg5AAgaIAAgIQAAgxgMgrQgahbiDjBQAAAHgFACIgFABQgDAnhOAzQgZARhvA9IgrgcQCyl0Bbj8QBmkaAAiaQAAgVgCgSIAEgBQCREcAqCoQAxC/AAFMQAACCg9C4IgCAIQggBgggBHIgxgvgAB3PPIghgeIgZgYQgxgug4glIichpIhHgvQBvg9AZgRQBOgzADgnIAFgBQAFgCAAgHQCDDBAaBbQAMArAAAxIAAAIQAAAagGA5IAAAAgADqNPQA9i4AAiCQAAlMgxi/QgqioiRkcIgEgJIAAAKQACASAAAVQAACahmEaQhbD8iyF0IhQgyIgKhGQBRkDA7jxQAiiLA4kEQAgiXALkIQAFiEAChxQD3DzCTFWQCHE4AAEGQAAElg+DOQgqB0ggBpgAA3m5IAAAAg");
	this.shape_6.setTransform(351.5,-286.6875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#EED6E2").ss(10,1,1).p("AkIFtQAFgKAFgKQAVANAWAPQBwg+AZgQQBMgzADgnIAFgBQAFgCAAgHQCFDBAZBbQANAvgBA1QAAAagGA5QgCAPgCASAlOEnQAmAXAqAbQCzlzBaj8QB0lBgQibIAAgKQACAEACAEQCREdArCpQAwC/AAFLQAACFg/C9QggBgggBGQgHAOgGANAivHcQA6AJBmBEQBBAtBLA5AlEFZQAfAMBeBeQAMAMAMANQA4A5AtA0QAFAFAFAFQgKgHgJgHQhIg5gngnIgKgKQANgCAQADAjTF1QAiAWAlAZQCPBhAMAIQA5AlAxAuQATASAnAkQAVAUAcAaQADAEAEADAABKFQAOAIAPAHQAzAXBUAWIAAAKIg8AAQg0ghg0glgAliEJQgHDVDgCXQBWA7BqAmQBeAhBMAGAhAJTQAbAcAmAWQgggYghgagAjqGBQAMgGALgG");
	this.shape_7.setTransform(345.4879,-255.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EED6E2").s().p("ACBKuQAGg5AAgaIAAgIQAAgxgMgrQgZhbiEjBQAAAHgFACIgFABQgDAnhNAzQgZARhwA9IgrgcQCzlzBbj8QBzlBgQibIAEgCQCREdArCpQAwC/AAFLQAACFg/C9QggBgggBGIgxgugACBKuIg6g2Qgxgug4glIichpIhHgvQBwg9AZgRQBNgzADgnIAFgBQAFgCAAgHQCEDBAZBbQAMArAAAxIAAAIQAAAagGA5IAAAAg");
	this.shape_8.setTransform(350.4875,-257.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#EED6E2").ss(10,1,1).p("AiXhrQBwg9AZgQQBMgzADgnIAFgBQAFgCAAgHQCFDAAZBcQANAtgBA1QAAAbgGA5QAYAXAgAeAhzgDQA6AIBlBEQBCAtBLA5AkIiGQAfAMBeBeQAMAMAMANQA4A4AtA0QAFAFAFAFQgKgHgJgIQhIg4gngnIgKgJQANgCAQADAiXhrQAiAXAlAYQCPBhAMAIQA5AlAxAuQATASAnAkQgCAPgCASAA9ClQAOAIAPAGQAzAYBUAWIAAAKIg8AAQg0ghg0glgAkmjWQgHDUDgCXQBVA7BrAlQBeAiBMAGAgEBzQAaAcAnAWQghgYgggagAiuheQAMgGALgHAkSi4QA5AiBCAr");
	this.shape_9.setTransform(339.4879,-207.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#EED6E2").ss(10,1,1).p("AgEBQQgKgHgJgIQhIg4gngmIgKgKQANgCAQADQA4A4AtA0QAFAFAFAFQAaAcAnAWQghgYgggagAkIipQAfAMBeBeQAMAMAMANQA6AJBlBDQBCAtBLA5AkSjbQBXA0BrBIQCPBhAMAIQA5AlAxAuQAfAdBTBOAA9CCQAOAIAPAGQAzAYBUAWIAAAKIg8AAQg0ghg0glgAkmj5QgHDUDgCXQBVA7BrAlQBeAiBMAG");
	this.shape_10.setTransform(339.4879,-203.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_4},{t:this.shape_3}]},6).to({state:[{t:this.shape_6},{t:this.shape_5}]},6).to({state:[{t:this.shape_8},{t:this.shape_7}]},10).to({state:[{t:this.shape_2},{t:this.shape_9}]},6).to({state:[{t:this.shape_10}]},6).wait(6));

	// mouth
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(10,1,1).p("Ad5DFQA7gLB5gXQAtgIA2gKQDBgkBxgaQFGhLByhmAd5DFQA3gGAsgIQAqgHAngNAdMDNQANgCAggGEgt5AC9QBZAGBcAAQCDAAEEg+QApgKHkh/QFghdDsgtQFNg+D9AAQEQAAEWBAQB1AcF4BwQFCBiDzArQFkBAGVAAQB4AABagI");
	this.shape_11.setTransform(-101.775,177.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("EAgtABiQAtgIA2gKQDBgkBxgaQFGhLByhmAd5CEQA3gGAsgIQAqgHAngNAd5CEQA7gLB5gXA+IguQAqgLAugMQFghdDsgtQFNg+D9AAQEQAAEWBAQB1AcF4BxQBpAgBgAaQDIA1CkAdQFkBAGVAAQBbAABKgFQAXgBAWgCA+IguQARAPAvATQBGAcCHApQEhBQB3AhQD4BFDSAWQBdAJCVAAQHPAAFXhrQBwgjBigtQBUgsATgJEgt5AB8QBZAGBcAAQCDAAEEg+QAlgJGOhoQABAAABgB");
	this.shape_12.setTransform(-101.775,164);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiWEFQjRgWj5hFImYhyQiHgohFgcIAXg5QFghdDtgsQFMg/D9AAQEPAAEXBAQB2AcF4BxQBoAgBgAaIgKAkIhnA1QhhAthxAkQlYBqnPAAQiUAAhdgJg");
	this.shape_13.setTransform(-166.1375,164);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("A8xlBQApgLAugMQFghdDtgtQFMg+D9AAQEQAAEXBAQB1AcF4BxQBoAgBgAaQDIA2CkAdQEgA0FAAKQBMACBNAAQBbAABKgEQAYgDAWgBQA6gLB6gXQAtgIA1gKQDCgkBwgaQFHhMBxhmEglFgCkQBHCYD+CIQDoB/FlBiQFQBdGBAzQF7A0FTAAQDSAAEZhHQD8g/EGhsQD2hlCyhtQC2huArhNAfQiOQA2gGAsgIQAqgHAogNA8xlBQARAPAvATQBFAeCHAoQEhBQB3AhQD5BFDRAWQBdAJCVAAQHPAAFXhrQBxgjBhguQBVgrASgJEgsigCWQBYAGBcAAQBpAAC7goQAvgKA1gNQAkgIGOhpQACgBABAAEgrzgCGQgTAAgegHQgYgGgggKQhVgagegf");
	this.shape_14.setTransform(-110.425,175.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AlvHtQmAg0lQhcQllhjjph+Qj+iIhHiYIgEgUIBjgXQAlgIGOhpIACAAQARAOAvAUIAYg6QFghdDsgsQFNg/D9AAQEPAAEWBAQB2AcF4BxQBpAgBgAaQDIA2CkAdQEgA0E/AKIgBAqQgsBNi1BuQizBsj2BmQkFBsj9A/QkYBHjTAAQlTAAl7g0gAhdgEQHOAAFYhrQBwgiBigvIBng0IhnA0QhiAvhwAiQlYBrnOAAQiVAAhdgJQjSgWj4hFImYhyQiHgohGgcQBGAcCHAoIGYByQD4BFDSAWQBdAJCVAAIAAAAg");
	this.shape_15.setTransform(-147.5875,175.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("A71uFQApgLAugMQFghdDtgtQFMg+D9AAQEQAAEWBAQB2AbF4ByQBoAfBgAbQDIA1CkAeQEgAzFAALQBMACBNAAQBbAABKgEQAYgDAWgCQA2gFAsgIQAhgGAggJQAFgBAFgBQADgBAEgCQAMgCAOgCQAigHAmgHQDCgkBwgaQFHhMBxhmEgkJgLoQBHCYD+CJQDoB/FlBiQFQBdGBAzQF7A0FSAAQDTAAEZhHQD8g/EGhsQD2hlCyhuQC2huArhNEAgMgLTQA4gKB0gVQAEgBAEgBAiwQ9QABAAAAAAQBmAABfgHQEQgWDlhSQEShiEBjJQAogfC0hiQClhaBBg9QArgpCZiEQBahPAYgmQDLlDBujgQBei/AMhYQABgNAAgKIgKAAAiwQ9QA/AJCKALQD0AUCvAAQI2AAG0kVQGPj+EXnfQBzjFAlkJQASiAAAjHQAAgEgHgJQgJgJgEgSA71uFQARAPAvATQBFAdCHAoQEhBQB3AiQD5BFDRAWQBdAJCVAAQHOAAFYhrQBxgjBhguQBVgrASgJEgrmgLaQBNAFBPABQAMAAAMAAQBpAAC7gnQAvgLA1gNQAkgIGOhpQACgBABAAEgpJgKsQBoHnFDF3QEUFBGjDeQFaC5GSBiQFLBREAAAAkdQzIA8AAQAJAEAoAGEguCgMMQAHAEAHADQA1AbAwAPQgIgDgJgDQhAgUgigXgEgwLgNMQAsARBJAlQAKAFAKAFEgq3gLKQgTAAgegHQAAAAAAAAQgGgBgFgCQgNgDgPgE");
	this.shape_16.setTransform(-116.425,220.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ADDRRIgDgcQEQgVDlhSQEShhEBjKQAogfC0hiQClhZBBg+QArgpCZiFQBahOAYgmQDLlDBujhQBei+AMhYIApAHQAEASAJAJQAHAJAAAEQAADHgSCBQglEHhzDGQkXHfmPD+Qm0EVo2AAQivAAj0gUgAgGQ9QgngGgKgEIg8AAIA8AAQAKAEAnAGQkAAAlLhRQmShilai4QmjjgkUlAQlDl3honnIAAgoIAXAAQBpAAC7gnIBkgYQAkgIGOhpIADgBQARAPAvATIAXg5QFghdDtgtQFMg+D9AAQEQAAEWBAQB2AbF4ByQBoAfBgAbQDIA1CkAeQEgA0FAAKQBMACBNAAQBbAABKgEIAugFQA2gFAsgIQAhgGAggJIABAHIAKAAQAAAKgBANQgMBYheC+QhuDhjLFDQgYAmhaBOQiZCFgrApQhBA+ilBZQi0BigoAfQkBDKkSBhQjlBSkQAVQhgAIhlAAIgBAAgADRgiQDTAAEZhHQD8g/EGhsQD2hlCyhuQC2huArhNQgrBNi2BuQiyBuj2BlQkGBsj8A/QkZBHjTAAQlSAAl7gzQmBg1lQhcQllhjjoh9Qj+iJhHiZQBHCZD+CJQDoB9FlBjQFQBcGBA1QF7AzFSAAIAAAAgAjrpIQHOAAFYhqQBxgkBhgtIBng1IhnA1QhhAthxAkQlYBqnOAAQiVAAhdgKQjRgUj5hGImYhxQiHgphFgdQBFAdCHApIGYBxQD5BGDRAUQBdAKCVAAIAAAAg");
	this.shape_17.setTransform(-133.4375,220.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(10,1,1).p("A8xlBQApgLAugMQFghdDtgtQFMg+D9AAQEQAAEXBAQB1AcF4BxQBoAgBgAaQDIA2CkAdQEgA0FAAKQBMACBNAAQBbAABKgEQAYgDAWgBQA2gGAsgIQAqgHAogNEglFgCkQBHCYD+CIQDoB/FlBiQFQBdGBAzQF7A0FTAAQDSAAEZhHQD8g/EGhsQD2hlCyhtQC2huArhNAfQiOQA6gLB6gXQAtgIA1gKQDCgkBwgaQFHhMBxhmA8xlBQARAPAvATQBFAeCHAoQEhBQB3AhQD5BFDRAWQBdAJCVAAQHPAAFXhrQBxgjBhguQBVgrASgJEgsigCWQBYAGBcAAQBpAAC7goQAvgKA1gNQAkgIGOhpQACgBABAAEgrzgCGQgTAAgegHQgYgGgggKQhVgagegf");
	this.shape_18.setTransform(-110.425,175.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(10,1,1).p("A+IguQAqgLAugMQFghdDsgtQFNg+D9AAQEQAAEWBAQB1AcF4BxQBpAgBgAaQDIA1CkAdQFkBAGVAAQBbAABKgFQAXgBAWgCQA7gLB5gXAd5CEQA3gGAsgIQAqgHAngNQAtgIA2gKQDBgkBxgaQFGhLByhmA+IguQARAPAvATQBGAcCHApQEhBQB3AhQD4BFDSAWQBdAJCVAAQHPAAFXhrQBwgjBigtQBUgsATgJEgt5AB8QBZAGBcAAQCDAAEEg+QAlgJGOhoQABAAABgB");
	this.shape_19.setTransform(-101.775,164);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(10,1,1).p("Ad5DFQA3gGAsgIQAqgHAngNQAtgIA2gKQDBgkBxgaQFGhLByhmAd5DFQA7gLB5gXEgt5AC9QBZAGBcAAQCDAAEEg+QApgKHkh/QFghdDsgtQFNg+D9AAQEQAAEWBAQB1AcF4BwQFCBiDzArQFkBAGVAAQB4AABagIAdMDNQANgCAggG");
	this.shape_20.setTransform(-101.775,177.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},6).to({state:[{t:this.shape_15},{t:this.shape_14}]},6).to({state:[{t:this.shape_17},{t:this.shape_16}]},6).to({state:[{t:this.shape_15},{t:this.shape_18}]},10).to({state:[{t:this.shape_13},{t:this.shape_19}]},6).to({state:[{t:this.shape_20}]},6).wait(6));

	// nostril
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(10,1,1).p("AEigEQAKAAAPAEQAPAFAKAAAlTAFIAeAAIAAgJ");
	this.shape_21.setTransform(-159,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(46));

	// eyes
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(10,1,1).p("EAjRAA+QAAAsgfAeQgeAfgsAAQgrAAgfgfQgfgeAAgsQAAgrAfgeQAfgfArAAQAsAAAeAfQAfAeAAArgA/+g9QAAArgfAeQgfAfgrAAQgsAAgfgfQgegeAAgrQAAgsAegfQAfgeAsAAQArAAAfAeQAfAfAAAsg");
	this.shape_22.setTransform(-146.225,20.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("EAgeACIQgfgeAAgsQAAgrAfgeQAfgfArAAQAsAAAeAfQAfAeAAArQAAAsgfAeQgeAfgsAAQgrAAgfgfgEgiyAAMQgegeAAgrQAAgsAegfQAfgeAsAAQArAAAfAeQAfAfAAAsQAAArgfAeQgfAfgrAAQgsAAgfgfg");
	this.shape_23.setTransform(-146.225,20.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(10,1,1).p("EAjRAAnQAAAcgfATQgeAUgsAAQgrAAgfgUQgfgTAAgcQAAgbAfgTQAfgTArAAQAsAAAeATQAfATAAAbgA/+gmQAAAcgfASQgfATgrAAQgsAAgfgTQgegSAAgcQAAgcAegTQAfgUAsAAQArAAAfAUQAfATAAAcg");
	this.shape_24.setTransform(-146.225,20.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("EAgeABWQgfgTAAgcQAAgbAfgTQAfgTArAAQAsAAAeATQAfATAAAbQAAAcgfATQgeAUgsAAQgrAAgfgUgEgiyAAIQgegTAAgbQAAgcAegTQAfgTAsgBQArABAfATQAfATAAAcQAAAbgfATQgfATgrAAQgsAAgfgTg");
	this.shape_25.setTransform(-146.225,20.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(10,1,1).p("EAjRAAWQAAAPgfALQgeAKgsAAQgrAAgfgKQgfgLAAgPQAAgQAfgJQAfgLArAAQAsAAAeALQAfAJAAAQgA/+gUQAAAPgfAJQgfALgrAAQgsAAgfgLQgegJAAgPQAAgPAegLQAfgLAsAAQArAAAfALQAfALAAAPg");
	this.shape_26.setTransform(-146.225,20.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("EAgeAAvQgfgKAAgPQAAgPAfgKQAfgLArAAQAsAAAeALQAfAKAAAPQAAAPgfAKQgeALgsAAQgrAAgfgLgEgiyAAEQgegJAAgPQAAgPAegLQAfgLAsAAQArAAAfALQAfALAAAPQAAAPgfAJQgfALgrAAQgsAAgfgLg");
	this.shape_27.setTransform(-146.225,20.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(10,1,1).p("EAjRgAHQAAgGgfgEQgegEgsAAQgrAAgfAEQgfAEAAAGQAAAFAfADQAfAEArAAQAsAAAegEQAfgDAAgFgA/+AIQAAgGgfgDQgfgEgrAAQgsAAgfAEQgeADAAAGQAAAFAeAEQAfAEAsAAQArAAAfgEQAfgEAAgFg");
	this.shape_28.setTransform(-146.225,20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("EgiyAARQgegEAAgFQAAgGAegDQAfgDAsAAQArAAAfADQAfADAAAGQAAAFgfAEQgfAFgrAAQgsAAgfgFgEAgeAACQgfgDAAgGQAAgFAfgEQAfgFArAAQAsAAAeAFQAfAEAAAFQAAAGgfADQgeADgsAAQgrAAgfgDg");
	this.shape_29.setTransform(-146.225,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_25},{t:this.shape_24}]},6).to({state:[{t:this.shape_27},{t:this.shape_26}]},6).to({state:[{t:this.shape_29},{t:this.shape_28}]},6).to({state:[{t:this.shape_27},{t:this.shape_26}]},10).to({state:[{t:this.shape_25},{t:this.shape_24}]},6).to({state:[{t:this.shape_23},{t:this.shape_22}]},6).wait(6));

	// body
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#4D373F").ss(10,1,1).p("EhHEACNQgDhGAAhHQAA2SU2vwQU2vxdeAAQdfAAU2PxQU3PwAAWSQAAE6hBEnEhHEACNQAyAXBTAsQCiBWBlAtQGACrFvAAQDCAADlg4QB2gdEqhfQEQhXCrglQEEg4D3AAQFJAADjBRQBZAgBgAzQAWAMCQBUQDYB8DDA3QEmBRG6AAQI4AAGQg/QEZgrEdheQBMgZCOgxQB8goBigYQEFg+FKAAQF3AAI6C3QCHArDxBWQBhAjA2AREBF4AK+Qj+PWviLvQ02Px9fAAQ9eAA02vxQz0u+g/04EhHOACJQAFACAFAC");
	this.shape_30.setTransform(9.325,36.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D373F").s().p("Akpe4QjDg3jYh8QiQhUgXgMQhggzhYggQjjhRlKAAQj2AAkEA4QisAlkPBXQkqBfh2AdQjlA4jDAAQlvAAl/irQhlgtiihWQhTgsgygXQgDhGAAhHQAA2SU2vwQU2vxdeAAQdeAAU3PxQU2PwABWSQgBE6hAEnIgGAJIgKAQQg2gRhhgjQjxhWiGgrQo6i3l3AAQlKAAkFA+QhiAYh8AoIjaBKQkeBekYArQmRA/o3AAQm6AAkmhRg");
	this.shape_31.setTransform(9.65,-102.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8C6D74").s().p("EgxuAKCQz0u9g/03QAyAXBTAsQCiBWBlAtQGACqFvAAQDCAADlg4QB2gdEqhfQEQhXCrgkQEEg5D3AAQFJAADjBSQBZAfBgA0QAWALCQBUQDYB9DDA2QElBRG7AAQI4AAGQg+QEZgsEdheIDahJQB8gpBigXQEFg/FKAAQF3AAI6C3QCHArDxBXQBhAjA2ARIgEAJQgLAcAIAfQj+PWviLtQ02Px9fAAQ9eAA02vxg");
	this.shape_32.setTransform(5.825,215.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(46));

	// spikesBottom
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#EED6E2").ss(10,1,1).p("ABagOQgdBOg3AXQgQAHhZALACMgEQgYgIgSgNQgfgVgRghQgHgNgOgeQgNgZgQgRQgmAmgvBSQg2BaAAAsQAAALADANQACAGABAFQAJAZAFAP");
	this.shape_33.setTransform(-289,-232.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EED6E2").s().p("Ah2BzQAAgsA2haQAwhRAlgnQARARAMAZIAVAsQARAgAfAVIgIAKQgdBPg3AXQgRAHhYALIglAKQgDgNAAgMg");
	this.shape_34.setTransform(-291.125,-234.8875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#EED6E2").ss(10,1,1).p("AFJE2QhvgnhOj0QgghjgnjPQgdicgIiHQgDg1AAhqQgzAdhDBrQhDBqg8CVQiOFfAAEpQAABTArB/QAyCRBDBBACLFoQgdBPg3AXQgRAHhYALAC9FyQgYgIgSgNQgfgVgRggQgHgOgOgeQgMgZgRgRQgmAngvBRQg2BbAAAsQAAALADANQACAGACAGQAIAYAFAPAFnFeQghAvg/BbQg4BLgvAtQh8B2imAE");
	this.shape_35.setTransform(-293.925,-269.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EED6E2").s().p("AjGLaQhDhCgyiQQgrh/AAhTQAAkpCOlgQA8iVBDhqQBDhrAzgcQAABpADA2QAICHAdCcQAnDPAgBjQBOD0BvAnIAeAoIhgCJQg4BMgvAtQh8B1imAFgAhaHRQAAALADANIAEAMIANAnIgNgnIgEgMQgDgNAAgLQAAgsA2hbQAvhSAmgmQARAQAMAaIAVArQARAhAfAVQASANAYAIQgYgIgSgNQgfgVgRghIgVgrQgMgagRgQQgmAmgvBSQg2BbAAAsIAAAAgAA3HOQgRAHhYALQBYgLARgHQA3gXAdhPQgdBPg3AXg");
	this.shape_36.setTransform(-293.925,-269.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#EED6E2").ss(10,1,1).p("ADvH+QhvgnhOj0QgghjgmjPQgdicgIiHQgDg1AAhqQg0AdhDBrQhDBqg8CVQiOFfAAEpQAABTArB/QAyCRBDBBAFxGGQiEhogqnyQgVj6AFjoQAAiRACgnQAEhgAOgPIAAgKQgkAcgjAdQktD8isEaQjpGAAAHBQAABkAnC4QA5EPAEAUIAKAAAnKPeQCzgEC5g1QCmgxCshZQCVhNBdhQQBdhRAAg0QAAgmhrgmQgtgQg7gQQgOgDgPgEAAxIwQgdBPg2AXQgRAHhZALABjI6QgYgIgSgNQgfgVgRggQgHgOgNgeQgMgZgRgRQgmAngwBRQg2BbAAAsQAAALADANQACAGACAGQAIAYAFAPAENImQghAvg/BbQg4BLgvAtQhMBJheAeQg5ARg/AC");
	this.shape_37.setTransform(-284.925,-289.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EED6E2").s().p("AnePLIg9kjQgni4AAhkQAAnBDpmAQCskZEtj8IA1A/QgCAnAACRQgFDoAVD6QAqHyCEBoIgBAIIgdgIIAdAIQA7APAtAQQBrAmAAAmQAAA0hdBRQhdBQiVBNQisBZimAxQi5A1izAEIgKAKgACtKTQg4BLgvAtQhMBKheAdQg5ASg/ABQA/gBA5gSQBegdBMhKQAvgtA4hLIBgiKIhgCKgAnAHhQAABTArB/QAyCRBDBBQhDhBgyiRQgrh/AAhTQAAkpCOlfQA8iVBDhqQBDhrA0gdQAABqADA1QAICHAdCcQAmDPAgBjQBOD0BvAnQhvgnhOj0QgghjgmjPQgdicgIiHQgDg1AAhqQg0AdhDBrQhDBqg8CVQiOFfAAEpIAAAAgAi0J8QAAAMADANIAEALIANAnIgNgnIgEgLQgDgNAAgMQAAgsA2hbQAwhRAmgnQARARAMAZIAUAsQARAgAfAVQASANAYAIQgYgIgSgNQgfgVgRggIgUgsQgMgZgRgRQgmAngwBRQg2BbAAAsIAAAAgAgiJ5QgRAHhZALQBZgLARgHQA2gXAdhPQgdBPg2AXg");
	this.shape_38.setTransform(-284.925,-286.9875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#EED6E2").ss(10,1,1).p("AFJE2QhvgnhOj0QgghjgnjPQgdicgIiHQgDg1AAhqQgzAdhDBrQhDBqg8CVQiOFfAAEpQAABTArB/QAyCRBDBBAC9FyQgYgIgSgNQgfgVgRggQgHgOgOgeQgMgZgRgRQgmAngvBRQg2BbAAAsQAAALADANQACAGACAGQAIAYAFAPACLFoQgdBPg3AXQgRAHhYALAFnFeQghAvg/BbQg4BLgvAtQh8B2imAE");
	this.shape_39.setTransform(-293.925,-269.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#EED6E2").ss(10,1,1).p("ACMgEQgYgIgSgNQgfgVgRghQgHgNgOgeQgNgZgQgRQgmAmgvBSQg2BaAAAsQAAALADANQACAGABAFQAJAZAFAPABagOQgdBOg3AXQgQAHhZAL");
	this.shape_40.setTransform(-289,-232.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33}]},6).to({state:[{t:this.shape_36},{t:this.shape_35}]},6).to({state:[{t:this.shape_38},{t:this.shape_37}]},6).to({state:[{t:this.shape_36},{t:this.shape_39}]},10).to({state:[{t:this.shape_34},{t:this.shape_40}]},6).to({state:[]},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-451.5,-394.8,921.7,780.2);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lightTrees
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C422D").s().p("ElYDBkNMAAAjHSIbgAAMAAADHSgEqI7BkNMAAAjHSIbfAAMAAADHSgEgozBkMMAAAjHSIbfAAMAAADHSgEIWYBjbMAAAjHSIbgAAMAAADHSgEDlgBjbMAAAjHSIbfAAMAAADHSgENFoBjaMAAAjHSIbfAAMAAADHSgEnWQBCeMAAAil3MAlLAAAMAAACl3gEsHIBCeMAAAil3MAlLAAAMAAACl3gEinABCdMAAAil3MAlLAAAMAAACl3gEGYLBBsMAAAil3MAlLAAAMAAACl3gEBnTBBsMAAAil3MAlLAAAMAAACl3gELHbBBrMAAAil3MAlLAAAMAAACl3gEmIJA9yMAAAieXISbAAMAAACeXgEq5CA9yMAAAieXISbAAMAAACeXgEhY6A9xMAAAieXISbAAMAAACeXgEHmSA9AMAAAieXISbAAMAAACeXgEC1ZA9AMAAAieXISbAAMAAACeXgEMVhA8/MAAAieXISbAAMAAACeXgEoAHA1qMAAAiXfIDcAAMAAACXfgEsw/A1qMAAAiXfIDbAAMAAACXfgEjQ3A1qMAAAiXgIDcAAMAAACXggEFuVA04MAAAiXfIDbAAMAAACXfgEA9cA04MAAAiXfIDbAAMAAACXfgEKdkA04MAAAiXgIDcAAMAAACXggEowOAw+MAAAiQ7IcIAAMAAACQ7gEthGAw+MAAAiQ7IcIAAMAAACQ7gEkA+Aw+MAAAiQ8IcHAAMAAACQ8gEE+NAwMMAAAiQ7IcIAAMAAACQ7gEANVAwMMAAAiQ7IcHAAMAAACQ7gEJtdAwMMAAAiQ8IcHAAMAAACQ8g");
	this.shape.setTransform(5679.05,-489.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// moreTrees
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#21552C").s().p("EHmwBkhMAAAjDOIdYAAMAAADDOgEC14BkhMAAAjDOIdXAAMAAADDOgEMWABkgMAAAjDOIdXAAMAAADDOgEmkwBkXMAAAjDOIdYAAMAAADDOgErVoBkXMAAAjDOIdXAAMAAADDOgEh1gBkWMAAAjDOIdXAAMAAADDOgEGEXA6WMAAAierINbAAMAAACergEBTeA6WMAAAierINcAAMAAACergEKzmA6VMAAAierINcAAMAAACergEoHJA6MMAAAierINbAAMAAACergEs4CA6MMAAAierINcAAMAAACergEjX6A6LMAAAierINcAAMAAACergEI52A5aMAAAiaTIFUAAMAAACaTgEEI+A5aMAAAiaTIFUAAMAAACaTgENpGA5ZMAAAiaTIFUAAMAAACaTgElRqA5QMAAAiaTIFUAAMAAACaTgEqCiA5QMAAAiaTIFUAAMAAACaTgEgiaA5PMAAAiaTIFUAAMAAACaTgEFOAA32MAAAiW3IU7AAMAAACW3gEAdHA32MAAAiW3IU8AAMAAACW3gEJ9PA32MAAAiW4IU8AAMAAACW4gEo9gA3sMAAAiW3IU7AAMAAACW3gEtuZA3sMAAAiW3IU8AAMAAACW3gEkORA3sMAAAiW4IU8AAMAAACW4gEHSxA3OMAAAiZXIK8AAMAAACZXgECh4A3OMAAAiZXIK8AAMAAACZXgEMCAA3OMAAAiZYIK8AAMAAACZYgEm4vA3EMAAAiZXIK8AAMAAACZXgErpoA3EMAAAiZXIK8AAMAAACZXgEiJgA3EMAAAiZYIK8AAMAAACZYgEFo3AuKMAAAiRjIEsAAMAAACRjgEA3/AuKMAAAiRjIEsAAMAAACRjgEKYHAuKMAAAiRkIEsAAMAAACRkgEoipAuAMAAAiRjIEsAAMAAACRjgEtThAuAMAAAiRjIEsAAMAAACRjgEjzZAuAMAAAiRkIEsAAMAAACRkgEIOHApKMAAAiH3IScAAMAAACH3gEDdPApKMAAAiH3ISbAAMAAACH3gEM9XApKMAAAiH4ISbAAMAAACH4gEl9ZApAMAAAiH3IScAAMAAACH3gEquRApAMAAAiH3ISbAAMAAACH3gEhOJApAMAAAiH4ISbAAMAAACH4g");
	this.shape_1.setTransform(5834.075,-488.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// gradient
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#399E87","#295229"],[0,1],-1.1,-955.8,0.6,955.6).s().p("EnGYBUYMgAEiovIhSABIAAgBMOPdAAAMAAACovg");
	this.shape_2.setTransform(8702.25,-540);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#399E87","#295229"],[0,1],-0.4,-955.8,1.3,955.6).s().p("EnGbBUYMgACiovIhSABIAAgBMOOIAAAIAAABIBSgBMAAFCovg");
	this.shape_3.setTransform(2877.425,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-39.3,-1131.8,11658.3,1286.5), null);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:9};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_8 = function() {
		// this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(2).call(this.frame_10).wait(1));

	// frontFoot
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#517D96").ss(10,1,1).p("Au7IpQgKAQgOADIgsivQAHlnHblQQC/iJDthrQDYhiDDgxQCggnBigGQCEgJBMAtQBhA4A1BHQA9BQAgCDQBfF9m1FIQihB5jUBhQiuBOiNAjQklBJkTgUQkugVhTh/");
	this.shape.setTransform(169.6982,245.5997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97C6E0").s().p("ApPLdQkugVhTiAIgDgMIgsiwQAHlmHblQQC/iJDthrQDYhiDDgxQCggoBigFQCEgKBMAuQBhA4A1BHQA9BQAgCDQBfF8m1FJQihB5jUBgQiuBPiNAjQjlA5jaAAQg9AAg8gEgAvTI8QAOgDAKgQQgKAQgOADg");
	this.shape_1.setTransform(169.6982,245.5997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#517D96").ss(10,1,1).p("Al8I4QgagCgZgCQlNgfiniQQjHitAAlzQAAkSGRhcQDGgtF/AAQT/AAAAJfQAAE3roCHQjoAqkrAXQh7AJhxAHg");
	this.shape_2.setTransform(32.55,286.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#97C6E0").s().p("AmvIzQlNgeimiQQjIitAAl0QAAkRGRhcQDGgtGAAAQT+AAAAJeQAAE3roCIQjoApkrAXIjrARIg0gFg");
	this.shape_3.setTransform(32.55,286.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#517D96").ss(10,1,1).p("AtQrbQgSgEgIgLICVhnQFSh4HhFGQDECEC3C4QCoCoBzClQBdCIAnBZQA3B5gPBXQgTBugwBMQg2BUhvBNQlEDfnMknQiqhsikilQiHiHhTh5Qirj3hNkKQhXkhBah6");
	this.shape_4.setTransform(-146.8339,250.652);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#97C6E0").s().p("AhYLKQiqhsikilQiHiHhTh5Qirj3hNkKQhXkhBah6IALgHQAIALASAEQgSgEgIgLICVhnQFSh4HhFGQDECEC3C4QCoCoBzClQBdCIAnBZQA3B5gPBXQgTBugwBMQg2BUhvBNQiLBgilAAQjaAAkGiogAtqrqIAAAAg");
	this.shape_5.setTransform(-146.8339,250.652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[]},3).wait(2));

	// head
	this.instance = new lib.headSide();
	this.instance.setTransform(3,-205.95);

	this.instance_1 = new lib.head();
	this.instance_1.setTransform(6.95,-187.4,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-205.95}}]}).to({state:[{t:this.instance,p:{y:-186.95}}]},3).to({state:[{t:this.instance,p:{y:-205.95}}]},3).to({state:[{t:this.instance_1}]},3).wait(2));

	// bodyMarks
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2F4162").ss(10,1,1).p("AFNkCQAXBDAeCVQAgCfAIBnABpudQgCAAgDACQiSA+goAgQg7AuAACIQAABqCbAqQBaAYCYACACEuQQAcBZA0CJQAmBkAZBJAFRkWQgDABgCAAQgpAFhCAAQhEAAhNgUQhNgUhLAAQiWAAhTAoQh4A5AACOQAACqGGBYQCbAiEwAbAGdHLQg9gBhngMQh0gOgHAAQhYAAhMBfQhEBTAAA+QAAA7C0BlQBEAmBDAdQBAAbAUABAGdHZQATBlgmBpQgKAdgYA/QgTA7gIA4IgNAA");
	this.shape_6.setTransform(125.275,133.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F4162").s().p("ADRODQhDgdhEgmQi0hlAAg7QAAg+BEhUQBMheBYAAQAHAAB0ANQBnANA+ABIgBANQATBmgmBoIgiBdQgTA6gIA5IgNAAIgbApQgUgBhAgbgAgjC4QmGhXAAiqQAAiOB4g6QBTgoCWAAQBLAABNAVQBNAUBEAAQBCAAApgFIABATQAXBDAeCVQAgCfAIBmIgCAbQkwgbibgjgAAKnzQibgqAAhqQAAiIA7guQAoggCSg/IAFgBIAbANQAcBYA0CJQAmBlAZBJIgXAoQiYgChagYg");
	this.shape_7.setTransform(125.275,133.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2F4162").ss(10,1,1).p("Al3njQiXgLhYhYQhkhkAAi5QAAhrBjgSQAjgGA9ACQBEAEAgAAQB0AAFLAKQFNAKCQAAQBPAABHAyQBQA4AABPQAACNjbBoQhYAqhnAZQhgAXhKAAQiwAAknghQgcgEgfAGgAnfOBIgPAAQhuhHg5g2QhnhhAAhxQAAg3BkgoQBOgeA0AAQBtAADwAeQDxAeByAAQCsAAB8AoQCfA0AABnQAAExrKAAQhBAAhcABQhCgBglgKQgqgNgqgiQgUgQgagbgAtYhIQgIgZAAgZQAAh6FEAEQCnACDRAaQB7AAEEgPQEEgPBgAAQCAAABJAoQBZAwAABrQAADpleBbQjDAyknAAQkIAAg2gGQiegRhThNAj+n2QgQAAgaAKQgLAEgJADQgLADgHAAQgVAAgUgBAkcDtQg/AAhggcQgmgLglgOQg8gXg5gdQgZgNgXgNQAAgBgBAAQABAAAAABQBMBHBMAoQABABABAAQAhARAgAMAtYhIQA6A4ByB5QiOhVgehcgAk6NtIAAAUIilAAQgZgagegi");
	this.shape_8.setTransform(3.5,132.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2F4162").s().p("AlcPbQgrgNgqgiQgUgQgagbIClAAIAAgUIAAAUIilAAQgZgagegiQAeAiAZAaIgPAAQhuhHg5g2QhnhhAAhxQAAg3BkgoQBOgeA0AAQBtAADxAeQDvAeBzAAQCrAAB8AoQCgA0AABnQAAExrKAAIidABQhBgBglgKgAklFBQiegRhThNIAFgJQAhARAgAMQgggMghgRIgCgBIANghQAlAOAmALQBgAcA/AAQg/AAhggcQgmgLglgOQg8gXg5gdIgwgaIgBgBQhyh5g6g4IgIgyQAAh6FEAEQCnACDRAaQB7AAEEgPQEEgPBgAAQB/AABKAoQBZAwAABrQAADpleBbQjEAykmAAQkIAAg2gGgAk8nmIAUgGQAagKAQAAQgQAAgaAKIgUAGQgcgDgeAFQiYgKhYhYQhkhkAAi5QAAhrBjgSQAkgGA8ACQBEAEAgAAQB0AAFMAKQFMAKCQAAQBOAABIAyQBQA4AABPQAACNjbBoQhZAqhnAZQhfAXhKAAQiwAAkngig");
	this.shape_9.setTransform(3.5,132.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},9).wait(2));

	// body
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#517D96").ss(10,1,1).p("Ar3zJQiAC9jNEjQicDkhMCaQheC/gqDOQgsDbAAEyQAAJYIIFOQIHFMOiAAQDoAADIhqQC8hkCMi1QCHitBJjgQBIjeAAjrQAAnpi8o8Qg0ihhykpQhtkggriHIgcAAAPL2CQiAitidhoQjMiJjgAAQm4AAjdCAQjmCFhwFS");
	this.shape_10.setTransform(16.05,114.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#97C6E0").s().p("AvYXVQoIlOAApYQAAkyAtjbQApjOBfi/QBLiaCcjkQDOkjB/i9IAOAAQBxlSDliFQDdiAG4AAQDgAADMCJQCdBoCBCtIAAA0IAbAAQArCHBtEgQByEpA0ChQC8I8AAHpQAADrhIDeQhJDgiHCtQiNC1i6BkQjIBqjoAAQujAAoHlMg");
	this.shape_11.setTransform(16.05,114.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#517D96").ss(10,1,1).p("AJY6/QAAgBAAAAQABAAABACQgBgBgBAAQhMgbhHgIQgzgGkaAAQhhAAiJAKQilANgeARQgmAVhEAbQgmAQhNAeQhPAggsAiQggAZgOAZAKa6kQgggPgggLQALANBTBdQAUAXAQAWQgohMgagxQglhHgJgRAI66sQANAAAGgDQALgEAAgMALa6EQgggSgggOALc4nQAgAsANAqQgYgvgVgngApr34QiCD+jUGYQilFDhSDLQhoD9gvDkQgyD3AAEeQAADiB2DNQB0DJDYCaQDbCcElBUQEyBZFfAAQKaAAEwnMQDmlcAAoyQAAotkMpsQhcjVikk3Qg6huguhXQgCgFgDgF");
	this.shape_12.setTransform(3,128.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#97C6E0").s().p("Am/aaQklhUjbicQjYiah0jJQh2jNAAjiQAAkeAzj3QAujkBoj9QBSjLCllDQDVmYCBj+IgigoQAsgiBPggIBzguQBEgbAmgVQAegRClgNQCKgKBgAAQEaAAAzAGQBHAIBMAbQAAAMgLAEQgHADgMAAQAMAAAHgDQALgEAAgMIACABIBdBqQAVAXAPAWIAuBWIAFAKIBoDFQCkE3BcDVQEMJsAAItQAAIyjmFcQkwHMqaAAQlfAAkyhZgAJY7JIAAAAg");
	this.shape_13.setTransform(3,129.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},9).wait(2));

	// tail
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#517D96").ss(10,1,1).p("AZZO+QiUgxiMjHQhsibiLkzQhQixipmEQiclXiLjaQkfnEm/j8QmYjlmgAAQjpAAjFCTQitCBiDDlQhzDIhBDyQg8DbAACzQAAIFGAG9QFUGKJkEzQIgERKkCmQJuCYI3AYAbgcHQBhgGBHjcQA7i0AAiGQAAh5gohiQgxh6hWAAQgSAAgoAUQgoAUgjAAQgoAAgNgEQgEgBgBgBQgTgdgcgT");
	this.shape_14.setTransform(-289.15,45.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#97C6E0").s().p("AI5ZkQqjimogkRQpkkzlUmKQmAm9AAoGQAAiyA8jbQBAjyB0jIQCDjlCsiBQDGiTDpAAQGfAAGZDlQG/D8EfHEQCLDaCbFXQCqGEBQCxQCLEzBsCbQCMDHCUAxIABgEQANAEAnAAQAkAAAogUQAogVARABQBWgBAyB6QAoBjAAB5QAACGg7C0QhIDchhAGIAAANQo3gYpviYg");
	this.shape_15.setTransform(-289.15,45.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#517D96").ss(10,1,1).p("EAhPAOvQgPAHgNAGQgnASgXAIQghALggAAQkZAApLsFQjFkCjmlaQgcgqj8mFQklnFmdj7Ql1jiljAAQigAAibA4QgXAIgYAKQg8AZg7AhQjZB6ivDYQioDPhgD4QhgD6AADqQAAD+CBD9QB5DrDdDXQDSDMESCgQELCdEeBbQDiBJBjAfQCnA2B4AgQEyBTGlA5QAxAHCHANQAMgdALgiQA7i0AAiGQAAh5gohjQgyh5hWAAQgSAAgoAUQgoAUgjAAQgoAAgMgEQgEgBgBgBQgUgdgbgTEAg7APNIBaAAQAOBTAsDUQAgDBgeBwAbTZ/QDYAAAxgCQB6gHBdgfAL5YvQA7AFBNAHQDCASBgAUQBlAVDtAIQDXAHAHgGIAAAAQAAgNgFAEQgNAJgLAAQAPAAAOAAAJnbSQBSgFBAie");
	this.shape_16.setTransform(-174.7117,50.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#97C6E0").s().p("AX1amQjtgIhlgVQhggUjCgSIiIgNQAMgcALgiQA7i1AAiGQAAh4gohjQgyh6hWAAQgSAAgoAVQgoAUgjAAQgoAAgMgEQgEgBgBgCQgUgcgbgTQAbATAUAcQABACAEABQAMAEAoAAQAjAAAogUQAogVASAAQBWAAAyB6QAoBjAAB4QAACGg7C1QgLAigMAcQiHgNgxgGQmlg6kyhSQh4ghing1IlFhoQkehbkLidQkSigjSjMQjdjXh5jrQiBj9AAj+QAAjqBgj6QBgj4CojPQCvjYDZh6QA7ghA8gZIBDAkIgUg2QCbg4CgAAQFjAAF1DiQGdD7ElHFQD8GFAcAqQDmFZDFEDQJLMFEZAAQAgAAAhgLQAXgIAngSIAIARIBaAAQAOBTAsDUQAgDAgeBxIgeAyQhdAeh6AHQgxADjYAAQAAgOgFAEQgNAJgLABIAdAAQgDADguAAQg3AAh2gEg");
	this.shape_17.setTransform(-174.7117,46.7234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},9).wait(2));

	// backFoot
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#517D96").ss(10,1,1).p("AtQrbQgSgEgIgLICVhnQFSh4HhFGQDECEC3C4QCoCoBzClQBdCIAnBZQA3B5gPBXQgTBugwBMQg2BUhvBNQlEDfnMknQiqhsikilQiHiHhTh5Qirj3hNkKQhXkhBah6");
	this.shape_18.setTransform(-146.8339,250.652);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#517D96").s().p("AhYLKQiqhsikilQiHiHhTh5Qirj3hNkKQhXkhBah6IALgHQAIALASAEQgSgEgIgLICVhnQFSh4HhFGQDECEC3C4QCoCoBzClQBdCIAnBZQA3B5gPBXQgTBugwBMQg2BUhvBNQiLBgilAAQjaAAkGiog");
	this.shape_19.setTransform(-146.8339,250.652);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#517D96").ss(10,1,1).p("Al8I4QgagCgZgCQlNgfiniQQjHitAAlzQAAkSGRhcQDGgtF/AAQT/AAAAJfQAAE3roCHQjoAqkrAXQh7AJhxAHg");
	this.shape_20.setTransform(32.55,286.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#97C6E0").s().p("AmvIzQlNgeimiQQjIitAAl0QAAkRGRhcQDGgtGAAAQT+AAAAJeQAAE3roCIQjoApkrAXIjrARIg0gFg");
	this.shape_21.setTransform(32.55,286.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#517D96").ss(10,1,1).p("Au7IpQgKAQgOADIgsivQAHlnHblQQC/iJDthrQDYhiDDgxQCggnBigGQCEgJBMAtQBhA4A1BHQA9BQAgCDQBfF9m1FIQihB5jUBhQiuBOiNAjQklBJkTgUQkugVhTh/");
	this.shape_22.setTransform(169.6982,245.5997);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#517D96").s().p("ApPLdQkugVhTiAIgDgMIgsiwQAHlmHblQQC/iJDthrQDYhiDDgxQCggoBigFQCEgKBMAuQBhA4A1BHQA9BQAgCDQBfF8m1FJQihB5jUBgQiuBPiNAjQjlA5jaAAQg9AAg8gEgAvTI8QAOgDAKgQQgKAQgOADg");
	this.shape_23.setTransform(169.6982,245.5997);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#517D96").ss(10,1,1).p("AURIyQgagCgZgCQlNgfiniQQjHitAAlzQAAkRGRhcQDGguF/AAQUAAAAAJfQAAE3roCHQjoAqksAXQh7AJhxAHgA0QI9QAagCAZgCQFNgfCniQQDHitAAlzQAAkSmRhcQjGgtl/AAQ0AAAAAJfQAAE3LoCHQDoAqEsAXQB7AJBxAHg");
	this.shape_24.setTransform(-1.225,284.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#97C6E0").s().p("A38ItQksgXjogqQroiHAAk3QAApfUAAAQF/AADGAtQGRBcAAESQAAFzjHCtQinCQlNAfIgzAEIjsgQgATeIuQlNgfiniQQjHitAAlzQAAkRGRhcQDGguF/AAQUAAAAAJfQAAE3roCHQjoAqksAXIjsAQIgzgEg");
	this.shape_25.setTransform(-1.225,284.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},3).to({state:[{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_25},{t:this.shape_24}]},3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492.8,-416.9,877,765.0999999999999);


(lib.stunfiskTxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// txt
	this.instance = new lib.stunfiskBtn();
	this.instance.setTransform(0,31);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.stunfiskBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:49,y:78.65,alpha:0.0435},0).wait(1).to({y:77.3,alpha:0.087},0).wait(1).to({y:75.95,alpha:0.1304},0).wait(1).to({y:74.6,alpha:0.1739},0).wait(1).to({y:73.25,alpha:0.2174},0).wait(1).to({y:71.9,alpha:0.2609},0).wait(1).to({y:70.55,alpha:0.3043},0).wait(1).to({y:69.2,alpha:0.3478},0).wait(1).to({y:67.85,alpha:0.3913},0).wait(1).to({y:66.5,alpha:0.4348},0).wait(1).to({y:65.15,alpha:0.4783},0).wait(1).to({y:63.8,alpha:0.5217},0).wait(1).to({y:62.45,alpha:0.5652},0).wait(1).to({y:61.1,alpha:0.6087},0).wait(1).to({y:59.75,alpha:0.6522},0).wait(1).to({y:58.4,alpha:0.6957},0).wait(1).to({y:57.05,alpha:0.7391},0).wait(1).to({y:55.7,alpha:0.7826},0).wait(1).to({y:54.35,alpha:0.8261},0).wait(1).to({y:53,alpha:0.8696},0).wait(1).to({y:51.65,alpha:0.913},0).wait(1).to({y:50.3,alpha:0.9565},0).wait(1).to({y:49,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-50,466,229);


(lib.stunfisk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59));

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AAKvDQgFAJAAAQQAKTpAAJYALBAAQAAGWjOEfQjPEfkkAAQkjAAjOkfQjPkfAAmWQAAmVDPkfQDOkfEjAAQEkAADPEfQDOEfAAGVg");
	this.shape.setTransform(-108.5,-27.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2C49E").s().p("AnxK1QjPkfAAmWQAAmVDPkfQDOkfEjAAQEkAADOEfQDPEfAAGVQAAGWjPEfQjOEfkkAAQkjAAjOkfgAAPOXIAAgCQAApYgKznQAAgPAFgJQgFAJAAAPQAKTnAAJYIAAACg");
	this.shape_1.setTransform(-108.5,-27.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(59));

	// eyes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(10,1,1).p("AJM6yQAAEiisDNQirDNjzAAQjxAAisjNQirjNAAkiQAAkiCrjNQCsjNDxAAQDzAACrDNQCsDNAAEigAAR2ZIgTAAIAAgeIAdAAAgWVfQAAAKgKAAQAAgDAKgNQAKgMAAgLQAAAdAKAAgAJHazQAAEiisDNQirDNjyAAQjyAAisjNQirjNAAkiQAAkiCrjNQCsjNDyAAQDyAACrDNQCsDNAAEig");
	this.shape_2.setTransform(31.275,-38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgGgAihQirjMAAkiQAAkjCrjNQCsjMDyAAQDyAACrDMQCsDNAAEjQAAEiisDMQirDNjyAAQjyAAisjNgAggVpQAKAAAAgKQAAAKgKAAQAAgDAKgNQAKgMAAgLQAAAdAKAAIgUAAIAUAAQgKAAAAgdQAAALgKAMQgKANAAADIAAAAgAggVpIAAAAgAmbzDQirjMAAkjQAAkiCrjNQCsjMDxgBQDzABCrDMQCsDNAAEiQAAEjisDMQirDNjzAAQjxAAisjNgAgC2ZIATAAIgTAAIAAgeIAdAAIgdAAIAAAeg");
	this.shape_3.setTransform(31.275,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(59));

	// body
	this.instance = new lib.stunfiskBody();
	this.instance.setTransform(298,15.9,1.6329,1.6329,90.8042,0,0,41.2,-41.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:41.6,regY:-41.2,rotation:90.8051,x:297.65,y:16.55,alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(11).to({alpha:0.96},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0},0).wait(1));

	// water
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7DEDD7").ss(10,1,1).p("Ej68gz/QgBhUAAheQAAi4ANhBQANg8BGjnQAliCBUgpQBLglCoALQDxAZCsARQFGAfE1AAQHUAAD/g/QBzgcBsgwQBOgjB8hEQFRi8DahdQG/jAKeixQNnjoU5moQLHjiFchuQJai9Gvh/QXpnAZooUQOckrBtgjQHricFAhaQLejOKJhHQKFhHRmAAQaWAAV7C8QS4CiTKFSQMoDeWcHqQN0EuE4BoQLEDsJlC6QDjBEJrCsQJtCxHhCnQW2H5QiK1UAwkAf3AAAA7mQAAHCjBInQjcJzmhJMQniKmqvIYQsRJkvsGCQ5IJyrQERQy9HMs5ECQwDFAtrCbQvKCsuyAAUggBAAAgZogChQ0riC0hkKQnfhip/iUQrUiqlwhVQ1Ek3wsijQ0zjMuSj/QtTjtqplSQi0hZjAhtQU1D4X4AAQLwAAJXh9QIdhxGAjRQFci9C3j4QCpjmAAjyQAAp6pcrPQpRrBwwqbQxIqq2BoNQ3Ror5hksEkg5gNDQgPhRgFg8QgEgtAAhMQAAhWBUi/QBfjWCYjnQGUpkIZlSQGqkOG9iuQBBgaDmhTQAIgCAHgDEkgygMcQgDgUgEgTEkhmgNOQAaAZAaAZQA3A2A4A1QACACACACQAJAOAEgCQA6A3A6A1QAAABABAAQD/DrEODcQDjCxBmBTQA+AzAQAQEkgRgM5QgUgFgUgFQgWgFgXgGQgVgFgWgGEkhxgNZQAGAGAFAFEkfVgKdQAVA1BYBbQCACGEODWQA+AxBNA7QCrCDD3C3QDhClEgDQQBDAwBAAvQCdBxCKBkQKKHXDZChQLkIlG2F3QCkCMC2CHQDLCVDhCQQSyL8dMJTQDpBKDtBGQBHAVBHAUQg9gshDgvQn2lrjmiiQzYtswhvhQxZwWuaykQiQi6h8jKQo6g1n8goQm9gjowgnQmCgcjPgfQi8gcjwg6QARAnAmA8QASAbAJAOQAHAGAGAGEjvxgIBQmvrFiuuOQhNmRgXmwQgIiQgCjaQCCgvA5gfEiadBHyQSQFQTkDgIAAi8QArlDigmUQiZmAlHm1QqAtUxqtYQxttbzco+Q02pnw+hrQlxgklbggEkEpALJQCIBuCTB3QRpOPN3KqQC2CLCrCBQDaClDKCWQI7G9GdEaQLuIBMgFpQSfIWV2EFQmXjnnSlCQi8iClKjtEkc1gI9QEHDqJMHkQEADRE7EBQA+AyBAA0");
	this.shape_4.setTransform(39.8,-3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7DEDD7").s().p("EAtFB+1Q0riC0hkLQnfhhp/iUQrViqlwhVQ1Ek3wrijQ0zjMuSj/QtSjtqrlSQizhZjAhtQU1D4X4AAQLxAAJWh9QIdhxGAjRQFci+C3j3QCpjmAAjyQAAp6pdrPQpQrBwxqbQxGqq2CoNQ3Ror5hksQZhEsXRIrQWCINRGKqQQxKbJQLBQJdLPAAJ6QAADyipDmQi3D3lcC+QmADRodBxQpWB9rxAAQ34AA01j4QmXjnnRlCQi9iClKjtQSQFQTkDgIAAi8QAJhEAAhIQAAkMh+k/QiZmAlHm1QqAtUxqtZQxstbzdo9Q02pnw+hrQlxgklbggQmvrFiuuOQhMmQgYmxQgIiQgCjaQCCgvA5gfQg5AfiCAvQACDaAICQQAXGxBNGQQCuOOGvLFQo6g1n8gnQm9gkowgmQmCgdjPgfQi8gcjwg6IgogKQgPhRgFg7QgEguAAhMQAAhWBUi/QBfjWCZjnQGTpkIZlSQGrkOG9iuQBBgaDlhTIAPgFIgBiyQAAi4AOhBQAMg8BGjnQAmiCBTgpQBLglCoALQDxAaCsAQQFGAfE1AAQHUAAD/g/QBzgcBsgwQBOgiB7hFQFSi8DahdQG/jAKeixQNnjoU5mnQLHjjFchtQJai+Gvh/QXpnAZooUIQJlOQHricFAhaQLejOKJhHQKEhHRnAAQaWAAV7C8QS4CiTKFSQMoDfWcHpQN0EuE3BoQLFDsJlC6QDiBFJsCsQJtCxHhCmQW1H5QjK1UAwkAf3AAAA7mQAAHBjBIoQjcJzmhJMQniKmqvIXQsRJkvsGDQ5JJyrPERQy9HMs5EBQwDFBtrCbQvLCsuxAAUggBAAAgZogChgEitjBJvQsglqruoAQmdkbo7m8IAqhFQSyL9dMJTQDpBKDtBGICOApQFKDtC9CCQHRFCGXDnQ12kFyfoWgEia9BHyIiAhcQn2lqjmiiQzZtswfvhQxawXuayjQiQi6h8jKQFbAgFxAkQQ+BrU2JnQTdI9RsNbQRqNZKANUQFHG1CZGAQB+E/AAEMQAABIgJBEIAAC8QzkjgyQlQgEia9BHyIAAAAgEikhBE5Q9MpTyyr9QjhiPjKiVQi3iHikiMQm2l3rkomQjZigqKnXIknjWIh+hlQk7kBj/jSQpNnjkHjqIgJAIIh0hsIgNgMIgbgpQgmg8gRgnQDwA6C8AcQDPAfGCAdQIwAmG9AkQH8AnI6A1QB8DKCQC6QOaSjRaQXQQfPhTZNsQDmCiH2FqIgOAzQjthGjphKgEjwRgIBIAAAAg");
	this.shape_5.setTransform(43,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1823,-835.8,3725.6,1665.6);


(lib.lombreTxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// txt
	this.instance = new lib.lombreBtn();
	this.instance.setTransform(0,31);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.lombreBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:29.6522,alpha:0.0435},0).wait(1).to({y:28.3043,alpha:0.087},0).wait(1).to({y:26.9565,alpha:0.1304},0).wait(1).to({y:25.6087,alpha:0.1739},0).wait(1).to({y:24.2609,alpha:0.2174},0).wait(1).to({y:22.913,alpha:0.2609},0).wait(1).to({y:21.5652,alpha:0.3043},0).wait(1).to({y:20.2174,alpha:0.3478},0).wait(1).to({y:18.8696,alpha:0.3913},0).wait(1).to({y:17.5217,alpha:0.4348},0).wait(1).to({y:16.1739,alpha:0.4783},0).wait(1).to({y:14.8261,alpha:0.5217},0).wait(1).to({y:13.4783,alpha:0.5652},0).wait(1).to({y:12.1304,alpha:0.6087},0).wait(1).to({y:10.7826,alpha:0.6522},0).wait(1).to({y:9.4348,alpha:0.6957},0).wait(1).to({y:8.087,alpha:0.7391},0).wait(1).to({y:6.7391,alpha:0.7826},0).wait(1).to({y:5.3913,alpha:0.8261},0).wait(1).to({y:4.0435,alpha:0.8696},0).wait(1).to({y:2.6957,alpha:0.913},0).wait(1).to({y:1.3478,alpha:0.9565},0).wait(1).to({y:0,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-50,466,131);


(lib.clodsireTxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// txt
	this.instance = new lib.clodsireBtn();
	this.instance.setTransform(0,31,1,1,0,180,0);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.clodsireBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:49,y:-19.35,alpha:0.0435},0).wait(1).to({y:-20.7,alpha:0.087},0).wait(1).to({y:-22.05,alpha:0.1304},0).wait(1).to({y:-23.4,alpha:0.1739},0).wait(1).to({y:-24.75,alpha:0.2174},0).wait(1).to({y:-26.1,alpha:0.2609},0).wait(1).to({y:-27.45,alpha:0.3043},0).wait(1).to({y:-28.8,alpha:0.3478},0).wait(1).to({y:-30.15,alpha:0.3913},0).wait(1).to({y:-31.5,alpha:0.4348},0).wait(1).to({y:-32.85,alpha:0.4783},0).wait(1).to({y:-34.2,alpha:0.5217},0).wait(1).to({y:-35.55,alpha:0.5652},0).wait(1).to({y:-36.9,alpha:0.6087},0).wait(1).to({y:-38.25,alpha:0.6522},0).wait(1).to({y:-39.6,alpha:0.6957},0).wait(1).to({y:-40.95,alpha:0.7391},0).wait(1).to({y:-42.3,alpha:0.7826},0).wait(1).to({y:-43.65,alpha:0.8261},0).wait(1).to({y:-45,alpha:0.8696},0).wait(1).to({y:-46.35,alpha:0.913},0).wait(1).to({y:-47.7,alpha:0.9565},0).wait(1).to({y:-49,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-148,540,229);


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
	this.instance = new lib.headforButton();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,0.2,0);

	this.instance_1 = new lib.headforButtonHover();
	this.instance_1.setTransform(-0.05,0,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377.2,-211,754.4,422);


(lib.walkingTitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wooper
	this.instance = new lib.walking();
	this.instance.setTransform(-259,93.95,1,1,0,0,0,-107.9,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:11076.95},168).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-643.9,-286.4,12105.9,760.8);


// stage content:
(lib.senior_gray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 15;
		
		function handleKeyDown(event){
			console.log(root.wooper.scaleX);
			if (root.wooper.currentFrame == 10){
				root.wooper.gotoAndPlay("walking");
			}
		
			if (event.keyCode == 39 && root.background_mc.x > -2800){
				root.wooper.scaleX = 0.3588;
				root.background_mc.x = root.background_mc.x - speed;
				root.background2.x = root.background2.x - speed;
				root.trunkOutside.x = root.trunkOutside.x - speed;
				root.trunkInside.x = root.trunkInside.x - speed;
				root.endScreen.x = root.endScreen.x - speed;
				root.endScreenText.x = root.endScreenText.x - speed;
				root.ground.x = root.ground.x - speed;
				root.ground2.x = root.ground2.x - speed;
				root.ground3.x = root.ground3.x - speed;
				root.pond.x = root.pond.x - speed;
				root.trees.x = root.trees.x - speed;
				root.trees2.x = root.trees2.x - speed;
				root.lombre.x = root.lombre.x - speed;
				root.stunfisk.x = root.stunfisk.x - speed;
				root.clodsire.x = root.clodsire.x - speed;
				root.lombreTxt.x = root.lombreTxt.x - speed;
				root.stunfiskTxt.x = root.stunfiskTxt.x - speed;
				root.clodsireTxt.x = root.clodsireTxt.x - speed;
			}
			if (event.keyCode == 37 && root.background_mc.x < 2500) {
				root.wooper.scaleX = -0.3588;
				root.background_mc.x = root.background_mc.x + speed;
				root.background2.x = root.background2.x + speed;
				root.trunkOutside.x = root.trunkOutside.x + speed;
				root.trunkInside.x = root.trunkInside.x + speed;
				root.endScreen.x = root.endScreen.x + speed;
				root.endScreenText.x = root.endScreenText.x + speed;
				root.ground.x = root.ground.x + speed;
				root.ground2.x = root.ground2.x + speed;
				root.ground3.x = root.ground3.x + speed;
				root.pond.x = root.pond.x + speed;
				root.trees.x = root.trees.x + speed;
				root.trees2.x = root.trees2.x + speed;
				root.lombre.x = root.lombre.x + speed;
				root.stunfisk.x = root.stunfisk.x + speed;
				root.clodsire.x = root.clodsire.x + speed;
				root.lombreTxt.x = root.lombreTxt.x + speed;
				root.stunfiskTxt.x = root.stunfiskTxt.x + speed;
				root.clodsireTxt.x = root.clodsireTxt.x + speed;
			}
		}
		
		function handleKeyUp(event) {
			root.wooper.gotoAndPlay("standing");
		}
		
		this.play_btn.addEventListener("click",handleClickPlayButton);
		
		function handleClickPlayButton(event){
			var music_snd = createjs.Sound.play("crickets");
			root.play()
		}
		
		this.lombre.addEventListener("click",lombreLook);
		
		function lombreLook(){
			var music_snd = createjs.Sound.play("lombreCry");
			root.lombre.play();
			if(root.lombreTxt.currentFrame == 0){
			root.lombreTxt.play();
			}
		}
		
		
		this.stunfisk.addEventListener("click",stunfiskLook);
		
		function stunfiskLook(){
			var music_snd = createjs.Sound.play("stunfiskCry");
			root.stunfisk.play();
			if(root.stunfiskTxt.currentFrame == 0){
			root.stunfiskTxt.play();
			}
		}
		
		this.clodsire.addEventListener("click",clodsireLook);
		
		function clodsireLook(){
			var music_snd = createjs.Sound.play("clodsireCry");
			root.clodsire.play();
			if(root.clodsireTxt.currentFrame == 0){
			root.clodsireTxt.play();
			}
		}
		
		this.lombreTxt.addEventListener("click", lombrelink.bind(this));
		
		function lombrelink(e) {
			
		var url = "https://bulbapedia.bulbagarden.net/wiki/Lombre_(Pok%C3%A9mon)";
			
		var win = window.open(url, "_blank");
			
		win.focus();
		}
		
		this.stunfiskTxt.addEventListener("click", stunfisklink.bind(this));
		
		function stunfisklink(e) {
			
		var url = "https://bulbapedia.bulbagarden.net/wiki/Stunfisk_(Pok%C3%A9mon)";
			
		var win = window.open(url, "_blank");
			
		win.focus();
		}
		
		this.clodsireTxt.addEventListener("click", clodsirelink.bind(this));
		
		function clodsirelink(e) {
			
		var url = "https://bulbapedia.bulbagarden.net/wiki/Clodsire_(Pok%C3%A9mon)";
			
		var win = window.open(url, "_blank");
			
		win.focus();
		}
		
		this.titleWooper.addEventListener("click", wooperlink.bind(this));
		
		function wooperlink(e) {
			
		var url = "https://bulbapedia.bulbagarden.net/wiki/Wooper_(Pok%C3%A9mon)";
			
		var win = window.open(url, "_blank");
			
		win.focus();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// button
	this.play_btn = new lib.button();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(1392.35,720.05,0.36,0.36,0,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1));

	// credit
	this.instance = new lib.credit();
	this.instance.setTransform(1392.2,616.5,0.4065,0.4065,0,0,0,72,87.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// titleText
	this.instance_1 = new lib.titletext();
	this.instance_1.setTransform(1369.15,492.05,1,1,0,0,0,-23.1,161.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// trunkOutside
	this.trunkOutside = new lib.trunkOutside();
	this.trunkOutside.name = "trunkOutside";
	this.trunkOutside.setTransform(5023.4,472.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A2109").ss(10,1,1).p("EglWg64QiXAAgLAMQBNABBVABEg8NAqhQgUCHgvCUQhBCehfCqQgBABAAAAQicEUilCgEBDrgNhQAJAoAHAmQAeCVAQBlIAKAA");
	this.shape.setTransform(5143.525,237.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AAEAnIgLhNIAPBNg");
	this.shape_1.setTransform(5577.45,154.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.trunkOutside}]},1).wait(1));

	// walkingTitle
	this.titleWooper = new lib.walkingTitle();
	this.titleWooper.name = "titleWooper";
	this.titleWooper.setTransform(-116.3,963.65,0.2712,0.2712,0,0,0,-258.9,94);

	this.timeline.addTween(cjs.Tween.get(this.titleWooper).to({_off:true},1).wait(1));

	// walking
	this.wooper = new lib.walking();
	this.wooper.name = "wooper";
	this.wooper.setTransform(685.2,677.55,0.3588,0.3588,0,0,0,-107.9,-36.5);
	this.wooper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wooper).wait(1).to({_off:false},0).wait(1));

	// lombre
	this.lombre = new lib.lombre();
	this.lombre.name = "lombre";
	this.lombre.setTransform(628.25,560.2,0.5012,0.5012,0,0,0,16.1,162.3);
	this.lombre._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lombre).wait(1).to({_off:false},0).wait(1));

	// trunkInside
	this.trunkInside = new lib.trunkInside();
	this.trunkInside.name = "trunkInside";
	this.trunkInside.setTransform(4930.05,394.2);
	this.trunkInside._off = true;

	this.timeline.addTween(cjs.Tween.get(this.trunkInside).wait(1).to({_off:false},0).wait(1));

	// stunfisk
	this.stunfisk = new lib.stunfisk();
	this.stunfisk.name = "stunfisk";
	this.stunfisk.setTransform(1728.5,740.3,0.1571,0.1571,0,0,0,297.9,16.6);
	this.stunfisk._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stunfisk).wait(1).to({_off:false},0).wait(1));

	// textBtns
	this.clodsireTxt = new lib.clodsireTxt();
	this.clodsireTxt.name = "clodsireTxt";
	this.clodsireTxt.setTransform(2812.85,236.85,0.5631,0.5631,0,180,0,-0.1,80);

	this.stunfiskTxt = new lib.stunfiskTxt();
	this.stunfiskTxt.name = "stunfiskTxt";
	this.stunfiskTxt.setTransform(1679.35,634.75,1,1,0,0,0,0,80);

	this.lombreTxt = new lib.lombreTxt();
	this.lombreTxt.name = "lombreTxt";
	this.lombreTxt.setTransform(625.85,349.85,0.6,0.6,0,0,0,0.1,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lombreTxt},{t:this.stunfiskTxt},{t:this.clodsireTxt}]},1).wait(1));

	// endScreenText
	this.endScreenText = new cjs.Text("the End", "96px 'Gogono Cocoa Mochi'", "#FFFFFF");
	this.endScreenText.name = "endScreenText";
	this.endScreenText.textAlign = "center";
	this.endScreenText.lineHeight = 98;
	this.endScreenText.lineWidth = 674;
	this.endScreenText.parent = this;
	this.endScreenText.setTransform(6600.4,412.7,2.6519,2.6519);
	this.endScreenText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.endScreenText).wait(1).to({_off:false},0).wait(1));

	// endScreen
	this.endScreen = new lib.endScreen();
	this.endScreen.name = "endScreen";
	this.endScreen.setTransform(6915.35,620.1);
	this.endScreen._off = true;

	this.timeline.addTween(cjs.Tween.get(this.endScreen).wait(1).to({_off:false},0).wait(1));

	// pond
	this.pond = new lib.pond();
	this.pond.name = "pond";
	this.pond.setTransform(-1530.45,966.85,1.9089,1.9754,0,0,0,-85,206.8);
	this.pond._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pond).wait(1).to({_off:false},0).wait(1));

	// ground
	this.ground3 = new lib.ground();
	this.ground3.name = "ground3";
	this.ground3.setTransform(-1624.3,904.25,1,1,0,0,180,457.9,207.6);

	this.ground2 = new lib.ground();
	this.ground2.name = "ground2";
	this.ground2.setTransform(3828,882.15,1,1,0,0,0,457.9,207.6);

	this.ground = new lib.ground();
	this.ground.name = "ground";
	this.ground.setTransform(1243.35,882.2,1,1,0,0,0,457.9,207.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ground},{t:this.ground2},{t:this.ground3}]},1).wait(1));

	// trees
	this.trees2 = new lib.trees();
	this.trees2.name = "trees2";
	this.trees2.setTransform(6285.5,264.1,0.6882,0.6882);

	this.trees = new lib.trees();
	this.trees.name = "trees";
	this.trees.setTransform(2116.65,282.1,0.687,0.687,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.trees},{t:this.trees2}]},1).wait(1));

	// clodsire
	this.clodsire = new lib.clodsire();
	this.clodsire.name = "clodsire";
	this.clodsire.setTransform(2831.95,441.35,0.3804,0.3804,0,0,0,9.5,36.2);
	this.clodsire._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clodsire).wait(1).to({_off:false},0).wait(1));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EkSIBrhMAAAjXBMIkRAAAMAAADXBg");
	this.shape_2.setTransform(1065.6,508.1);

	this.background2 = new lib.background();
	this.background2.name = "background2";
	this.background2.setTransform(-5830.4,572.7,1,1,0,0,0,5789.8,-488.6);

	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(1874.65,391.85,0.6882,0.6882,0,0,0,2715.2,-482.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.background_mc},{t:this.background2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-10267.5,360,18846.3,1034);
// library properties:
lib.properties = {
	id: 'FD3849E603A9234FAC97424853C20DE9',
	width: 2784,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/clodsireCry.mp3", id:"clodsireCry"},
		{src:"sounds/lombreCry.mp3", id:"lombreCry"},
		{src:"sounds/stunfiskCry.mp3", id:"stunfiskCry"},
		{src:"sounds/crickets.mp3", id:"crickets"}
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
an.compositions['FD3849E603A9234FAC97424853C20DE9'] = {
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