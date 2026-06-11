/* =========================
   APPROVE / REJECT
========================= */

const approveButtons = document.querySelectorAll(".approve-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");
const exportBtn = document.getElementById("exportBtn");

approveButtons.forEach(button => {
  button.addEventListener("click", () => {
    const row = button.closest(".mitra-row");
    const status = row.querySelector(".status");
    const mitraName = row.querySelector("h3").textContent;

    status.textContent = "Verified";
    status.className = "status verified";

    showToast(`${mitraName} approved successfully.`);
  });
});

rejectButtons.forEach(button => {
  button.addEventListener("click", () => {
    const row = button.closest(".mitra-row");
    const status = row.querySelector(".status");
    const mitraName = row.querySelector("h3").textContent;

    const confirmReject = confirm(`Reject ${mitraName}?`);

    if(confirmReject){
      status.textContent = "Rejected";
      status.className = "status rejected";

      showToast(`${mitraName} rejected.`);
    }
  });
});

if(exportBtn){
  exportBtn.addEventListener("click", () => {
    showToast("Admin report exported successfully.");
  });
}

/* =========================
   QUICK ACTIONS
========================= */

document.querySelectorAll(".quick-actions button").forEach(button => {
  button.addEventListener("click", () => {
    showToast(`${button.textContent.trim()} executed.`);
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