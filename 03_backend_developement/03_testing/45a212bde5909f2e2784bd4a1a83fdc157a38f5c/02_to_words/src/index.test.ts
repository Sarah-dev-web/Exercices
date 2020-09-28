import {toWords} from "./index";
test("splitSentence: should return split sentence", (done) => {
    expect.assertions(1);
    let result = [];
    expect(result).toEqual("/[.!, :]+/")
    done();
});