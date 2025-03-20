document.getElementById("birth-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let birthdate = new Date(document.getElementById("birthdate").value);
    let birthtime = document.getElementById("birthtime").value;
    
    let year = birthdate.getFullYear();
    let month = birthdate.getMonth() + 1;  // Tháng tính từ 0, cần cộng thêm 1
    let day = birthdate.getDate();
    
    let hour = parseInt(birthtime.split(":")[0]);  // Lấy giờ từ time input
    let minute = parseInt(birthtime.split(":")[1]); // Lấy phút từ time input
    
    // Xác định cung mệnh (dựa theo năm sinh)
    let zodiac = getZodiacSign(year);
    
    // Xác định ngũ hành (dựa theo năm sinh)
    let element = getElement(year);
    
    // Xác định cung thân cư cung (dựa theo tháng sinh)
    let house = getHouse(month);
    
    // Xác định sao chiếu mệnh (dựa theo năm, tháng, ngày)
    let stars = getStars(year, month, day);
    
    // Dự đoán vận mệnh theo tháng
    let fortune = getFortune(month);
    
    // Dự đoán vận mệnh năm
    let fate = getFate(year);
    
    // Tính toán mệnh lý (Phi tinh) dựa trên giờ sinh
    let phiTinh = getPhiTinh(hour);

    // Hiển thị kết quả
    document.getElementById("zodiac-sign").textContent = `Cung mệnh của bạn là: ${zodiac}`;
    document.getElementById("element").textContent = `Ngũ hành của bạn là: ${element}`;
    document.getElementById("house").textContent = `Cung thân cư cung của bạn là: ${house}`;
    document.getElementById("stars").textContent = `Sao chiếu mệnh: ${stars}`;
    document.getElementById("fortune").textContent = `Vận mệnh tháng: ${fortune}`;
    document.getElementById("fate").textContent = `Hạn năm: ${fate}`;
    document.getElementById("fate").textContent += `\nMệnh lý (Phi tinh): ${phiTinh}`;
    
    // Hiển thị kết quả với hiệu ứng
    document.getElementById("result").classList.add("show");
    document.getElementById("result").classList.remove("hidden");
});

// Xóa kết quả và ẩn đi
function clearResult() {
    document.getElementById("birth-form").reset();
    document.getElementById("result").classList.remove("show");
    document.getElementById("result").classList.add("hidden");
}

// Tính cung mệnh (dựa theo năm sinh)
function getZodiacSign(year) {
    const zodiacSigns = [
        "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"
    ];
    return zodiacSigns[(year - 4) % 12];
}

// Tính ngũ hành (dựa theo năm sinh)
function getElement(year) {
    const elements = ["Kim", "Mộc", "Thủy", "Hỏa", "Thổ"];
    return elements[(year - 4) % 5];
}

// Tính cung thân cư cung (dựa theo tháng sinh)
function getHouse(month) {
    const houses = [
        "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"
    ];
    return houses[(month - 1) % 12];
}

// Dự đoán sao chiếu mệnh (dựa theo năm, tháng, ngày sinh)
function getStars(year, month, day) {
    if (year % 12 === 0) return "Thiên Lương";
    if (month === 1 && day < 20) return "Thiên Cơ";
    if (month === 2) return "Bạch Hổ";
    return "Thái Dương"; // Đơn giản hóa ví dụ, có thể thêm quy tắc chi tiết hơn
}

// Tính mệnh lý (Phi tinh) dựa trên giờ sinh
function getPhiTinh(hour) {
    if (hour < 6) return "Sao Ngọc Đế";
    if (hour < 12) return "Sao Tiêu Tương";
    if (hour < 18) return "Sao Thái Bạch";
    return "Sao Thái Âm";
}

// Dự đoán vận mệnh tháng
function getFortune(month) {
    const fortunes = [
        "Tháng 1: Tài lộc dồi dào.",
        "Tháng 2: Cẩn thận với các quyết định lớn.",
        "Tháng 3: Gặp nhiều may mắn.",
        "Tháng 4: Công việc thuận lợi, sức khỏe tốt.",
        "Tháng 5: Tình duyên thăng hoa.",
        "Tháng 6: Cẩn trọng với tiền bạc.",
        "Tháng 7: Gặp phải thử thách, nhưng vượt qua được.",
        "Tháng 8: May mắn trong việc làm ăn.",
        "Tháng 9: Gia đạo yên ấm.",
        "Tháng 10: Chú ý đến sức khỏe.",
        "Tháng 11: Công danh tiến triển tốt.",
        "Tháng 12: Được quý nhân giúp đỡ."
    ];
    return fortunes[month - 1];
}

// Dự đoán vận mệnh năm
function getFate(year) {
    return `Năm nay bạn có thể gặp phải vài thử thách nhỏ, nhưng tổng thể mọi thứ sẽ ổn.`;
}

// Lấy phần tử thông báo chào tạm biệt
const farewellMessage = document.getElementById("farewellMessage");

// Lấy phần tử div chứa nút
const mysticContainer = document.querySelector(".mystic-container");

// Thêm sự kiện khi di chuột ra ngoài nút (hover out)
mysticContainer.addEventListener("mouseleave", function() {
    // Hiển thị thông báo chào tạm biệt
    farewellMessage.style.display = "block";

    // Ẩn thông báo sau 2 giây
    setTimeout(function() {
        farewellMessage.style.display = "none";
    }, 2000); // 2 giây sau khi hiển thị
});

// Nếu bạn muốn hiển thị thông báo khi rời khỏi trang, có thể thêm sự kiện window.onbeforeunload
window.onbeforeunload = function() {
    return "Chắc chắn bạn muốn rời đi?";
};
