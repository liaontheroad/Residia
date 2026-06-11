const filterButtons = document.querySelectorAll(".filter-tabs button");
const transactionList = document.querySelector(".transaction-list");
const transactionCards = Array.from(document.querySelectorAll(".transaction-card"));
const sortSelect = document.getElementById("sortSelect");

/* FILTER STATUS */

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    transactionCards.forEach(card => {
      const status = card.dataset.status;

      if(filter === "all" || filter === status){
        card.style.display = "grid";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* SORT TRANSAKSI */

sortSelect.addEventListener("change", () => {
  const value = sortSelect.value;

  let sortedCards = [...transactionCards];

  if(value === "termahal"){
    sortedCards.sort((a, b) => {
      return Number(b.dataset.price) - Number(a.dataset.price);
    });
  }

  if(value === "termurah"){
    sortedCards.sort((a, b) => {
      return Number(a.dataset.price) - Number(b.dataset.price);
    });
  }

  if(value === "terbaru"){
    sortedCards = [...transactionCards];
  }

  sortedCards.forEach(card => {
    transactionList.appendChild(card);
  });
});

/* DETAIL BUTTON */

const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "azure-details.html";
  });
});

/* INVOICE BUTTON DEMO */

const invoiceButtons = document.querySelectorAll(".action-buttons button:not(.detail-btn)");

invoiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(button.textContent.includes("Invoice")){
      alert("Invoice feature can be connected to backend later.");
    }
  });
});

/* CARD HOVER EFFECT */

transactionCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 18px 45px rgba(0, 77, 108, 0.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 8px 25px rgba(0,0,0,.05)";
  });
});