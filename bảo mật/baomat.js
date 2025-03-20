// Hiệu ứng khi người dùng hover vào các phần
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-10px)';
        section.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0)';
        section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});
// Chờ 2 giây sau khi trang được tải
window.onload = function() {
    setTimeout(function() {
        // Hiển thị nút Home sau 2 giây
        const homeBtn = document.getElementById("homeBtn");
        homeBtn.classList.add("show");
    }, 5000); //  giây ( đổi ms sang s)
};
