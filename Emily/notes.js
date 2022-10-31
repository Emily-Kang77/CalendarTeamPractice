"use strict"; // script runs in "modern way" including modifications to old things.

// can print strings with '', "" and `` allows expression evaluation with ${} IIRC

// String concatenation 
let string1 = "Hello " + "World!";
string1 += ` ` + `whatever`;
let string2 = "" + null;
string2 += undefined;
console.log(string1); // prints nullundefined
console.log(string2); // prints Hello World! Whatever

    // Array#join() function makes new string from concat.ing all
    // elements in an array! separator is accepted and is comma
    // by default. Also, arrays start at index of 0.
let stringArray = ["Hello", ' ', "World!", ` whatever`];
let string3 = stringArray.join(); // just adds commas after each value
let string4 = stringArray.join(''); // ["Hello", ]
console.log(string3); 
console.log(string4);

// INTERACTIONS: alert, prompt, confirm (browser only)
// alert: shows message and waits for user to press OK
// prompt: shows message (title) asks user to input (can provide default)
// confirm: shows title and then user presses OK or Cancel

////////////

// Smart type conversions! if string is invalid for # conv, result is NaN
console.log("6" / "2"); // output is 3. strings are converted to #s
let num1 = Number("1234"); // you get 1234!
let string5 = String(1234); // cast to string.
console.log(typeof string5);

// boolean conversion: false = 0. true = 1. but non-empty string is 
// always = 1! Even if you have "0".

/////////// CONDITIONAL BRANCHING ///////////

if( 5 == 5) {
    console.log("wow you're right.");
} else if (6 == 6) {

} else {

}

// "falsy" values since are false when converted to booleans.
if(0 || "" || null || undefined || NaN) { // all of these eval to false
    console.log("All false.");
}
// 1 is "truthy"

// ? OPERATOR, AKA ternary//
// the only operator that requires 3 operands!
let age = 18;
let accessAllowed;
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log(accessAllowed);
// if condition true, return value 1. if false, return value 2.
// condition ? value1 : value2
accessAllowed = (age > 18) ? true : false; 
console.log(accessAllowed);

accessAllowed = age > 18; // in this case this is best.
// can also use sequence of ternary operators. if 
// age is less than 3, return Baby. If age < 18, return Teen, etc.
let message = (age < 3) ? "Baby" : (age < 18) ? "Teen" : 
              (age < 100) ? "Adult" : "Wow you're super old!";
console.log(message);

///////////// COMPARISON OPERATORS ///////////
// AND has higher precedence than OR.
// Equality 
// if either value could be 0, "", or [], then avoid == and use 
// ===. If either value could be "true" or "false", avoid == and use ===.
// in all other cases, safe to use ==.

///////////// LOGICAL OPERATORS - don't replace IF. so unreadable ////////////
// does have classical stuff. only of the both sides need to be true.
// but xtra features: OR finds first "truthy" value and stops, or last value
// if all false. returns ORIGINAL VALUE OF OPERAND.
console.log( 1 || "2" || 0); // returns 1
console.log( undefined || null || 0); // returns 0.
// the original value of a comparison must be a boolean.
console.log( age > 5 || age < 18); 
console.log( "just a string " || age > 18); // returns first truthy value

// APPLICATIONS
// 1.  get first valid string. if no valid string, return ""
let namesArray = ["", "", "Timothy", null];
// "Timothy" is returned.
console.log(namesArray[0] || namesArray[1] || namesArray[2]);

// 2. short-circuit evaluation 
// just another feature of OR. remember that it stops evaluating 
// the rest if it finds first truthy value. 
"Apple" == "Apple" || console.log("Hey");
"Apple" != "Apple" || console.log("Hey!!");

// AND also finds the first falsy value. if result is false, stops
// and returns original value of that operand.
"Apple" != "Apple" && console.log("Hey");

// ! is self-explanatory 
// but you can cast value into boolean with !! or Boolean() cast.

// more OR... 
// evaluates first operand, printing 1. but result
// is undefined. so it continues and then returns 2 cuz its the
// first truthy value.. 
console.log( console.log(1) || 2 || 3); 
// prints 1 then returns undefined. never moves to second operand.
console.log( console.log(1) && console.log(2)); 

if(age >= 14 && age <= 90) { // age = 18
    console.log("not too old");
}