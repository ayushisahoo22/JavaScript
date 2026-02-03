//ensure the same types for conversion
//as there are no strict rules

console.log("2">1);
console.log("02">1);


//it is bcz the equality check(==) and comparisons(<,>,>=) works diff
//comparisons convert null to a number while equality doesn't
console.log(null>0);  //f
console.log(null==0); //f
console.log(null>=0); //t

console.log(undefined>0);  //f
console.log(undefined==0); //f
console.log(undefined>=0); //f

//strict check(checking val with the same data type)
console.log("2"===2);
console.log(3===3);