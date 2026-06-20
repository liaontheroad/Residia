// navbar shadow on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});
/* ================= SIDEBAR ================= */

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarOpen = document.getElementById("sidebarOpen");
const sidebarClose = document.getElementById("sidebarClose");

if(sidebarOpen && sidebar && sidebarOverlay){
  sidebarOpen.addEventListener("click", () => {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
  });
}

if(sidebarClose){
  sidebarClose.addEventListener("click", closeSidebar);
}

if(sidebarOverlay){
  sidebarOverlay.addEventListener("click", closeSidebar);
}

function closeSidebar(){
  if(sidebar && sidebarOverlay){
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  }
}
// smooth scroll for schedule viewing button
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});

/* ================= GALLERY SWITCH ================= */

const mainGalleryImage = document.getElementById("mainGalleryImage");
const galleryThumbs = document.querySelectorAll(".gallery-thumb");

galleryThumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const newImage = thumb.getAttribute("data-img");

    mainGalleryImage.src = newImage;

    galleryThumbs.forEach(item => {
      item.classList.remove("active");
    });

    thumb.classList.add("active");
  });
});
// favorite/save button alert
const saveButtons = document.querySelectorAll(".property-image button");

saveButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("saved");

    if(button.classList.contains("saved")){
      button.textContent = "♥";
    } else {
      button.textContent = "♡";
    }
  });
});

// booking form simple validation
const bookingForm = document.querySelector(".booking-form");

if(bookingForm){
  bookingForm.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Your viewing appointment request has been submitted!");
    bookingForm.reset();
  });
}