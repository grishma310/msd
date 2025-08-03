


function print(){
    console.log("hi everyone")
}

let buttons = document.getElementById("clickedMe");

buttons.addEventListener("click",clickedMe );


function clickedMe(){
    console.log(event);
    console.log("clicked me")
}




function submit(){
    let input = document.querySelector("input");

    console.log(input.value);
}

let pTag = document.querySelector("p");
pTag.style.backgroundColor="teal";



let heading1 = document.createElement("h1");
heading1.textContent = "heading text from js";
document.getElementById("container").append(heading1)

// container.append(heading1);




