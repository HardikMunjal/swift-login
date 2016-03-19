var array=[54,67,87,32,12,45,90,76,105,86]


Array.max = function(array ){
    return Math.max.apply( Math, array );
};


console.log(Array.max(array));