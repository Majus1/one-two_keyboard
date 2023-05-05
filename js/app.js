// ::::: Function that types out what is pressed on keyboard
function displayKeystroke(pressedKey, disKeyValue) {

    // Variables
    let previuslyDisKeyValue = disKeyValue.textContent;
    let currentDisKeyValue = `${previuslyDisKeyValue}${pressedKey}`;

    // ::: Checks if the typed value is a number or action ::::
    if (pressedKey === "0" || pressedKey === "1" || pressedKey === "2" || pressedKey === "3" || pressedKey === "4" || pressedKey === "5" || pressedKey === "6" || pressedKey === "7" || pressedKey === "8" || pressedKey === "9") {
        
        // Changes the displayed number on screen with the pressed key.
        disKeyValue.innerHTML = currentDisKeyValue;
        
    }
    
};
// ::::: Function that types out what is pressed on keyboard

// ::::: Event listens for keyboard strokes :::::
document.addEventListener("keydown", function(target) {

    // Stores pressed key
    let pressedKey = target.key;
    let disKeyValue = document.querySelector(".typed-number");

    displayKeystroke(pressedKey, disKeyValue)
});
// ::::: Event listens for keyboard strokes :::::