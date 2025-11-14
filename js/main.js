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
const scrollContainers = document.querySelectorAll(".scroll-drag");

scrollContainers.forEach((container) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  // جلوگیری از رفتار پیش‌فرض درگ عکس‌ها
  container.querySelectorAll("img").forEach((img) => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
  });

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    container.style.cursor = "grabbing";
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault(); // جلوگیری از انتخاب متن
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.3; // میزان جابه‌جایی
    container.scrollLeft = scrollLeft - walk;
  });
});
