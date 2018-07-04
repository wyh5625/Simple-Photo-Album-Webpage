// Question 2A

function invoke(f, start, interval, end) {
	var timerFunc = function(interval, f, end){
		setTimeout(function(){
			setTimeout(f, interval);
			var left = end - interval;
			if(left > 0)
				timerFunc(interval, f, end - interval);
		}, interval);
	}
	setTimeout(function(){}, start);
	if(end == undefined){
		var ID = setInterval(f,interval);
	}else{
		timerFunc(interval,f,end);
	}
} 

var setup = function() {
	console.log("Calling invoke ");		
	var foo = function() { 
		console.log("time: " + Date.now()); 
	}
	invoke( foo,
		 2000,	// start 
		 1000, 	// interval
		 10000	// end - should work both with and without this
	);
} 