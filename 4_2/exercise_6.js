//6- Make a program that says whether a number defined in a variable is prime or not.

let n = 19;
prime = false;

for (let i = 2; i < n; i += 1) {
    if (n % i == 0) {
        prime = false;
        break;
    } else {
        prime = true;
    }
}

if (prime == true) {
    console.log(n, "is prime");
} else { 
    console.log(n, "isn't prime");
}
