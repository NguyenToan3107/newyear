// script.js
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Lặp vô hạn
        slidesPerView: 1, // Chỉ hiển thị 1 ảnh cùng lúc
        spaceBetween: 20, // Khoảng cách giữa các ảnh
        autoplay: {
            delay: 2500, // Thời gian chuyển động (3 giây)
            disableOnInteraction: false, // Tiếp tục autoplay sau khi người dùng tương tác
        },
        allowTouchMove: false, // Vô hiệu hóa kéo (drag)
        simulateTouch: false, // Vô hiệu hóa tương tác cảm ứng
    });
});