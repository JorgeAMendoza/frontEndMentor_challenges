export const navbar = () => {
  const _staticDOM = {
    navbar: document.querySelector(".nav-bar__nav"),
    navToggle: document.querySelector(".nav-bar__menu"),
  };

  const _toggleNav = () => {
    _staticDOM.navbar.classList.toggle("display");
  };

  const _windowResize = (e) => {
    if (e.target.innerWidth >= 768)
      _staticDOM.navbar.classList.remove("display");
  };

  _staticDOM.navToggle.addEventListener("click", _toggleNav);
  window.addEventListener("resize", _windowResize);
};
