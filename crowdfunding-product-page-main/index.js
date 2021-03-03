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
  const successModal = document.querySelector("#success-modal");

  const displayPledgeModal = () => {
    body.classList.add("dark");
    pledgeModal.classList.add("show-modal");
  };

  const closePledgeModal = () => {
    body.classList.remove("dark");
    pledgeModal.classList.remove("show-modal");
    uncheckAllPledges();
  };

  const toggleSuccessModal = () => {
    successModal.classList.toggle("display");
    body.classList.toggle("dark");
  };

  const displayPledgeConfirmation = (e) => {
    if (e.target.tagName === "INPUT")
      showConfirmation(
        e.target.parentElement.parentElement.parentElement,
        e.target
      );
  };

  const uncheckAllPledges = () => {
    document
      .querySelectorAll("form[class*=pledge] input[type=checkbox]")
      .forEach((check) => {
        check.classList.remove("checked");
        check.checked = false;
        pledgeForms.forEach((form) => form.classList.remove("checked"));
      });

    document
      .querySelectorAll("form[class*=pledge] input[type=number]")
      .forEach((input) => (input.value = ""));
  };

  const showConfirmation = (form, check) => {
    if (check.checked) {
      uncheckAllPledges();
      check.checked = true;
      form.classList.add("checked");
    } else form.classList.remove("checked");
  };

  const submitPledge = (e) => {
    e.preventDefault();
    let pledgeAmount;
    if (!e.target.elements.amount) {
      pledgeAmount = 0;
    } else pledgeAmount = parseInt(e.target.elements.amount.value);
    projectStatusDOM.updateProjectStats(pledgeAmount);
    closePledgeModal();
    toggleSuccessModal();
  };

  pledgeButton.addEventListener("click", displayPledgeModal);
  pledgeForms.forEach((form) => {
    form.addEventListener("click", displayPledgeConfirmation);
    form.addEventListener("submit", submitPledge);
  });
  closeModal.addEventListener("click", closePledgeModal);

  successModal.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") toggleSuccessModal();
  });
})();

// Module to handle updating backers stats
const projectStatusDOM = (() => {
  const projectAmount = document.querySelector("#project-amount");
  const projectBackers = document.querySelector("#project-backers");

  const updateProjectStats = (amount) => {
    const currentAmount = parseInt(projectAmount.textContent.replace(/,/g, ""));
    const currentBackers = parseInt(
      projectBackers.textContent.replace(/,/g, "")
    );

    projectAmount.textContent = (currentAmount + amount).toLocaleString("en");
    projectBackers.textContent = (currentBackers + 1).toLocaleString("en");
  };

  return {
    updateProjectStats: updateProjectStats,
  };
})();
