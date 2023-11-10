var currentIndex = 0;
var slides = document.getElementsByClassName("slideshow-image");

function showNextSlide() {
    slides[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = "block";
}
setInterval(showNextSlide, 3500);
