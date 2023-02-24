"use strict"

// let cns = console.log.bind(console);
// let num  = 15;
// cns(num);

// console.log(document);
// console.log(typeof document);

// let elems = document.getElementsByTagName("h1");
// console.log(elems);

// for (const item of elems) {
//     console.log(item);
// }


// let elems = document.getElementsByClassName("header");
// console.log(elems);

// let elem = document.getElementById("products");
// console.log(elem);

// let span = document.querySelector("#product span");
// console.log(span);

// let p = document.querySelector("#product .item p");
// console.log(p);

// let span3 = document.querySelector("#product span:nth-child(3)");
// let spans = document.querySelectorAll("#product span");
// for (const item of spans) {
//     if(item.innerText == "Bye3")
//     {
//         item.style.color = "red";
//     }
// }


// let h2 = document.querySelector("h2");
// h2.innerText = "Welcome";
// console.log(h2.innerHTML);
// h2.innerHTML = "<span>Resulllll</span>";
// h2.style.backgroundColor = "yellow";
// h2.style.position = "relative";
// h2.style.top = "200px";

// h2.style.cssText = `
// background-color: yellow;
// position: relative;
// top: 200px;
// `

// let h1 = document.querySelector("h1");
// console.log(h1);

// h1.className = "test";

// h1.classList.add("test");
// h1.classList.remove("header");
// let button = document.querySelector("#products button");

// button.onclick = function(){
//     alert("Salam1");
// }

// button.onclick = function(){
//     alert("Salam2");
// }


// button.addEventListener("click",function(){
//     console.log("salam1");
// })

// button.addEventListener("click",function(){
//     console.log("salam2");
// })

// function test(){
//     alert("test function");
// }

// button.addEventListener("click",test());


// button.addEventListener("click",function(){
//     // h1.className = "h1-design";
//     h1.classList.add("h1-desgin");
// });

// let h1 = document.querySelector("#products h1");
// let btnOff = document.querySelector("#products .off");
// let btnOn = document.querySelector("#products .on");

// btnOff.addEventListener("click",function(){
//     h1.classList.add("inactive");
//     if(h1.classList.contains("active"))
//     {
//         h1.classList.remove("active");
//     }
// })

// btnOn.addEventListener("click",function(){
//     h1.classList.add("active");
//     if (h1.classList.contains("inactive")){
//         h1.classList.remove("inactive");
//     }
// })

// let btnOff = document.querySelector("#products .off");
// let btnOn = document.querySelector("#products .on");
// let i = document.querySelector("#products i");
// let body = document.querySelector("body");

// // btnOff.addEventListener("click",function(){
// //    i.classList.remove("active");
// //    body.classList.remove("active-body");
// // })

// btnOn.addEventListener("click", function (event) {
//     console.log(event.target);
//     if (i.classList.contains("active") && body.classList.contains("active-body")) {
//         i.classList.remove("active");
//         body.classList.remove("active-body");
//         this.innerText = "On";
//         this.classList.remove("btn-danger");
//         this.classList.add("btn-success");

//     }
//     else {
//         i.classList.add("active");
//         body.classList.add("active-body");
//         this.innerText = "Off";
//         this.classList.remove("btn-success");
//         this.classList.add("btn-danger");
//     }
// })

// document.querySelector("a").addEventListener("click",function(e){
//      e.preventDefault();
//      console.log("Resul"); 
// })

// i.addEventListener("mouseover",function(){
//     i.classList.add("active");
//     body.classList.add("active-body");
// })

// i.addEventListener("mouseout",function(){
//     i.classList.remove("active");
//     body.classList.remove("active-body");
// })