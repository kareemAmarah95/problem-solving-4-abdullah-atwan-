// Here’s an updated list of frequently asked JavaScript interview problems that don't involve complex algorithms, but still cover important fundamentals:

// 1. Two Sum Problem (Without Hash Maps)
// Problem: Given an array of integers and a target sum, find two numbers that add up to the target (brute force solution is okay).
// Concepts: Arrays, loops.

// function sumArr() {}
// function sumArr(arr) {
//   sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArr([1, 2, 3, 4]));

// ======================================================================================================================================================================================================
// 2. Reverse a String
// Problem: Write a function to reverse a string.
// Concepts: Strings, loops, or array methods.

// function reverseAString() {}
// function reverseAString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseAString("ahmed"));

// ======================================================================================================================================================================================================
// 3. Palindrome Check
// Problem: Check if a given string is a palindrome (reads the same forwards and backwards).
// Concepts: Strings, loops.

// function checkPalindrome() {}
// function checkPalindrome(str) {
//   let newArr = [],
//     originalWord,
//     reversedWord,
//     result = "";
//   originalWord = str.split("");
//   console.log(originalWord);
//   reversedWord = str.split("").reverse().join("").split("");
//   console.log(reversedWord);
//   result = originalWord === reversedWord ? `false` : `true`;
//   for (let i = 0; i < originalWord.length; i++) {
//     for (let j = 0; j < reversedWord.length; j++) {
//       if (originalWord[i] === reversedWord[j]) {
//         return `true palindrome`;
//       } else {
//         return `false palindrome`;
//       }
//     }
//   }
// }
// console.log(checkPalindrome("xxx"));
// ======================================================================================================================================================================================================
// 4. FizzBuzz
// Problem: Print numbers 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
// Concepts: Conditionals, loops.
// function multiplesOf3And5() {
//   let word;
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     i % 3 === 0 && i % 5 === 0
//       ? console.log(`${i} => FizzBuzz`)
//       : i % 3 === 0
//       ? console.log(`${i} => Fizz`)
//       : i % 5 === 0
//       ? console.log(`${i} => Buzz`)
//       : null;
//   }
// }

// console.log(multiplesOf3And5());
// ======================================================================================================================================================================================================
// 5. Find the Missing Number (Using Sum Formula)
// Problem: Given an array containing n-1 numbers from 1 to n, find the missing number using the sum formula.
// Concepts: Arrays, simple math.
// function findMissingNumber() {}
// function findMissingNumber(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }
// console.log(findMissingNumber([1, 2, 3, 4, 5, 6]));
// ======================================================================================================================================================================================================
// 6. Anagram Check
// Problem: Given two strings, check if one string is an anagram of the other.
// Concepts: Strings, sorting.
// function containSameChars() {}
// function containSameChars(str1, str2) {
//   const sortedStr1 = str1.toLowerCase().split("").sort().join("").length;
//   const sortedStr2 = str2.toLowerCase().split("").sort().join("").length;
//   return sortedStr1 === sortedStr2;

// }
// console.log(containSameChars("aliens", "liensA"));
// ======================================================================================================================================================================================================
// 7. Merge Two Sorted Arrays (Without Algorithms)
// Problem: Merge two sorted arrays into one sorted array (brute force).
// Concepts: Arrays, loops.

// function mergeTwoArrays() {}
// function mergeTwoArrays(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// console.log(mergeTwoArrays([1, 2, 3, 4], [5, 6, 7, 8]));

// ======================================================================================================================================================================================================
// 8. Find the First Non-Repeated Character in a String
// Problem: Given a string, find the first character that does not repeat.
// Concepts: Strings, loops.

// function findFirstCharachterInString() {}
// function findFirstCharachterInString(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(findFirstCharachterInString("ahmeda"));
// console.log(findFirstCharachterInString("ahmed"));
// ======================================================================================================================================================================================================
// 9. Remove Duplicates from a Sorted Array (Without In-Place Edits)
// Problem: Given a sorted array, remove duplicates and return a new array with unique values.
// Concepts: Arrays, loops.
// need to be explained

// function removeDuplicates() {}
// function removeDuplicates(str) {
//   let unique = [];
//   for (let i = 0; i < str.length; i++) {
//     if (unique.indexOf(str[i]) === -1) {
//       unique.push(str[i]);
//     }
//   }
//   return unique;
// }

// console.log(removeDuplicates("ahmedaaa"));
// ======================================================================================================================================================================================================
// 10. Rotate Array
// Problem: Rotate an array k steps to the right.
// Concepts: Arrays, loops, or array methods.
function rotateArray(arr, k) {
  k = k % arr.length;
  // k> arr.length
  // 3 = 7% 10
  // let part1 = arr.slice(-k); //5 6 7
  let part1 = arr.slice(-k); //5 6 7
  let part2 = arr.slice(0, arr.length - k); //1 2 3 4
  return part1.concat(part2); // 567   1234 [4 3 2 1 7 6 5]
}

let rotatedArray = rotateArray([1, 2, 3, 4, 5, 6, 7], 20);
console.log(rotatedArray);

// ======================================================================================================================================================================================================
// 11. Find All Pairs in an Array that Sum to a Specific Value (Brute Force)
// Problem: Find all pairs of integers in an array whose sum equals a target value (without optimizations).
// Concepts: Arrays, nested loops.

// ======================================================================================================================================================================================================
// 12. Valid Parentheses
// Problem: Given a string containing only parentheses, determine if the string is valid (balanced).
// Concepts: Stack, strings.

// ======================================================================================================================================================================================================
// 13. Flatten a Nested Array
// Problem: Write a function to flatten a nested array (without recursion, using loops or array methods like flat()).
// Concepts: Arrays, loops, and built-in methods.

// ======================================================================================================================================================================================================
// 14. Find the Largest Number in an Array
// Problem: Given an array of numbers, find the largest number.
// Concepts: Arrays, loops.

// ======================================================================================================================================================================================================
// 15. Sum of Elements in an Array
// Problem: Write a function to calculate the sum of all numbers in an array.
// Concepts: Arrays, loops.

// ======================================================================================================================================================================================================
// 16. Concatenate Two Arrays
// Problem: Write a function to concatenate two arrays.
// Concepts: Arrays, array methods.

// ======================================================================================================================================================================================================
// 17. Find the Longest Word in a String
// Problem: Given a string, find the longest word in it.
// Concepts: Strings, arrays.

// ======================================================================================================================================================================================================
// 18. Check if a String Contains Only Unique Characters
// Problem: Write a function that checks if a string contains only unique characters.
// Concepts: Strings, loops.

// ======================================================================================================================================================================================================
// 19. Capitalize the First Letter of Each Word
// Problem: Given a string, capitalize the first letter of each word.
// Concepts: Strings, array methods.

// ======================================================================================================================================================================================================
// 20. Deep Clone an Object
// Problem: Implement a function to deep clone a JavaScript object (handle nested objects).
// Concepts: Objects, loops, recursion (optional, or JSON.parse(JSON.stringify()) method).
// These questions focus more on JavaScript fundamentals and problem-solving techniques, making them perfect for interviews without involving complex algorithms.
