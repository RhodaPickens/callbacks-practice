/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/
/* change sentence to array to iterate thru
check if word ends with one of the keys of object, and if it does, use value as callback to operate on that word
then return word to new array, and change to sentence.
 */
let suffixCipher = function(sentence, obj) {
    let words = sentence.split(' ');
    let newSentence = [];

    for (let i = 0; i < words.length; i++) {        // iterate thru words
        let word = words[i];
        let returned = 0;
        for (let key in obj) {                      // loop through keys of the object
            let value = obj[key];
            if (word.endsWith(key)) {               // check if word ends with one of the suffixes
                newSentence.push(value(word));      // run the callback function and add to new sentence
                returned = 1;                       // shows that the word was added
            }
        };
        if (returned === 0) {                       // if it didn't match a suffix then return word as is
            newSentence.push(word);
        }
    }
    return newSentence.join(' ');
};





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
