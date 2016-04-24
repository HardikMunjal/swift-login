// var results = [];

// setTimeout(function() {
//        console.log(“Task 1”);
//        results[0] = 1;
//        setTimeout(function() {
//               console.log(“Task 2”);
//               results[1] = 2;
//               setTimeout(function() {
//                      console.log(“Task 3”);
//                      results[2] = 3;
//               }, 100);
//               }, 200);
// }, 300);


// var result =[];

// setTimeout(function(){
//   console.log("Task 1 phase 1");
//   result[0]=1;

//   setTimeout(function(){
//     console.log("Task 2 phase 1");
//     result[1]=2;

//        setTimeout(function(){
//        console.log("Task 3 phase 1");
//        result[2]=3;
//           console.log(result);
//        },100);
//     },200);
 
// },300);





// var kresult=[];

// setTimeout(function(){
//   console.log("Task 1");
//   kresult[0]=1;
// },2);

// setImmediate(function(){
//   console.log("Task 2");
//   kresult[1]=2;
// });

// setTimeout(function(){
//   console.log("Task 3");
//   kresult[2]=3;

// console.log(kresult);
// },2);


var async = require('async');
// async.series([
//   function(callback) {
//     setTimeout(function() {
//       console.log('Task 1');
//       callback(null, 1);
//     }, 300);
//   },
//   function(callback) {
//     setImmediate(function() {
//       console.log('Task 2');
//       callback(null, 2);
//     });
//   },
//   function(callback) {
//     setTimeout(function() {
//       console.log('Task 3');
//       callback(null, 3);
//     }, 100);
//   }
// ], function(error, results) {
//   console.log(results);
// });



async.parallelLimit([
  function(callback) {
    setTimeout(function() {
      console.log('Task 1');
      callback(null, 1);
    }, 300);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task 2');
      callback(null, 2);
    }, 200);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task 3');
      callback(null, 3);
    }, 100);
  }
], 2, function(error, results) {
  console.log(results);
});
