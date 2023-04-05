const $items = document.querySelectorAll(".item");
const highestIndex = $items.length;
const middleIndex = Math.floor($items.length / 2);

let translateX;
let translateY;
let rotate;
let progress = 50;
let active = 0;

$items.forEach((item, index) => {
  const distanceFromMiddle = Math.abs(index - middleIndex);
  const zIndex = highestIndex - distanceFromMiddle;
  item.style.zIndex = zIndex;

  rotate = 10 * distanceFromMiddle;
  let degDirection = index < middleIndex ? rotate * -1 : rotate;

  translateX = 20 * distanceFromMiddle;
  let tranX = index > middleIndex ? 0 : translateX;
  //   console.log(tranX)

  translateY = 80 * distanceFromMiddle;
  let tranY = index < middleIndex ? translateY * -1 : translateY;
  //   console.log(tranY)

  const displayItems = (item, index, active) => {
    item.style.setProperty("--active", (index - active) / $items.length);
  };
  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor((progress / 100) * ($items.length - 1));
    // item.style.transform = `rotate(${degDirection}deg) translateX(${tranX}px) translateY(${tranY}px)`;
    // root.style.setProperty('--active', 0.1);
    item.style.setProperty("--active", (index - active) / $items.length);
    console.log((index - active) / $items.length);
    $items.forEach((item, index) => displayItems(item, index, active));
  };
  animate();
  item.addEventListener("click", function (e) {
    $items.forEach((otherItem, otherIndex) => {
      const distance = Math.abs(otherIndex - index);

      const z = $items.length - distance;
      otherItem.style.zIndex = z;

      progress = (index / $items.length) * 100 + 10;
      animate();

      console.log(active);
      console.log(progress);
const getStyle = otherItem.style
const getit = getStyle.getPropertyValue('translateX')
console.log(getit)
    });
  });
});
