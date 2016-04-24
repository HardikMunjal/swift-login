// function some_function(arg1, arg2, callback) {

//  console.log("hello");
//     var my_number = Math.ceil(Math.random() *

//         (arg1 - arg2) + arg2);

//        // callback(my_number);
// }


 function whichGirlfriend(marks,cb){

      if(!marks){
        var myError = new Error('My custom error!');
        return cb(myError);
      }
      if(marks>50){
        return cb(null,'shivika');
      }
      else if(marks<50 && marks>30){
        return cb(null,'riddhi');
      }
      cb(null,'sorry boss,you failed');
   }

   function hardiMarks(){

    var marks= Math.floor((Math.random()*100) +1);
    whichGirlfriend(marks,function(err,result){
      if(err){
        console.log('some error occured');
        return 
      }
      console.log(result);
    })
   }

   hardiMarks();