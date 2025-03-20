document.getElementById("contactLink").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

    // Hiển thị form liên hệ
    var contactForm = document.getElementById("contactForm");
    contactForm.style.display = "block";
    
    // Thay đổi văn bản liên kết thành "Đóng Form"
    document.getElementById("contactLink").textContent = "Đóng Form";
    
    // Thêm sự kiện để đóng form khi người dùng nhấp vào "Đóng Form"
    document.getElementById("contactLink").addEventListener("click", function() {
        contactForm.style.display = "none";  // Ẩn form
        document.getElementById("contactLink").textContent = "Liên hệ ngay!";  // Đổi lại văn bản liên kết
    });
});

// Xử lý form gửi
document.getElementById("formContact").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định
    
    // Lấy tên người dùng từ trường input
    var userName = document.getElementById("name").value;
    
    // Hiển thị thông báo cảm ơn
    var responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = "Cảm ơn " + userName + " đã liên hệ, chúng tôi sẽ cố gắng liên hệ với bạn sớm nhất!";
    
    // Ẩn form sau khi gửi
    document.getElementById("contactForm").style.display = "none";
    
    // Thay đổi lại văn bản liên kết
    document.getElementById("contactLink").textContent = "Liên hệ ngay!";
});
