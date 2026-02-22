// Immediately Invoked Function Expressions (IIFE)
//used to avoid pollution of global scope

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //while creating two iifes first one should end with ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ayushi')

//its like
//function(argument)