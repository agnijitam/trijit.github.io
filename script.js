// Typing Animation
const text = ["Trijit", "a Coder", "a Creator", "a Gamer", "the Future"];
let index = 0;
let char = 0;
const typingElement = document.getElementById("typing");
let isDeleting = false;
let typingSpeed = 120;

function type() {
  const currentText = text[index];
  
  if (!isDeleting && char < currentText.length) {
    typingElement.innerHTML += currentText.charAt(char);
    char++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && char > 0) {
    typingElement.innerHTML = currentText.substring(0, char - 1);
    char--;
    setTimeout(type, typingSpeed / 2);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % text.length;
    }
    setTimeout(type, isDeleting ? 1200 : 200);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Start typing animation
  if (typingElement) {
    type();
  }
  
  // Add scroll animations for cards
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 1s forwards';
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    observer.observe(card);
  });
  
  // Add active state to nav links based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});
