import closeIcon from "./assets/images/icon-close.svg";
import hamburgerIcon from "./assets/images/icon-hamburger.svg";

export const navbarToggle = () => {
  const navMenuButton = document.querySelector("#navMenuButton");
  const navbarContent = document.querySelector("#navbarContent");
  const navbarOptions = document.querySelectorAll(
    ".nav-bar__nav__list__option"
  );
  let navOpen = false;

  const toggleNav = (e) => {
    if (!navOpen) {
      e.target.setAttribute("src", closeIcon);
      navOpen = true;

      navbarContent.classList.add("nav-bar__content--display");
    } else {
      e.target.setAttribute("src", hamburgerIcon);
      navOpen = false;

      navbarContent.classList.remove("nav-bar__content--display");
    }
  };

  const toggleNavItems = (e) => {
    const navOption = e.currentTarget;

    const navArrowImage = navOption.querySelector(".nav-arrow__img");
    navArrowImage.classList.toggle("nav-arrow__img--display");

    const navOptionlist = navOption.querySelector(
      ".nav-bar__nav__list__option__items"
    );
    navOptionlist.classList.toggle(
      "nav-bar__nav__list__option__items--display"
    );
  };

  //   set event listeners
  navMenuButton.addEventListener("click", toggleNav);
  navbarOptions.forEach((option) =>
    option.addEventListener("click", toggleNavItems)
  );
};
