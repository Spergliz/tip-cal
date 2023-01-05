let inputE1 = document.getElementById("input1");
let inputE2 = document.getElementById("input2"); 
let outputE1 = document.getElementById("tip-out");

document.getElementById("calc").addEventListener("click", mathlol)
function mathlol (){
    let A = inputE1.value*inputE2.value
    let B = Math.ceil(A)
    outputE1.innerHTML= B
}