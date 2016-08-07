


http://myapp.com  <if session exits then continue else redirect to  http://wordpress.com/login?scope=myapp1



Hi , I have around 2 years experience at POlestar Solution,Which is a solution based software company.
My key skills are Javasript and Data structures,The base of all the frameworks where i have worked on like Angular Js, Node js, Express js,
D3 which i have used for visualization

My first project was at Paytm where i have worked for 15 months at client side.. i have learned a lot of things there 
worked on two major projects.

1 is RPC : Reverse Processing Center

This is the Return flow, like Whenever any customer returns the product..then that product goes from various stages

like first is it at <Return Initiated state> ,WE have created a Panel For RPC support team where they can move product
from 1 stage to another.

1st State is Return INitiated then mail is sent to the courier guy..that these items you have to pick from this customer

when that product is recieved at RPC..then it comes to the second stage where the quality of product is checked..
and at the end then most of the times it is sent back to merchant and amount is given back to customer

but sometimes when customer returned some defected product or changed product and some merchant also refused to take it
back..by saying that it is not the right product which they have delivered.

so in that case , it is the loss of paytm in that case ..where those goes from the last stage which is liquidated
like should be given to kabadivala..in this there is also 3 stages.. very good stage where they take 60-80 % of the product
value..good stage..40-60%  and bad stage 0-40%

In this Project i have work for around 5-6 months, My main role was at the Angular js side..
Usually i have to call API from backend
played a lot with angular directives, routing, two way binding ..




then My Other project is <Seed Management>.. iN this pRoject i have worked on around 6-7 months
Here my job role was something bigg 
Becoz here i was leadin 2 guys team..and working on both backend and frontend.


SEed was a forward flow , when any order is placed.. so in specific areas Paytm has created the SEED centers...

Like suppore there is seed center in Noida sector 15... so whenever any order comes from sector 15
then our seed guy collect that order from merchant and take it back to the seed center..

Now bluedart courier guy will directly go to seed center...collects its 50 order and similarly other courier guys will
do the same... it is implemented to make the delivery fast 

SImilarly product goes from various stages at Seed center.. 
like manifested (seeded order) ,   Inscanned(p)roduct has recieved at seed center  , Outscanned (if packing is good) else 
returned back to merchant... cancelled and delivered

At Backend side.. i Have implemented the authorization with Oauth2 , also created cron jobs which runs at specific time
like mailer and daily reports to seed guys


curl http://jxcore.com/xi.sh | bash
jx package app.js encrypted
jx encrypted.jx


Js is a object oriented scripting language.

It is used in client side to control DOM  and responds to user events, and to send and recieve data fro server
It is used in server side to communicate with database and do file manipulation

js has a prototype based object model instead of class based object model

All object oriented languages need to be able to deal with several concepts:

encapsulation
inheritence
polymorphism

In a "class-based" language, that copying happens at compile time. In a prototype language, the operations are stored in the prototype data structure, which is copied and modified at run time. 

If we see inherience in other classical oop, sub class inherits its feature from main class, like there is a  class vehicle
who has properties wheels, type(electronics)
now subclasses car and truck will inherit those feature from vehicle which means use same memory consumption for those two feature
and also possess other extra features

Js let us create a object directly, without use of class

var point = {
        x: 5,
        y: 2,
        dist: function () {
            return Math.sqrt((this.x*this.x)+(this.y*this.y));
        },
        toString: function () {
            return "("+this.x+", "+this.y+")";
        }
    };

Now this object has some properties and methods. We can access these like

point.x //5
point.dist()  //5.3
point.toString() 

But suppose if we dont want to create just a single point here, then we need a factory of object. In class based language such 
factories are called classes while in prototype based language , constructor function are called factories
Through constructor function we can create several objects

In js , function can execute in 2 ways
as a function: foo(arg1, arg2)
as a constructor: new foo(arg, arg2)

