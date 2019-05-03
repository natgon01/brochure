const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["What your'e about to see is Colombian magic, so take seat and enjoy"];
const typingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0; // textArray index
let charIndex = 0; // character index

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
    document.getElementById("body").classList.add('body2');
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  setTimeout(type, newTextDelay + 250);
});