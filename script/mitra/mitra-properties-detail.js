/* =========================
   SIDEBAR
========================= */

const sidebar = document.getElementById("sidebar");
const sidebarOpen = document.getElementById("sidebarOpen");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.add("show");
  sidebarOverlay.classList.add("show");
});

sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

function closeSidebar(){
  sidebar.classList.remove("show");
  sidebarOverlay.classList.remove("show");
}


/* =========================
   SAVE BUTTONS
========================= */

const saveTopBtn = document.getElementById("saveTopBtn");
const propertyForm = document.getElementById("propertyDetailForm");

saveTopBtn.addEventListener("click", () => {
  saveProperty();
});

propertyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  saveProperty();
});

function saveProperty(){
  saveTopBtn.textContent = "Saving...";

  setTimeout(() => {
    saveTopBtn.textContent = "Saved ✓";

    showToast(
      "Property information successfully updated."
    );

    setTimeout(() => {
      saveTopBtn.textContent = "Save Changes";
    }, 2000);

  }, 800);
}


/* =========================
   PREVIEW BUTTON
========================= */

const previewBtn = document.getElementById("previewBtn");

previewBtn.addEventListener("click", () => {

  const confirmPreview = confirm(
    "Open public property page?"
  );

  if(confirmPreview){

    window.location.href =
      "../azure-details.html";

  }

});


/* =========================
   EDIT OVERVIEW
========================= */

const editOverviewBtn =
  document.querySelector(".property-overview .text-btn");

if(editOverviewBtn){

  editOverviewBtn.addEventListener("click", () => {

    const overviewParagraph =
      document.querySelector(".property-overview p");

    const currentText =
      overviewParagraph.textContent;

    const newText =
      prompt(
        "Update property overview:",
        currentText
      );

    if(newText && newText.trim() !== ""){

      overviewParagraph.textContent =
        newText;

      showToast(
        "Overview updated."
      );
    }

  });

}


/* =========================
   ADD UNIT
========================= */

const addUnitBtn =
  document.querySelector(".unit-grid")
  ?.parentElement
  ?.querySelector(".text-btn");

if(addUnitBtn){

  addUnitBtn.addEventListener("click", () => {

    const unitName =
      prompt("Unit name?");

    if(!unitName) return;

    const button =
      document.createElement("button");

    button.textContent =
      unitName;

    button.className =
      "available";

    button.addEventListener(
      "click",
      unitStatusToggle
    );

    document
      .querySelector(".unit-grid")
      .appendChild(button);

    showToast(
      `${unitName} added.`
    );

  });

}


/* =========================
   UNIT STATUS TOGGLE
========================= */

document
  .querySelectorAll(".unit-grid button")
  .forEach(button => {

    button.addEventListener(
      "click",
      unitStatusToggle
    );

});

function unitStatusToggle(){

  if(this.classList.contains("available")){

    this.className =
      "occupied";

  }
  else if(this.classList.contains("occupied")){

    this.className =
      "maintenance";

  }
  else{

    this.className =
      "available";

  }

}


/* =========================
   GALLERY UPLOAD
========================= */

const uploadBtn =
  document.querySelector(".gallery-grid")
  ?.parentElement
  ?.querySelector(".text-btn");

if(uploadBtn){

  uploadBtn.addEventListener("click", () => {

    const input =
      document.createElement("input");

    input.type = "file";
    input.accept = "image/*";

    input.click();

    input.addEventListener("change", () => {

      const file =
        input.files[0];

      if(!file) return;

      const reader =
        new FileReader();

      reader.onload = function(e){

        const img =
          document.createElement("img");

        img.src =
          e.target.result;

        document
          .querySelector(".gallery-grid")
          .appendChild(img);

        showToast(
          "Image uploaded."
        );

      };

      reader.readAsDataURL(file);

    });

  });

}


/* =========================
   STATUS SELECT
========================= */

const statusSelect =
  document.querySelectorAll("select")[1];

const statusCard =
  document.querySelector(".hero-status-card h3");

if(statusSelect){

  statusSelect.addEventListener(
    "change",
    () => {

      statusCard.textContent =
        `${statusSelect.value} Listing`;

    }
  );

}


/* =========================
   UNSAVED CHANGES WARNING
========================= */

let hasChanges = false;

document
  .querySelectorAll(
    "input, textarea, select"
  )
  .forEach(field => {

    field.addEventListener(
      "change",
      () => {
        hasChanges = true;
      }
    );

});

window.addEventListener(
  "beforeunload",
  (e) => {

    if(hasChanges){

      e.preventDefault();
      e.returnValue = "";

    }

  }
);


/* =========================
   TOAST SYSTEM
========================= */

function showToast(message){

  let toast =
    document.querySelector(".toast");

  if(toast){
    toast.remove();
  }

  toast =
    document.createElement("div");

  toast.className =
    "toast";

  toast.textContent =
    message;

  document.body.appendChild(
    toast
  );

  setTimeout(() => {
    toast.classList.add("show");
  }, 50);

  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 2500);

}


/* =========================
   AUTO CALCULATE OCCUPANCY
========================= */

function updateOccupancy(){

  const totalUnits =
    document.querySelectorAll(
      ".unit-grid button"
    ).length;

  const occupiedUnits =
    document.querySelectorAll(
      ".unit-grid .occupied"
    ).length;

  const percentage =
    Math.round(
      (occupiedUnits / totalUnits) * 100
    );

  const occupancyCard =
    document.querySelector(
      ".overview-stats strong"
    );

  if(occupancyCard){

    occupancyCard.textContent =
      `${percentage}%`;

  }

}

document
  .querySelectorAll(
    ".unit-grid button"
  )
  .forEach(btn => {

    btn.addEventListener(
      "click",
      updateOccupancy
    );

});

updateOccupancy();