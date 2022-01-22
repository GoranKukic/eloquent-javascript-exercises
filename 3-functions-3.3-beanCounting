/*Write a function countBs that takes a string as its only argument
and returns a number that indicates how many uppercase “B” characters
there are in the string.

Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character 
that is to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.*/

/*function countBs(str){
  let numberOfBs= 0;
  for(let i = 0; i < str.length; i++){
  	if (str[i] === "B"){
    	numberOfBs +=1;
    }
  }
  return numberOfBs;
};*/

function countChar(str, letter){
  let numberOfLetters= 0;
  for(let i = 0; i < str.length; i++){
  	if (str[i] === letter){
    	numberOfLetters +=1;
    }
  }
  return numberOfLetters;
}

function countBs(str){
  return countChar("BBC", "B");
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
