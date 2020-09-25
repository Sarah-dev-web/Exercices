// Code the class here.
 abstract class Tree {
  age: number = 0 ;
  height: number = 0;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    if (this.age >= 1 && this.age <= 9) {
        this.height = this.height + 25 * this.age;
    }
    if (this.age >= 10 && this.age <= 20) {
        this.height = this.height + 10 * this.age;
    }
    if (this.age > 20) {
        this.height = this.height + 0 * this.age;
    }
  }
  abstract ageOneYear() : void;
  abstract isAlive() : boolean;
}
// Leave the line below for tests to work properly.
export { Tree };
