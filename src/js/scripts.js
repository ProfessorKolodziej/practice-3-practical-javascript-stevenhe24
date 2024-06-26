// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("Hello from Ashley");

const myName = "Ashely";
console.log(myName);

// Practical JavaScript
// Show and hide an element on the page

// Find the element to hide
const toggledParagraph = document.querySelector(".show");
console.log(toggledParagraph);

// Write a function that toggles the show/hide classes
function toggleParagraph(){
    toggledParagraph.classList.toggle("show");
    toggledParagraph.classList.toggle("hide");
    console.log(toggledParagraph);
}



// Find the button and toggle the paragraph when we click it 
const toggleButton = document.querySelector("#toggle-control");
console.log(toggleButton)

toggleButton.addEventListener("click", toggleParagraph);