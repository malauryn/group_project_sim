// main.js

console.log("Hello, World!");

// 1. Create the audio object
const popSound = new Audio('audio/bensound-lucky.mp3');

// 2. Setup the Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // If the image is visible on screen
    if (entry.isIntersecting) {
      popSound.play().catch(error => {
        console.log("Autoplay blocked! The user needs to click somewhere first.");
      });
      // Optional: Stop observing if you only want the sound to play once
      // observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); // 0.5 means 50% of the image must be visible

// 3. Tell the observer which images to watch
document.querySelectorAll('.sound-trigger').forEach(img => {
  observer.observe('DnMLogo.jpg');
});