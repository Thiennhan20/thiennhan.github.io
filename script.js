// Tạo hiệu ứng pháo hoa ngẫu nhiên trước khi bấm nút
function createRandomFireworks() {
    const container = document.getElementById("fireworks-random-container");
    const icons = ["💐", "💖", "🌸"];
    const count = 100; // Số lượng icon mỗi lần phun

    for (let i = 0; i < count; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework-random");
        firework.textContent = icons[Math.floor(Math.random() * icons.length)];
        firework.style.left = Math.random() * window.innerWidth + "px";
        firework.style.top = Math.random() * window.innerHeight + "px";
        firework.style.fontSize = `${Math.random() * 24 + 16}px`;
        firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
        container.appendChild(firework);

        // Xóa icon sau khi hiệu ứng kết thúc
        setTimeout(() => {
            firework.remove();
        }, 2000); // 2 giây
    }
}

// Tạo hiệu ứng pháo hoa ngẫu nhiên mỗi 2 giây
setInterval(createRandomFireworks, 2000);

function startCelebration() {
    // Hiển thị popup
    const popup = document.getElementById("popup");
    popup.style.display = "flex";

    // Tạo hiệu ứng pháo hoa với số lượng lớn
    createCelebrationFireworks(500); // 500 icon

    // Sau 5 giây, ẩn popup và hiển thị hình ảnh thay thế
    setTimeout(() => {
        popup.style.display = "none";
        const imageReplacement = document.getElementById("image-replacement");
        imageReplacement.style.display = "flex";

        // Hiển thị nút đóng sau 5 giây
        setTimeout(() => {
            const closeImageBtn = document.getElementById("close-image-btn");
            closeImageBtn.style.display = "block";
        }, 10000); // 5 giây
    }, 10000); // 5 giây
}

function closePopup() {
    // Ẩn popup
    const popup = document.getElementById("popup");
    popup.style.display = "none";

    // Xóa các icon pháo hoa sau khi đóng popup
    const fireworksContainer = document.getElementById("fireworks-celebration-container");
    fireworksContainer.innerHTML = "";
}

function createCelebrationFireworks(count) {
    const container = document.getElementById("fireworks-celebration-container");
    const icons = ["💐", "💖", "🌸"];

    for (let i = 0; i < count; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework-celebration");
        firework.textContent = icons[Math.floor(Math.random() * icons.length)];
        firework.style.left = Math.random() * window.innerWidth + "px";
        firework.style.top = Math.random() * window.innerHeight + "px";
        firework.style.fontSize = `${Math.random() * 24 + 16}px`;
        firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
        container.appendChild(firework);

        // Xóa icon sau khi hiệu ứng kết thúc
        setTimeout(() => {
            firework.remove();
        }, 2000); // 2 giây
    }
}

// Xử lý nút đóng hình ảnh
document.getElementById("close-image-btn").addEventListener("click", () => {
    const imageReplacement = document.getElementById("image-replacement");
    imageReplacement.style.display = "none";
    const closeImageBtn = document.getElementById("close-image-btn");
    closeImageBtn.style.display = "none";
});

document.addEventListener("click", () => {
    const audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Không thể phát nhạc do trình duyệt chặn.");
        });
    }
}, { once: true }); // Đảm bảo chỉ kích hoạt một lần

