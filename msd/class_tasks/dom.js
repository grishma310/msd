console.log(document.title);
console.log(document.body);
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementById("UniqueID"));
console.log(document.getElementsByClassName("ClassName"));
console.log(document.querySelector("h1"));
console.log(documents);

// console.log("Hello Everyone");
// function print(abc="123"){
//     console.log("Normal Function")    
// }
// print()

// let b=function(){
//     console.log("Anonymous Function")
// }
// b()
//  let arrow=()=>{
//     console.log("Arrow Function")
// }
// arrow()
// var persons = ['Chandra', 'Varun', 'Nrupul', 'Prateek', 'Aman'];

// // function vaccinate(person) { 
// //     console.log(person + 'has been vaccinated.')
// //  }

// // for (var i = 0; i < persons.length; i++) {  
// //  vaccinate(persons[i]);  
// // }

// let array = [ 1,2,3,4,5,6,7,8,9,10];
// let evenArray = array.filter((element)=>{
//     if(element % 2 ===0) {
//         return element;
//     } ;
// });

// console.log(evenArray)


// //filter

// //sort high order function

// let array3 = [ 34,-9, 34, 767, 1,0];

// let sortArray = array3.sort((a,b)=>{
//     return b-a;
// });

// console.log(sortArray)

// //reduce


// let array4= [1,2,3,4];

// let output = array4.reduce((acc,current)=>{

//     return acc *current;

// },1);

// console.log(output);

console.log("hi");

// console.log(document.title);
// console.log(document.body);

console.log(document.getElementsByClassName("pTag"));
console.log(document.getElementsByTagName("h1"));
let h1Array = document.getElementsByTagName("h1");
for(let i=0; i<h1Array.length;i++){
    console.log(h1Array[i]);
}

// console.log(document.getElementById("headingTag"));


// //querySelector

// console.log(document.querySelectorAll('h1'));

// console.log(document.querySelector('#headingTag'))

// let text = document.querySelector("h1");

// text.innerText = "DOM 1 class "
// console.log(text);

// // http://127.0.0.1:5500/dom.html

function catchValue(){
    let username = document.querySelector("input");
   console.log( text.value);
}

function getGender(){
    let gender= document.getElementById("gender");
    console.log(gender.value);
}

let pTag= document.querySelector("div > p");
// console.log(pTag);
pTag.style.backgroundColor="teal";
pTag.style.fontSize = "30px"
function getText(){
    console.log(document.getElementById("inputText").value)
}
//addEventListener
document.querySelector("button").addEventListener("click",likedMe );
