const $items = document.querySelectorAll('.item');
const highestIndex = $items.length
const middleIndex = Math.floor($items.length / 2);

let translateX;
let translateY;
let rotate;

$items.forEach((item, index) => {
    //set z-index descending order

    $items[middleIndex].style.zIndex = highestIndex;
    const z = $items.length - index;
    item.style.zIndex = z;

    
    console.log(middleIndex)
    // const initialZIndex = highestIndex - index;
  // item.style.zIndex = initialZIndex;
  item.addEventListener('click', function(e) {
    //clicked item gets highest z-index 
    const clickedIndex = Array.prototype.indexOf.call($items, this);
    console.log(clickedIndex)

    translateX = index * 10
    translateY = (index * 40 ) * index
    rotate = index * 10;
    
    item.style.transform = `rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px)`;



    item.style.zIndex = highestIndex;
    translateX = -this.clientWidth
    translateY = 0 //y된만큼만 다시 돌아가기 
    rotate = 0
    //nest another loop, its index is different with origin forEach
    $items.forEach((otherItem, otherIndex) => {
        if(otherIndex !== index) {
            // Calculate z-index based on distance from clicked item
            const distance = Math.abs(index - otherIndex);
            const z = $items.length - distance;
            otherItem.style.zIndex = z;
       
        }
      
       
    });
    for(let j = 0; j < $items.length; j++){

      $items[j].style.transform = `rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px)`; 
      
    }

  });
  
});

