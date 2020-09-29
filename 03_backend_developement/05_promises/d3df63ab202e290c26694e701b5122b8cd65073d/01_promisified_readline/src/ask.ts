import { rl } from "./reader";

function ask(question: string, reader = rl): Promise<string> {
  // Your code goes here

  const promise: Promise<string> = new Promise((resolve, reject) => {
    reader.question(question, (answer: string) => {
      if (answer !== "") {
        resolve(`${answer}`);
      } else if (answer === "") {
        reject("");
      }
    });
  });
  return promise;
}

// Leave line below for tests to work properly
export default ask;
