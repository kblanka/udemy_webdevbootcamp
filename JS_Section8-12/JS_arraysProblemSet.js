var myArray = [1, 502, 5, 4, 3, -2, 41];
var myUniformArray = [1, 1, 1, 1, 1];

//takes an array as an argument and print out the elements in the array in reverse order (don't actually reverse the array itself)
function printReverse(array){
    for(var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

//takes an array as an argument and returns true if all elements in the array are identical
function isUniform(array){
    var first = array[i];
    for(var i = 1; i < array.length; i++){
        if(array[i] !== first){
            return false;
        }
    }
    return true;
}

//takes an array of numbers and returns the sum of all numbers in the array
function sumArray(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum;
}

function sumArray_forEach(array){
    var sum = 0;
    array.forEach(function(element){
      sum += element;  
    })
    return sum;
}

//takes an array of numbers and return the maximum number in the array
function max(array){
    var max = array[0];
    for (var i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}
