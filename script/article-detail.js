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

// nav background on scroll
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

// CTA demo
const cta = document.querySelector(".cta-box a");

cta.addEventListener("click", () => {
  console.log("Redirecting to catalogue page...");
});