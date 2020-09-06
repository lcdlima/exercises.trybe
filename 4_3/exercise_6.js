// Create a function that takes an array of integers and returns the index of the highest value.
// Test array: [2, 3, 6, 7, 10, 1] ;.
// Expected value when returning the function: 4.

function maxValue (array) {
    let max = 0;
    for (let index in array) {
        if (array[index] > array[max]) {
            max = index;
        }
    }
    return max;
}

console.log (maxValue([1, 44, 3, 11, 89, 0]));