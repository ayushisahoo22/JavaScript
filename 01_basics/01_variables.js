const accountId=1672
let accountEmail="ayushi@google.com"
var accountPasswd="7821"
accountCity = "Pune"
let accountState;

/*
Prefer not to use var
because of issue in block and functional scope
*/

// accountId=2  not allowed to change const

console.log(accountId);
accountEmail="ayushi@gmail.com"
accountPasswd="2209"
accountCity="Delhi"

//to represent everything in a table
// index : value
console.table([accountId, accountEmail, accountPasswd, accountCity,accountState]);