const $items = document.querySelectorAll(".item");
const highestIndex = $items.length;
const middleIndex = Math.floor($items.length / 2);

let progress = 50;
let active = 0;

$items.forEach((item, index) => {
  const distanceFromMiddle = Math.abs(index - middleIndex);
  const zIndex = highestIndex - distanceFromMiddle;
  item.style.zIndex = zIndex;

  const displayItems = (item, index, active) => {
    item.style.setProperty("--active", (index - active) / $items.length);
  };
  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100)); //clamp 0, 100 because 10 items
    active = Math.floor((progress / 100) * ($items.length - 1)); //return actual index, start from 0, to 9 
    $items.forEach((item, index) => displayItems(item, index, active)); //another forEach inside forEach 
  };
  animate(); //default init

  item.addEventListener("click", function (e) {

    $items.forEach((otherItem, otherIndex) => {
      const distance = Math.abs(otherIndex - index);
      const z = $items.length - distance;
      otherItem.style.zIndex = z;
    });

    progress = (index / $items.length) * 100 + 10;
    animate(); 
  });
});
