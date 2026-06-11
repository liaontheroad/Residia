// navbar shadow on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

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