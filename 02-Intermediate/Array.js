/*-Array is a object which can store similar type of data in a contigious memory location. 
-Array index start from 0.
*/
// const myArr=[3,4,5,6,7,8,9];
// console.log(myArr[0]);
// const myArr=["gift"1,true]
// console.log(myArr[1]);
// -----------------------------------
// const myArray=[1,2,3,4,5,6,7]
// console.log(myArray)
// myArray.push(8);
// console.log(myArray)
// myArray.pop();
// console.log(myArray)

// myArray.unshift(0);
// console.log(myArray)
// myArray.shift();
// console.log(myArray)
// /*unshift-Add a new element in 1st index.
// shift-remove a element in 1st index.*/
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(1));
// console.log(myArray);
// const demoArray=myArray.join();
// console.log(demoArray);
// console.log(typeof demoArray);
// // join-: it is basically works on converting a array to string.
// console.log("A",myArray);
// const myArray1=myArray.slice(1,3);
// console.log(myArray1);
// console.log("B",myArray);
// const myArray2=myArray.splice(1,3);
// console.log(myArray2);
// const cars=["maruti","alto","xuv","wagnor"]
// const supercars=["Bmw","audi","g-wagon","defender"];
// cars.push(supercars);
// console.log(cars);
 // cars.concat(supercars);
 // console.log(cars);
 // const allcars=cars.concat(supercars);
 // console.log(allcars);
 //const allNewcars=[...cars,...supercars];
// console.log(allNewcars);
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherArray=anotherArray.flat(Infinity);
console.log(realanotherArray);
console.log(Array.isArray("Jyoti"))
console.log(Array.from("Jyoti"))
//-isarray is a method to check wheather it is a array or not.
//-from is a method in which we create that it automatically creates a array.
