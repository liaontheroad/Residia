const agreeTerms = document.getElementById("agreeTerms");
const payBtn = document.getElementById("payBtn");
const payNote = document.getElementById("payNote");
const successModal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const expiryDate = document.getElementById("expiryDate");

const previewCardNumber = document.getElementById("previewCardNumber");
const previewCardName = document.getElementById("previewCardName");
const previewExpiry = document.getElementById("previewExpiry");

const methods = document.querySelectorAll(".method");

agreeTerms.addEventListener("change", () => {
  payBtn.disabled = !agreeTerms.checked;

  if(agreeTerms.checked){
    payNote.textContent = "Your payment is encrypted and securely processed.";
  } else {
    payNote.textContent = "Please agree to the terms & conditions to proceed.";
  }
});

methods.forEach(method => {
  method.addEventListener("click", () => {
    methods.forEach(btn => btn.classList.remove("active"));
    method.classList.add("active");
  });
});

cardNumber.addEventListener("input", () => {
  let value = cardNumber.value.replace(/\D/g, "").slice(0, 16);
  value = value.replace(/(.{4})/g, "$1 ").trim();
  cardNumber.value = value;

  previewCardNumber.textContent = value || "•••• •••• •••• ••••";
});

cardName.addEventListener("input", () => {
  previewCardName.textContent = cardName.value.toUpperCase() || "YOUR NAME";
});

expiryDate.addEventListener("input", () => {
  let value = expiryDate.value.replace(/\D/g, "").slice(0, 4);

  if(value.length >= 3){
    value = value.slice(0, 2) + "/" + value.slice(2);
  }

  expiryDate.value = value;
  previewExpiry.textContent = value || "MM/YY";
});

payBtn.addEventListener("click", () => {
  successModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  successModal.classList.remove("active");
});

successModal.addEventListener("click", (e) => {
  if(e.target === successModal){
    successModal.classList.remove("active");
  }
});