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
const pledgeModalDOM = (() => {
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

    // call function to update pledge quanity
    const pledgeQuantity = e.target.dataset.pledge;
    projectStatusDOM.updatePledgeQuanity(pledgeQuantity);
  };

  // Funciton to open up modal at specific button click.
  const openSelectedPledge = (pledgeName) => {
    displayPledgeModal();
    const pledgeCard = document.querySelector(
      `form[data-pledge='${pledgeName}']`
    );
    const pledgeCheckbox = pledgeCard.querySelector("input[type='checkbox']");
    const pledgeCords = pledgeCheckbox.getBoundingClientRect();

    pledgeCard.classList.add("checked");
    pledgeCheckbox.checked = true;
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

  return {
    openSelectedPledge: openSelectedPledge,
  };
})();

// Module to handle updating backers stats
const projectStatusDOM = (() => {
  const projectAmount = document.querySelector("#project-amount");
  const projectBackers = document.querySelector("#project-backers");
  const bambooPledgeQuantity = document.querySelectorAll(
    "#backer-bamboo .amount-left span, #pledge-bamboo .pledge-amount span "
  );
  const blackPledgeQuantity = document.querySelectorAll(
    "#backer-black .amount-left span, #pledge-black .pledge-amount span"
  );
  const specialPledgeQuantity = document.querySelectorAll(
    "#backer-special .amount-left span, #pledge-black .pledge-amount span"
  );

  const updateProjectStats = (amount) => {
    const currentAmount = parseInt(projectAmount.textContent.replace(/,/g, ""));
    const currentBackers = parseInt(
      projectBackers.textContent.replace(/,/g, "")
    );

    projectAmount.textContent = (currentAmount + amount).toLocaleString("en");
    projectBackers.textContent = (currentBackers + 1).toLocaleString("en");
  };

  // function to update project quanity stat
  const updatePledgeQuanity = (pledge) => {
    // switch
    switch (pledge) {
      case "bamboo":
        updateQuantity(bambooPledgeQuantity);
        break;
      case "black":
        updateQuantity(blackPledgeQuantity);
        break;
      case "special":
        updateQuantity(specialPledgeQuantity);
        break;
    }
  };

  const updateQuantity = (spans) => {
    const currentQuan = parseInt(spans[0].textContent);
    spans.forEach((span) => (span.textContent = currentQuan - 1));
  };

  return {
    updateProjectStats: updateProjectStats,
    updatePledgeQuanity: updatePledgeQuanity,
  };
})();

//Module to handle backer rewards
const backerRewardDOM = (() => {
  const backerRewardsCards = document.querySelectorAll(".backer-reward");

  const openPledgeModal = (e) => {
    if (e.target.tagName !== "BUTTON") return;

    const backerReward = e.target.parentElement.parentElement.dataset.backer;
    pledgeModalDOM.openSelectedPledge(backerReward);
  };

  // set event listener on all cards
  backerRewardsCards.forEach((card) =>
    card.addEventListener("click", openPledgeModal)
  );
})();
