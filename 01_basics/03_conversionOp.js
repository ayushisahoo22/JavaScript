//conversion to Number

// let score= "33abc"
// let score= null
let score= undefined
console.log(typeof score)
console.log(typeof(score)) //passed as a method

let valueInNum=Number(score);
console.log(typeof valueInNum); //no strict checking
console.log(valueInNum)  

// "33" => 33
// "33abc" => NaN (not a number)
//true => 1, false => 0

//Conversion to boolean

// let isLoggedIn="ayushi"  //true
// let isLoggedIn= ""  //false;
let isLoggedIn = 10  //true

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//conversion to string
let num=33
let numToStr=String(num)
console.log(numToStr)
console.log(typeof(numToStr))