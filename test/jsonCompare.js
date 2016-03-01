



var obj1 = [{"a":3,"b":2,"c":3,"d":8},{"a":3,"b":2,"c":3,"d":8}];
var obj2 = [{"a":3,"b":2,"c":3,"d":8},{"a":3,"b":2,"c":3,"k":8}]

var ref1=[];
var ref2=[];



for(i=0;i<obj1.length;i++){
for(var prop in obj1[i]){

ref1.push(obj1[i][prop]);
ref1.push(prop);
}
}


for(i=0;i<obj2.length;i++){
for(var prop in obj2[i]){

ref2.push(obj2[i][prop]);
ref2.push(prop);
}
}


console.log(ref1.toString()==ref2.toString()); //true
