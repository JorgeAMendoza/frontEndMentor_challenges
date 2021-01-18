// Module to control DOM Deletion and Editing
const domController = (function () {
  const staticDOM = {
    themeToggle: document.querySelector("#themeToggle"),
    pageBody: document.querySelector("body"),
  };

  function switchToDarkTheme() {
    themeToggle.setAttribute("src", "images/icon-sun.svg");
    staticDOM.pageBody.classList.add("dark");
  }

  function switchToLightTheme() {
    themeToggle.setAttribute("src", "images/icon-moon.svg");
    staticDOM.pageBody.classList.remove("dark");
  }

  //   Set Static Event Listeners
  staticDOM.themeToggle.addEventListener("click", function (e) {
    if (this.getAttribute("src").includes("moon")) switchToDarkTheme();
    else switchToLightTheme();
  });
})();
