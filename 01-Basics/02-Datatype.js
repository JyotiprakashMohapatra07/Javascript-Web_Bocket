/* 1)To be able to operate on variable,it is important to know something about the types of data is called datatypes.
2)Javascript has 7 type of datatypes
i.number 
ii.bigint
iii.string
iv.booleaan
v.null
vi.undefined
vii.symbol
*/
let name = "Jyoti";
let age=22;
let isPresent = true;
let state;
let phnum=1234567890233476n;
let email=null;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isPresent);
console.log(typeof state);
console.log(typeof phnum);
console.log(typeof email);
let Idname=Symbol('123');
let anotherId =Symbol('123');
console.log(Idname===anotherId);