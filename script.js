// // console.log("hello.....");

// // var a = 10;
// // console.log(a);

// // let b = "aamir";
// // console.log(b);

// // {

// //     var c = "xyz";
// //     console.log(c)
// //     let d = 100;
// //     console.log(d);


// // }

// // console.log(d);



// const a = 10;
// console.log(a);


//const b;        //.............show error because need declaration at constant type attribute.....
// b= 15;         
//console.log(b);   


// const myArray = {

//     name:"aamir"
// }
// myArray.name ="aamir khan"    // no problem its allow to changes the memory location path on heap....not in stack
// console.log(myArray);    // ok no error .......its working 

// myArray ={                      // show error because not allow to change memory location......because it is on stack memory
//     name : "aamir khan"
// }
// console.log(myArray);


// let myString1 = "abc@xyz.com";
// let myString2 = "Abc@xyz.com";
// console.log(myString1.toUpperCase() === myString2.toUpperCase());


// for (let i=0;i<myString1.length; i++){ 
//     console.log(myString1[i]);                  //true for each character

// // }
//  let string1 = "abcdafgdbjcj"; // need abcdj;
//  let output = "";
// for(let i = 0; i < string1.length; i++) {
//     let count =0;
//          for(let j = 0; j <= string1.length; j++) {
//             if(string1[j] === string1[i] ) {
//                 (j<i);
//                 count++;
//                 if (count > 1){
//                     output = output + string1[i];
//                     break;
//                 }
//             }
//         }
//     }
//     console.log(output);
  
// for(let i=0; i<string1.length; i++){
//     output = output + string1[i];

// }
// console.log(string1.length);

// let a = [1,2,3,4];
// let b = [1,2,3,4];

// let isSame = true;

// for (i = 0; i<a.length; i++){
// if (a[i] !== b[i]){

//    isSame = false;
//    break;
// }

// }

// console.log(isSame);

// let input = "aidnI si ym yrtnuoc"

// let output = "";


// // for (i=0; i<input.length; i++){
// // //    var k = output + input[i].split('').reverse().join('');
// //     if (input[i] === " "){
// //         console.log(output);
// //         output = "";
// //         continue;
// //     }else{
// //         output = output +input[i];
// //         if(i + 1 === input.length){
// //             console.log(output);
// //             output="";

// //         }
// //     }
// // }


// function reverseString(value){
//    let returnValue ="";
//    for(let i = value.length -1; i> -1 ;i--){
//        returnValue = returnValue + value[i];
//    }
//   return returnValue;
// }

// let ko = "";
// for(let i = 0; i<input.length; i++){
//  if (input[i] === " "){

//     output = output + reverseString(ko) + " ";
//     console.log( ko);
//     ko ="";
//     continue;
//  }else{
//      ko = ko +input[i];
//      if (i+1 === input.length){
//          output = output +reverseString(ko);
//          console.log(ko);
//          ko ="";

//      }
//  }

// }
// console.log(output);



// function addNumber(num1 ,num2){
//     return num1 + num2;
// }
// console.log(addNumber(10,20));


// const addNumber = (n1 ,n2)=>{
//     return n1+n2;
// };
// console.log(addNumber(10,20));
// const myObject = {
//     name : "aamir",
//     getName: function(){
//         return this.name;
//     }
// }

// const myNewObject = {

//     name : "ankit",
// }

// const newGetname = myObject.getName.bind(myNewObject);

// console.log(myObject.getName());
// console.log(newGetname());

// function Person(name,age){
//     this.name =  name;
//     this.age = age;
//     // return this; //by default

//     //for override 
//   //  return {name : "xyz"};
// }

// const personObject = new Person("ankur", 29);
// console.log(personObject);

// const myArray = [1,2,3,4];
// // const a = myArray[0]; 
// // const b = myArray[1];
// // // const c = myArray[2];
// // // const d = myArray[3];

// // // const [a,b,c,d]   = myArray;


// // console.log(a,b,c,d);


// // const myObject = {
// //     name :"aamir",
// //     age : 26
// // }
// // const {name ,age}  = myObject;
// // console.log(age,name);


// // const myArray = [1,2,3,4,5];
// // const myNewArray = myArray;
// // for (let i = 0; i<myArray.length; i++){
// //     myNewArray.push(myArray[i]);
// // }
// // console.log(myNewArray);

// const myObject = {
//     name : "aamir",
//     age  : 26,
// }

// const myNewObject = {...myObject};
// console.log(myObject);
// console.log(myNewObject);

// myObject.name ="aamir khan";
// console.log(myObject);
// console.log(myNewObject);



// function addition(args){       // args parameter is define contains internally const args = [];
//     return a+b+c;
// }
// console.log(addition(10,20,30));



// function additionNewWay(...args){

//     let result = o;
//     for(let i=0; i<args.length;i++){
//         result += args[i];
//     }
// }

// console.log(additionNewWay(10,20,30));
