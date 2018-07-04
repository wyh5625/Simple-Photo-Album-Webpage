var fs = require('fs');
var fileName = "sample.txt";
var readStream = fs.createReadStream(fileName);
var words = 0;
readStream.on("data", function(blob) {
	var sentence = blob.toString();
	var first = 0;
	var wr = 0;
	for(var i = 0; i < sentence.length; i++){
		var c = sentence.charAt(i);
		if(c == '.' || c == '!' || c== '?'){
			if(first == 1)
			first = 0;
			wr ++;
		}else{
			first = 1;
		}
	}
	words += wr;
} );

readStream.on("end", function() {
	console.log(words + " words");
	console.log("jj");
} );

readStream.on("error", function() {
     console.log("Error occurred when reading from file " + fileName);
} );