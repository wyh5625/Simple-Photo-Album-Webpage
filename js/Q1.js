function factorial(x) {
	if (x==0)
		return 1;
	else {
		return x * factorial(x-1);	
	}
}

function memfactorial() {
	var storage = {};
	return function(n){ 
			if(n in storage){ 
				return storage[n];
			}else{
				var result = factorial(n);
				storage[n] = result;
				return result;
			}
		};
}

	
console.log( "Fact(5) = " + factorial(5) );
var mfact = memfactorial();
console.log( "Memo-Fact(5) = " + mfact(5) );
console.log( "Memo-Fact(6) = " + mfact(6) );