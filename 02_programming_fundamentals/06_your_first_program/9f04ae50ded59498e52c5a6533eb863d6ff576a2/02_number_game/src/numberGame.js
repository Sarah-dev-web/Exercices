function numberGame(reader, min = 1, max = 100) {
  // code here
  const numberToFind = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);
  const randNum = numberToFind(min, max);
  function askQuestion(text) {
    reader.question(text, (number) => {
      if(isNaN(number)){
        //console.log("This is not a number");
        askQuestion("This is not a number");

      }
      else if(number < min || number > max) {
        //console.log("The number is between 1 and 100 of range");
        askQuestion("The number is between 1 and 100 of range\n");
      } else if (number < randNum) {
        //console.log("too low");
        askQuestion("too low\n");
      } else if (number > randNum) {
        //console.log("too high");
        askQuestion("too high\n");
      } else if (number == randNum) {
        console.log("You won!");
        reader.close();
      } else {
        //console.log("This was not a number");
        askQuestion("This was not a number\n");
      }
    });
  }
  askQuestion("Which number?");
}

/*reader.question("What is your first name? ", (FirstName) => { 
    reader.question("What is your last name? ", (lastName) => {
      
    
      reader.question("What is your age? ", (age) => {
        console.log(`Your name is ${FirstName} ${lastName} and you are ${age}.`);
        reader.close();
      });
    });
  }); */

module.exports = numberGame;
