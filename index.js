console.log("Hello from problem solving!");
// problem solving-1
// 6-how to find out duplicate number from an array
const numbers = [1, 2, 3, 3, 4, 5, 6, 7, 9, 10, 1, 4, 5, 7];
const duplicate = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});
console.log(duplicate);


// problem solving-2
// find out how much time happy has used and the time when happy has used then which position it is?
const sentence =
  "Now Happy is now going to her place where she wanted.after that Happy will go to her guitar learning class.its the last date of the week and it will be the last date happy will go to her guitar class.";
// first off all i will find out how much time happy has used.it can be uppercase or lowercase
const matches = sentence.match(/happy/gi);
const occurrences = matches ? matches.length : 0; //ternary operator
console.log(occurrences);
// second of all we will find out the 1st position of happy--index number
let position = sentence.search(/happys/i); //search will find out the 1st position of happy and regex-i means case sensitive.if search did not find anything it will return -1
// now if you want to check
position = position >= 0 ? position : "Not Found!!!";
console.log(position);
