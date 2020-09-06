// 10- Write a program that, given the cost of a product and its sale value, calculates how much profit (in absolute numbers) 
//the company will have when selling a thousand of these products.

// Note that a 20% tax is levied on the cost of the product, which must be considered when calculating profit.

// Your program should also issue an error message and terminate if any of its input values are less than zero.

const cost=200;
const sale=0;

if (cost >= 0 && sale >=0) {
    console.log(sale - (cost + cost*0.2));
}
else {
    console.log("Invalid value, must be greater than zero");
}
