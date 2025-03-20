// Thêm hiệu ứng khi người dùng di chuột qua các phần mục trong menu
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Thêm hiệu ứng cho các phần mục chính
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.backgroundColor = '#f0f8ff';
    });

    section.addEventListener('mouseleave', () => {
        section.style.backgroundColor = '#e9ecef';
    });
});
