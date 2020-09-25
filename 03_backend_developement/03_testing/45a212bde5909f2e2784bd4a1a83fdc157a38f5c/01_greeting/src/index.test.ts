import {greet} from "./index";
test("greetingName", () => {
    expect.assertions(1);
    let result = greet ("Francis");
    expect(result).toBe("Hello FRANCIS!");
  });
  test("greetingName", () => {
    expect.assertions(1);
    let result = greet ();
    expect(result).toBe("Hello WORLD!");
  });