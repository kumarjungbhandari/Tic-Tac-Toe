/*lname = "Tony";
//console.log(fullname);
age = 24;
//console.log(age);
x = null;
//console.log(x);
isfollow = true;
//console.log(isfollow);
//console.log(a);
let c = 3.2;
const student = {
    fullname : "Kumar",
    age : 24,
    Gpa : 4,
    ispass: true,
};
//console.log(student.Gpa);
student['age'] = student['age']+1;
//console.log(student.age);

const product = {
    title : "Ball Pen",
    rating : 4,
    offer: 5,
    price : 270,
};
//console.log(product);

 const profile ={
    usernam : "kumar",
    isfollow : false,
    followers: 1233,
    following : 43,
 };
 //console.log( typeof profile["isfollow"]);

 let a = 6;
 //console.log(a**a);

console.log(++a);
console.log(a); */


//condition statements
// let mode = "black";
/*let color;
if(mode ==="black"){
    color = "black";
}
if(mode === "white"){
    color = "white";
}
// console.log(color)*/


//odd or even
/*let num = 43;
if(num %2 == 0)
    {
        console.log("Even");
    }
    else{
        console.log("Odd");
    }*/


   /* let age = 23;
    let r = age>18? "adult" : "not adult";
    console.log(r);*/

   // let age = 24;
   // let r = age>=19? "Valid" : "not Valid";
   // console.log(r);


   //while condition
   /*let i = 0;
   while(i<10){
    i++;
    console.log(i);
   }*/

   /*do-while condition
   let i = 0;
   do{
    console.log("i");
    i++;
   }while(i<20);
   console.log("i");


  let name = prompt("Hello");
  console.log(name);*/

  // IT is also used for input from users.
  /*let i = prompt("Enter a number ");
  if(i%7 == 0)
    {
        console.log("It is a multiple of 7");
    }
    else{
        console.log("It is not a multiple of 7");
    }
let sum = 0;
    for(let i= 0; i<=5; i++)
        {
          sum = sum + i;
            
        }
        console.log("The sum of 1 to 5 is ",sum);
        console.log("The sum of 1 to 5 is ",sum);

        let str = "Kumar";
        console.log(str[0]); 

        let obj = {
            item : 'pen',
            price : '123',
        };
        console.log("The cost of ",obj.item,"is ",obj.price); 
        let obj = {
            item : 'pencil',
            price : '12333',
        };
    
        let res = `The cost of ${obj.item} is ${obj.price}`;
        console.log(res);   

        //uppercase and lowercase
         let str = "kumar jung  bhandari "; // slice method
        console.log(str.slice(0));  


  let str1 = "kumar"; 
  let str2= "jung"; 
  console.log(str1.concat(str2)); //joins the strings. 

  let str = "apnacollege";
  console.log(str.replace('a','j')); 

  let str = "kumar";
  console.log(str.charAt(2)); //returns one character.   

  let a = "abcde";
  console.log(a.slice(1,3)); // returns bc //excludes last number

  let a = prompt("Enter you full name");
  let b = `@${a}${a.length}`;
  console.log(b);   

//Array

let arr = [3,4,5,6,7,8];
console.log(arr[2]);

let hero = ["kumar","jung ","bhandari"]; // changing the elements of array.
hero[1] = "zung"
console.log(hero);  

let hero = ["Ironman","Thor","Spiderman","Antman","Batman"];
let i = 0;
for(i=0;i<hero.length;i++)
    {
        console.log(hero[i]);
    }  


    //of loop
    let hero = ["Ironman","Thor","Spiderman","Antman","Batman"]; 
    for(let arr of hero){              
                console.log(arr.toUpperCase());
    }
  
    //Find the average
    let sum = 0;                   
    let avg = 0;                  
let arr = [85,97,44,37,76,60];
for(array of arr)
    {
        sum = sum + array;
    }
avg = sum/arr.length;
console.log(avg);

 

//Changing the price after 10% discount.

let arr = [250,645,300,900,50];
let off = 0;
for(let i=0;i<arr.length;i++)
    {
       off =  arr[i]/10;
       let val = arr[i] - off;
       console.log(val);
    }

 
//using push.at last added.
let items = ["potato","apple","mango"];
items.push("fingerchips");
console.log(items);
 

// using pop to show the deleted item. last one is deleted.
let items = ["potato","apple","mango"];
let dlt = items.pop();
console.log("The deleted items is: ",dlt);

// joining two arrays.
let items = [97,98,99,199];
let arr = [11,12,13];
let app = [23,32];
console.log(items.concat(arr,app));


//slice method
let items = ["potato","apple","mango","pinapple"];
console.log(items.slice());


//add and remove from array
let items = ["potato","apple","mango","pinapple"]; //add and delete
items.splice(2,2,"ginger");
console.log(items);


let items = [97,98,99,199]; //without delete add
items.splice(2,0,"ginger"); 
console.log(items);

let items = [97,98,99,199];  //delete only any index
items.splice(2,1); 
console.log(items);


//Create an array to store companies -> Bloomberg ,Microsoft,Uber,Google,IBM,Netflix
//a.Remove the first company from the array
//b.Remove Uber and Add Ola in its place
//c.Add Amazon at the end


//let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//console.log(arr.shift());
//arr.splice(2,1,"Ola");
//console.log(arr);
//arr.push("Amazon");
//console.log(arr);

//Functions
function index(){
console.log("Hello");
}
index();

// Function with parameters or input
function par(msg,n){
    console.log(msg*n);
}
par(2,2);

// Function with parameter and returns value
function sum(a,b){
    s = a+b;
    return s;
} 
 let u = sum(2,3);
console.log(u);


// Arrow function
let sum = (a,b) =>{
    console.log(a+b);
}
sum(1,2);

let mul = (a,b)=>{
    return a*b;
}
console.log(mul(2,3));


//Create a function using the function keyword that takes a string as an argument & returns the number of 
// vowels in the string.
 
function str(val){
    let count = 0;
  for(let i = 0; i<val.length;i++)
    {
        if(val[i] === "a"|| val[i] === "e"||val[i] ==="i"||val[i] === "o" || val[i] === "u"
         ){
            count = count+1;
         }
    }
    console.log(count);
}
str("aeiou");


function countVowels(inputString) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of inputString) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage
console.log(countVowels("Hello, World!")); 

function str(val){
    const vowels = "aeiouAEIOU";
    let count = 0;                            //Important
    for(ar of val){
        if(vowels.includes(ar)){
            count++;
        }
    }
    return count;
}
console.log(str("kumarapple"));


// Using arrow funtions
let vowel=(str)=>{
        const vowels = "aeiou";
       let count = 0;
       for(val of str){
        if(vowels.includes(val)){
            count++;
        }
       }
       return count;
    }
    console.log(vowel("kumar"));

//Foreach 
let arr = ["kumar","jung","bhandari"];     //Foreach array
arr.forEach((val) => {
    console.log(val.toUpperCase());
})

// For a given array of numbers, print the square of each value using the forEach loop.
let arr = [1,2,3,4];
arr.forEach((val) =>{
    console.log(val**2);
})

// Map method

let nums = [1,2,3];
let newarr = nums.map((val) =>{
return val*2;
   
})
console.log(newarr);



//Filter Method
let nums = [2,3,5,6];
let arr = nums.filter((val) =>{
    return val%2 == 0;
})
console.log(arr);


// Reduce Method
 let arr = [1,2,3,4];
 let out = arr.reduce((val,curr) =>{
    return val+curr;
 });
 console.log(out);

//Returning the largest number using reduce method
 let arr = [1,2,3,4];
 let out = arr.reduce((val,curr) =>{
    return val > curr? val:curr;
 });
 console.log(out);


// We are given array of marks of students.Filter out of the marks of students that scored 90+.
let arr = [45,54,89,99,95,49,93];
let out = arr.filter((val) =>{
return val > 90;
});
console.log(out);


//Take a number n as input from user.Create an array of numbers from 1 to n.Use the reduce method to 
//calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers
//in the array.
let n = prompt("Enter a number");
let arr = [];
for(let i = 1;i<=n;i++){
    arr[i-1] = i;
}
let out = arr.reduce((prev,curr) =>{
return prev+curr;
});
console.log(out);
let put = arr.reduce((prev,curr) =>{  //Factorial number
    return prev*curr;
    });
    console.log(put);
*/ 








































































































































































































































































