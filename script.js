const container = document.getElementById('birthday-container');
let elapsed = 0;
let duration = 60;
let cartIndex = 0;
let cartDisplayCount = 0;

const birthdayMessages = [
  "Happy Birthday Meri Shivi 🎉",
  "May your day be filled with joy 🥳",
  "Keep shining like a star 🌟",
  "Wishing you lots of cake 🎂",
  "Celebrate with laughter 😄",
  "Make amazing memories 📸",
  "Enjoy every moment ❤️"
];

// Create text
function createText() {
  const el = document.createElement('div');
  el.classList.add('happy-text');
  el.innerText = '🎉 Happy Birthday Meri Shivi 🎉';
  el.style.left = Math.random() * 90 + 'vw';
  el.style.top = Math.random() * 60 + 30 + 'vh';
  container.appendChild(el);
  setTimeout(() => el.remove(), 10000);  // Text displayed for 10 seconds
}

// Create floating images
function createImage() {
  const img = document.createElement('img');
  img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
  img.classList.add('floating-image');
  img.style.left = Math.random() * 90 + 'vw';
  img.style.top = Math.random() * 60 + 30 + 'vh';
  container.appendChild(img);
  setTimeout(() => img.remove(), 6000);
}

// Create carts
function createCart(text) {
  const cart = document.createElement('div');
  cart.classList.add('birthday-cart');
  cart.innerText = text;
  container.appendChild(cart);
  setTimeout(() => cart.remove(), 7000);
  cartDisplayCount++;
}

// Create typewriter text (full screen after 7 carts)
function createFullScreenText() {
  const textElement = document.createElement('div');
  textElement.classList.add('typewriter-text');
  textElement.innerText = 'Meri shivi hamesa happy rahe 🎉';
  
  // Make text occupy the full screen
  textElement.style.position = 'absolute';
  textElement.style.top = '50%';
  textElement.style.left = '50%';
  textElement.style.transform = 'translate(-50%, -50%)';
  textElement.style.fontSize = '50px'; // Adjust text size for full screen
  textElement.style.textAlign = 'center';
  textElement.style.color = '#fff';
  textElement.style.fontWeight = 'bold';
  
  container.appendChild(textElement);

  // Fade out after 5 seconds
  setTimeout(() => {
    textElement.classList.add('fade-out');
  }, 5000);

  setTimeout(() => textElement.remove(), 8000);
}

// Check if typewriter text is already in localStorage
function checkStoredText() {
  const storedText = localStorage.getItem('thankYouText');
  if (storedText) {
    const textElement = document.createElement('div');
    textElement.classList.add('typewriter-text');
    textElement.innerText = storedText;
    container.appendChild(textElement);
  }
}

// Images array
const imagePaths = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg',
  'images/img7.jpg'
];

// Main animation loop
const interval = setInterval(() => {
  if (elapsed < 10) {
    createText();
  } else if (elapsed >= 10 && elapsed < 30) {  // Duration increased to 30 seconds
    createText();
    createImage();
  } else if (elapsed >= 30 && cartDisplayCount < 7) {  // 7 carts only
    if ((elapsed - 30) >= cartDisplayCount * 2) {  // Delay after 30 seconds
      createCart(birthdayMessages[cartDisplayCount]);
    }
  } else if (cartDisplayCount >= 7) {
    createFullScreenText(); // Full screen text after all carts are shown
  }

  elapsed += 0.4;

  if (elapsed >= duration) {
    clearInterval(interval);
  }
}, 400);

// Call function to check if stored text is present in localStorage
checkStoredText();
