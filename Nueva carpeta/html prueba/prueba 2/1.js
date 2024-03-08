function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("imageCarousel");
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % document.querySelectorAll(".slide").length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + document.querySelectorAll(".slide").length) % document.querySelectorAll(".slide").length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Cambia automáticamente cada 3 segundos
});

function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
  
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  }
