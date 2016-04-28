var arr = [100,2,34,56,32,16,56,45,89,32,98,234,222,208,450,322,505]
var firstHighest = 0;
var secondHighest = 0;


if(arr[0]>arr[1]){
    

         firstHighest = arr[0];
         secondHighest = arr[1];

	}

	else {

		firstHighest = arr[1];
         secondHighest = arr[0];
	}

for(i=0;i<arr.length;i++){

 if (arr[i]>firstHighest){
 	secondHighest = firstHighest;
 	firstHighest = arr[i];
 }
 else if((arr[i]<firstHighest) && (arr[i]>secondHighest)){
    secondHighest = arr[i]
 }
}


var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);


function quicksort(data) {
    if (data.length == 0) return [];
  
    var left = [], right = [], pivot = data[0];
  
    for (var i = 1; i < data.length; i++) {
        if(data[i] < pivot)
            left.push(data[i])
        else
            right.push(data[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
}