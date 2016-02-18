var util = require('util');



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
 console.log(new Girls('riddhi', 'brown');.getInfo());

 console.log(util.inspect(process.memoryUsage()));

