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
const bookingCards = document.querySelectorAll(".booking-card");

let activeFilter = "all";

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    activeFilter = button.dataset.filter;
    filterBookings();
  });
});

searchInput.addEventListener("input", filterBookings);

function filterBookings(){
  const keyword = searchInput.value.toLowerCase();

  bookingCards.forEach(card => {
    const status = card.dataset.status;
    const name = card.dataset.name;

    const matchFilter = activeFilter === "all" || status === activeFilter;
    const matchSearch = name.includes(keyword);

    card.style.display = matchFilter && matchSearch ? "block" : "none";
  });
}


/* =========================
   BOOKING ACTIONS
========================= */

const detailButtons = document.querySelectorAll(".detail-btn");
const approveButtons = document.querySelectorAll(".approve-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");
const invoiceButtons = document.querySelectorAll(".invoice-btn");

detailButtons.forEach(button => {
  button.addEventListener("click", () => {
    showToast("Booking detail page can be created later.");
  });
});

approveButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".booking-card");
    const status = card.querySelector(".status");

    status.textContent = "Confirmed";
    status.className = "status confirmed";
    card.dataset.status = "confirmed";

    showToast("Booking approved successfully.");
  });
});

rejectButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".booking-card");
    const status = card.querySelector(".status");

    const confirmReject = confirm("Reject this booking request?");

    if(confirmReject){
      status.textContent = "Rejected";
      status.className = "status rejected";
      card.dataset.status = "rejected";

      showToast("Booking request rejected.");
    }
  });
});

invoiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    showToast("Invoice created for this booking.");
  });
});


/* =========================
   HERO BUTTONS
========================= */

const checkInBtn = document.getElementById("checkInBtn");
const exportBtn = document.getElementById("exportBtn");

checkInBtn.addEventListener("click", () => {
  activeFilter = "checkin";

  filterButtons.forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.filter === "checkin"
    );
  });

  filterBookings();
  showToast("Showing today's check-ins.");
});

exportBtn.addEventListener("click", () => {
  showToast("Booking report exported.");
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