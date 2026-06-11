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
  const nav = document.querySelector(".mitra-nav");

  if(window.scrollY > 60){
    nav.style.background = "rgba(0, 77, 108, 0.92)";
    nav.style.backdropFilter = "blur(12px)";
  }else{
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
  }
});

/* CHART TOGGLE */

const chartButtons = document.querySelectorAll(".chart-tabs button");
const bars = document.querySelectorAll(".bar");

const revenueHeights = ["55%", "42%", "68%", "48%", "82%", "70%", "92%", "76%"];
const bookingHeights = ["35%", "50%", "46%", "70%", "58%", "85%", "60%", "78%"];

chartButtons.forEach(button => {
  button.addEventListener("click", () => {
    chartButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedData = button.dataset.chart === "revenue"
      ? revenueHeights
      : bookingHeights;

    bars.forEach((bar, index) => {
      bar.style.height = selectedData[index];
    });
  });
});

/* QUICK ACTIONS */

const quickButtons = document.querySelectorAll(".quick-actions button");

quickButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert(`${button.textContent} feature can be connected to backend later.`);
  });
});

/* UNIT STATUS */

const unitButtons = document.querySelectorAll(".unit-map button");

unitButtons.forEach(button => {
  button.addEventListener("click", () => {
    let status = "Occupied";

    if(button.classList.contains("empty")){
      status = "Empty";
    }

    if(button.classList.contains("maintenance")){
      status = "Maintenance";
    }

    alert(`${button.textContent} status: ${status}`);
  });
});