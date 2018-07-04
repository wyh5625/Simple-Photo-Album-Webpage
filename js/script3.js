// Counts the total number of characters in a given text file
var fs = require('fs');
if(! fs) process.exit(1);
var length = 0;
var fileName = "sample.txt";

var readStream = fs.createReadStream(fileName);

readStream.on("data",function(blob) {
	console.log("Read " + blob.length);
	length += blob.length;
});

readStream.on("end", function(){
	console.log("Total number of chars read = " + length);
});

readStream.on("error", function() {
		console.log("Error occurred when reading from file " + fileName);
	} );

console.log("End of program. Number read = " + length);

// find word in a file
var fs = require('fs');
if (! fs) process.exit(1);

if (process.argv.length < 4) {
	console.log("Syntax: fileName string");
	process.exit(2);
}

var fileName = process.argv[2];
var textToFind = process.argv[3];	
var readStream = fs.createReadStream(fileName);;
var oldBlob = "";
var index = -1;

readStream.on("data", function(blob) {
			console.log("Read " + blob.length +  " bytes");
			var newBlob = oldBlob + blob;
			index = newBlob.indexOf(textToFind);
			if (index >= 0) readStream.emit("end");
			oldBlob = blob;
		} );

readStream.on("end", function() {
		if (index>=0)
			console.log("Found string " + textToFind);
		else	
			console.log("Did not find string " + textToFind);
	} );

readStream.on("error", function() {
		console.log("Error occurred when reading from file " + fileName);
	} );

console.log("End of program");

// Q1
var search(word){
	var body = document.getElementsByTagName("body");
	var children = body.childNodes;
	if(children != null){
		for()
	}
}