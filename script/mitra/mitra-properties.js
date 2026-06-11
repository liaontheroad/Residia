const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarOpen = document.getElementById("sidebarOpen");
const sidebarClose = document.getElementById("sidebarClose");

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



const filterButtons = document.querySelectorAll(".filter-tabs button");
const searchInput = document.getElementById("searchInput");

let activeFilter = "all";

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    activeFilter = button.dataset.filter;
    filterProperties();
  });
});

searchInput.addEventListener("input", filterProperties);

function filterProperties(){
  const keyword = searchInput.value.toLowerCase();

  document.querySelectorAll(".property-card").forEach(card => {
    const status = card.dataset.status;
    const name = card.dataset.name;

    const matchFilter = activeFilter === "all" || status === activeFilter;
    const matchSearch = name.includes(keyword);

    card.style.display = matchFilter && matchSearch ? "block" : "none";
  });
}



const openModalBtn = document.getElementById("openModalBtn");
const exportBtn = document.getElementById("exportBtn");
const propertyModal = document.getElementById("propertyModal");
const closeModal = document.getElementById("closeModal");
const propertyForm = document.getElementById("propertyForm");
const propertyGrid = document.getElementById("propertyGrid");

const totalProperties = document.getElementById("totalProperties");
const heroTotal = document.getElementById("heroTotal");

openModalBtn.addEventListener("click", () => {
  propertyModal.classList.add("show");
});

closeModal.addEventListener("click", closePropertyModal);

propertyModal.addEventListener("click", e => {
  if(e.target === propertyModal){
    closePropertyModal();
  }
});

function closePropertyModal(){
  propertyModal.classList.remove("show");
}


/* =========================
   ADD PROPERTY
========================= */

propertyForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("propertyName").value.trim();
  const location = document.getElementById("propertyLocation").value.trim();
  const type = document.getElementById("propertyType").value;
  const units = document.getElementById("propertyUnits").value.trim();

  if(!name || !location || !units){
    alert("Please complete all fields.");
    return;
  }

  const newCard = document.createElement("article");

  newCard.className = "property-card";
  newCard.dataset.status = "draft";
  newCard.dataset.name = `${name} ${location}`.toLowerCase();

  newCard.innerHTML = `
    <div class="property-image">
      <img src="../../src/featured.jpg" alt="">
      <span class="status draft">Draft</span>
    </div>

    <div class="property-content">
      <p class="property-type">${type}</p>
      <h2>${name}</h2>
      <p class="location">⌖ ${location}</p>

      <div class="property-meta">
        <div>
          <strong>0/${units}</strong>
          <span>Units Filled</span>
        </div>

        <div>
          <strong>0%</strong>
          <span>Occupancy</span>
        </div>

        <div>
          <strong>Rp0</strong>
          <span>Revenue</span>
        </div>
      </div>

      <div class="progress">
        <span style="width:0%"></span>
      </div>

      <div class="property-actions">
        <button class="edit-btn">Edit</button>
        <button class="detail-btn">Preview</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>
  `;

  propertyGrid.prepend(newCard);

  attachCardActions(newCard);
  updatePropertyCount();

  propertyForm.reset();
  closePropertyModal();
});



function attachCardActions(card){
  const deleteBtn = card.querySelector(".delete-btn");
  const editBtn = card.querySelector(".edit-btn");
  const detailBtn = card.querySelector(".detail-btn");

  deleteBtn.addEventListener("click", () => {
    const confirmDelete = confirm("Delete this property?");

    if(confirmDelete){
      card.remove();
      updatePropertyCount();
    }
  });

  editBtn.addEventListener("click", () => {
    alert("Edit property feature can be connected to backend later.");
  });

  detailBtn.addEventListener("click", () => {
    alert("Property detail page can be created later.");
  });
}

document.querySelectorAll(".property-card").forEach(card => {
  attachCardActions(card);
});



function updatePropertyCount(){
  const total = document.querySelectorAll(".property-card").length;

  totalProperties.textContent = total;
  heroTotal.textContent = `${total} Properties`;
}



exportBtn.addEventListener("click", () => {
  alert("Export report feature can be connected to backend later.");
});