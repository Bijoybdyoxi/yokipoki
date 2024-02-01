const dynamicText = document.querySelector("h2 span")
const words = ["Watch Photos","Listen Music","Watch Videos","Play Games"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex > 0) {
         // If condition is true, remove the previous character
         charIndex--;
         setTimeout(typeEffect, 200);
    } else{
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();