// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
let starString = " ";
for (let i = 0; i < 5; i++) {
  let star = " ".repeat(i) + "*".repeat(5 - i);
  console.log(star);
}
