const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// نمایش خودکار هر 3 ثانیه
setInterval(nextSlide, 3000);

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

//فعال و غیر فعال شدن منوی همبرگری در گوشی
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // باز و بسته کردن منو
  hamburger.classList.toggle("active"); // تغییر شکل همبرگر به ضربدر
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active"); // فقط منو را ببند
  hamburger.classList.remove("active"); // همبرگر به حالت اصلی برگردد
});
