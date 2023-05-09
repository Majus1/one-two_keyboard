// ::::: Variables :::::
let operation = "";
let operationSymbol = "";

let currentComputedValue = "";
let simpleMathExpression = "";
let previusSimpleMathExpression = "";
let resultValue;
// ::::: Variables :::::


// ::::: Removes overlay once all content is loaded. :::::
function pageLoader() {

    // Removes overlay after a specific time.
    let loaderOverlay = document.querySelector(".loader-overlay_wrapper");
    loaderOverlay.remove();

};

// Triggers function after 3 seconds
setTimeout(pageLoader, 3000);
// ::::: Removes overlay once all content is loaded. :::::


// ::::: Allows users to only view content on big screens :::::
function toggleSmallScreenOverlay() {

    // Variable
    let smallScreenOverlay = document.querySelector(".small-screen-overlay_wrapper");
    
    /**
     * Checks if the window width is of a specific size.
     * If above 1600px removes overlay.
     * If not leaves the overlay on.
     */
    if (window.innerWidth > "1600") {
        smallScreenOverlay = document.querySelector(".small-screen-overlay_wrapper");
        smallScreenOverlay.style.display = "none";
    } else {
        smallScreenOverlay = document.querySelector(".small-screen-overlay_wrapper");
        smallScreenOverlay.style.display = "flex";
    }
}

// Listens for when a window is resizing and then triggers the toggleSmallScreenOverlay function.
window.addEventListener('resize', toggleSmallScreenOverlay);

// Triggers toggleSmallScreenOverlay function on load.
toggleSmallScreenOverlay();
// ::::: Allows users to only view content on big screens :::::


