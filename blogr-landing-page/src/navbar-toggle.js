import closeIcon from "./assets/images/icon-close.svg";

export const navbarToggle = () => {
  const navMenuButton = document.querySelector("#navMenuButton");
  let navOpen = false;

  const toggleNav = (e) => {
    //   if the navOPen is false,
    if (!navOpen) {
      e.target.setAttribute("src", closeIcon);
    }
    // then change it to the close source, and open the navbar

    // if the current src is close,
    // then change it to the hamburger close, close all list items within and then close the navbar.
  };

  //   set event listeners
  navMenuButton.addEventListener("click", toggleNav);
};
