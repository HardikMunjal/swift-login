var array =[12,22,13,41,53,32,17];

console.log('bc');

function bubble_sort(){

for(j=0;j<array.length;j++)	
 for (i=0;i<array.length-j;i++){
 	if(array[i+1]<array[i]){
 		var x = array[i+1];
 		array[i+1] = array[i];
 		array[i]= x;
 	}
 	console.log(i,array);
 }
 
 }

 bubble_sort();