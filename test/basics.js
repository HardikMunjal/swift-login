


//********************************variables
//they are case sensitive4
// % this symbol gives you remainder of the division

var post= 123;

var result = ++post; //value is first incremented then returned
var res= post++; //value is first assigned then returned

post += 3; // post = post + 3  



// **********************************DataTYpes in javascript
//number string //boolean  
//undefined :- when you try to access a variable that doesn't exist, you get thespecial value undefined . The same will happen when you have declared a
//             variable, but not given it a value yet. JavaScript will initialize it behind the scenes, with the value undefined

//null : It means no value, an empty value, nothing. The difference with undefined is that if a variable has a value null , it is still defined, it only happens that its value is nothing
// objects : array, json, objects ...main thing , even null is also considered as object
//infinity : number too big to handle
var array =[];
var object={};
console.log(typeof array);
console.log(typeof object);

//The null value, on the other hand, is not assigned by JavaScript behind the scenes; it can only be assigned by your code.

//these null values are usually use at arithmetic operation , this will not give you unexpected results as undefined




//************************************* Strings

var str = "cat";
str.length; // will give length of string but throw exception if string is null or undefined

/* To add two strings together, you can use the + operator:
> "cats" + " go " + "meow";
'cats go meow' */

// to find index of string

var f_name = 'hardik you are not great';

console.log(f_name.indexOf('you'));

if(f_name.indexOf('hardik') >= -1)
{
	console.log('hardik in the string');
}

// to find indexOf array

var array_ = ['hardik','shivika','riddhi'];
console.log(array_.indexOf('hardi')); // it will return -1,, because in case of array it does not check for substring

// to find index of object

var object_ = [{name:'hardik'},{name:'shivika'}];




//********************speacial values
// for constant use such type of notation
var SECONDS_PER_DAY = 86400;

/* 0.1 + 0. 2
0.30000000000000004
>
When performing floating-point mathematical operations, you cannot just manipulate arbi-
trary real numbers and expect an exact value:
> 1 - 0.3 + 0.1 == 0.8
false
>
*/

//false , 0 , empty strings ( "" ), NaN , null , and undefined all evaluate to false .
// All other values evaluate to true .

//infinity : number too big to handle
var infy= Infinity;
console.log(typeof infy); //number

//nan : it is a speacial value which is also a number
var nan= "121";
var nan1= 121;
console.log(typeof nan);
console.log(typeof nan *5);

console.log(typeof nan1);

var check;
console.log("check"+typeof check); //undefined

//********************* functions in javascript **************************

//We cant define function with same name but different parameters
//The second definition will overlap the first one if having same name

function sum(a,b){
	return a+b;
}

function sum(a,b,c){
	return a+b+c;
}

console.log(sum(1,2));
console.log(sum(1,2,3));


// if some function takes 3 parameter and we are calling that function with only i or two or 0 parameter,, then javascript automatically assigns these parameters as undefined
// and now if you try to sum number + undefined it will give result NAN

//But if you pass more parameters then extra parameters will be ignored.

//But there is a argument array ,which is created inside all functtions which contains the list of all the arguments 




//************** scope of variables

// if variables are defined in function then they cant be used outside the function , 

//howevere outside the function these variables are declared as global variables which you can use from anywhere


var shivu=123;
function harry(){
	  hardu = 321; //this is wrong,a;ways use var
	return hardu;
}
//console.log(hardu);
harry();
console.log(hardu);


// this is an important concept, if we dont use var to declare varibles in function
// then after calling that function once.. you can use that variable from anywhere which is bad
// if you dont use var to declare variables then those variables have the global scope, once function is initialized


var yoke;
console.log(yoke); //undefined
//console.log(notHere); //throw reference error, notHere is not defined


//************ different types of defining a function ***************

var type1 = function(a,b){
	return a+b;
}
console.log(type1(1,1,1));







//***************** Objects ****************************
//they are key value pair ,, which have some properties and methods(function)
var obj= {
	     name:'hardik',
		 say: function() {
	    return 'I am ';
	  }};
console.log(obj.name);
console.log(obj['name']);
console.log(obj.say());

//Best Practice Tip: No quotes
// 1. Use the dot notation to access methods and properties

//console.log(obj.nops());  //throw error,no method defined 
//console.log(obj.nops);     //print undefined

//Deleting a property:
 console.log(delete obj.name); //return true

//Calling the method again will no longer work:
// hero.say();
//reference to undefined property 
//hero.name


//*********************************** Prototypes **************************************************

//Function in javascript are objects

//whenever we create function in javascript , there are some methods and properties which are created by default 

// methods: call(), apply()
// properties : length ,constructor, prototype

//It's as if you added this property yourself like this:
// foo.prototype = {} //suppose  foo is a function name

// *****  3.76 + 36 +  94 ===== 5.06          < 31,000 >        <3.3 L  +++ 1.8L>    <<40,000 june  60,000 july>>    2.40 + 70 +36 +  80 == 4.26            Rs: 26,000  *****

// 2.4 + 36 + 30        = 3.06  20k
// 2.4 + 0.7+ 36 + 80   = 4.26  26k
// 2.4 + 1.2 + 36 + 90  = 4.86  30k
// 2.4 + 1.2 + 36 + 90  = 4.96  30k
// 2.4 + 1.36+ 36 + 90  = 5.02  31k
// 2.4 + 1.36+ 36 + 90  = 5.12  31k



 function Girls(){
    
    var caring_nature =true;
    var friendly_nature =true;
    var soft_hearted = true;
 }


var girlObject = {}





Math.ceil(1.6);  upward to passed value
Math.floor(1.6); downward to passed value

Math.floor((Math.random() * 10) + 1);






{ 
	console.log('start of semi colon 1');
	console.log(1);
	{ 
		console.log('start of semi colon 2');
		console.log(2);
		{
			console.log('start of semi colon 3');
			console.log(3);
			{
				console.log('start of semi colon 4');
				console.log(4);
			}
			console.log('end of semi colon 4');
		}
		console.log('end of semi colon 3');
	}
	console.log('end of semi colon 2');
}
console.log('end of semi colon 1');



for(i=0;i<3;i++){
	console.log('{');
    console.log('bc');

    for(j=0;j<i;j++){
    	console.log('{');
        console.log('bc');
    }
    console.log('}');
}




	function(){
        console.log('bc');
        function(){
        console.log('bc');
        function(){
        console.log('bc');
        function(){
        console.log('bc');
	}
	}
	}
	}
	for (var i = 0; i < Things.length; i++) {
		Things[i]
	};



	function s(in){
		if(in==50)
			return
		else{
			s(in++)
		}
	}

	


	function abc(){

		if(x<4){
			abc();
		}
		x++

	}




	