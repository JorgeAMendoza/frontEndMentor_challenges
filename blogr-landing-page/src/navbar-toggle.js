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
    // grab the image within, rotate it by 90deg, preferrebly done through class.
    const navArrowImage = e.currentTarget.querySelector(".nav-arrow__img");
    navArrowImage.classList.add("nav-arrow__img--display");
    // grab the option items element wthin, give it the class to display the contents withiin .
  };

  //   set event listeners
  navMenuButton.addEventListener("click", toggleNav);
  navbarOptions.forEach((option) =>
    option.addEventListener("click", toggleNavItems)
  );
};
