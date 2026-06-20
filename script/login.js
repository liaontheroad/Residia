/* ==========================
   ROLE TABS
========================== */

const roleButtons = document.querySelectorAll(".role-tabs button");
const selectedRole = document.getElementById("selectedRole");
const roleText = document.getElementById("roleText");

roleButtons.forEach(button => {
  button.addEventListener("click", () => {
    roleButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const role = button.dataset.role;
    selectedRole.value = role;

    roleText.textContent = role.charAt(0).toUpperCase() + role.slice(1);
  });
});


/* ==========================
   LOGIN VALIDATION
========================== */

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

if(loginForm){
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const role = selectedRole.value;

    let isValid = true;

    if(email === ""){
      showError(emailInput, "Email is required.");
      isValid = false;
    }else if(!isValidEmail(email)){
      showError(emailInput, "Please enter a valid email.");
      isValid = false;
    }

    if(password === ""){
      showError(passwordInput, "Password is required.");
      isValid = false;
    }else if(password.length < 6){
      showError(passwordInput, "Password must be at least 6 characters.");
      isValid = false;
    }

    if(!isValid) return;

    if(role === "admin"){
      window.location.href = "/admin/admin-dashboard.html";
    }else if(role === "mitra"){
      window.location.href = "/mitra/mitra-dashboard.html";
    }else{
      window.location.href = "../index.html";
    }
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

[emailInput, passwordInput].forEach(input => {
  if(!input) return;

  input.addEventListener("input", () => {
    const formGroup = input.closest(".form-group");

    formGroup.classList.remove("error");

    const errorText = formGroup.querySelector("small");

    if(errorText){
      errorText.textContent = "";
    }
  });
});