// var myCallback = function(data) {
//   console.log('got data: '+data);
// };

// var usingItNow = function(callback) {
//   callback('get it?');
// };



// usingItNow(myCallback);



// GfMaker function will take hardiLyf-function as an argument(which return 1 to 10 number)... it it matches to number in gfmaker function

//*********1
var hardiLyf = function(){
	var number = numberGenerator();
	if (number == 6){
		console.log('oH ! hardi got gf');
	}
	else{
		console.log('sorry hardi you missed')
	}
}

var numberGenerator = function(){
	return 6;
}

hardiLyf();

//********2
var hardiLyf = function(number){
	if (number == 6){
		console.log('oH ! hardi got gf');
	}
	else{
		console.log('sorry hardi you missed')
	}
}

var numberGenerator = function(callback){
	callback(6);
}

numberGenerator(hardiLyf);

//*****3
var hardiLyf = function(err,number){
	if (err){ 
		console.log('babu some error occured');
		return;
	}

	if (number == 6){
		console.log('oH ! hardi got gf');
	}
	else{
		console.log('sorry hardi you missed')
	}
}

var numberGenerator = function(callback){
	var myError = new Error('My custom error!');
	callback(myError,6);
	//callback(null,6);
}

numberGenerator(hardiLyf);


//********4
var hardiLyf = function(err,number){
	if (err){ 
		console.log('babu some error occured');
		return;
	}

	if (number == 6){
		console.log('oH ! hardi got gf,But i THink this will print at the end');
	}
	else{
		console.log('sorry hardi you missed')
	}
}

var numberGenerator = function(callback){
	 callback(null,6);
}

process.nextTick(function() {
  numberGenerator(hardiLyf);
});

console.log('i am done');





function calculator(){

	var number = 5;
	var second_number = 20;

	addition(number,second_number,function(err,result){
		if (err){
			return console.log('bhai nahi ho paaega');
		}
		console.log(result);
	})
}

function addition(number,second_number,cb){
	if(number==5){
		return cb('err');
	}
	var x= number+second_number;
	return cb(null,x);
}

calculator();