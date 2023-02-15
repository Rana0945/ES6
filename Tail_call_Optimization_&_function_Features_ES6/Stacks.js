/********************** STACKS *********************

Introduction to stacks and stack size limits in Javascript.

There are two types of memory available to you: the stack and the heap. The 
heap is used for dynamic memory allocation, while the stack is used for static 
memory allocation. Accessing the stack is very fast, but the size of the stack 
is fixed.

Regardless of the browser, iterating from zero to a million 
in a for loop is an easy task.
*/

console.time( 'for loop' );
let sum = 0;
for ( let i = 0; i < 1000000; ++i ) {
    sum += i;
}
console.timeEnd( 'for loop' );

/*
Doing the same iteration as a recursive call is an arduous task that most 
browsers are not able to solve because of the stack limit. Execution is fast, 
but the stack limit will not make it possible to execute a million calls.
*/


function sumToN( n ) {
    if ( n <= 1 ) return n;
    return n + sumToN( n - 1 );
};

console.time( 'recursion' );
//console.log( sumToN( 1000000 ) ); RangeError: Maximum call Stack size exceeded
console.timeEnd( 'recursion' );

//Let’s examine how the following program is executed on the stack

function sumToN(n) {
    if ( n <= 1 ) return n;
    return n + sumToN( n - 1 );
};

console.log(sumToN(2));

/*
1) Initially, a reference to the sumToN function is created on the global 
   stack frame.

2) Once sumToN(2) is called, another stack frame is created, containing the 
   value of n, the expected return value, and a reference to sumToN.

3) Once sumToN(1) is called, another stack frame is created with another value 
   of n, the expected return value, and a reference to sumToN.

4) Once sumToN returns 1, the last stack frame is destroyed.

5) Once sumToN(2) is computed, the stack frame created in step (2) is destroyed.


   Note: Beyond a five digit stack limit, execution stops, and a JavaScript 
   error is thrown. We will combat this behavior with tail call optimization.

*/