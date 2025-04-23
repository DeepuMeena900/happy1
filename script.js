const container = document.getElementById('birthday-container');
let elapsed = 0;
let duration = 60; // seconds
let cartCount = 0; // Track number of carts

// Load your 7 image paths
const imagePaths = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg',
  'images/img7.jpg'
];

// Animation for text display
function createText() {
  const el = document.createElement('div');
  el.classList.add('happy-text');
  el.innerText = '🎉 Happy Birthday Meri Shivi 🎉';
  el.style.left = Math.random() * 90 + 'vw';
  el.style.top = Math.random() * 60 + 30 + 'vh';
  container.appendChild(el);
  setTimeout(() => el.remove(), 5000);
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

// Create carts with custom messages after 20 seconds
function createCart(text) {
  if (cartCount >= 10) return; // Limit to 10 carts

  const cart = document.createElement('div');
  cart.classList.add('birthday-cart');
  cart.innerText = text;
  container.appendChild(cart);
  cartCount++; // Increment cart counter
  setTimeout(() => cart.remove(), 7000); // Remove after 7 seconds
}

// Animation logic
const interval = setInterval(() => {
  if (elapsed < 10) {
    createText(); // Only text (Happy Birthday)
  } else if (elapsed >= 10 && elapsed < 20) {
    createText();  // Continue text
    createImage(); // Add floating images
  } else {
    // After 20 sec — create carts one by one with animation
    createCart("Happy Birthday Meri Shivi 🎉");
    createCart("May your day be filled with joy 🥳");
    createCart("Keep shining like a star 🌟");
    createCart("Wishing you lots of cake 🎂");
    createCart("Celebrate with laughter 😄");
    createCart("Make amazing memories 📸");
    createCart("Enjoy every moment ❤️");
    createCart("You're amazing! 💖");
    createCart("Have a fantastic year ahead 🎉");
    createCart("Wishing you all the happiness! 🌸");
  }

  elapsed += 0.4;

  if (elapsed >= duration) {
    clearInterval(interval);
  }
}, 400);
