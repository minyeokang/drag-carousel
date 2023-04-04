const $items = document.querySelectorAll('.item')
let progress = 50
/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index]
    item.style.setProperty('--zIndex', zIndex)
    item.style.setProperty('--active', (index-active)/$items.length)
}

const animate = () => {
    progress = Math.max(0, Math.min(progress, 100))
    active = Math.floor(progress/100*($items.length-1))
    
    $items.forEach((item, index) => displayItems(item, index, active))
  }
animate()
// const getAttr = $items[0].style.getProperty('--x')
// let compStyles = window.getComputedStyle($items[0]);
// let testlog = compStyles.getPropertyValue('--x')

const root = document.querySelector(':root');
const width = getComputedStyle(root).getPropertyValue('--width');


console.log(width)
