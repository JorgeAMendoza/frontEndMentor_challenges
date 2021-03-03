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
  const pledgeButton = document.querySelector("#pledge-button");
  const pledgeForms = document.querySelectorAll("form[class*='pledge']");
  const closeModal = document.querySelector("#close-modal");

  const displayPledgeModal = () => {
    body.classList.add("dark");
    pledgeModal.classList.add("show-modal");
  };

  const closePledgeModal = () => {
    body.classList.remove("dark");
    pledgeModal.classList.remove("show-modal");
  };

  const displayPledgeConfirmation = (e) => {
    if (e.target.tagName === "INPUT")
      showConfirmation(
        e.target.parentElement.parentElement.parentElement,
        e.target
      );
  };

  const showConfirmation = (form, check) => {
    if (check.checked) {
      document
        .querySelectorAll("form[class*=pledge] input[type=checkbox]")
        .forEach((check) => {
          check.classList.remove("checked");
          check.checked = false;
        });

      pledgeForms.forEach((form) => form.classList.remove("checked"));
      check.checked = true;
      form.classList.add("checked");
    } else form.classList.remove("checked");
  };

  const submitPledge = (e) => {
    e.preventDefault();
    if (!e.target.elements.amount) {
      return;
    }
  };

  pledgeButton.addEventListener("click", displayPledgeModal);
  pledgeForms.forEach((form) => {
    form.addEventListener("click", displayPledgeConfirmation);
    form.addEventListener("submit", submitPledge);
  });
  closeModal.addEventListener("click", closePledgeModal);
})();

// Module to handle updating backers stats
const projectStatusDOM = (() => {
  const projectAmount = document.querySelector("#project-amount");
  const projectBackers = document.querySelector("#project-backers");
  const projectDays = document.querySelector("#project-days");

  const getProjectAmount = () =>
    Number(projectAmount.textContent.replace(/,/g, ""));

  const updateProjectStats = () => {};

  return {
    getProjectAmount: getProjectAmount,
  };
})();
