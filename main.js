// Q1: Write a program that checks whether the given number is positive or negative.
export {};
// function checkNumber(number: number): string {
//     if (number > 0) {
//         return "Positive";
//     } else if (number < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }
// const inputNumber = 42;
// const result = checkNumber(inputNumber);
// console.log(`The number ${inputNumber} is ${result}.`);
// Q2: Write a program that checks if a number is even or odd.
// function isEvenOdd (num:number):string {
//     if (num % 2 == 0) {
//         return "Even";
//     }
//     else {
//         return "Odd";
//     }
// }
// let inputNumber= 32;
// const result = isEvenOdd(inputNumber);
// console.log(`The number ${inputNumber} is ${result}.`);
// // Q3: Write a program to determine the greater of two numbers.
// function findGreaterNumber(a: number, b: number): number {
//     return Math.max(a, b);
// }
// const num1 = 42;
// const num2 = 73;
// const greaterNumber = findGreaterNumber(num1, num2);
// console.log(`Between ${num1} and ${num2}, the greater number is ${greaterNumber}.`);
// // Q4: Create a program to check a student's grade and percentage.
// let percentage = 75;
// if (percentage <= 80 && percentage > 70) {
//     console.log("Congratulations!Your Grade is 'A'")
// }
// else if (percentage <= 70 && percentage > 60) {
//     console.log("Congratulations!Your Grade is 'B'")
// }
// else if (percentage <= 60 && percentage > 50) {
//     console.log("Congratulations!Your Grade is 'C'")
// }
// else if (percentage <= 50 && percentage > 40) {
//     console.log("Congratulations!Your Grade is 'D'")
// }
// else {
//     console.log("You are Fail!")
// };
// // Q5: Write a program that greets the user based on the time of day. Display "Good Morning," "Good Afternoon," or "Good Evening" based on the time of day when you run the code.
// function getGreetings():string {
//     let currentHour:number = new Date().getHours();
//     if (currentHour >= 6 && currentHour < 12) {
//         return "Good Morning";
//     } else if (currentHour >= 12 && currentHour < 18) {
//         return "Good Afternoon";
//     } else {
//         return "Good Evening";
//     }
// }
// const greeting = getGreetings();
// console.log(greeting);
// Q6: Write a program that calculates the Body Mass Index (BMI) and categorizes it.
// function bodyMassIndex () {
//     let weightInKgs=60;
//     let heightInMeters= 1.55448;
//     return weightInKgs / heightInMeters;
// }
// let bmi = bodyMassIndex();
// if (bmi < 18.5) {
//     console.log("you are very underweight and possibly malnourished.")
// }
// else if (bmi >=18.5 && bmi <= 24.9) {
//     console.log("you have a healthy weight.")
// }
// else {
//     console.log('You are Overweight.')
// }
// Q7: Write a simple number guessing game. Provide a selected number and a guess. Based on those numbers, give players clues if their guess is higher, lower, or correct.
// import inquirer from "inquirer";
// const systemGeneratedNumber = Math.floor( Math.random()*6);
// let answers = await inquirer.prompt({
//     name:"guessedNumber",
//     type:"number",
//     message:"Please Enter a Number between 1 to 6: "
// });
// const {guessedNumber}=answers;
// console.log(`Guessed Number: ${guessedNumber} and Correct Number is : ${systemGeneratedNumber}`);
// if (guessedNumber === systemGeneratedNumber) {
//     console.log("Correct Answer! Congratulations You have Win")
// }
// else if (guessedNumber < systemGeneratedNumber) {
//     console.log("Your Guess Number is lower than Correct Number")
// }
// else if (guessedNumber > systemGeneratedNumber) {
//     console.log("Your Guess Number is higher than Correct Number")
// }
// else {
//     console.log("You have Guessed a Number Out of Range.")
// }
// Q8: Write a simple calculator program.
// Addition
// Subtraction
// Multiplication
// Division
// import inquirer from "inquirer";
// const answers = await inquirer.prompt([
//     {
//         name:"firstNumber",
//         type:"number",
//         message:"Please Enter Your First Number: "
//     },
//     {
//         name:"secondNumber",
//         type:"number",
//         message:"Please Enter Your Second Number: "
//     },
//     {
//         name:"operator",
//         type:"list",
//         message:"Please Enter Your Operator: ",
//         choices:["+" , "-" , "/" , "*"]
//     },
// ])
// const {firstNumber , secondNumber , operator} = answers;
// if (operator ==="+"){
//     console.log(firstNumber + secondNumber)
// }
// else if (operator ==="-"){
//     console.log(firstNumber - secondNumber)
// }
// else if (operator ==="/"){
//     console.log(firstNumber / secondNumber)
// }
// else if (operator ==="*"){
//     console.log(firstNumber * secondNumber)
// };
// // Q9: Write a simple JavaScript program that checks if a person is eligible for a CNIC (show a message with the person's name).
// let personAge = 25;
// if (personAge >= 18) {
//     console.log("You are Eligible for CNIC.")
// }
// else {
//     console.log("Sorry!You are not Eligible.")
// }
