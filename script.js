const texts = ["Marketing", "Development", "Design", "Strategy"];
let currentIndex = 0;

const textElement = document.querySelector('.fading-text');

function changeText() {
    textElement.style.opacity = 0;

    setTimeout(() => {
        textElement.textContent = texts[currentIndex];
        textElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % texts.length;
    }, 1000);
}

setInterval(changeText, 3000);
window.onload = changeText;
