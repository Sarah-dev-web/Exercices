const { clear } = require("console");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const moves = {
  rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],
  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  scissors: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};
clear();
console.log("Good luck!");
// eslint-disable-next-line no-empty-pattern
Object.keys(moves).forEach((moveName, index) => {
  console.log(`${index + 1} - ${moveName}`);
});
const reverseLine = (line) => {
  const changedLine = line.split("").map((char) => {
    if (char === ")") {
      return "(";
    } else if (char === "(") {
      return ")";
    }
    return char;
  });
  return changedLine.reverse().join("");
};
function ReStart() {
  reader.question("Select a move\n> ", (playerMove) => {
    if (playerMove < 1 || playerMove > 3) {
      console.log("You have to choose a number between 1 and 3");
      reader.close();
    } else {
      const index = parseInt(playerMove - 1);
      const move = Object.keys(moves)[index];
      const playerSymbol = moves[move];
      console.log(playerSymbol.join("\n"));
      //select a move for IA
      const aiIndex = Math.floor(Math.random() * 3);
      const aiMove = Object.keys(moves)[aiIndex];
      const aiSymbol = moves[aiMove].map(reverseLine);
      console.log(aiSymbol.join("\n"));
      //display the move
      //compares moves

      //console.log( "66:", playerMove === aiMove);

      if (index === aiIndex) {
        console.log("Ex-aequo");
        // ReStart();
      } else if (Object.keys(moves)[0] === "rock") {
        if (aiMove === "paper") {
          console.log("Game over");
        //   ReStart();
        } else {
          console.log("You won");
        //   ReStart();
        }
      } else if (Object.keys(moves)[1] === "paper") {
        if (aiMove === "scissors") {
          console.log("Game over");
        //   ReStart();
        } else {
          console.log("You won");
        //   ReStart();
        }
      } else if (Object.keys(moves)[2] === "scissors") {
        if (aiMove === "rock") {
          console.log("Game over");
        //   ReStart();
        } else {
          console.log("You won");
        //   ReStart();
        }
      }
      //display the winner
      reader.question("Do you wanna play again? (Y/N)", (answer) => {
        if(answer.toLowerCase() === "y" || answer === ""){
          ReStart();
        } else {
          console.log("Bye bye");
          reader.close();
        }
      });
    //   
    }
  });
}

ReStart();
