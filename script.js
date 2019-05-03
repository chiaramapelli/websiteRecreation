var slideIndex = 1;
//const prev = document.getElementById("prev")
//const next = document.getElementById("next")
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        slideIndex = 1; 
    } 
    if(n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";

}
// prev.addEventListener('click', () => {
//     console.log("hello")
// })