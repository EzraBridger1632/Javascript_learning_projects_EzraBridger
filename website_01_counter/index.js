const Decrease = document.getElementById("myDecrease");
const Reset = document.getElementById("myReset");
const Increase = document.getElementById("myIncrease");
const CountDisplay = document.getElementById("countLabel");

let count = 0;

Decrease.onclick = function(){
    count--;
    CountDisplay.textContent = count;
}

Reset.onclick = function(){
    count = 0;
    CountDisplay.textContent = count;
}

Increase.onclick = function(){
    count++;
    CountDisplay.textContent = count;
}