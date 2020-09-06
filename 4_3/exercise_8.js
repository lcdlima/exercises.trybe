// Create a function that takes an array of names and returns the name with the most characters.
// Test array: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'] ;.
// Expected value when returning the function: Fernanda.

function biggerName(array){
    let bigger = 0;
    let name = "";
    for (let index in array) {
        let i = array[index].length;
        if (i > bigger) {
            name = array[index];
            bigger = i;
        }
    }
    return name;
}

console.log (biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

