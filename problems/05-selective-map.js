/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
    the first callback is being checked to see if it is true for each element
    the second callback is being run only on the ones that are true for the last one
- What do you expect each callback function to be returning?
    A boolean for callback 1
    A number for callback 2
- How many times are you calling each callback function?
    once per element for the first, once per element that passed as true for the second.
*******************************************************************************/


let selectiveMap = function(array, cb1, cb2) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        if (cb1(num) === true) {
            let res = cb2(num);
            newArray.push(res);
        } else {
            newArray.push(num);
        }
    }

    return newArray;
};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = selectiveMap;
