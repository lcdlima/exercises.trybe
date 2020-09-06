// 3- Make a program that returns the largest of three numbers. 
//Define three variables at the beginning of the program with the values to be compared.

const a = 4;
const b = 0;
const c = 7; 

if (a >= b) {
    if (b >= c){
        console.log(a);
    } 
    else if (c >= b) {
        if (c >= a){
            console.log(c);
        }
        else {
            console.log(a);
        }
    }
} 
else if (b >= a) {
    if (a >= c) {
        console.log(b);
    }
    else if (c >= a) {
        if (c >= b) {
            console.log(c);
        }
        else {
            console.log(b);
        }
    }
}

