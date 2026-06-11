/* ==========================
   SAVED PAGE JS
========================== */

/* FILTER BUTTONS */

const filterButtons = document.querySelectorAll(".saved-filters button");
const propertyCards = document.querySelectorAll(".property-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter = button.dataset.filter;

    propertyCards.forEach(card => {

      if (filter === "all") {
        card.classList.remove("hidden");
        return;
      }

      const categories =
        card.dataset.category || "";

      if (categories.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});


/* ==========================
   HEART BUTTON
========================== */

const hearts =
  document.querySelectorAll(".heart");

hearts.forEach(heart => {

  heart.addEventListener("click", () => {

    heart.classList.toggle("active");

    if (heart.classList.contains("active")) {
      heart.innerHTML = "♥";
    } else {
      heart.innerHTML = "♡";
    }

  });

});


/* ==========================
   REMOVE PROPERTY
========================== */

const removeButtons =
  document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {

  button.addEventListener("click", () => {

    const card =
      button.closest(".property-card");

    card.style.transition =
      "all .4s ease";

    card.style.opacity = "0";
    card.style.transform =
      "translateY(20px)";

    setTimeout(() => {
      card.remove();
      updateSavedCount();
    }, 400);

  });

});


/* ==========================
   UPDATE COUNTS
========================== */

function updateSavedCount() {

  const cards =
    document.querySelectorAll(".property-card");

  const total = cards.length;

  /* Hero Saved Count */
  const heroCount =
    document.querySelector(".hero-line small");

  if (heroCount) {
    heroCount.textContent =
      `${total} PROPERTI TERSIMPAN`;
  }

  /* Top Nav */
  const savedTop =
    document.querySelector(".saved-active");

  if (savedTop) {
    savedTop.textContent =
      `♥ Saved (${total})`;
  }

  /* Sidebar Count */
  const collectionRows =
    document.querySelectorAll(
      ".collection-box strong"
    );

  if (collectionRows.length > 0) {
    collectionRows[0].textContent = total;
  }

  /* Stat Box */
  const statNumber =
    document.querySelector(
      ".saved-stats h3"
    );

  if (statNumber) {
    statNumber.textContent = total;
  }

}


/* ==========================
   VIEW DETAILS
========================== */

const viewButtons =
  document.querySelectorAll(
    '.card-actions a'
  );

viewButtons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
      "translateY(-2px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translateY(0)";

  });

});


/* ==========================
   FADE IN ANIMATION
========================== */

const observer =
  new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0)";

      }

    });

  }, {
    threshold: 0.1
  });

propertyCards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform =
    "translateY(30px)";
  card.style.transition =
    "all .6s ease";

  observer.observe(card);

});


/* ==========================
   RECOMMENDATION CARDS
========================== */

const recommendations =
  document.querySelectorAll(
    ".recommend-grid article"
  );

recommendations.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
      "translateY(-6px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "translateY(0)";

  });

});


/* ==========================
   PAGE LOAD
========================== */

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

  updateSavedCount();

});