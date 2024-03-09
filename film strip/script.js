const gridContainer = document.querySelector('.grid-container');
const gridItems = document.querySelectorAll('.grid-item');
const itemWidth = gridItems[0].offsetWidth + parseInt(window.getComputedStyle(gridItems[0]).marginLeft) + parseInt(window.getComputedStyle(gridItems[0]).marginRight);
let scrollPosition = 0;
let isHovering = false;

function cloneGridItems() {
  const clonedItems = [];
  gridItems.forEach(item => {
    const clone = item.cloneNode(true);
    clonedItems.push(clone);
  });
  clonedItems.forEach(clone => gridContainer.appendChild(clone));
}

function scrollImages() {
  const speed = isHovering ? 0.9 : 1; 

  scrollPosition -= speed; 
  gridContainer.style.transform = `translateX(${scrollPosition}px)`;

  if (Math.abs(scrollPosition) >= gridContainer.scrollWidth - gridContainer.offsetWidth) {
    scrollPosition = 0;
  }

  requestAnimationFrame(scrollImages);
}

gridContainer.style.width = `${itemWidth * gridItems.length}px`;

cloneGridItems();

scrollImages();

gridContainer.addEventListener('mouseenter', () => {
  isHovering = true;
});

gridContainer.addEventListener('mouseleave', () => {
  isHovering = false;
});
