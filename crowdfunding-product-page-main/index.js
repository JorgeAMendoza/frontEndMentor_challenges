// Navigation Bar Toggle
(() => {
  const navBar = document.querySelector("nav");
  const body = document.querySelector("body");
  const hamburgerIcon = document.querySelector(".nav-toggle");

  const toggleNav = () => {
    navBar.classList.toggle("toggle-view");
    body.classList.toggle("dark");
    if (hamburgerIcon.getAttribute("src").includes("close"))
      hamburgerIcon.setAttribute("src", "./images/icon-hamburger.svg");
    else hamburgerIcon.setAttribute("src", "./images/icon-close-menu.svg");
  };

  hamburgerIcon.addEventListener("click", toggleNav);
})();

//Update Project states, pledge to project
(() => {
  const body = document.querySelector("body");
  const pledgeModal = document.querySelector("#pledge-modal");

  const displayPledgeModal = () => {
    body.classList.toggle("dark");
    pledgeModal.classList.toggle("show-modal");
  };
})();

// Give Z-index only when clicked, meanign remove them for now
