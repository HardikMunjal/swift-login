The this keyword is used to tie each function and property to an object instance.
// this is used  to use value of properity in another property of object/function

var object = { 
	name:'hardik',
	age:23,
	combine: function(){
		return this.age = this.age+1;
	},
	test: function(){
		this.raju = 21;
		return this.raju;
	}
};

console.log(object.combine());
//console.log(name);
console.log(object.test());
//  console.log(raju);









// by default this refers to global object .. like you can compare it to window  for browser and global for node

//the value of this is dependent upon two things: The type of code being executed (i.e., global, function, or eval) and the caller of that code. 

// There are only three cases where the value of this changes: method invocations, functions called with the new operator, and functions called using call and apply



// ******************method invocation

//If we call a function as a property of an object using either dot (i.e., obj.foo()) or bracket (i.e., obj["foo"]()) notation, this will refer to the parent object in the body of the function:

var counter = {
  val: 0,
  increment: function () {
    this.val += 1;
  }
};
counter.increment();
console.log(counter.val); // 1
counter['increment']();
console.log(counter.val); // 2

var inc = counter.increment;
inc();
console.log(counter.val); // 2
console.log(val); // NaN

// it was effectively running:

// window.val += 1;
// window.val is undefined, and adding 1 to undefined yields NaN.


// ******************** new operator

function F (v) {
  this.val = v;
}
var f = new F("Woohoo!");
console.log(f.val); // Woohoo!
console.log(val); // ReferenceError



//This leads to our third rule: this in function code invoked using the new operator refers to the newly created object.

//Note that there’s nothing special about F. If we call it without using new, this will refer to the global object:

var f = F("Oops!");
console.log(f.val); // undefined
console.log(val); // Oops!

//In this case, F("Oops!") is a regular function call, and this doesn’t get set to a new object, because no new object is created since the new operator isn’t used. this remains set to the global object.



// *************call and apply

var add = function (x, y) {
      this.val = x + y;
    },
    obj = {
      val: 0
    };
add.apply(obj, [2, 8]);
console.log(obj.val); // 10

// The call method works exactly the same as apply, but you pass the arguments individually rather than in an array:

add.call(obj, 2, 8);
console.log(obj.val); // 10



