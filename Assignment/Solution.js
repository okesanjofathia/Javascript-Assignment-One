/**
 * QUESTION ONE (1)
 */
// 
let stringToupperCase = "grandma";
console.log(stringToupperCase.toUpperCase());
// 
let str = "100";
let num = parseInt(str);
console.log(num);
// 
let myFavouritecolors =["Red", "Black", "Pink", "White"];
console.log(myFavouritecolors);
let addNewcolor = myFavouritecolors.push("Purple");
console.log(myFavouritecolors);
let removeLastcolor = myFavouritecolors.pop();
console.log(myFavouritecolors);

/**
 * QUESTION TWO (2)
 */
// 
let greeting = "Hello!";
console.log(greeting);
// 
let age = 25;
console.log(age);
// 
let isStudent = true;
console.log(isStudent);
//
console.log('Data type of greeting==>',typeof greeting);
console.log('Data type of age==>',typeof age);
console.log('Data type of isStudent==>',typeof isStudent);
/**
 * QUESTION THREE (3)
 */
//
let x = 5;
let y = 15;
let z = x + y;
console.log('Addition==>',z);
let w = y-x;
console.log('Subtraction==>',w)
let a = x*y;
console.log("multiplication==>", a); 
let b = y/x;
console.log('Division==>',b)
// 
let firstNumber = 10;
let secondNumber = 20;
let compareNumber = firstNumber >= secondNumber;
console.log(firstNumber + " is greater than or equal to " + secondNumber + " is " + compareNumber);
//
let isDay = true;
let isBoarder = false;
let isStudents = isDay && isBoarder;
console.log('Is student==>',isStudents);
let isTeacher = isDay || isBoarder;
console.log('Is teacher==>',isTeacher);
let isNotTeacher = !isTeacher;
console.log('Is not teacher==>',isNotTeacher);

/**
 * QUESTION FOUR (4)
 */
//
let heightInmeters = 10;
let heightIncentimeters = heightInmeters * 100;
console.log('Height in centimeters==>',heightIncentimeters);
// 
let myName = "Fathia";
let myAge = 20;
console.log( `My name is ${myName} and I am ${myAge} years old`);
/**
 * QUESTION FIVE (5)
 */
//
let birthYear = 2000;
let currentYear = 2025;
let currentAge = currentYear - birthYear;
console.log('My current age is',currentAge);
/**
 * QUESTION SIX (6)
 */
//
let firstName = "Fathia";
let lastName = "Okesanjo";
let fullName = firstName + " " + lastName;
console.log('My fullname is',fullName)
console.log(`Good day ${fullName}`);
/**
 * QUESTION SEVEN (7)
 */
//
let score1 = 50;
let score2 = 30;
let score3 = 70;
let averageScore = (score1 + score2 + score3) / 3;
console.log('The average score is',averageScore);
/**
 * QUESTION EIGHT (8)
 */
//
let totalMinutes = 125;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
console.log(`${hours} hours and ${minutes} minutes`);
/**
 * QUESTION NINE (9)
 */
//
let itemPrice = 100;
let taxRate = 0.05;
let taxAmount = itemPrice * taxRate;
let totalPrice = itemPrice + taxAmount;
console.log('The total price is',totalPrice);
/**
 * QUESTION TEN (10)
 */
//
let purchaseAmount = 500;
let discountRate = 0.1;
let discountPrice = purchaseAmount * discountRate;
console.log('Discount price is',discountPrice); 
/**
 * QUESTION ELEVEN (11)
 */
//
let weightInKg = 60;
let heightInMeters = 2;
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log('BMI is',bmi);
/**
 * QUESTION TWELVE (12)
 */
//
let celsius = 35;
let fahrenheit = (celsius * 9/5) + 32;
console.log('Temperature in fahrenheit is',fahrenheit);
/**
 * QUESTION THIRTEEN (13)
 */
//
let currentHour = 20;
if (currentHour < 12) {
    console.log('Good morning');
}
else if (currentHour < 18) {
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
}