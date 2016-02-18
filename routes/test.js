//   angular






// 1 rest api design structure
// 2 framework to manage code
// 3 SPA
// 4 directives , custom directives
// 5 MVC Design pattern
// 6 Services
// 7 Controllers
// 8 Model



	/*var triple = function(x){
	     return x*3
	      }

    console.log(triple(30));

	var animals = [
	{name : 'atul' , quality : 'chutiyapanti'},
	{name : 'jaijan' , quality : 'extrakhushi'}
	];

	var chutiya = animals.filter(function(animal) {
		return animal.quality === 'chutiyapanti'
	});*/

	function f1() {
		// f2(2, 3, function(value) {
		// 	f3(value);
		// 	console.log('pehle ye ');
		// });

		var x =f2(2,3);
		f3(x);
	}

	function f2 (a,b) {



    var x,y,chr;
    for(x=1; x<=6; x++)
    {
       for (y=1; y<x; y++)
         {
        chr=chr+("*");        
          }
     console.log(chr);
     chr='';    
    }


		var temp = a+b;
		//callback(temp);
		//setTimeout(function(){ alert("Hello"); }, 3000);
		return temp;
	}

	function f3(val) {
		var output = val * val;
		console.log(output);
	}



	f1();





function subtract(a,b,callback){

	var c= a-b;
	callback(c);
}

function print(subtractedValue){
	var ss = subtractedValue*6;
}

function x(print){
	console.log(print);
}

subtract(5,1,print);






function add(a,b)
{

	var c = a*b/a + a +b + a/b;
	return c;
}

function multiply(c)
{
	console.log(c*c);
}

function both()
{
	var a = add(3,4);
	console.log('a:'+a);
	multiply(a);
}


both();



function getStudentMarks()
{
	var StMarks = [{name : 'hardik' , marks : '23' , gender : 'male'},{name : 'ayushi' , marks : '21' , gender : 'female'},{name : 'shivika' , marks : '19' , gender : 'female'}];
    return StMarks;
}

function getTopper(arrayMarks)
{
	arrayMarks.forEach()
}



var x = Date.now() / 1000 | 0 ;
var y = Date.now();
console.log(x);
console.log(y);


function getDateTime() {

    var date = new Date();
    console.log("new date" +date);

    var hour = date.getHours();
    console.log("adding hour" +hour);

    hour = (hour < 10 ? "0" : "") + hour;
    console.log("hour after condition" +hour);


    var min  = date.getMinutes();
    console.log("adding minutes" +min);

    min = (min < 10 ? "0" : "") + min;
    console.log("minutes after condition" +min);

    var sec  = date.getSeconds();
    console.log("adding seconds" +sec);

    sec = (sec < 10 ? "0" : "") + sec;
    console.log("seconds after condition" +sec);

    var year = date.getFullYear();
    console.log("adding year ,get full year" +year);

    var month = date.getMonth() + 1;
    console.log("adding month" +month);

    month = (month < 10 ? "0" : "") + month;
    console.log("adding month after condition" +month);

    var day  = date.getDate();
    console.log("adding day" +day);

    day = (day < 10 ? "0" : "") + day;
    console.log("adding day after condition" +day);

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}

var xx =getDateTime();
console.log(xx);



var a ='';
        var b ="";
        var c = {};
        var d = [];
        var e = 0;
        var f = false;
        var g= NaN;
        var h = null;
        var i = undefined;

        console.log(!a);
        console.log(!b);
        console.log(!c);
        console.log(!d);
        console.log(!e);
        console.log(!f);
        console.log(!g);
        console.log(!h);
        console.log(!i);
    

        console.log("a value is '' " +a);
        console.log('a type is' +typeof(a));
        console.log(a.valueOf());
        console.log('b value is "" ' +b);
        console.log('b type is' +typeof(b));
        console.log("c value is {} " +c);
        console.log('c type is' +typeof(c));
        console.log("d value is [] " +d);
        console.log('d type is' +typeof(d));
        console.log("e value is 0 " +e);
        console.log('e type is' +typeof(e));
            console.log("f value is false " +f);
        console.log('f type is' +typeof(f));
            console.log("g value is NaN " +g);
        console.log('g type is' +typeof(g));
            console.log("h value is null " +h);
        console.log('h type is' +typeof(h));
            console.log("i value is undefined " +i);
        console.log('i type is' +typeof(i));
