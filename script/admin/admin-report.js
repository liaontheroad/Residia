/* =========================
   HEADER ACTIONS
========================= */

const downloadReportBtn = document.getElementById("downloadReportBtn");
const printReportBtn = document.getElementById("printReportBtn");

if(downloadReportBtn){
  downloadReportBtn.addEventListener("click", () => {
    showToast("Partner report downloaded successfully.");
  });
}

if(printReportBtn){
  printReportBtn.addEventListener("click", () => {
    window.print();
  });
}


/* =========================
   PERIOD FILTER
========================= */

const periodFilter = document.getElementById("periodFilter");
const bars = document.querySelectorAll(".bar");

const yearlyData = ["45%", "52%", "48%", "66%", "78%", "86%", "64%", "72%"];
const monthlyData = ["30%", "44%", "55%", "38%", "70%", "50%", "62%", "46%"];
const sixMonthData = ["50%", "62%", "74%", "58%", "82%", "90%", "76%", "68%"];

if(periodFilter){
  periodFilter.addEventListener("change", () => {
    let selectedData = yearlyData;

    if(periodFilter.value === "This Month"){
      selectedData = monthlyData;
    }

    if(periodFilter.value === "Last 6 Months"){
      selectedData = sixMonthData;
    }

    bars.forEach((bar, index) => {
      bar.style.height = selectedData[index];
    });

    showToast(`Showing report for ${periodFilter.value}.`);
  });
}


/* =========================
   EXPORT OPTIONS
========================= */

const exportButtons = document.querySelectorAll(".export-options button");

exportButtons.forEach(button => {
  button.addEventListener("click", () => {
    showToast(`${button.textContent.trim()} selected.`);
  });
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