

let randomNumber = Math.trunc(Math.random() * 20 + 1) // [0;20) [1;20]
let score = 20;

// constants
const inputNumber = document.querySelector('.myNumber');
const checkerBtn = document.querySelector('.check');
const notification = document.querySelector(".notification") 
const computerNumber = document.querySelector(".random-number");
const scoreSpan = document.querySelector(".scoreSpan");
const highScore = document.querySelector(".highScore");
const resetBtn = document.querySelector(".reset");
const body = document.querySelector("body")

scoreSpan.textContent = score;
checkerBtn.addEventListener("click", ()=>{
    const val = inputNumber.value;
if(val<randomNumber){
    notification.textContent="Too low";
    score--;
    scoreSpan.textContent=score;
}
else if(val>randomNumber){
    notification.textContent="Too high"; 
    score--;
    scoreSpan.textContent=score;
}
else{
    notification.textContent="Congratulations"; 
    body.style.backgroundColor = "rgb(0, 89, 130)";
    if(highScore.textContent < score)
        highScore.textContent = score;
    computerNumber.textContent = score;
    resetBtn.style.color = "rgb(0, 89, 130)";
    checkerBtn.style.color = "rgb(0, 89, 130)";
    computerNumber.style.color = "rgb(0, 89, 130)";
    inputNumber.style.color = "rgb(0, 89, 130)";
   
}
});

resetBtn.addEventListener("click", ()=>{
    randomNumber = Math.trunc(Math.random() * 20 + 1)
    score = 20;
    computerNumber.textContent = "?";
    body.style.backgroundColor = "indigo";
    inputNumber.value = "";
    notification.textContent = "";
    scoreSpan.textContent = score;
    resetBtn.style.color = "indigo";
    checkerBtn.style.color = "indigo";
    computerNumber.style.color = "indigo";
    inputNumber.style.color = "indigo";
})
inputNumber.addEventListener("change", ()=>{
    if(inputNumber.value){
        checkerBtn.disabled= false
    }
    else{
        checkerBtn.disabled= true
    }
});

