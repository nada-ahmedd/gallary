const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function showImage(index) {
    const offset = -index * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Wrap around to the last image
    }
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Wrap around to the first image
    }
    showImage(currentIndex);
});

