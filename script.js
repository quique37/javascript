/*************************
 *letiables and data types 
 */
/*
let firstName = 'John';
console.log(firstName);

let lastName = 'Smith';
let age = 28;

let fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'Teacher';
console.log(job);

// letiable naming rules
let _3years = 3;
let $4years = 4;
let johnMark = 'John and Mark';

/*************************
 * letiable mutation and type coercion
 */

/*
 let firstName = 'John';
let age = 28;

//Type coercion
console.log(firstName + ' ' + age);

let job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' 
+ job  + '. Is he married? ' + isMarried);

// letiable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' 
+ job  + '. Is he married? ' + isMarried)

let lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

/*******************************
 * Basic Operators
 */

 /*
let year, yearJohn, yearMark;
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
let johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
let x;
console.log(typeof x);

/*******************************
 * Operators precedence 
 */

 /*
let now = 2018;
let yearJohn = 1989;
let fullAge = 18;

// Multiple Operators
let isFullAge = now -yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping
let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments

let x, y;
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

1. Store Mark's and John's mass and height in letiables
2. Calculate both their BMIs
3. Create a boolean letiable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the letiable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
let markMass, markHeight, johnMass, johnHeight, bmiMark, bmiJohn, highestBMI;


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

 /*
let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

let isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

let markMass, markHeight, johnMass, johnHeight, bmiMark, bmiJohn, highestBMI;

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

*/

//highestBMI = bmiMark > bmiJohn;
//console.log(bmiMark, bmiJohn);
//console.log('Is Mark\'s BMI higher than John\'s? ' + highestBMI) 


/******************************
 * Boolean Logic
 */

 /*
let firstName = 'John';
let age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
}  else if (age >= 13 && age < 20 ) {  // Between 13 and 20 === age >= 13
    // & age < 20
    console.log(firstName + ' is a teenager.');
}  else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}   else {
    console.log(firstName + ' is a man.');
}

/*********************************
 * The Ternary Operator and Switch Statements 
 */

/// Else if statement all in one line

/*
let firstName = 'John';
let age = 18;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {  //// This is the same as the ternary operator but with if and else, ternary is better for easy operations
    // If, else, and else if are better for more complex operations 
    let drink = 'beer';
} else {
    let drink = 'juice';
}

// Switch statement
let job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/***************************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
let height;
height = '23';

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == 23) {
    console.log('The == operator does type coercion!');
}

/**************************************
 * CODING CHALLENGE 2
 */

 /*
 John and Mike both play basketball in different teams. In the
 latest 3 games, John's team scored 89, 120 and 103 points, while
 Mike's team scored 116, 94 and 123 points.

 1. Calculate the average score for each team.
 2. Decide which teams wins in average (highest average score), 
 and print the winner to the console. Also include the average
 score in the output.
 3. Then change the scores to show different winners. Don't forget
 to take into account there might be a draw (the same average score).

 4. EXTRA: Mary also plays basketball, and her team scored 97,
 134 and 105 points. Like before, log the average winner to the
 console. HINT: you will need the && operator to take the decision.
 If you can't solve this one, just watch the solution, it's no problem
 :)
 5. Like before, change the scores to generate different winners,
 keeping in mind there might be draws.

 GOOD LUCK 
 */

/*
 1.

teamJohn = (89 + 120 + 103) / 3;
console.log('John\'\s team made on average ' + teamJohn + ' points.' );
teamMike = (116 + 94 + 123) / 3;
console.log('Mike\'\s team made on average ' + teamMike + ' points.') ;
teamMary = (97 + 134 + 105) / 3;
console.log('Mary\'\s team made on average ' + teamMary + ' points.');

2.

teamJohn = 101;
teamMike = 102;
teamMary = 102;

if (teamJohn > teamMike && teamJohn > teamMary) {
    console.log('John\'\s team wins with an average score of ' + teamJohn + ' points');
} else if (teamMike > teamMary && teamMike > teamJohn) {
    console.log('Mike\'\s team wins with an average score of ' + teamMike + ' points');
} else if (teamMary > teamJohn && teamMary > teamMike) {
    console.log('Mary\'\s team wins with an average score of ' + teamMary + ' points');
} else if (teamJohn === teamMike && teamJohn === teamMary) {
    console.log('The 3 teams are tied up with an average score of ' + teamJohn + ' points');
} else if (teamJohn === teamMike) {
    console.log('John\'\s and Mike\'\s teams are tied up with an average score of ' + teamJohn + ' points');
} else if (teamJohn === teamMary) {
    console.log('John\'\s and Mary\'\s teams are tied up with an average score of ' + teamJohn + ' points');
} else {
    console.log('Mike\'\s and Mary\'\s teams are tied up with an average score of ' + teamMike + ' points');
}

/*******************************************************************************
 * Functions
 */

 function calculateAge(birthYear) {
    return 2018 - birthYear;
 }

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}
    
    yearsUntilRetirement(1990, 'John');
    yearsUntilRetirement(1948, 'Mike');
    yearsUntilRetirement(1969, 'Jane');
















