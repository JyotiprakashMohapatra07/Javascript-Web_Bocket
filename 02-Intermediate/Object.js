//Object are super important for grouping the data and functionalites.so we can do a lot of things in object of js.
//object are constructed in key and value pair 
// let mycars={
//     BMW:"Series 7";
//     Audi:"Q7";
// }
// const jsUser={
//     name:"jyoti",
//     email:"jyotisatya123@gmail.com",
//     "Full name":"Jyotiprakash",
//     age:22,
//     location:"odisha",
//     isLoggedin:"false",
//     lastLoggedindays:["monday","wednesday","friday"]
// }
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["Full name"]);
// jsUser.email="mohapatra@gift.edu.in";
// //Object.freeze(jsUser);
// jsUser.email="gift@gmail.com";
// console.log(jsUser.email);


// jsUser.greeting=function(){
//     console.log("Hello future Elon Musk");
// }
// jsUser.greetingTwo=function(){
//     console.log(`hello js user,${this.name}`);
// }
// jsUser.greeting();
// jsUser.greetingTwo();

// const tinderuser={}
// tinderuser.id="1234",
// tinderuser.email="suny@gmail.com",
// tinderuser.name="sunny"
// console.log(tinderuser.id);
// const regularUser={
//     email:"jyoti@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"jyoti",
//             lastname:"mohapatra",
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname);


// const obj1={
//     1:'a',
//     2:'b'
// }
// const obj2={
//     3:'a',
//     4:'b'
// }
// const obj3={
//     5:'a',
//     6:'b'
// }
// const obj4={obj1,obj2,obj3};
// console.log(obj4);
// const obj5={...obj1,...obj2,...obj3}
// console.log(obj5);

// OBJECT DESTRUCTURING
const course={
    courseName:"Last minute placement",
    price:999,
    courseInstructor:"Jyoti"
}
const{courseInstructor:teacher}=course
console.log(teacher);
//json-(javascript object notation)to help for storing data in our local disk and we can manipulate these data also in one place to another place.
//API-(Application programming interface)it is a mechanism that enables two software components to communicate with each other using a set of defination and protoclos.
