// Create a function that takes an array of integers and returns the index of the lowest value.
// Test array: [2, 4, 6, 7, 10, 0, -3] ;.
// Expected value when returning the function: 6.

function minValue (array) {
    let min = 0;
    for (let index in array) {
        if (array[index] < array[min]) {
            min = index;
        }
    }
    return min;
}

console.log (minValue([1, 44, 3, 11, 89, 10]));