//*********************** Equality ( ==. === and Object.is() ) ********************

/*
Difference between === and == as follow:
The first one considers the type of its operands.
*/

console.log(1 == "1");            // is true
console.log(1 === "1");           // is false
console.log(Object.is( 1, "1" )); // is false


/*
In ES6, Object.is(a, b) provides same value equality, which is 
almost the same as === except the following differences:
*/

console.log(Object.is( +0, -0 )) // is false, while
console.log(-0 === +0)           // is true

console.log(Object.is( NaN, NaN ))            // is `true`, while 
console.log(NaN === NaN)         // is false
