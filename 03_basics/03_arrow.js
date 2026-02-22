const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()  ->undefined bcz not as an object method.


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()   ->undefined bcz not as an object method.

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
//chai()   ->undefined bcz arrow function returns this of lexical surrounding scope i.e global

//explicit arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit arrow function
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))
