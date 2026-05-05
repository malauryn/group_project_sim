// main.js

console.log("Hello World!");

const messagesContainer = document.querySelector(".messages");
const soundTrigger = document.querySelector(".sound-trigger");
const notificationSound = document.querySelector("#notificationSound");

let soundPlayed = false;

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
    if (entry.isIntersecting && soundPlayed ===false){
      notificationSound.play();
      soundPlayed = true;
    }
  });
},
{
  root: messagesContainer,
  threshold: 0.6
}
);

observer.observe(soundTrigger);

