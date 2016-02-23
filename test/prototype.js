
var util = require('util');

//prototype
//this 
//basics
//program
//node
//node basics
//node callbacks
//node error handling
//node async
//node promises
//angular
//high level management


//*********************************** Prototypes **************************************************

//Function in javascript are objects

//whenever we create function in javascript , there are some methods and properties which are created by default 

// methods: call(), apply()
// properties : length ,constructor, prototype

//It's as if you added this property yourself like this:
// foo.prototype = {} //suppose  foo is a function name





// looking same : haha
//It’s important to note that there is a major difference between a function and an object. When a function is created it can act like a constructor (class template), creating new objects with the ‘new’ keyword. Objects cannot do this themselves.



//               var girlObject =  { 
// 	                  caring_nature : 'true',
//                    friendly_nature : 'true'
//                    }



// when i am using normal calling of function,, the memory usage is very less
// when i am calling constructor  function  using new..it will create new memory for each object..so memory consumption is high
//but you can reduce it using prototype but not less than normal function
/*
 
function Girls(name,color){
    
    var gname = name;
    var eyes_color = color;
    var caring_nature =true;
    var friendly_nature =true;
    var soft_hearted = true;
    var addss= function add(a,b)
{

	var c = a*b/a + a +b + a/b;
	return c;
};

     return 'the name is' + gname + 'her eyes colour is' + eyes_color + ' caring nature is' + caring_nature +'friendly nature is' + friendly_nature + 'she is also' +soft_hearted+ 'and sum is' +addss  ;
 }

 console.log(Girls('shivika','blue'));
 console.log(Girls('riddhi','brown'));
 console.log(Girls('shivik','blue'));
 console.log(Girls('riddh','brown'));
 console.log(Girls('shivi','blue'));
 console.log(Girls('ridd','brown'));


console.log(util.inspect(process.memoryUsage()));


*/

function Girls(name,color){

	this.gname = name;
	this.eyes_color = color;
	this.friendly_nature =true;
	this.soft_hearted = true;
	this.getInfo = function(){
		return 'the name is' + this.gname + 'her eyes colour is' + this.eyes_color + ' caring nature is' + this.caring_nature +'friendly nature is' + this.friendly_nature + 'she is also' +this.soft_hearted+ 'and sum is' +this.addss ;
	}
}

Girls.prototype.caring_nature=true;
Girls.prototype.friendly_nature=true;
Girls.prototype.soft_hearted=true;
Girls.prototype.addss= function add(a,b)
										{

											var c = a*b/a + a +b + a/b;
											return c;
										};

//var newtoy = new Girls('shivika', 'blue');
//var newtoy1 = new Girls('riddhi', 'brown');
console.log(new Girls('shivika', 'blue').getInfo());
console.log(new Girls('riddhi', 'brown').getInfo());

console.log(util.inspect(process.memoryUsage()));


 //*************************************

var geets = new Girls('geetika', 'blue');

console.log(geets.soft_hearted);

// now what is the difference between normal function properties and prototype properties
// first compiler looks for (like geets.soft_hearted) ,in this case it first looks at function normal properties then it looks 
// for prototype properties,,
// normally they are used  when you have created new objects from the same function using new operator..here in these cases  you will use 
// prototype for those properties which you want to share with different functions objects < save memory >





//now if you want to list all the properties of objects..here we will use for-in loop

var a = [1, 2, 3];
for (var i in a) {
  console.log(a[i]);
}

var o = {p1: 1, p2: 2};
for (var i in o) {
  console.log(i + '=' + o[i]);
}

// if you want to see all properties of geets <Girls function>

for (var prop in geets) {
  console.log(prop + ' = ' + geets[prop]);
}

geets.hasOwnProperty('gname');  //true 
geets.hasOwnProperty('soft_hearted'); //false


for (var prop in geets) {
  if (geets.hasOwnProperty(prop)) {
    console.log(prop + '=' + geets[prop]);
  }
}




//////// isPrototypeOf()

//Let's take a simple object monkey .

var monkey = {  
  hair: true,  
  feeds: 'bananas',  
  breathes: 'air'
};
//Now let's create a Human() constructor function and set its prototype property to point to monkey .

function Human(name) {  
  this.name = name;
} 
Human.prototype = monkey;

var george = new Human('George');
monkey.isPrototypeOf(george) // true



/*
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
And then instantiate two new person objects as follows:

var rand = new Person("Rand McNally", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
Then you can rewrite the definition of car to include an owner property that takes a person object, as follows:

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
To instantiate the new objects, you then use the following:

var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);
Instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects rand and ken as the parameters for the owners. To find out the name of the owner of car2, you can access the following property:

car2.owner.name
*/