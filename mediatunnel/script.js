// 기존의 .toggle-circle에 대한 이벤트 리스너 삭제

// 색상 반전을 위해 전체 body에 클릭 이벤트 리스너 추가
document.body.addEventListener('click', () => {
    document.body.classList.toggle('invert-colors');
});

// 마우스 움직임에 따른 revealed-area의 배경 변경 로직은 그대로 유지
document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const gradientCenterX = (mouseX / window.innerWidth) * 100;
    const gradientCenterY = (mouseY / window.innerHeight) * 100;
  
    const revealedArea = document.querySelector(".revealed-area");
    revealedArea.style.background = `radial-gradient(
      circle 280px at ${gradientCenterX}% ${gradientCenterY}%,
      transparent 10%,
      rgba(0, 0, 0, 0.98)
    )`;
});
