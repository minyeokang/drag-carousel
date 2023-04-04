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

        //each item들도 움직이고 클릭한 아이템은 rotate 0, translateY도 0 그 옆에있는 거들도 값이 업데이트 되어야 함.. - 코드펜 다시 검사도구에서 x,y값 어떻게 수학적으로 변하는지 계산 


        /**
         * 
         * z-index처럼 미들인덱스 주위로 값이 변하는데 
         * 미들인덱스보다 작으면 -0.1, 크면 그냥 0.1 인 변수가 있고 
         * x값은 이 변수 * 800%
         * y값은 이 변수 * 200% 
         * 이 xy값을 transform저기에 넣던지, setProperty로 코드펜처럼 해보던지 
         * 
         * let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});
         */
    });

  });
});
