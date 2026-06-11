/* =========================
   SIDEBAR
========================= */

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarOpen = document.getElementById("sidebarOpen");
const sidebarClose = document.getElementById("sidebarClose");

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.add("show");
  sidebarOverlay.classList.add("show");
});

sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

function closeSidebar(){
  sidebar.classList.remove("show");
  sidebarOverlay.classList.remove("show");
}


/* =========================
   FILTER + SEARCH
========================= */

const filterButtons = document.querySelectorAll(".filter-tabs button");
const searchInput = document.getElementById("searchInput");
const unitCards = document.querySelectorAll(".unit-card");

let activeFilter = "all";

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    activeFilter = button.dataset.filter;
    filterUnits();
  });
});

searchInput.addEventListener("input", filterUnits);

function filterUnits(){
  const keyword = searchInput.value.toLowerCase();

  unitCards.forEach(card => {
    const status = card.dataset.status;
    const name = card.dataset.name;

    const matchFilter = activeFilter === "all" || status === activeFilter;
    const matchSearch = name.includes(keyword);

    card.style.display = matchFilter && matchSearch ? "block" : "none";
  });
}


/* =========================
   DELETE UNIT
========================= */

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".unit-card");
    const unitCode = card.querySelector(".unit-code").textContent;

    const confirmDelete = confirm(`Delete unit ${unitCode}?`);

    if(confirmDelete){
      card.remove();
      showToast(`${unitCode} deleted.`);
    }
  });
});


/* =========================
   ADD UNIT DEMO
========================= */

const addUnitBtn = document.getElementById("addUnitBtn");

addUnitBtn.addEventListener("click", () => {
  alert("Add Unit page/form can be created next.");
});


/* =========================
   EXPORT
========================= */

const exportBtn = document.getElementById("exportBtn");

exportBtn.addEventListener("click", () => {
  alert("Unit report export can be connected to backend later.");
});


/* =========================
   TOAST
========================= */

function showToast(message){
  let toast = document.querySelector(".toast");

  if(toast){
    toast.remove();
  }

  toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 50);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}