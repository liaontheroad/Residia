/* ==========================
   NAVBAR SCROLL
========================== */

const historyTopbar = document.querySelector(".history-topbar");

window.addEventListener("scroll", () => {
  if(!historyTopbar) return;

  if(window.scrollY > 50){
    historyTopbar.classList.add("scrolled");
  }else{
    historyTopbar.classList.remove("scrolled");
  }
});


/* ==========================
   SIDEBAR
========================== */

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


/* ==========================
   FILTER TRANSACTIONS
========================== */

const filterButtons = document.querySelectorAll(".filter-tabs button");
const transactionCards = document.querySelectorAll(".transaction-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    transactionCards.forEach(card => {
      if(filter === "all"){
        card.classList.remove("hidden");
        return;
      }

      const status = card.dataset.status || "";

      if(status === filter){
        card.classList.remove("hidden");
      }else{
        card.classList.add("hidden");
      }
    });

  });
});


/* ==========================
   SORT TRANSACTIONS
========================== */

const sortSelect = document.getElementById("sortSelect");
const transactionList = document.querySelector(".transaction-list");

if(sortSelect && transactionList){
  sortSelect.addEventListener("change", () => {
    const cards = Array.from(document.querySelectorAll(".transaction-card"));
    const sortValue = sortSelect.value;

    if(sortValue === "termahal"){
      cards.sort((a,b) => {
        return Number(b.dataset.price) - Number(a.dataset.price);
      });
    }

    if(sortValue === "termurah"){
      cards.sort((a,b) => {
        return Number(a.dataset.price) - Number(b.dataset.price);
      });
    }

    if(sortValue === "terbaru"){
      cards.sort((a,b) => {
        return 0;
      });
    }

    cards.forEach(card => {
      transactionList.appendChild(card);
    });
  });
}


/* ==========================
   BUTTON HOVER
========================== */

const actionButtons = document.querySelectorAll(".action-buttons button");

actionButtons.forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});


/* ==========================
   FADE IN ANIMATION
========================== */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold:0.1
});

transactionCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all .6s ease";

  observer.observe(card);
});


/* ==========================
   PAGE LOAD
========================== */

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});