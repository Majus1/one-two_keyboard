// ::::: Variables :::::
let operation = "";

let previusComputedValue = "";
let currentComputedValue = "";
let resultValue = 0;
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
        // Selects the addition operation & removes unwanted symbols "+", "-", "/", "*".
        operation = "addition";
        currentComputedValue = parseInt(currentDisKeyValue.replace(/[+-]/g, ''));

        // Resets disKeyValue
        disKeyValue.innerHTML = "";

        // SMIR 
        console.log(`${operation} operation is selected and ${currentComputedValue} was set as currentComputedValue`);

        resultValue += currentComputedValue;

        // Maybe we should make it so that we add template literals witch are once translated.


    }
    
};
// ::::: Function that types out what is pressed on keyboard


// ::::: Event listens for keyboard strokes :::::
document.addEventListener("keydown", function(target) {

    // Stores pressed key
    let pressedKey = target.key;
    let disKeyValue = document.querySelector(".typed-number");

    // console.log(target.key);

    displayKeystroke(pressedKey, disKeyValue);
});
// ::::: Event listens for keyboard strokes :::::