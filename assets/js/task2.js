"use strict"

let input1 = document.querySelector("#calculation .number1 input");
let input2 = document.querySelector("#calculation .number2 input");
let button1 = document.querySelector("#calculation .middle button:first-child");
let button2 = document.querySelector("#calculation .middle button:nth-child(2)");
let button3 = document.querySelector("#calculation .middle button:nth-child(3)");
let button4 = document.querySelector("#calculation .middle button:last-child");
let inputResult = document.querySelector("#calculation .result input");

button1.addEventListener("click",function(){
     let sum = Number(input1.value) + Number(input2.value);
     inputResult.value = sum;
})

button2.addEventListener("click",function(){
    let subtract = input1.value - input2.value;
    inputResult.value = subtract;
})

button3.addEventListener("click",function(){
    let multip = input1.value * input2.value;
    inputResult.value = multip;
})

button4.addEventListener("click",function(){
    let div = input1.value / input2.value;
    inputResult.value = div;
})
