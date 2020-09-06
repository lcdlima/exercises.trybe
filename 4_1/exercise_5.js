// 5- Make a program that defines three variables with the values of the three internal angles of a triangle. 
//Return true if the angles represent the angles of a triangle and false otherwise.
//For the angles to be a valid triangle, the sum of the three must be 180 degrees. If the angles are invalid, 
//the program should return an error message.

const a = 30;
const b = 60;
const c = 90;

if (a+b+c == 180){
    console.log(true);
}
else {
    console.log(false);
    console.log("The angles are not valid")
}