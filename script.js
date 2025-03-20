// Lấy các phần tử
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menuToggle");

// Thêm sự kiện khi nhấn vào hamburger
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show"); // Hiển thị hoặc ẩn menu
  hamburger.classList.toggle("active"); // Chuyển đổi giữa ba gạch và dấu X
});

