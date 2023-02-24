"use strict"

let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
ul.style.listStyle = "none";
input.style.boxShadow = "none";

button.addEventListener("click",function(){
    if (input.value == "")
    {
        alert("Don't empty input");
        return;
    }
    let inputValue = input.value;
    let li = document.createElement("li");
    let i = document.createElement("i");
    li.className = "item";
    i.className = "fa-solid fa-xmark icon"
    li.append(inputValue);
    li.append(i);
    ul.append(li);
    input.value="";
    i.addEventListener("click",function(){
        li.classList.remove("item");
        li.innerText = "";
    })
})












