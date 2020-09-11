function range (num1, num2) {
  const array = [num1];
  if (num1 < num2) {
    while(num1 < num2){
      array.push(num1 + 1);
      num1++;
    }
  } else if(num1 > num2){
    while(num1 > num2){
      array.push(num1 - 1);
      num1--;

    }
  }
  return array;
}

const ascArray = range(1,4);
const descArray = range(4,1);



// Do not remove last lines, it is for tests
module.exports = range;
