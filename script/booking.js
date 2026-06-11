const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarOpen = document.getElementById("sidebarOpen");
const sidebarClose = document.getElementById("sidebarClose");

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
});

sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

function closeSidebar(){
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
}

/* NAV SCROLL */

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if(window.scrollY > 60){
    nav.style.background = "rgba(0, 77, 108, 0.92)";
    nav.style.backdropFilter = "blur(12px)";
  } else {
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
  }
});

/* GALLERY HOVER */

const galleryImages = document.querySelectorAll(".gallery-side img");

galleryImages.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = ".4s";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

/* COUNTERS */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const minusBtn = counter.querySelector(".minus");
  const plusBtn = counter.querySelector(".plus");
  const number = counter.querySelector("span");

  minusBtn.addEventListener("click", () => {
    let value = parseInt(number.textContent);

    if(value > 0){
      value--;
      number.textContent = value;
    }
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(number.textContent);
    value++;
    number.textContent = value;
  });
});