// the requirements is in README.md file
//solving requirement 1
function addSeven(number){
  return number + 7;
}
let result = addSeven(10);
console.log(result);//17
//end of requirement 1

//solving requirement 2
function multiply(a,b){
  return a * b;
}
result=multiply(3,3);//9
result=multiply(9,9);//45
//end of requirement 2

//solving requirement 3
function capitalize(text){
  let lowerText =text.lowerCase(); //transform the given text to lowercase 
  //capitalizing the fisrt character of transformed text.
  return lowerText[0].toUpperCase() + lowerText 
}
//test cases for sugested requiriment 3
let text = capitalize("abcd");
console.log(text);//Abcd
text = capitalize("ABCD");
console.log(text);//Abcd
 text = capitalize("aBcD");
console.log(text);//Abcd