console.log("Hello from Nerdbord!");

const box = document.querySelector(".box");

const colors = ["red", "blue", "green", "pink"];
let index = 0;

setInterval(() => {
  box.style.borderColor = colors[index];
  index = (index + 1) % colors.length;
}, 3000);
