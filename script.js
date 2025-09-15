// --- Section 1: Demonstrating Scope ---
console.log("--- SCOPE DEMONSTRATION ---");

// Global Scope
var globalVar = "I am a global variable.";
let globalLet = "I am a global let.";
const globalConst = "I am a global const.";

function scopeExample() {
    // Function Scope
    var functionVar = "I am a function-scoped variable.";
    let functionLet = "I am a function-scoped let.";
    const functionConst = "I am a function-scoped const.";

    console.log("Inside the function:");
    console.log("Global var:", globalVar);
    console.log("Function let:", functionLet);

    if (true) {
        // Block Scope
        let blockLet = "I am a block-scoped let.";
        const blockConst = "I am a block-scoped const.";
        console.log("Inside the block:", blockLet);
    }

    // This would throw an error because blockLet is not accessible here
    // console.log("Outside the block:", blockLet); 
}

scopeExample();

// This would throw an error because functionVar is not accessible here
// console.log("Outside the function:", functionVar);


// --- Section 2: Demonstrating Parameters and Return Values ---
console.log("\n--- PARAMETERS & RETURN VALUES DEMONSTRATION ---");

/**
 * A function that calculates the sum of two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of num1 and num2.
 */
function addNumbers(num1, num2) {
    // This function takes two parameters
    let sum = num1 + num2;
    // It returns a single value
    return sum;
}

// Calling the function and storing the returned value
let result = addNumbers(5, 10);
console.log("The result of adding 5 and 10 is:", result);


// --- Section 3: Animation Triggers ---
console.log("\n--- ANIMATION TRIGGER DEMONSTRATION ---");

// Get the elements from the HTML
const box = document.getElementById('box');
const animateButton = document.getElementById('animate-button');

// Add a click event listener to the button
animateButton.addEventListener('click', () => {
    // Add the CSS class to trigger the animation
    box.classList.add('trigger-animation');
    
    // Listen for the 'animationend' event to clean up after the animation is finished
    box.addEventListener('animationend', () => {
        // Remove the class so the animation can be triggered again
        box.classList.remove('trigger-animation');
    }, { once: true }); // The { once: true } option ensures this event listener runs only once
});