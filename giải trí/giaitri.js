// Mảng các câu an ủi
const comfortingMessages = [
    "Hãy thở sâu và thư giãn. Mọi chuyện sẽ ổn thôi!",
    "Chỉ cần bạn cố gắng, mọi thứ sẽ dần tốt đẹp hơn.",
    "Đừng lo lắng quá, bạn làm tốt lắm rồi!",
    "Mọi điều sẽ qua đi, hãy kiên nhẫn và giữ vững niềm tin!",
    "Cuộc sống luôn có thăng trầm, nhưng bạn luôn mạnh mẽ vượt qua.",
    "Chắc chắn sẽ có những ngày tươi sáng hơn phía trước!"
];

// Xử lý thay đổi màu nền trong trò chơi
document.getElementById("colorButton").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#F0F033", "#33F0F0", "#000000", "#FFCCFF","#528B8B"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById("gameMessage").textContent = "Màu nền đã được thay đổi! Nhấn lại để thử màu khác.";
});

// Xử lý xả stress
document.getElementById("stressButton").addEventListener("click", function() {
    // Thêm hiệu ứng rung cho nút
    document.getElementById("stressButton").style.animation = "shake 0.5s";

    // Chọn một câu an ủi ngẫu nhiên từ mảng
    const randomMessage = comfortingMessages[Math.floor(Math.random() * comfortingMessages.length)];

    // Hiển thị câu an ủi
    const stressMessageElement = document.getElementById("stressMessage");
    stressMessageElement.textContent = randomMessage;

    // Thêm hiệu ứng hoạt hình mượt mà khi câu an ủi thay đổi
    stressMessageElement.style.animation = "fadeInOut 3s ease-in-out";

    // Xóa hiệu ứng "shake" sau khi animation kết thúc
    setTimeout(function() {
        document.getElementById("stressButton").style.animation = "";
    }, 500);

    // Xóa hiệu ứng hoạt hình sau khi hoàn thành
    setTimeout(function() {
        stressMessageElement.style.animation = "";
    }, 3000);
});
