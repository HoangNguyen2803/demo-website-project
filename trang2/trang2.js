// Lấy các phần tử
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menuToggle");

// Thêm sự kiện khi nhấn vào hamburger
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
});
