//اسلایدر
const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
let index = 0;

function showNextSlide() {
  index = (index + 1) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// اجرای خودکار هر ۴ ثانیه
setInterval(showNextSlide, 4000);

//اسکرول با درگ موس
const sliders = document.querySelectorAll(".scroll-drag");

sliders.forEach((slider) => {
  slider.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
  });
});
