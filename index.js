console.log("Hello from problem solving!");

// 6-how to find out duplicate number from an array
const numbers=[1,2,3,3,4,5,6,7,9,10,1,4,5,7]
const duplicate= numbers.filter(function(value,index,array){
return array.indexOf(value)!== index
} )
console.log(duplicate)
