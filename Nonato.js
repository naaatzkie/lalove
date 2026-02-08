const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.getElementById('gif');
const question = document.getElementById('question');
yesBtn.classList.add('pulse-animation');

const messages = [
    "Sure ka???",
    "Wahhhh??",
    "Huna2x sa!",
    "Last chance",
    ":<",
    ":<<",
    "Muhilak jud ko",
    "Ang mu no bayot",
    "Ayaw lagi",
    "Bawal mu NO geatay"
];


let messageIndex = 0;
let yesScale = 1.2;
let noCount = 0;
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    if (noCount >= 5) {
        question.innerHTML = "Ayaw lagi pag NO :<";
    }
    noCount++;
    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    yesBtn.style.backgroundColor = `rgb(${255 - (yesScale * 10)}, ${77 + (yesScale * 5)}, ${109})`;
});

yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yeheyyyyy date ta sa 14 :> ❤️";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1amZ4Z3R3bm9kZ3ZueGZpZzB6Z3R3bm9kZ3ZueGZpZzB6Z3R3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCBmYWN0b3J5/MDJ9IbxxvDUQM/giphy.gif";
    document.getElementById('extra-message').style.display = 'block';
    noBtn.style.display = 'none';
    setInterval(createHeart, 150);
    yesBtn.style.transform = 'scale(1.2)';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
});

});


function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = "❤️";
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}
