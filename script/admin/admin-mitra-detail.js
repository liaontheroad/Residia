/* =========================
   STATUS ACTIONS
========================= */

const approveButtons = document.querySelectorAll(".approve-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");
const suspendButtons = document.querySelectorAll(".suspend-btn");

const mainStatus = document.querySelector(".status-strip .status");

approveButtons.forEach(button => {
  button.addEventListener("click", () => {
    updateStatus("Verified", "verified");
    showToast("Mitra approved successfully.");
  });
});

rejectButtons.forEach(button => {
  button.addEventListener("click", () => {
    const confirmReject = confirm("Reject this mitra application?");

    if(confirmReject){
      updateStatus("Rejected", "rejected");
      showToast("Mitra application rejected.");
    }
  });
});

suspendButtons.forEach(button => {
  button.addEventListener("click", () => {
    const confirmSuspend = confirm("Suspend this mitra account?");

    if(confirmSuspend){
      updateStatus("Suspended", "suspended");
      showToast("Mitra account suspended.");
    }
  });
});

function updateStatus(text, className){
  if(mainStatus){
    mainStatus.textContent = text;
    mainStatus.className = `status ${className}`;
  }

  const businessStatus = document.querySelector(".info-grid div:last-child strong");

  if(businessStatus){
    businessStatus.textContent = text;
  }
}

/* =========================
   VIEW DOCUMENTS
========================= */

const documentButtons = document.querySelectorAll(".view-doc-btn");

documentButtons.forEach(button => {
  button.addEventListener("click", () => {
    const documentName = button
      .closest(".document-item")
      .querySelector("strong")
      .textContent;

    showToast(`Opening ${documentName} document...`);
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