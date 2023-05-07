// ::::: Variables :::::
let operation = "";

let currentComputedValue = "";
let simpleMathExpression = "";
let resultValue;
// ::::: Variables :::::


// ::::: Function that types out what is pressed on keyboard
/** What does the function do
 * Saves the previusly inputed number inside "previuslyDisKeyValue".
 * Combines the previusly inputed number with curent keys pressed on number keyboard inside "currentDisKeyValue" variable.
 * 
 * If Backspace is pressed it will it will erase the value inside "currentDisKeyValue" variable.
 * If + key is presed it triggers the addition operation.
 * If - key is pressed ...
 * If ± is pressed ...
 * If / is pressed ...
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
        // console.log("Value erased");

        // Erases the displayed value
        disKeyValue.innerHTML = "";
    } else if (pressedKey === "+") {
        // Saves the currentDisKeyValue to the currentComputedValue variable.
        currentComputedValue = currentDisKeyValue;

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

        // Logs the resultValue.
        console.log(resultValue);

        } else {
            // Runs the previus simple expression once more
            resultValue += eval(simpleMathExpression);

            // Logs the resultValue.
            console.log(resultValue);

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

    // console.log(target.key);

    displayKeystroke(pressedKey, disKeyValue);
});
// ::::: Event listens for keyboard strokes :::::