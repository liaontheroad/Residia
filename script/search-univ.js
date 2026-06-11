const searchForm = document.getElementById("searchUnivForm");
const searchInput = document.getElementById("searchUnivInput");
const recentList = document.getElementById("recentList");
const clearRecent = document.getElementById("clearRecent");
const locationBtn = document.getElementById("locationBtn");

const popularButtons = document.querySelectorAll(".popular-tags button");
const recentButtons = document.querySelectorAll(".recent-list button");
const univCards = document.querySelectorAll(".univ-card");

searchForm.addEventListener("submit", function(e){
  e.preventDefault();

  const keyword = searchInput.value.trim();

  if(keyword === ""){
    alert("Please enter a university or area name.");
    return;
  }

  addRecentSearch(keyword);
  window.location.href = "catalogue.html";
});

function addRecentSearch(keyword){
  const button = document.createElement("button");
  button.textContent = keyword;

  button.addEventListener("click", () => {
    searchInput.value = keyword;
    searchInput.focus();
  });

  recentList.prepend(button);
}

popularButtons.forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.textContent;
    searchInput.focus();
  });
});

recentButtons.forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.textContent;
    searchInput.focus();
  });
});

clearRecent.addEventListener("click", () => {
  recentList.innerHTML = "";
});

locationBtn.addEventListener("click", () => {
  if(navigator.geolocation){
    locationBtn.textContent = "Detecting...";

    navigator.geolocation.getCurrentPosition(
      () => {
        locationBtn.textContent = "Location Enabled";
        alert("Location enabled. Nearby campus residences can be shown later from backend.");
      },
      () => {
        locationBtn.textContent = "Enable Location";
        alert("Location permission denied.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

univCards.forEach(card => {
  card.addEventListener("click", () => {
    const univName = card.querySelector("h3").textContent;
    searchInput.value = univName;
    addRecentSearch(univName);
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.style.boxShadow = "0 18px 40px rgba(0,0,0,.14)";
  } else {
    nav.style.boxShadow = "none";
  }
});