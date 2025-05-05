'use strict'
// //Task#1
// let name = 'Mary '
// let activity = 'drink tea'
// let bio = 'Our guest ' + name + activity + '.'

// console.log(bio.length);

// //Task#2
// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// let answer = prompt("Enter a number to get the char at this location: ");
// console.log("char #" + answer + " is " + str.charAt(answer));

//Task#3
let sentence = prompt("Enter a sentence: ");
let srtLength = sentence.length;
console.log("The sentence is: " + sentence);
console.log("char at last possition is " + sentence.charAt(srtLength - 1));
console.log("char before last char is " + sentence.charAt(srtLength - 2));
