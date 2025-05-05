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

// //Task#3
// let sentence = prompt("Enter a sentence: ");
// let srtLength = sentence.length;
// console.log("The sentence is: " + sentence);
// console.log("char at last possition is " + sentence.charAt(srtLength - 1));
// console.log("char before last char is " + sentence.charAt(srtLength - 2));

// //Task#4
// const str = 'abcde';
// let newStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str.charAt(i);
// }
// console.log("old string: " + str);
// console.log("new string: " + newStr);

// //Task#5
// const str = "js";
// console.log(str.toUpperCase()); 

// //Task#6
// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// let sentence = prompt("Enter a sentence: ");
// let res = str.includes(sentence);
// console.log(res);

// //Task#7
// const No = '-';
// let str = '1-2-3-4-5';
// while (str.includes(No)) {
//     str = str.replace(No, '.');
// }
// console.log(str);

// //Task#8
// const str = "1-2-3-4-5";
// const newStr = str.replaceAll("-", ".");

// console.log(newStr); 

// //Task#9
// const str = 'sdfwe';
// console.log(str.substring(4, 2)); // fw

// //Task#10
// const str = "I'm learning javascript!";
// console.log(str.slice(4, 12)); //learning
// console.log(str.slice(13)); //javascript!

// console.log(str.substring(4, 12)); //learning
// console.log(str.substring(13)); //javascript!

// console.log(str.substr(4, 8)); //learning
// console.log(str.substr(13)); //javascript!

// //Task#11
// const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'
// if (str.indexOf('http://') == 0)
//     console.log("start with http://");
// else
//     console.log("Not start with http://");

// //Task#12
// const str = 'https://www.notion.html'
// if (str.indexOf(".html", 0) == str.length - 5)
//     console.log("ends with .html");
// else
//     console.log("Not end with .html");

//Task#13

