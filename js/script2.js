var newNode = document.createTextNode("hello");
var body = document.getElementById("mainBody");
body.appendChild(newNode);

function Counter(initial){
	var val;
	var initV = initial;
	var that = this;
	this.init = function(){
		val = initV;
	};
	this.init();
	return{
		increment: function() { val += 1;},
		rreset: function() { that.init();},
		get: function() { return val;}
	}
};
var f = Counter(5), g=Counter(10);
f.increment(); f.rreset(); f.increment();
g.increment(); g.increment();
console.log(f.get() + ", " + g.get());

function Point( x, y){
	this.x = 2; this.y = y;
};
var p1 = new Point(2, 3);
var p2 = new Point(5, 7);
console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(p1).constructor);

// Prototype inheritance
var Person = function(firstName, lastName, Gender){
	this.firstName = firstName;
	this.lastName = lastName;
	this.Gender = Gender;
}
var Employee = function(firstName, lastName, Gender, title){
	Person.call(this, firstName, lastName, Gender);
	this.title = title;
}

Employee.prototype = new Person();

Employee.prototype.constructor = Employee;
var emp = new Employee("ABC", "XYZ", "Male", "Manager");
emp.height = 15;
console.log(emp.Gender);
if(emp.hasOwnProperty('firstName')) console.log("it obj");

function MultiCounter(initial) {
	var that = this;
	var val = [];
	this.init = function() {
		val = [];
		for(var i = 0; i< initial.length;i++){
			val.push(initial[i]);
		};
	};
	this.init();
	return{
		increment: function(i){val[i] += 1;},
		resetAll: function(){ that.init();},
		getValues: function(){return val;}
	};
};
var m = MultiCounter([1,2,3,4,5]);
console.log(m.getValues());

