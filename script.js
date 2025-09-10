//creating the 1st custom function//
function getAdditionValue(num1,num2){
return num1 + num2;
}
console.log(getAdditionValue(2,8))

//creating the 2nd custom function.//
function greet(Name){
    return("hello " + Name)
}

console.log(greet("Graca"))

//creating the 3rd custom function//
function tempcheck(degree){
    if (degree >20) {
        return "it's a hot day today"

    } else {
        return "woooo, it's too cold!"
    }
}
console.log(tempcheck(30))


//creating a Global scope//
let globalVar="Helooooooooooooo";

function showGlobalVar(){
    console.log (globalVar);
}
showGlobalVar();

//creating a Local Scope
function local() {
    let localVar="I am soooo local";
    console.log(localVar)

}
//calling the local scope//
local();


//calling the global scope since it can be called outside the function
showGlobalVar();



//controlling animation through pause and resume buttons
//getting the ID references from HTML
const pauseButton =document.getElementById("pause");
const resumeButton =document.getElementById("resume");
const square =document.getElementById("squarea");
//Adding an event listener to the pause button to make the animation pause
pauseButton.addEventListener("click", () => {
    square.style.animationPlayState = "paused";

});
//Adding an event listener to the resume button to make the animation resume
resumeButton.addEventListener("click", () => {
    square.style.animationPlayState = "running";

});


//getting Id references from the HTML
const shapeButton =document.getElementById("shape")
const shape =document.getElementById("squarec")
//attaching an event listener to increase the width of the square.
shapeButton.addEventListener("click", () => {
    shape.style.width = "500px"; 
    shape.style.borderRadius = "1em";
})



//writing a function to calculate the sum of numbers
function calculateSum(a, b) {
  return a + b;
}
// getting references for IDs, showsum and result
const sumButton = document.getElementById("showsum");
const result = document.getElementById("result");
//attaching an event listener to the "showsum" button to show the sum result when clicked
sumButton.addEventListener("click", () =>{
    const sum = calculateSum(2, 2);
    result.textContent = "SUM of 2+2:" + sum; //shows sum in <p>
});



//controlling the modal to be shown when open button is clicked and to close when close button is clicked
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const modal= document.getElementById("modal");

openButton.addEventListener("click", () => {
    modal.classList.add("show");
});
closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
});

//calling the local scope to show that It cannot be called outside its function
local();