// ::::: Function that types out what is pressed on keyboard
function displayKeystroke(pressedKey, displayedKeyValue) {

    // test
    console.log(`This is the pressed key ${pressedKey}. The current number on screen is ${displayedKeyValue}`);

    // ::: Changes the displayed number on screen with the pressed key.
    displayedKeyValue.innerHTML = `Updated to ${pressedKey}`;

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