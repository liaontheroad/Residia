// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }

});