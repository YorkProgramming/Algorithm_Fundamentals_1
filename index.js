// 1.

/* Setting and Swapping
Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa. */

let myNumber = 42;
let myName = "John";
[myNumber, myName] = [myName, myNumber];        // swapping values using array destructuring
console.log(myNumber); 
console.log(myName); 

/* We solve this first by settting myNumber to 42 and myName to "John" 
Then we swap their values using array destructuring by assigning them to an array with the values in reverse order 
Finally we log the values of myNumber and myName to the console to verify that the swapping has occurred. */

//###############################################

// 2.

/* Print -52 to 1066
Print integers from -52 to 1066 using a FOR loop. */

for (let i = -52; i <= 1066; i++) {
    console.log(i);
}

/* We let the value of i start at -52, 
if i is less than or equal to 1066,
i increases by one */

//###############################################

// 3.

/* Don’t Worry, Be Happy
Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times. */

function beCheerful() {
    console.log("good morning!");
}

for (let i = 1; i <= 98; i++) {
    beCheerful();
}

/* We create a function called beCheerful that logs "good morning!" to the console
Then we create a for loop that calls the function 98 times */

//###############################################

// 4.

/* Multiples of Three – but Not All
Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6. */

for (let i = -300; i <= 0; i++) {
    if (i % 3 === 0 && i !== -3 && i !== -6) {
        console.log(i);
    }
}

/* 
In JavaScript, the === operator is used for strict equality comparison 
It compares the values of two operands without converting their types
When used with the modulus operator %, i % 3 === 0 checks if the remainder of i divided by 3 is equal to 0 
In other words, it checks if i is a multiple of 3.

For example, if i is 9, then i % 3 would be 0, because 9 is evenly divisible by 3 with no remainder. */

//###############################################

// 5.

/* Printing Integers with While
Print integers from 2000 to 5280, using a WHILE. */

let i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}

/* We set the value of i to 2000
While i is less than or equal to 5280,
i increases by one */

//###############################################

// 6.

/* You Say It’s Your Birthday
If 2 given numbers represent your birth month and day in either order, 
log "How did you know?", else log "Just another day...." */

function birthday(num1, num2) {
    if (num1 === 8 && num2 === 28 || num1 === 28 && num2 === 8) {
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}

birthday(8, 28);
birthday(28, 8);
birthday(8, 27);

/* We create a function called birthday that takes in two parameters, num1 and num2
If num1 is equal to 8 and num2 is equal to 28 OR num1 is equal to 28 and num2 is equal to 8,
then we log "How did you know?" to the console
Otherwise, we log "Just another day...." to the console */

//###############################################

// 7.

/* Leap Year
Write a function that determines whether a given year is a leap year.
If a year is divisible by four, it is a leap year, unless it is divisible by 100.
However, if it is divisible by 400, then it is. */

function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log("It's a leap year!");
    } else {
        console.log("It's not a leap year.");
    }
}

leapYear(2024);
leapYear(2021);
leapYear(2000);
leapYear(1900);

/* We create a function called leapYear that takes in a parameter called year
If year is divisible by 4 and year is not divisible by 100 OR year is divisible by 400,
then we log "It's a leap year!" to the console
Otherwise, we log "It's not a leap year." to the console */

//###############################################

// 8.

/* Print and Count
Print all integer multiples of 5, from 512 to 4096.
Afterward, also log how many there were. */

let count = 0;
for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i);
        count++;
    }
}
console.log(count);

/* We set the value of count to 0
Then we create a for loop that starts at 512 and ends at 4096
If i is a multiple of 5, then we log i to the console and increase count by one
Finally, we log the value of count to the console */

//###############################################

// 9.

/* Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE. */

let i = 6;
while (i <= 60000) {
    console.log(i);
    i += 6;
}

/* We set the value of i to 6
While i is less than or equal to 60000,
i increases by 6 */

//###############################################

// 10.

/* Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print "Coding" instead.
If by 10, also print " Dojo". */

for (let i = 1; i <= 100; i++) {
    if (i % 10 === 0) {
        console.log("Coding Dojo");
    } else if (i % 5 === 0) {
        console.log("Coding");
    } else {
        console.log(i);
    }
}

/* We create a for loop that starts at 1 and ends at 100
If i is divisible by 10, then we log "Coding Dojo" to the console
If i is divisible by 5, then we log "Coding" to the console
Otherwise, we log i to the console */

//###############################################

// 11.

/* What Do You Know?
Your function will be given an input parameter incoming.
Please console.log this value. */

function whatDoYouKnow(incoming) {
    console.log(incoming);
}

whatDoYouKnow("Not much.");

/* We create a function called whatDoYouKnow that takes in a parameter called incoming
Then we log the value of incoming to the console */

//###############################################

// 12.

/* Whoa, That Sucker’s Huge…
Add odd integers from -300,000 to 300,000, and console.log the final sum.
Is there a shortcut? */

let sum = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);

/* We set the value of sum to 0
Then we create a for loop that starts at -300000 and ends at 300000
Shortcut:
If i is odd, then we add i to sum
Finally, we log the value of sum to the console */

//###############################################

// 13.

/* Countdown by Fours
Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop. */

let i = 2016;
while (i > 0) {
    console.log(i);
    i -= 4;
}

/* We set the value of i to 2016
While i is greater than 0,
i decreases by 4 */

//###############################################

// 14.

/* Flexible Countdown
Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, 
print multiples of mult from highNum down to lowNum,
using a FOR. For (2,9,3), print 9 6 3 (on successive lines). */

function flexibleCountdown(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}

flexibleCountdown(2, 9, 3);

/* We create a function called flexibleCountdown that takes in three parameters, lowNum, highNum, and mult
Then we create a for loop that starts at highNum and ends at lowNum
If i is a multiple of mult, then we log i to the console */

//###############################################

// 15.

/* The Final Countdown
This is based on “Flexible Countdown”. The parameter names are not as helpful, 
but the problem is essentially identical; don’t be thrown off!
Given 4 parameters (param1,param2,param3,param4), print the multiples of param1,
starting at param2 and extending to param3. One exception: if a multiple is equal to param4,
then skip (don’t print) it. Do this using a WHILE. 
Given (3,5,17,9), print 6,12,15 (don’t print 9). */

function finalCountdown(param1, param2, param3, param4) {
    let i = param2;
    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i);
        }
        i++;
    }
}

finalCountdown(3, 5, 17, 9);

/* We create a function called finalCountdown that takes in four parameters, param1, param2, param3, and param4
We set the value of i to param2
While i is less than or equal to param3,
If i is a multiple of param1 and i is not equal to param4, then we log i to the console
Finally, i increases by one */

//###############################################



