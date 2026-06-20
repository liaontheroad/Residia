/* =========================
   SEARCH PAGE
========================= */

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const recentList = document.getElementById("recentList");
const clearRecent = document.getElementById("clearRecent");
const locationBtn = document.getElementById("locationBtn");

const popularButtons = document.querySelectorAll(".popular-tags button");
const recentButtons = document.querySelectorAll(".recent-list button");

/* SEARCH SUBMIT */
if(searchForm){
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
}

/* ADD RECENT SEARCH */
function addRecentSearch(keyword){
  if(!recentList) return;

  const button = document.createElement("button");
  button.textContent = keyword;

  button.addEventListener("click", () => {
    searchInput.value = keyword;
    searchInput.focus();
  });

  recentList.prepend(button);
}

/* POPULAR TAG CLICK */
popularButtons.forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.textContent;
    searchInput.focus();
  });
});

/* RECENT SEARCH CLICK */
recentButtons.forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.textContent;
    searchInput.focus();
  });
});

/* CLEAR RECENT */
if(clearRecent){
  clearRecent.addEventListener("click", () => {
    recentList.innerHTML = "";
  });
}

/* LOCATION */
if(locationBtn){
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
}

/* =========================
   SIDEBAR
========================= */

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

/* =========================
   NAVBAR SCROLL
========================= */

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if(!nav) return;

  if(window.scrollY > 50){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});