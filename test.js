const $items = document.querySelectorAll('.item');
const highestIndex = $items.length

$items.forEach((item, index) => {
    //set z-index descending order
  const initialZIndex = highestIndex - index;
  item.style.zIndex = initialZIndex;

  if (index !== 0) {
    const translateX = index * 10;
    const translateY = index === 1 ? 80 : (index - 1) * 210;
    const rotate = index * 10;

    item.style.transform = `rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px)`;
  }
  console.log(index)
  item.addEventListener('click', function(e) {
    //clicked item gets highest z-index 
    item.style.zIndex = highestIndex;

    //nest another loop, its index is different with origin forEach
    $items.forEach((otherItem, otherIndex) => {
        // console.log(otherIndex)
        if(otherIndex !== index) {
            console.log(otherIndex) //클릭한 index를 제외하고 다나옴 
            
            // Calculate z-index based on distance from clicked item
            const distance = Math.abs(index - otherIndex);
            const z = 4 - distance;
            otherItem.style.zIndex = z;
            
        }
    });
  });
});
