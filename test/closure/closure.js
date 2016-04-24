//Example 1
// Here we see that closure can access outer function variables
function fullName(firstName,lastName){
	var fixed = 'Your Name is ';
	function nameMaker(){
		return fixed + firstName + lastName;
	}
	return nameMaker()
};

console.log(fullName('hardik','munjal'));


//Example 2 
//Closure magics starts from here, they can access outer function variable even after when outer function returned
//here we can also get the benefit of private variable
//A closure is a function having access to the parent scope, even after the parent function has closed.

function totalCrushes(crush1,crush2){
	var statics ='your crushes are ';
	var topLevel= 'ayushi';
	var counter =1;
	
    function topPriority(crush3){
    	console.log(counter);
    	counter+=1;
    	
        return statics + topLevel + crush1 + crush2 +crush3 ;
    }
    return topPriority
}

var totalcru = totalCrushes(' shivika',' riddhi');

console.log(totalcru(' divi'));
console.log(totalcru(' mahima'));
console.log(totalcru(' divi'));
console.log(totalcru(' mahima'));


//Example 3
//This is best use case of closure which i find 
// in closure we can access outerfunction parameter and variable
//we can also change value of outerfunction value but not outerfunction parameter,first we have to make it variable here.


function MoneyLeft(moneyLeft){

	var saving = 10000;
    return {
    	getTotal : function(){
    		return saving + moneyLeft;
    	},
    	setTotal :function(otherExpense){
    		saving= saving-otherExpense;
    	}
    }
}

var totalSum = MoneyLeft(20000);
console.log(totalSum.getTotal());
console.log(totalSum.setTotal(5000)); //will undeefined becoz we are not returning anything
console.log(totalSum.getTotal());



//Example 4
// The case of closure , where some problem can arrise
// the closure  has access to the outer function’s variables by reference, not by value. 

// function friendsMaker(friendArray){

//     var i;
//     var uniqueID = 100;
// 	for(i=0;i<friendArray.length;i++){
// 		friendArray[i].id =  function (){
//           return uniqueID + i;
//        }
// 	 }
//   return friendArray
//  }

//  var friendArray=[{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

//  var fmaker = friendsMaker(friendArray);
//  console.log(friendArray);
//  //var ffmaker=fmaker[0];
//  console.log(fmaker[0].id()); 
//  console.log(fmaker[1].id()); 
//  console.log(fmaker[2].id()); 


 //Example 5

 function friendsMaker(friendArray){

    var i;
    var uniqueID = 100;

	for(i=0;i<friendArray.length;i++){
		(function(i){
		friendArray[i].id =  function (){
          return uniqueID + i;
       }
      })(i);
	 }
  return friendArray
 }

 var friendArray=[{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

 var fmaker = friendsMaker(friendArray);
 console.log(friendArray);
 //var ffmaker=fmaker[0];
 console.log(fmaker[0].id()); 
 console.log(fmaker[1].id()); 
 console.log(fmaker[2].id()); 
