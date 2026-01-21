const min = 1;
const max = 6;
const RollButton = document.getElementById("myButton");
const RollLabel1 = document.getElementById("Label1");
const RollLabel2 = document.getElementById("Label2");
const RollLabel3 = document.getElementById("Label3");

let randomNum1;
let randomNum2;
let randomNum3;

RollButton.onclick = function(){
    randomNum1 = Math.floor(Math.random()*max)+min;
    randomNum2 = Math.floor(Math.random()*max)+min;
    randomNum3 = Math.floor(Math.random()*max)+min;

    RollLabel1.textContent = randomNum1;
    RollLabel2.textContent = randomNum2;
    RollLabel3.textContent = randomNum3;
}