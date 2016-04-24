//ES 5 important functions




//1: indexOf 
//this method we usually use to find a postion of particular value in array

var array=['hardik','munjal','lovey']

console.log(array.indexOf('lovey'));
console.log(array.indexOf('vettori'));


//2: filter
//this method creates a new array with all elements that pass the test 

var array1 = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];


// for(i=0;i<array1.length;i++){

//   if(i===0){
// 	console.log(Object.keys(array1[i]));
//   }
// }

var newArray1 = array1.filter(function(item){
	return item.name === 'orange'
})

console.log(newArray1);


//3: forEach
// The forEach() method executes a provided function once per array element.
//for loop is actually shown to perform much better than forEach.

var array2 = [1,2,3,4,5,6,7,8];

array2.forEach(function(value,index){
  if(value===1){
  console.log(value,index);
 }
})


//4: MAP
//The map() method creates a new array of objects that contains a additional new property,using other properties of objects

var array2 = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];

var newArray2= array2.map(function(item,index){
   //item.full_name= [item.first_name,item.last_name].join("");
   item.full_name=item.first_name+item.last_name;
   return item;
});

console.log(newArray2);