// ::::: Function that types out what is pressed on keyboard
/** What does the function do
 * Saves the previusly inputed number inside "previuslyDisKeyValue".
 * Combines the previusly inputed number with curent keys pressed on number keyboard inside "currentDisKeyValue" variable.
 * 
 * If Backspace is pressed it will it will erase the value inside "currentDisKeyValue" variable.
 * If + key is presed it triggers the addition operation.
 * If - key is pressed it triggers the substraction operation
 * If ± key is pressed it triggers the multiplication operation
 * If / key is pressed it triggers the devision operation
*/
function displayKeystroke(pressedKey, disKeyValue) {

    // Variables
    let previuslyDisKeyValue = disKeyValue.textContent;
    let currentDisKeyValue = `${previuslyDisKeyValue}${pressedKey}`;

    // ::: Checks if the typed value is a number or action ::::
    if (pressedKey === "0" || pressedKey === "1" || pressedKey === "2" || pressedKey === "3" || pressedKey === "4" || pressedKey === "5" || pressedKey === "6" || pressedKey === "7" || pressedKey === "8" || pressedKey === "9") {
        // Changes the displayed number on screen with the pressed key.
        disKeyValue.innerHTML = currentDisKeyValue;
    } else if (pressedKey === "Backspace") {
        // Resets following variables to empty
        operation = "";
        operationSymbol = "";
        currentComputedValue = "";
        simpleMathExpression = "";
        resultValue = undefined;

        // Resets the result value on screen.
        document.querySelector(".result-number").textContent = "THE RESULT";

        // Erases the displayed value
        disKeyValue.innerHTML = "";
    } else if (pressedKey === "+") {
        // Saves the currentDisKeyValue to the currentComputedValue variable.
        currentComputedValue = currentDisKeyValue;

        // Resets and stores new opperation type.
        operation = "";
        operation = "addition";

        // Resets and stores new operation symbol
        operationSymbol = "";
        operationSymbol = "+";

        // Resets disKeyValue.
        disKeyValue.innerHTML = "";

        // Adds the currentComputedValue to the simpleMathExpression expression.
        simpleMathExpression = `${simpleMathExpression}${currentComputedValue}`

    } else if (pressedKey === "-") {
        // Saves the currentDisKeyValue to the currentComputedValue variable.
        currentComputedValue = currentDisKeyValue;

        // Resets and stores new opperation type.
        operation = "";
        operation = "substraction";

        // Resets and stores new operation symbol
        operationSymbol = "";
        operationSymbol = "-";

        // Resets disKeyValue.
        disKeyValue.innerHTML = "";

        // Adds the currentComputedValue to the simpleMathExpression expression.
        simpleMathExpression = `${simpleMathExpression}${currentComputedValue}`

    } else if (pressedKey === "*") {
        // Saves the currentDisKeyValue to the currentComputedValue variable.
        currentComputedValue = currentDisKeyValue;

        // Resets and stores new opperation type.
        operation = "";
        operation = "multiplication";

        // Resets and stores new operation symbol
        operationSymbol = "";
        operationSymbol = "*";

        // Resets disKeyValue.
        disKeyValue.innerHTML = "";

        // Adds the currentComputedValue to the simpleMathExpression expression.
        simpleMathExpression = `${simpleMathExpression}${currentComputedValue}`

    } else if (pressedKey === "/") {
        // Saves the currentDisKeyValue to the currentComputedValue variable.
        currentComputedValue = currentDisKeyValue;

        // Resets and stores new opperation type.
        operation = "";
        operation = "division";

        // Resets and stores new operation symbol
        operationSymbol = "";
        operationSymbol = "/";

        // Resets disKeyValue.
        disKeyValue.innerHTML = "";

        // Adds the currentComputedValue to the simpleMathExpression expression.
        simpleMathExpression = `${simpleMathExpression}${currentComputedValue}`

    } else if (pressedKey === "Enter") {
        if (resultValue == undefined) {
        // Saves the currentDisKeyValue to the currentComputedValue variable & removes enter.
        currentComputedValue = currentDisKeyValue.replace(/[Enter]/g, '');

        // Adds the currentComputedValue to the simpleMathExpression expression.
        simpleMathExpression = `${simpleMathExpression}${currentComputedValue}`;

        // Calculates the simpleMathExpression expression.
        resultValue = eval(simpleMathExpression);

        // Displays result on screen.
        document.querySelector(".result-number").textContent = resultValue;

        } else if (operation === "addition") {

            // Resets the previusSimpleMathExpression variable.
            previusSimpleMathExpression = "";

            // Reselects the previusSimpleMathExpression variable from numbers on screen.
            previusSimpleMathExpression = document.querySelector(".typed-number").textContent;

            // Runs the previus simple expression once more
            resultValue += eval(`${operationSymbol}${previusSimpleMathExpression}`);

            // Displays result on screen.
            document.querySelector(".result-number").textContent = resultValue;

        } else if (operation === "substraction") {

            // Resets the previusSimpleMathExpression variable.
            previusSimpleMathExpression = "";

            // Reselects the previusSimpleMathExpression variable from numbers on screen.
            previusSimpleMathExpression = document.querySelector(".typed-number").textContent;

            // Runs the previus simple expression once more
            resultValue += eval(`${operationSymbol}${previusSimpleMathExpression}`);

            // Displays result on screen.
            document.querySelector(".result-number").textContent = resultValue;

        } else if (operation === "multiplication") {

            // Resets the previusSimpleMathExpression variable.
            previusSimpleMathExpression = "";

            // Reselects the previusSimpleMathExpression variable from numbers on screen.
            previusSimpleMathExpression = document.querySelector(".typed-number").textContent;

            // Runs the previus simple expression once more
            resultValue *= previusSimpleMathExpression;

            // Displays result on screen.
            document.querySelector(".result-number").textContent = resultValue;

        } else if (operation === "division") {

            // Resets the previusSimpleMathExpression variable.
            previusSimpleMathExpression = "";

            // Reselects the previusSimpleMathExpression variable from numbers on screen.
            previusSimpleMathExpression = document.querySelector(".typed-number").textContent;

            // Runs the previus simple expression once more
            resultValue /= previusSimpleMathExpression;

            // Displays result on screen.
            document.querySelector(".result-number").textContent = resultValue;
        }

    }
};
// ::::: Function that types out what is pressed on keyboard


// ::::: Event listens for keyboard strokes :::::
document.addEventListener("keydown", function(target) {

    // if((pressedKey === "0" || pressedKey === "1" || pressedKey === "2" || pressedKey === "3" || pressedKey === "4" || pressedKey === "5" || pressedKey === "6" || pressedKey === "7" || pressedKey === "8" || pressedKey === "9" || pressedKey === "+" || pressedKey === "-" || pressedKey === "/" || pressedKey === "*" || pressedKey === "*" ) ) {}
    // Stores pressed key
    let pressedKey = target.key;
    let disKeyValue = document.querySelector(".typed-number");

    displayKeystroke(pressedKey, disKeyValue);
});
// ::::: Event listens for keyboard strokes :::::