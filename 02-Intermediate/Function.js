//Function :- A javascript function is a block of code designed to perform a particular task.
//-A javascript function is executed when something invoked it(call it).
// function sayName(){
//     console.log("g");
//     console.log("i");
//     console.log("f");
//     console.log("t");
// }
// sayName();
// //sayName-reference
// //()-execution
// function addTwoNumber(number1,number2){//parameter
//     console.log(number1+number2)
// }
// addTwoNumber(3,"a");//argument

// function addTwoNumber(number1,number2){
//     let result=number1+number2;
//     return result;
// }
// const result=addTwoNumber(3,5);
//console.log("result:",result);

// function loginUserMessage(username){

// if(username==undefined)
// {
//     console.log("please enter your username")
// }   
// else{

// } //return`${username}just logged in`

// }
// loginUserMessage();
//!-This symbol convert true to false or false to true.
// function loginUserMessage(username="Puja"){
//     if(!username)    //!covert true to false or false to true
//     {
//         console.log("please enter your username")
//         return
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage("Jyoti"));
// function calculatePrice(val1,val2,...num1){//{...-rest operator
//     return val1;//multiple value can't return ones a time.

// }
// console.log(calculatePrice(200,300,400,500));
const user={
    username:"gift",
    price:400
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);