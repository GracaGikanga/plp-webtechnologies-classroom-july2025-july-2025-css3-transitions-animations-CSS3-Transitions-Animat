//1st function//
function getAdditionValue(num1,num2){
return num1 + num2;
}
console.log(getAdditionValue(2,8))

//2nd function.//
function greet(Name){
    return("hello " + Name)
}

console.log(greet("Graca"))

//3rd function//
function tempcheck(degree){
    if (degree >20) {
        return "it's a hot day today"

    } else {
        return "woooo, it's too cold!"
    }
}
console.log(tempcheck(30))


//Global scope//
let globalVar="Helooooooooooooo";

function showGlobalVar(){
    console.log (globalVar);
}
showGlobalVar();

//Local Scope
function local() {
    let localVar="I am soooo local";
    console.log(localVar)

}
//calling the local scope//
local();
//calling the global scope//
showGlobalVar();

//controlling animation through pause and resume buttons//
const pauseButton =document.getElementById("pause");
const resumeButton =document.getElementById("resume");
const square =document.getElementById("squarea");

pauseButton.addEventListener("click", () => {
    square.style.animationPlayState = "paused";

});

resumeButton.addEventListener("click", () => {
    square.style.animationPlayState = "running";

});

// changing the shape of the square
const shapeButton =document.getElementById("shape")
const shape =document.getElementById("squarec")

shapeButton.addEventListener("click", () => {
    shape.style.width = "500px"; 
    shape.style.borderRadius = "1em";
})

//calculating the sum
function calculateSum(a, b) {
  return a + b;
}

const sumButton = document.getElementById("showsum");
const result = document.getElementById("result");

sumButton.addEventListener("click", () =>{
    const sum = calculateSum(2, 2);
    result.textContent = "SUM of 2+2:" + sum; //shows sum in <p>
});

//controlling the modal
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const modal= document.getElementById("modal");

openButton.addEventListener("click", () => {
    modal.classList.add("show");
});
closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
});
