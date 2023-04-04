const $items = document.querySelectorAll('.item');
const highestIndex = $items.length;
const middleIndex = Math.floor($items.length / 2);

let translateX;
let translateY;
let rotate;


$items.forEach((item, index) => {
  const distanceFromMiddle = Math.abs(index - middleIndex);
  const zIndex = highestIndex - distanceFromMiddle;
  item.style.zIndex = zIndex;

  rotate = 10 * distanceFromMiddle
  let degDirection =  index < middleIndex ? rotate * -1 : rotate
 
  translateX = 20 * distanceFromMiddle
  let tranX = index > middleIndex ? 0 : translateX
//   console.log(tranX)

  translateY = 80 * distanceFromMiddle
  let tranY = index < middleIndex ? translateY * -1 : translateY
//   console.log(tranY)

  item.style.transform = `rotate(${degDirection}deg) translateX(${tranX}px) translateY(${tranY}px)`; 


  item.addEventListener('click', function(e) {
    $items.forEach((otherItem, otherIndex) => {
        const distance = Math.abs(otherIndex - index);
        
        const z = $items.length - distance 
        otherItem.style.zIndex = z;


        // otherItem.style.transform = `rotate(${degDirection}deg) translateX(${tranX}px) translateY(${translateY}px)`; 


    });

  });
});
