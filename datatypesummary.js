//primitive

//7 types: string,number,boolean,null,undefined,symbol,bigint


const score = 100;
const scorevalue = 100.3;
const isloggedIn = false;
const outsideTemp = null;
let useremail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
//const bignumber = 3456789408978436n



//reference(non primitive)

//array,objects,functions
const heros =["shaktiman","naagraj","doga"]
let myobj = {
     name:"shasha",
     age:22,
}

const myfunction=function(){
    console.log("hello world");
}
console.log(typeof outsideTemp);