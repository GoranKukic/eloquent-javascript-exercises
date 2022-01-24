/* Reversing an array

Write two functions, reverseArray and reverseArrayInPlace. 

1. The first, reverseArray, takes an array as argument and produces
a new array that has the same elements in the inverse order. 

2. The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method. */

// Your code here.

function reverseArray(arr){
	result=[];
  	for (let i = arr.length - 1; i >= 0; i --){
    result.push(arr[i]);
    };
  return result;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

/* Second task */

function reverseArrayInPlace(arrayValue){
  let tempMem =[];
  for (let i = arrayValue.length-1; i >= 0; i --){
    tempMem.push(arrayValue[i]);
    };
  console.log(tempMem);
  arrayValue = tempMem;
  console.log(arrayValue);
};

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
// → [5, 4, 3, 2, 1]
// → [5, 4, 3, 2, 1]
