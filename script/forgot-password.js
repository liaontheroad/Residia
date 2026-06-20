/* ==========================
   FORGOT PASSWORD VALIDATION
========================== */

const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const emailInput = document.getElementById("email");

if(forgotPasswordForm){
  forgotPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

    const email = emailInput.value.trim();
    let isValid = true;

    if(email === ""){
      showError(emailInput, "Email is required.");
      isValid = false;
    }else if(!isValidEmail(email)){
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    if(!isValid) return;

    showToast("Reset link sent successfully. Please check your email.");
    forgotPasswordForm.reset();
  });
}


/* ==========================
   ERROR HANDLING
========================== */

function showError(input, message){
  const formGroup = input.closest(".form-group");
  const errorText = formGroup.querySelector("small");

  formGroup.classList.add("error");
  errorText.textContent = message;
}

function clearErrors(){
  const formGroups = document.querySelectorAll(".form-group");

  formGroups.forEach(group => {
    group.classList.remove("error");

    const errorText = group.querySelector("small");

    if(errorText){
      errorText.textContent = "";
    }
  });
}

function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ==========================
   INPUT CLEAN ERROR
========================== */

if(emailInput){
  emailInput.addEventListener("input", () => {
    const formGroup = emailInput.closest(".form-group");
    const errorText = formGroup.querySelector("small");

    formGroup.classList.remove("error");

    if(errorText){
      errorText.textContent = "";
    }
  });
}


/* ==========================
   TOAST
========================== */

function showToast(message){
  const oldToast = document.querySelector(".toast");

  if(oldToast){
    oldToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}