const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarOpen = document.getElementById("sidebarOpen");
const sidebarClose = document.getElementById("sidebarClose");

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
});

sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

function closeSidebar(){
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
}

/* FILTER ARTICLES */

const filterButtons = document.querySelectorAll(".filter-btn");
const articleCards = document.querySelectorAll(".article-card");
const articleCount = document.getElementById("articleCount");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    let visibleCount = 0;

    articleCards.forEach(card => {
      const category = card.dataset.category;

      if(filter === "all" || filter === category){
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    articleCount.textContent = `Showing ${visibleCount} articles`;
  });
});

/* LOAD MORE DEMO */

const loadMoreBtn = document.getElementById("loadMoreBtn");

loadMoreBtn.addEventListener("click", () => {
  alert("More articles can be loaded from database later.");
});