const SymbolOperators = ["+", "-", "*", "/"];
function calculator(reader) {
  reader.question("Enter the first number\n>", (FirstNumber = parseFloat(FirstNumber)) => {
    reader.question("Choose an operation\n>", (Operator) => {
      reader.question("Enter the second number\n>", (SecondNumber = parseFloat(FirstNumber)) => {
        if (Operator === SymbolOperators[0]) {
          console.log(FirstNumber + SecondNumber);
          return FirstNumber + SecondNumber;
        } else if (Operator === SymbolOperators[1]) {
          console.log(FirstNumber - SecondNumber);
          return FirstNumber - SecondNumber;
        } else if (Operator === SymbolOperators[2]) {
          console.log(FirstNumber * SecondNumber);
          return FirstNumber * SecondNumber;
        } else if (Operator === SymbolOperators[3]) {
          console.log(FirstNumber / SecondNumber);
          return FirstNumber / SecondNumber;
        } else {
          console.log("Error");
        }
        reader.close();
      });
    });
  });
}

export { calculator };
