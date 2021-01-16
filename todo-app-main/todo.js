// Module to control DOM Deletion and Editing
const domController = (function () {
  const staticDOM = {
    themeToggle: document.querySelector("#themeToggle"),
  };

  function switchTheme() {
    document.documentElement.style.setProperty(
      "--page-background",
      "var(--darktheme-very-dark-desaturated-blue)"
    );
  }

  //   Set Static Event Listeners
  staticDOM.themeToggle.addEventListener("click", switchTheme);
})();
