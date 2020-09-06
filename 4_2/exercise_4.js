//4- Then, make a pyramid with n basic asterisks:

let n = 7;

for (var i = 1; i <= n; i+=1) {
    var row = '';
    if (i%2 != 0) {
        a = (n-i)/2
        for (var j = 1; j <= a; j+=1) {
            row += ' ';
        }
        for (var k = 1; k <= i; k++) {
            row += '*';
        }
        for (var j = 1; j <= a; j+=1) {
            row += ' ';
        }
        console.log(row);
    }
    }