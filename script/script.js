/* =========================
   INFO CARD ANIMATION
========================= */

const cards = document.querySelectorAll(".info-card");

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
});

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});


/* =========================
   SIDEBAR
========================= */

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarOpen = document.getElementById("sidebarOpen");
const sidebarClose = document.getElementById("sidebarClose");

if (sidebarOpen && sidebar && sidebarOverlay) {
  sidebarOpen.addEventListener("click", () => {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
  });
}

if (sidebarClose) {
  sidebarClose.addEventListener("click", closeSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}

function closeSidebar() {
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
}


/* =========================
   USER MODE
========================= */

document.body.classList.add("is-guest");

function setLoggedInUser(name, email) {
  document.body.classList.remove("is-guest");
  document.body.classList.add("is-logged-in");

  const sidebarUsername = document.getElementById("sidebarUsername");
  const sidebarEmail = document.getElementById("sidebarEmail");

  if (sidebarUsername) sidebarUsername.textContent = name;
  if (sidebarEmail) sidebarEmail.textContent = email;
}


/* =========================
   HERO SLIDER + INDICATOR
========================= */

const heroImage = document.getElementById("heroImage");
const indicators = document.querySelectorAll(".indicator");

const heroImages = [
  "../src/hero-index.png",
  "../src/hero-index-2.jpg",
  "../src/hero-index-3.jpg"
];

let currentImage = 0;

function changeHeroImage(index) {
  if (!heroImage) return;

  currentImage = index;

  heroImage.classList.add("fade-out");

  setTimeout(() => {
    heroImage.src = heroImages[currentImage];

    indicators.forEach(indicator => {
      indicator.classList.remove("active");
    });

    if (indicators[currentImage]) {
      indicators[currentImage].classList.add("active");
    }

    heroImage.classList.remove("fade-out");
  }, 600);
}

if (heroImage) {
  setInterval(() => {
    let nextImage = currentImage + 1;

    if (nextImage >= heroImages.length) {
      nextImage = 0;
    }

    changeHeroImage(nextImage);
  }, 5000);
}

indicators.forEach(indicator => {
  indicator.addEventListener("click", () => {
    const slideIndex = Number(indicator.dataset.slide);
    changeHeroImage(slideIndex);
  });
});