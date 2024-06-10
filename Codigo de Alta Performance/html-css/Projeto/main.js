document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add('light-mode');
    }

    toggleButton.addEventListener('click', function () {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});


const images = document.querySelectorAll('img.hover-scale');

images.forEach(image => {
  const caption = image.nextElementSibling;

  caption.style.opacity = 0;
  caption.style.transition = 'opacity 0.5s ease-in-out';

  image.addEventListener('mouseover', () => {
    caption.style.opacity = 1;
  });

  image.addEventListener('mouseout', () => {
    caption.style.opacity = 0;
  });
});


const increaseButton = document.getElementById('increase-font');
const decreaseButton = document.getElementById('decrease-font');

const body = document.querySelector('body');

increaseButton.addEventListener('click', () => {
  let currentSize = parseFloat(body.style.fontSize) || 16;
  body.style.fontSize = (currentSize + 2) + 'px';
});

decreaseButton.addEventListener('click', () => {
  let currentSize = parseFloat(body.style.fontSize) || 16;
  body.style.fontSize = (currentSize - 2) + 'px';
});

