//Control statement
/*
Condition statement are those who create condition on wheather you goes this side you goes
another side like that
1-if-if condition true the statement is true otherwise it will false
//syntax:
if(condition)
{
    statement
} 
//if example:
// var a=12;
// if(a<18)
// {
//     console.log("They did not give vote");
// }
2-if-else:if condition is satisfied then if block is executed otherwise else block will executed.
//syntax:
if(condition)
{
    statement
}
else{
    statement
}

*/
 //if-else example:
// var a=19;
// if(a%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
// 3-if-else-if else-if else:in that we add multiple case simultaniously to check the condition where we get executed.
//syntax-if(condition)
// {
//     statement
// }
// else if{
//     statement
// }
// else if{
//     statement
// }
// else{
//     statement
// }
//example:
// const balance=700;
// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<700){
//     console.log("less than 700");
// }
// else if(balance<900){
// console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }
/* 4-Switch:a part of javascript conditional statement where we execute different statement depends on the 
condition that they check.*/
//Syntax:
// switch(condition){
//     case:value
//     break;
//     case:value
//     break;
//     case:default
//     break;
// }
//Example:
const month =9;
    switch(month){
        case 1:
    console.log("january");
    break;
    case 2:
        console.log("february");
        break;
        case 3:
        console.log("march");
        break;
        case 4:
        console.log("april");
        break;
        case 5:
        console.log("may");
        break;
        case 6:
        console.log("june");
        break;
        case 7:
        console.log("july");
        break;
        default:
        console.log("default");
        break;
}