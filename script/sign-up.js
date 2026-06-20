/* ==========================
   SIGN UP VALIDATION
========================== */

const signUpForm = document.getElementById("signUpForm");

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const agreementInput = document.getElementById("agreement");
const agreementError = document.getElementById("agreementError");

if(signUpForm){
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    let isValid = true;

    if(firstName === ""){
      showError(firstNameInput, "First name is required.");
      isValid = false;
    }

    if(lastName === ""){
      showError(lastNameInput, "Last name is required.");
      isValid = false;
    }

    if(email === ""){
      showError(emailInput, "Email is required.");
      isValid = false;
    }else if(!isValidEmail(email)){
      showError(emailInput, "Please enter a valid email.");
      isValid = false;
    }

    if(phone === ""){
      showError(phoneInput, "Phone number is required.");
      isValid = false;
    }else if(phone.length < 10){
      showError(phoneInput, "Phone number is too short.");
      isValid = false;
    }

    if(password === ""){
      showError(passwordInput, "Password is required.");
      isValid = false;
    }else if(password.length < 6){
      showError(passwordInput, "Password must be at least 6 characters.");
      isValid = false;
    }

    if(confirmPassword === ""){
      showError(confirmPasswordInput, "Please confirm your password.");
      isValid = false;
    }else if(confirmPassword !== password){
      showError(confirmPasswordInput, "Passwords do not match.");
      isValid = false;
    }

    if(!agreementInput.checked){
      agreementError.textContent = "You need to agree before creating an account.";
      isValid = false;
    }

    if(!isValid) return;

    showToast("Account created successfully. Redirecting to login...");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1400);
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

  if(agreementError){
    agreementError.textContent = "";
  }
}

function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ==========================
   INPUT CLEAN ERROR
========================== */

const inputs = [
  firstNameInput,
  lastNameInput,
  emailInput,
  phoneInput,
  passwordInput,
  confirmPasswordInput
];

inputs.forEach(input => {
  if(!input) return;

  input.addEventListener("input", () => {
    const formGroup = input.closest(".form-group");
    const errorText = formGroup.querySelector("small");

    formGroup.classList.remove("error");

    if(errorText){
      errorText.textContent = "";
    }
  });
});

if(agreementInput){
  agreementInput.addEventListener("change", () => {
    if(agreementInput.checked && agreementError){
      agreementError.textContent = "";
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