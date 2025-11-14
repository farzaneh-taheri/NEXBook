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
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.8; // سرعت حرکت
    slider.scrollLeft = scrollLeft - walk;
  });

  // جلوگیری از باز شدن لینک هنگام درگ
  slider.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (isDown) e.preventDefault();
    });
  });
});
