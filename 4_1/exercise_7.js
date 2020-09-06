// 7- Write a program that converts a grade given as a percentage (from 0 to 100) into concepts from A to F. Following these rules:
// Percentage> = 90 -> A
// Percentage> = 80 -> B
// Percentage> = 70 -> C
// Percentage> = 60 -> D
// Percentage> = 50 -> E
// Percentage <50 -> F
// The program should return an error message and end if the grade passed is less than 0 or greater than 100.

const nota = 100;

if (nota >= 90 && nota <= 100) {
    console.log("A");
}
else if (nota >=80) {
    console.log("B");
}
else if (nota >=70) {
    console.log("C");
}
else if (nota >=60) {
    console.log("D");
}
else if (nota >=50) {
    console.log("E");
}
else if (nota <50 && nota>=0) {
    console.log("F")
}
else {
    console.log("Invalid Grade");
}