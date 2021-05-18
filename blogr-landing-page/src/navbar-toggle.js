import closeIcon from "./assets/images/icon-close.svg";
import hamburgerIcon from "./assets/images/icon-hamburger.svg";

export const navbarToggle = () => {
  const navMenuButton = document.querySelector("#navMenuButton");
  const navbarContent = document.querySelector("#navbarContent");
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

  //   set event listeners
  navMenuButton.addEventListener("click", toggleNav);
};