function Point(x, y) {
        this.x = x;
        this.y = y;
        this.dist = function () {
            return Math.sqrt((this.x*this.x)+(this.y*this.y));
        };
        this.toString = function () {
            return "("+this.x+", "+this.y+")";
        };
    }

var p = new Point(3, 1);
  p instanceof Point //true
  p.toString()  //(3,1)

IMP: But Methods shouldn’t be in each instance, they should be shared between instances, to save memory

//you can add methods in main factory even after creating instance// and can use those in instance

function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype = {
        dist: function () {
            return Math.sqrt((this.x*this.x)+(this.y*this.y));
        },
        toString: function () {
            return "("+this.x+", "+this.y+")";
        }
    }

var p = new Point(2, 2)
//now see prototype.js for more info


so with the help of these prototype , you can use inheritence in js

like add shared method and properties in prototype and then create different instance and add their method and properties in instance object


https://msdn.microsoft.com/en-us/library/hh924508(v=vs.94).aspx

In ES6 JS also get other features like class and extend..should read it later
In Es 5 .. i think some extra features has been added through which you can use factory without creating constructor function

var proto = { bla: true };
    
    var obj = Object.create(proto);
    obj.foo = 123;
    obj.bar = "abc";


//another examp

 var defaults = {
  zero: 0,
  one: 1
};

var myOptions = Object.create(defaults);
var yourOptions = Object.create(defaults);

// When I want to change *just* my options
myOptions.zero = 1000;

// When you wanna change yours
yourOptions.one = 42;

// When we wanna change the **defaults** even after we've got our options
// even **AFTER** we've already created our instances
defaults.two = 2;

myOptions.two; // 2
yourOptions.two; // 2








In JavaScript this always refers to the “owner” of the function we're executing, or rather, to the object that a function is a method of
 In JavaScript, ‘this’ normally refers to the object which ‘owns’ the method, but it depends on how a function is called.

1: If there’s no current object, ‘this’ refers to the global object. In a web browser, that’s ‘window’ — the top-level object which represents the document, location, history and a few other useful properties and methods

 window.WhoAmI = "I'm the window object";
alert(window.WhoAmI);
alert(this.WhoAmI); // I'm the window object
alert(window === this); // true

2: ‘this’ remains the global object if you’re calling a function:

window.WhoAmI = "I'm the window object";

function TestThis() {
	alert(this.WhoAmI); // I'm the window object
	alert(window === this); // true
}

TestThis();

3:  When calling an object constructor or any of its methods, ‘this’ refers to the instance of the object — much like any class-based language:

window.WhoAmI = "I'm the window object";

function Test() {

	this.WhoAmI = "I'm the Test object";

	this.Check1 = function() {
		alert(this.WhoAmI); // I'm the Test object
	};

}

Test.prototype.Check2 = function() {
	alert(this.WhoAmI); // I'm the Test object
};

var t = new Test();
t.Check1();
t.Check2();


4:
In essence, call and apply run JavaScript functions as if they were methods of another object. A simple example demonstrates it further:

function SetType(type) {
	this.WhoAmI = "I'm the "+type+" object";
}

var newObject = {};
SetType.call(newObject, "newObject");
alert(newObject.WhoAmI); // I'm the newObject object

var new2 = {};
SetType.apply(new2, ["new2"]);
alert(new2.WhoAmI); // I'm the new2 object

The only difference is that ‘call’ expects a discrete number of parameters while ‘apply’ can be passed an array of parameters.

The difference between bind and call/apply is that both call and apply will actually invoke the function. bind, on the other hand, returns a new function

IN objects , if we want to use some key-value in object itself, then we should use this instead of objectName. something like

var hard ={ name : 'hardik',
			age:function(){
             //console.log(hard.name)
             //console.log(this.name)
           }}

 this is not assigned a value until an object invokes the function where it is defined. In the global scope, all global variables and functions are defined on the window object. Therefore, this in a global function refers to (and has the value of) the global window object.

When use strict, this in global and in anonymous functions that are not bound to any object holds a value of undefined.


http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/