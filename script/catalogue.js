/* ================= NAVBAR SHADOW ================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});


/* ================= CATALOGUE FILTER ================= */

const districtInputs = document.querySelectorAll('.filter-group input[type="checkbox"]');
const propertyCards = document.querySelectorAll(".property-card");

districtInputs.forEach(input => {
  input.addEventListener("change", filterCatalogue);
});

function filterCatalogue(){
  const checkedDistricts = Array.from(districtInputs)
    .filter(input => input.checked)
    .map(input => input.parentElement.textContent.trim().toLowerCase());

  propertyCards.forEach(card => {
    const location = card.querySelector(".property-info p").textContent.toLowerCase();

    if(checkedDistricts.length === 0){
      card.style.display = "block";
      return;
    }

    const isMatch = checkedDistricts.some(district => {
      return location.includes(district);
    });

    card.style.display = isMatch ? "block" : "none";
  });
}

filterCatalogue();


/* ================= AMENITIES TAGS ================= */

const amenityTags = document.querySelectorAll(".tags span");

amenityTags.forEach(tag => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("active");
  });
});

/* ================= FAVOURITE BUTTON ================= */

const favoriteButtons = document.querySelectorAll(".property-image button");

favoriteButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    button.classList.toggle("active");

    if(button.classList.contains("active")){
      button.textContent = "♥";
    }else{
      button.textContent = "♡";
    }
  });
});