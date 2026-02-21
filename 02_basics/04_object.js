// const tinderUser = new Object()  object constructor
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//accessing nested obj values
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//to merge the objects
// const obj3 = { obj1, obj2 }  //result in nested obj

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}  //spread
// console.log(obj3);


const users = [   //array of objects
    {   //0
        id: 1,
        email: "h@gmail.com"
    },
    {   //1
        id: 1,
        email: "h@gmail.com"
    },
    {   //2
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

//returning array
// console.log(Object.keys(tinderUser)); 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//checking if key exists
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//--------destructuring and json talk-------
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//renaming while destructuring
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// json can be in this format also
[
    {},
    {},
    {}
]