/*function range (num1, num2) {
  const array = [];
  let i = num1;
  if (num1 <= num2) {
    while(i <= num2){
      array.push(i);
      i++;
    }
  } else if(num1 >= num2){
    while(i >= num2){
      array.push(i);
      i--;
    } 
  }  return array;
}
  

const ascArray = range(1,4);
const descArray = range(4,1);
console.log(ascArray);
console.log(descArray);*/

function range(num1, num2) {
  const array = [];
  let i = num1;
  if (num1 <= num2) {
    while (i <= num2) {
      array.push(i);
      i++;
    }
  } else if (num1 >= num2) {
    while (i >= num2) {
      array.push(i);
      i--;
    }
  }return array;
}
const ascArray = range(1, 4);
const descArray = range(4, 1);
console.log(ascArray);
console.log(descArray);

// Do not remove last lines, it is for tests
module.exports = range;
