const name="ayushi";
const age=18;
console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName= new String('ayushi-as')
console.log(gameName[0]);
console.log(gameName.__proto__);   //in browser this will not be {}
console.log(gameName.length);
console.log(gameName.charAt(2));

//we cant use -ve value and if we use then it will take from 0 by default
const newName = gameName.substring(0,3);
console.log(newName);

const anotherString =gameName.slice(-7,4);  //start ind:end ind
console.log(anotherString);

const newString = "   ayushi    ";
console.log(newString.trim());

const url="https://google.com/google%20com"
console.log(url.replace('%20','-'));

console.log(gameName.split('-'));
