function filter(array, str) {
  // Your code here
  const newArray = [];
  if(str !== "even" && str !== "odd"){
    return array;
  }
  for(let i = 0; i < array.length; i++){
    if(str === "even" && array[i]% 2 === 0){
      newArray.push(array[i]);
    }else if(str === "odd" && (array[i] %2 === 1 || array[i] %2 === -1)){
      newArray.push(array[i]);
    }

  }
  return newArray;
}

// do not remove this line, it is for tests
module.exports = filter;
