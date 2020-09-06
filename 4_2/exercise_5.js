//5- Make a pyramid with n base asterisks that is empty in the middle. Assume that the value of n will always be odd:

let n = 7;

for (var i = 1; i <= n; i+=1) {
    var row = '';
    if (i%2 != 0) {
        var a = (n-i)/2
        for (var j = 1; j <= a; j+=1) {
            row += ' ';
        }
        for (var k = 1; k <= i; k++) {
            if (i == n || k == i || k == 1) {
                row += '*';
            }
            else {
                row += ' ';
            }

        }
        for (var j = 1; j <= a; j+=1) {
            row += ' ';
        }
        console.log(row);
    }
    }