// Solution to q4 - class hierarchy
var Line = function(width){
	this.width = width;
}
var Rectangle = function(width, height){
	Line.call(this, width);
	this.height = height;
}
var Prism = function(width, height, depth){
	Rectangle.call(this, width, height);
	this.depth = depth;
}
Prism.prototype.isVolumeEqual = function(pri){
	if(pri instanceof Prism){
		if(this.width*this.height*this.depth == pri.width*pri.height*pri.depth)
			return true;
		return false;
	}else{
		throw 'Error';
	}
}
// Test
var prism1 = new Prism(2,3,4);
var prism2 = new Prism(4,3,2);
var prism3 = new Prism(2,2,2);
var rect1 = new Rectangle(4,3);
console.log( prism1.isVolumeEqual(prism2) );
console.log( prism1.isVolumeEqual(prism3) );
console.log( prism1.isVolumeEqual(rect1) );