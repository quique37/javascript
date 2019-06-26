/*************************
 *Variables and data types 
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var $4years = 4;
var johnMark = 'John and Mark';

/*************************
 * Variable mutation and type coercion
 */

/*
 var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' 
+ job  + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' 
+ job  + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

/*******************************
 * Basic Operators
 */

 /*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

/*******************************
 * Operators precedence 
 */

 /*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now -yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 
// 32 -6 // 26
console.log(x, y);

// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);

//This way you can increment by 1
x = x + 1;
x += 1;
x++; 
console.log(x);

// This way you can decrement by 1
x = x -1;
x -= 1;
x--;
console.log(x);

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the 
formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var markMass, markHeight, johnMass, johnHeight, bmiMark, bmiJohn, highestBMI;


markHeight = 1.80;
markMass = 110;
johnHeight = 1.75;
johnMass = 78;


bmiMark = markMass / (markHeight * markHeight);
bmiJohn = johnMass / (johnHeight * johnHeight);

highestBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn);
console.log('Is Mark\'s BMI higher than John\'s? ' + highestBMI) 

/*****************************************
 * If / else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markMass, markHeight, johnMass, johnHeight, bmiMark, bmiJohn, highestBMI;

markHeight = 1.80; // meter
markMass = 75; // kg
johnHeight = 1.75;
johnMass = 78;


bmiMark = markMass / (markHeight * markHeight);
bmiJohn = johnMass / (johnHeight * johnHeight);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

//highestBMI = bmiMark > bmiJohn;
//console.log(bmiMark, bmiJohn);
//console.log('Is Mark\'s BMI higher than John\'s? ' + highestBMI) 


