const $items = document.querySelectorAll(".carousel-item");
let progress = 50;
let active = 0;
let root = document.documentElement;
const displayItems = (index, active) => {
  root.style.setProperty("--active", (index - active) / $items.length);
};

const animate = () => {
  progress = Math.max(0, Math.min(progress, 100));
  active = Math.floor((progress / 100) * ($items.length - 1));

  $items.forEach((item, index) => {
    root.style.setProperty("--active", (index - active) / $items.length);
  });
};
animate();
