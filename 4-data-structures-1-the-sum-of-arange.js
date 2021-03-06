/*The sum of a range
1. Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.

2. Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the example program and see whether it does indeed return 55.

3. As a bonus assignment, modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. If no step is given,
the elements go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/


function range (start,end) {
  let arr=[];
  for(let i=start; i<=end; i++){
   arr.push(i);
  }
  return arr;
 }
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum(range(1, 10)));
// → 55

/* third task is not complete, something is not working

function range(start, end, step) {
  let arr = [];
  if (step == null && start < end) {
    step = 1;
    for (let i = start; i <= end; i+=step) {
        arr.push(i);
  };
  }else if(step == null && start > end) {
    step = 1;
    for (let i = start; i >= end; i-=step) {
        arr.push(i);
    };
  }else if(start < end) {
    let stepIncrement = Math.abs(step);
    for (let i = start; i <= end; i += stepIncrement) {
      arr.push(i);
    };
  }else{
    let stepIncrement = Math.abs(step);
    for (let i = start; i >= end; i -= stepIncrement) {
        arr.push(i);
  };
  return arr;
}};

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

*/

