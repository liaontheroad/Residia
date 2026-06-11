const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const recentList = document.getElementById("recentList");
const clearRecent = document.getElementById("clearRecent");
const locationBtn = document.getElementById("locationBtn");

const popularButtons = document.querySelectorAll(".popular-tags button");
const recentButtons = document.querySelectorAll(".recent-list button");

searchForm.addEventListener("submit", function(e){
  e.preventDefault();

  const keyword = searchInput.value.trim();

  if(keyword === ""){
    alert("Please enter a location, city, or property name.");
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
        alert("Location enabled. Nearby residences can be shown later from backend.");
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

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.style.boxShadow = "0 18px 40px rgba(0,0,0,.14)";
  } else {
    nav.style.boxShadow = "none";
  }
});