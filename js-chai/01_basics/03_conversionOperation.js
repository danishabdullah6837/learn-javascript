let myVariable = 0 // 22, "22", "22abc", null, undefined, NaN, true, false, 0, "danish"

// console.log(typeof myVariable);
// console.log(typeof(myVariable)); 

// datatype have constructor or methods to do the data type conversion e.g Number(), String(), Boolean(), etc.
let valueInNumber = Number(myVariable) 

// console.log(typeof valueInNumber);

// => console.log(valueInNumber); // NaN another type "Not a number"
// => console.log(typeof valueInNumber);

// Conversion and types // TAC Type After Conversion // TBC Type Before Conversion
// 22 => 22 // Number() conversion will return number 22, TAC will be number // and TBC was also number
// "22" => 22 // Number() conversion will return number, TAC will be number // but TBC was string
// "33abc" => NaN // Number() conversion will return NaN, TAC will be number // but TBC was string
// null => 0 // Number() conversion will return 0, TAC will be number // but TBC was object
// undefined => NaN // Number() conversion will return NaN, TAC will be number // but TBC was undefined
// NaN => NaN // Number() conversion will return NaN, TAC will be number // but TBC was number
// true => 1 // Number() conversion will return 1, TAC will be number // but TBC was boolean
// false => 0 // Number() conversion will return 0, TAC will be number // but TBC was boolean

let isLoggedIn = null
//console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
//console.log(typeof booleanIsLoggedIn);

// 1 => true // Boolean() conversion will return true, TAC will be boolean // but TBC was number
// "1" => true // Boolean() conversion will return true, TAC will be boolean // but TBC was string
// "1abc" => true // Boolean() conversion will return true, TAC will be boolean // but TBC was string
// "" => false // Boolean() conversion will return false, TAC will be boolean // but TBC was string
// null => false // Boolean() conversion will return false, TAC will be boolean // but TBC was object
// NaN => false // Boolean() conversion will return false, TAC will be boolean // but TBC was number
// undefined => false // Boolean() conversion will return false, TAC will be boolean // but TBC was undefined

let myNumber = undefined
// console.log(typeof myNumber);
let myStringNumber = String(myNumber)
// console.log(myStringNumber);
// console.log(typeof myStringNumber);

// 1 => 1 // String() conversion will return 1, TAC will be string // but TBC was number
// "1" => 1 // String() conversion will return 1, TAC will be string // and TBC was also string
// "1abc" => 1abc // String() conversion will return 1abc, TAC will be string // and TBC was also string
// it will be same for "0", "true", "false" but
// true => true // String() conversion will return true, TAC will be string // but TBC was boolean
// null => null // String() conversion will return null, TAC will be string // but TBC was object
// NaN => NaN // String() conversion will return NaN, TAC will be string // but TBC was number
// undefined => undefined // String() conversion will return undefined, TAC will be string //but TBC was undefined

// *********************** Operations *************************
let numValue = 3
let negValue = -numValue
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2%3)
// console.log(2/3)

let str1 = "Hi "
let str2 = "Danish"
// console.log(str1 + str2);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2" + 2 + 3)
// console.log("=>", 3 + 4 * 5 % 3);
// console.log("=>", 3 + 4 % 5 * 3); // remember PEMDAS

// console.log(+true); // Output: 1 // + urnary operator will convert the operand to number just like Number(true)
// console.log(+""); // Output: 0 // + urnary operator will convert the operand to number just like Number("")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// console.log(num1);
// ++ in prefix it will increment before usage or assigning
// and in postfix it will increment after the usage or assigning
let gameCounter = 100
gameCounter++
console.log(gameCounter);