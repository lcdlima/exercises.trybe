// 2- For the second exercise, make a program that, given any value n, is n> 1,
// prints a right triangle with n base asterisks on the screen

let n = 5;
let text = "*";

for (let i = 1; i<= n; i+=1) {
    console.log(text);
    text += "*";
}