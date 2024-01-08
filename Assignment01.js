// 1. Question: Reverse a string without using the built-in reverse() method.


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));


// 2. Question: Count the number of vowels in a given string.


const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
   
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const string = "Aeiou";

const result = countVowel(string);

console.log(result);




// 3. Question: Convert the first letter of each word in a sentence to uppercase.



const str = "my name is abdullah sultan and i'm currently completing my banoqabil assignment";

const arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

const str1 = arr.join(" ");
console.log(str1);


// 4. Question: Check if a string is a palindrome.



function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'Given String is not a palindrome';
        }
    }
    return 'Given String is a palindrome';
}

const stringg = "mom";

const value = checkPalindrome(stringg);

console.log(value);




// 5. Question: Find the sum of all positive numbers in an array.

var numbers = [-1, -2, -3, 4, 5, 6];

var sum = 0;

for (var i = 0; i < numbers.length; ++i) {
    if (numbers[i] > 0) {
        sum += numbers[i];
    }
}

console.log(sum); 


// 6. Question: Find the index of the first occurrence of a specific element in an array.




const array = [1, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9, 10 ,10 ,10, 12, 15]; 
  
const target = 6; 
  
const outputIndex = array.findIndex((e) => e === target); 
  
if (outputIndex === -1) 
    console.log(target + " is not present in this array"); 
else { 
    console.log( 
        "First index of " + target + " is at : " + outputIndex 
    ); 
}



// 7. Question: Remove all duplicates from an array without built-in methods.

function removeDuplicates(arr) {

    var uniqueArray = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    
    return uniqueArray;
  }
  
  var originalArray = [1, 2, 3, 4, 2, 1, 5];
  var newArray = removeDuplicates(originalArray);
  
  function removeDuplicates(arr) {
    var uniqueArray = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    
    return uniqueArray;
  }

  
  var originalArray = [1, 2, 3, 4, 2, 1, 5];

  console.log("Before removing duplicates");
  console.log(originalArray); 

  var newArray = removeDuplicates(originalArray);
  
  console.log("After removing duplicates");
  console.log(newArray); 

// 8. Question: Sort the array in ascending and descending without built-in methods.


// for Ascending 


let unsortedArray = [4, 32, 2, 5, 8];
for (let i = 0; i < unsortedArray.length; i++) {
  for (let j = i + 1; j < unsortedArray.length; j++) {
    if (unsortedArray[i] > unsortedArray[j]) {
      temp = unsortedArray[i];
      unsortedArray[i] = unsortedArray[j];
      unsortedArray[j] = temp;
    }
  }
}
console.log("Ascending Sorted array ", unsortedArray);




// for Descending 


let unsortedArray1 = [4, 32, 2, 5, 8];
for (let i = 0; i < unsortedArray1.length; i++) {
  for (let j = i + 1; j < unsortedArray1.length; j++) {
    if (unsortedArray1[i] < unsortedArray1[j]) {
      temp = unsortedArray1[i];
      unsortedArray1[i] = unsortedArray1[j];
      unsortedArray1[j] = temp;
    }
  }
}
console.log("Descending Sorted array ", unsortedArray1);



// 9. Question: Print all even numbers between 1 and 20 using a while loop.

let myNum=1 
while (myNum<=20){
  if(myNum%2==0){
  console.log(myNum)
  }
  myNum++
}


// 10. Question: Calculate the factorial of a number using a do-while loop.

function factorial(n) {


    if (n < 0 || !Number.isInteger(n)) {
      return "Invalid input. Please provide a non-negative integer.";
    }
  
    var result = 1;
  
    do {
      result *= n;
      n--;
    } while (n > 1);
  
    return result;
  }
  
  var number = 3;
  var result1 = factorial(number);
  
  console.log("The factorial of " +number+ " is:", result1);



//11. Question: Iterate through the properties of an object using a for-in loop.





//12. Question: Loop through an array using a for-of loop and double each element.

const origArray = [1, 2, 3, 4, 5];
const doubledArray = [];

for (const element of origArray) {
  doubledArray.push(element * 2);
}

console.log("Original Array");
console.log(origArray);

console.log("Doubled Array");
console.log(doubledArray); 


//13. Question: Check if a number is even or odd and return a corresponding message.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("Even Number"); 

    } else {
        console.log("Odd Number"); 
    }
  }
  
  checkEvenOrOdd(3); 
  checkEvenOrOdd(10); 


//14. Question: Find the maximum of three numbers using nested ternary operators.


var num1 = 4, num2 = 8, num3 = 12;
var max;
 
max = (num1 > num2) ? 
      (num1 > num3 ? num1 : num3) : 
      (num2 > num3 ? num2 : num3);
       
console.log( "Largest number is " + max);




// 15. Question: Determine if a year is a leap year or not.

function leapYearChecking(year) {

    const leapyear = new Date(year, 1, 29).getDate() === 29;
    if (leapyear) {
        console.log("It is a leap year");
    } else {
        console.log("It is not a leap year");
    }
}

const year = 2023;

leapYearChecking(year);