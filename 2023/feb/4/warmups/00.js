// 1. What does the following loop print out (write on paper)?
for(let i=0; i<3; i++) {
  console.log("**", i);
}


console.log("----------------------------------------------------")

// 2. What does the following loop print out (write on paper)?
  //++i will increment the value of i , and then return the incremented value.
  // i++ will increment the value of i , but return the original value that i held before being incremented.

for(let i=0; i<3; i++) {
  console.log("--", i++);
}


console.log("----------------------------------------------------")

// 3. What does the following loop print out (write on paper)?

  //++i will increment the value of i , and then return the incremented value.
  // i++ will increment the value of i , but return the original value that i held before being incremented.
 
for(let i=0; i<3; i++) {
  console.log("$$", ++i);
}


console.log("----------------------------------------------------")

// 4. What does the following print out (write on paper)?
for(let i=3; i>=1; i--) {
  for(let j=0; j<3; j+=2) {
    console.log("i: ", i);
    console.log("j: ", j);
  }
}



// do below in code


// 5. Write a function (using the above syntax for loops) that iterates over each element in the following list and prints out 'Hello, [firstname] [lastname]' for people older than 17
let persons = [
  {
    age: 17,
    firstName: "Candyce",
    lastName: "Brown"
  },
  {
    age: 23,
    firstName: "Cassidy",
    lastName: "Smith"
  },
  {
    age: 88,
    firstName: "Gregory",
    lastName: "Atkins"
  },
  {
    age: 18,
    firstName: "Matthew",
    lastName: "Briggs"
  },
  {
    age: 4,
    firstName: "Heather",
    lastName: "McDonal"
  },
];


// 6. Write a function, when given a list of numbers, will return the largest of the numbers. If empty, return 0

// test lists:
let test00 = [];
let tes01 = [-1, 16, 4, 100, -6, 2];
let tes02 = [-5];
let tes03 = [-1, 100, 20, -4, 100, 16];


// 7. Write a function that takes in a list of people. Return the average of their ages

// test list:
let employees = [
  {
    age: 17,
    firstName: "Candyce",
    lastName: "Brown"
  },
  {
    age: 23,
    firstName: "Cassidy",
    lastName: "Smith"
  },
  {
    age: 88,
    firstName: "Gregory",
    lastName: "Atkins"
  },
  {
    age: 18,
    firstName: "Matthew",
    lastName: "Briggs"
  },
  {
    age: 4,
    firstName: "Heather",
    lastName: "McDonal"
  },
];


// 8. Write a function that takes in a number and returns the factorial (!) of that number 
// ie 4! = 4 * 3 * 2 * 1 = 24
// ie 5! = 5 * 4 * 3 * 2 * 1 = 120;
// ie 0! = 1 (factorial of 0 is 1)
// ie -5! = undefined (factorial of a negative number is undefined)

// you can assume we will only be passing in integers (no strings or decimals or booleans etc)


// 9. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.


// 10. Write a function that takes in 3 arrays. Given these three integer arrays (nums1, nums2, and nums3), return a distinct array containing all the values that are present in at least two out of the three arrays. You can return the values in any order.