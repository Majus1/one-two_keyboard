// ::::: Function that types out what is pressed on keyboard
function displayKeystroke(pressedKey, displayedKeyValue) {

    // ::: Checks if the typed value is a number or action ::::
    

}
// ::::: Function that types out what is pressed on keyboard

// ::::: Event listens for keyboard strokes :::::
document.addEventListener("keydown", function(target) {

    // Stores pressed key
    let pressedKey = target.key;
    let displayedKeyValue = document.querySelector(".typed-number");

    displayKeystroke(pressedKey, displayedKeyValue)
});
// ::::: Event listens for keyboard strokes :::::