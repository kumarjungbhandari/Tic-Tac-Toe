//console.dir(document.body.childNodes[4].innerText = "avc");
//let heading = document.getElementById("heading");
//console.dir(heading);
/* let heading = document.getElementById("heading");  // accessing elements from id
console.dir(heading); 

let headings = document.getElementsByClassName("heading");
console.dir(headings);

let heading = document.getElementById("myid");
console.dir(heading);

let par = document.getElementsByTagName("p");
console.dir(par);

let ele = document.querySelector("p");
console.dir(ele);

let ele = document.querySelectorAll(".heading");
console.dir(ele);

let ele = document.querySelector("p");
console.dir(ele);


let ele = document.querySelector("div");
console.dir(ele);

let h5 = document.querySelector("h5");
console.dir(h5);


let stu = document.querySelector("h2");
console.dir(stu.innerText);
stu.innerText = stu.innerText + " from apna college students";

let divs = document.querySelectorAll(".box");
let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;        
    }
 
let div = document.querySelector("div");
div.style.backgroundColor= "green";
div.style.fontSize="20px";

let btn = document.createElement("button");
btn.innerText = "click me";
console.log(btn);
let div = document.querySelector("div");
div.append(btn);


let btn = document.createElement("button");
btn.innerText = "Write";
console.log(btn);
let div = document.querySelector("p");
div.after(btn);

let newheading = document.createElement("h1");
newheading.innerText = "Kumar Jung Bhandari";
let abc = document.querySelector("body");
abc.prepend(newheading);

let para = document.querySelector("p");
para.remove();

//CREATE A NEW BUTTON ELEMENT.GIVE IT A TEXT "CLICK ME",BACKGROUND COLOR OF RED & TEXT COLOR OF WHITE.
//INSERT THE BUTTON AS THE FIRST ELEMENT INSIDE THE BODY TAG.
let btn = document.createElement("button");
btn.style.color = "white";
btn.style.backgroundColor ="red";
btn.innerText = "click me";
let abc = document.querySelector("body");
abc.prepend(btn);


//CREATE A <P> TAG IN HTML,GIVE IT A CLASS & SOME STYLING.NOW CREATE A NEW CLASS IN CSS AND TRY TO 
//APPEND THIS CLASS TO THE <P>ELEMENT. SOLVE THIS USING CLASSLIST.
let para = document.querySelector("p");
para.classList.add("box");
para.classList.add("box");
let btn1 = document.querySelector("#btn1");
btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.clientX);
    console.log(e.type);
    console.log("btn1 was clicked");
    let a =23;
    a++;
    console.log(a);
}
let btn = document.createElement("button");
btn.innerText ="click me twice";
btn.style.color = "white";
btn.style.backgroundColor ="red";
let abc = document.querySelector("body");
abc.prepend(btn);
btn.ondblclick=()=>{
    console.log("twice click");
}
let div = document.querySelector("div");
div.onmouseover=()=>{
    console.log("your inside div");
}
let btn = document.querySelector("#btn1");
btn.addEventListener("click",()=>
{
    console.log("The button was click.");
})
let abc = document.querySelector("div");
abc.addEventListener("mouseover",(e) =>{
    console.log("your in div");
    console.log(e);
    
})


btn.addEventListener("click",()=>
{
    console.log("The button was click 2nd time.");
})        
 let btn = document.querySelector("#btn1");   //DELETE THE EVENT.
 btn.addEventListener("click",() =>{
    console.log("button was click 1");
 });

 btn.addEventListener("click",() =>{
    console.log("button was click 2");
 });
 
 const hand = () =>{
    console.log("button was click 3");
 };
 btn.addEventListener("click",hand);
  
 btn.addEventListener("click",() =>{
    console.log("button was click 4");
 });

 btn.removeEventListener("click",hand);


//CREATE A TOGGLE BUTTON THAT CHANGES THE SCREEN TO DARK MODE WHEN CLICKED AND LIGHT MODE WHEN CLICKED AGAIN.
let btn = document.querySelector("#mode");
let body = document.querySelector("body");
let curr = "light";

btn.addEventListener("click",()=>{
    if(curr === "light"){
        curr = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
        else{
            curr = "light";
        body.classList.add("light");
        body.classList.remove("dark");
          
        }
    console.log(curr);
});
*/
let div = document.querySelector("div");
let abc = document.querySelector("body");

div.addEventListener("mouseover",()=>
{
    abc.classList.add("light");
})
















































































































































