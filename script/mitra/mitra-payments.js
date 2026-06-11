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
const paymentCards = document.querySelectorAll(".payment-card");

let activeFilter = "all";

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    activeFilter = button.dataset.filter;
    filterPayments();
  });
});

searchInput.addEventListener("input", filterPayments);

function filterPayments(){
  const keyword = searchInput.value.toLowerCase();

  paymentCards.forEach(card => {
    const status = card.dataset.status;
    const name = card.dataset.name;

    const matchFilter =
      activeFilter === "all" || status === activeFilter;

    const matchSearch =
      name.includes(keyword);

    card.style.display =
      matchFilter && matchSearch ? "block" : "none";
  });
}


/* =========================
   PAYMENT ACTIONS
========================= */

const detailButtons = document.querySelectorAll(".detail-btn");
const invoiceButtons = document.querySelectorAll(".invoice-btn");
const approveButtons = document.querySelectorAll(".approve-btn");

detailButtons.forEach(button => {
  button.addEventListener("click", () => {
    showToast("Payment detail page can be created later.");
  });
});

invoiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    showToast("Invoice downloaded successfully.");
  });
});

approveButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".payment-card");
    const tenantName = card.querySelector("h2").textContent;

    showToast(`Reminder sent to ${tenantName}.`);
  });
});


/* =========================
   HERO BUTTONS
========================= */

const generateInvoiceBtn = document.getElementById("generateInvoiceBtn");
const exportBtn = document.getElementById("exportBtn");

generateInvoiceBtn.addEventListener("click", () => {
  showToast("Generate invoice form can be created next.");
});

exportBtn.addEventListener("click", () => {
  showToast("Payment report exported.");
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