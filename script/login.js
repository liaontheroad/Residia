const roleButtons = document.querySelectorAll(".role-tabs button");
const roleText = document.getElementById("roleText");
const selectedRole = document.getElementById("selectedRole");
const quickLinks = document.querySelectorAll("[data-role-link]");

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

roleButtons.forEach(button => {
  button.addEventListener("click", () => {
    setRole(button.dataset.role);
  });
});

quickLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    setRole(link.dataset.roleLink);
  });
});

function setRole(role){
  roleButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.role === role);
  });

  selectedRole.value = role;

  const label = role.charAt(0).toUpperCase() + role.slice(1);
  roleText.textContent = label;

  if(role === "admin"){
    email.placeholder = "admin@residia.com";
  }else if(role === "mitra"){
    email.placeholder = "mitra@residia.com";
  }else{
    email.placeholder = "you@email.com";
  }
}

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  let valid = true;

  valid = validateField(email, "Email wajib diisi") && valid;
  valid = validateField(password, "Password wajib diisi") && valid;

  if(email.value && !email.value.includes("@")){
    setError(email, "Format email tidak valid");
    valid = false;
  }

  if(valid){
    const role = selectedRole.value;

    if(role === "admin"){
      window.location.href = "/page/admin/admin-dashboard.html";
    }else if(role === "mitra"){
      window.location.href = "/page/mitra/mitra-dashboard.html";
    }else{
      window.location.href = "index.html";
    }
  }
});

function validateField(input, message){
  if(input.value.trim() === ""){
    setError(input, message);
    return false;
  }

  clearError(input);
  return true;
}

function setError(input, message){
  const group = input.closest(".form-group");
  const small = group.querySelector("small");

  group.classList.add("error");
  small.textContent = message;
}

function clearError(input){
  const group = input.closest(".form-group");
  const small = group.querySelector("small");

  group.classList.remove("error");
  small.textContent = "";
}