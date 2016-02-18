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


var counter = {
	val: 0,
	increment: function () {
		this.val = 1;
	}
};
counter.increment();
console.log(counter.val); // 1
var inc = counter.increment;
inc();
console.log(counter.val); // 2
counter.increment();
console.log(counter.val); 
console.log(val);





function F (v) {
  this.val = v; //if you use var then at end  you will get undefined
}
var f = new F("Woohoo!");
var fx = new F("hahahah!");

//F("oops");
console.log(f.val); // Woohoo!
console.log(fx.val); // Woohoo!
//console.log(val); // ReferenceError





