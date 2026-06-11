/* =========================
   SEARCH + FILTER
========================= */

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-tabs button");
const mitraCards = document.querySelectorAll(".mitra-card");

let activeFilter = "all";

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
    activeFilter = button.dataset.filter;

    filterMitra();
  });
});

if(searchInput){
  searchInput.addEventListener("input", filterMitra);
}

function filterMitra(){
  const keyword = searchInput.value.toLowerCase();

  mitraCards.forEach(card => {
    const status = card.dataset.status;
    const name = card.dataset.name;

    const matchSearch = name.includes(keyword);
    const matchFilter = activeFilter === "all" || status === activeFilter;

    card.style.display = matchSearch && matchFilter ? "block" : "none";
  });
}

/* =========================
   APPROVE
========================= */

const approveButtons = document.querySelectorAll(".approve-btn");

approveButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".mitra-card");
    const status = card.querySelector(".status");
    const name = card.querySelector("h2").textContent;

    status.textContent = "Verified";
    status.className = "status verified";

    card.dataset.status = "verified";

    showToast(`${name} approved successfully.`);
  });
});

/* =========================
   REJECT
========================= */

const rejectButtons = document.querySelectorAll(".reject-btn");

rejectButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".mitra-card");
    const status = card.querySelector(".status");
    const name = card.querySelector("h2").textContent;

    const confirmReject = confirm(`Reject ${name}?`);

    if(confirmReject){
      status.textContent = "Rejected";
      status.className = "status rejected";

      card.dataset.status = "rejected";

      showToast(`${name} rejected.`);
    }
  });
});

/* =========================
   SUSPEND
========================= */

const suspendButtons = document.querySelectorAll(".suspend-btn");

suspendButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".mitra-card");
    const status = card.querySelector(".status");
    const name = card.querySelector("h2").textContent;

    const confirmSuspend = confirm(`Suspend ${name}?`);

    if(confirmSuspend){
      status.textContent = "Suspended";
      status.className = "status suspended";

      card.dataset.status = "suspended";

      showToast(`${name} suspended.`);
    }
  });
});

/* =========================
   HEADER BUTTONS
========================= */

const pendingBtn = document.getElementById("pendingBtn");
const exportBtn = document.getElementById("exportBtn");

if(pendingBtn){
  pendingBtn.addEventListener("click", () => {
    activeFilter = "pending";

    filterButtons.forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.dataset.filter === "pending"
      );
    });

    filterMitra();
    showToast("Showing pending mitra.");
  });
}

if(exportBtn){
  exportBtn.addEventListener("click", () => {
    showToast("Mitra data exported successfully.");
  });
}

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