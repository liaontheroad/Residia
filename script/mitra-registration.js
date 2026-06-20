/* ==========================
   NAVBAR SCROLL
========================== */

const mitraTopbar = document.querySelector(".mitra-topbar");

window.addEventListener("scroll", () => {
  if(!mitraTopbar) return;

  if(window.scrollY > 50){
    mitraTopbar.classList.add("scrolled");
  }else{
    mitraTopbar.classList.remove("scrolled");
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
   UPLOAD BOX ACTIVE STATE
========================== */

const uploadBoxes = document.querySelectorAll(".upload-box input");

uploadBoxes.forEach(input => {
  input.addEventListener("change", () => {
    const uploadBox = input.closest(".upload-box");

    if(input.files.length > 0){
      uploadBox.classList.add("uploaded");
    }else{
      uploadBox.classList.remove("uploaded");
    }
  });
});


/* ==========================
   FORM SUBMIT TOAST
========================== */

const mitraForm = document.getElementById("mitraRegistrationForm");

if(mitraForm){
  mitraForm.addEventListener("submit", (e) => {
    e.preventDefault();

    showToast("Registration submitted successfully. Please wait for admin verification.");
  });
}

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