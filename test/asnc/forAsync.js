// var async = require('async');


// var arr = ['Hello', 'World', 'Javascript', 'Async', ':)'];
// for( var i = 0; i < arr.length; i++) {
//  (function(index){
//    setTimeout(function(){

//       console.log(arr[index]);
//    }, 500);

//  })(i);
// }



// for(i=0;i<10;i++){
//   (function(num){
//     setTimeout(function(){ console.log(num); }, 3000);  
//   }(i))	
// }


for(i=0;i<10;i++){
  
 (function(num){ 
  process.nextTick(function(){
  	console.log(num);
  });
 }(i))

}




var counterArray = {
           A : 3,
           B : 4
  };
  counterArray["C"] = 1;

  console.log(Object.keys(counterArray).length);

// var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
// var i = 0;
// async.forEachOf(obj,
//   function(value,key,callback) {
//     console.log('hi:', i);
//     setTimeout(function(){ console.log(i); }, 3000);
//     i++;
//     callback();
//   },
//   function(err) {
//     console.log('All done!');
//   }
// );