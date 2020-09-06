// 3- Now invert the side of the triangle.

let n = 5;

for (let i = 1; i <= n; i+=1) {
    let row = '';
    
    for (let j = 1; j <= (n - i); j+=1) {
      row += ' ';
    }
    
    for (let k = 1; k <= i; k+=1) {
      row += '*';
    }
    
    console.log(row);
    }
