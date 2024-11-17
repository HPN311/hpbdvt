// Chọn tất cả các ngọn lửa của nến
const flames = document.querySelectorAll(".flame");

// Hàm tạo hiệu ứng lửa nhấp nháy
function flickerFlame() {
  flames.forEach((flame) => {
    // Đổi màu ngọn lửa mỗi lần
    const randomColor = getRandomColor();
    flame.style.backgroundColor = randomColor;
  });
}

// Hàm để tạo một màu ngẫu nhiên cho ngọn lửa
function getRandomColor() {
  const colors = [
    "#ff6600", // Màu đỏ cam
    "#ff9933", // Màu cam sáng
    "#ffcc00", // Màu vàng cam
    "#ff3300", // Màu đỏ
    "#ffcc33", // Màu vàng nhạt
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Thực hiện hiệu ứng nhấp nháy mỗi 200ms
setInterval(flickerFlame, 200);
