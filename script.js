// Typing Animation
const text = ["Trijit", "a Coder", "a Creator", "a Gamer", "the Future"];
let index = 0;
let char = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (char < text[index].length) {
    typingElement.innerHTML += text[index].charAt(char);
    char++;
    setTimeout(type, 120);
  } else {
    setTimeout(erase, 1200);
  }
}

function erase() {
  if (char > 0) {
    typingElement.innerHTML = text[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 80);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 200);
  }
}

type();
