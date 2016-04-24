1: Node js is a framework of javascript , throuhgh which we can use js outside the web browser to make backed of application.

2: Node js built on chrome v8 engine and use libuv

3: Node js runs on single threaded model,, through which it can handle many parallel request becoz in threaded model requires memory
   of RAM , So cost is high. But single threaded model is not good for heavy computation application as it will block the 
   thread.
4: We can also create different threads in javascript using web workers in javascript or child process in node js
5: In Node js we use callbacks, for heavy computation task as we dont want to hold our thread.
6: Callbacks : concept cleared 

   callback is usually passing function as aparameter to another function

   suppose we are doing in first function and we want some data from second function, then from first function , we will call 
   second function by passing 1 extra parameter that is our callback function. IN usual case,1st parameter of callback is error and second
   parameter is the result which we want. Then at last in second function we will execute callback by passing parameter err or result
   ,depending upon the condition.


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


   Currently this callback is not asynchronus, but you can make it..using web workers..set immediate will also make it some sort
   of asynchronus, But this callback is memory efficient..here you are not using extra variable to store the result of second function

   Callback Flow //not 100% sure

   Node is a single threaded which has main event loop, but usually callbacks which require complex computation runs on worker threads.
   (internal c++ threadpool) this doe not block the current main thread
    The main event loop continues to execute after the dispatching the request to thread pool. 
    It can accept more requests as it does not wait or sleep, REsponse are sent to main thread via callback(from worker thread)
   //http://stackoverflow.com/questions/14795145/how-the-single-threaded-non-blocking-io-model-works-in-node-js



7:  setTimeout:   concept cleared used in routes/index
8:  setImmediate:
9:  process.nextTick is simply send task to end of the queue. We generally dont use next tick for heavycomputation operation.
10: If in your for loop, there is  callback function then you have to be careful,Because callback will execute later so it can
    not use your for loop increment value.
    

    for(i=0;i<10;i++){

    	(function(num){ 
    		process.nextTick(function(){
    			console.log(num);
    		});
    	}(i))

    }

11:  Node async:



closure
redis


for (prop in req.body) {
      movie[prop] = req.body[prop];
    }




1 callback concept and its example   'done'
2 node async  
3 rest api
4 nodemailer
5 cron jobs
6 node routing
7 express session
8 bodyparser
9 buffer/chunks
10 promise
11 fileupload/multer
12 morgan
13 oauth
14 request module
15 cluster and child
16 javascript es5 5 function
17 js basics
18 new es6 features
19 angular js study
22 datastr
23 mysql
memory leak in NodeJS

strict mode

To avoid the so-called Callback-Hell one thing you can do is to start using async.js.

Async.js helps to structure your applications and makes control flow easier.

http://expressjs.com/en/api.html

function add(number1){
	random(number1,function(err,result){
	})
}