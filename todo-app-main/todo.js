// Module to control DOM Deletion and Editing
const domController = (function () {
  const staticDOM = {
    themeToggle: document.querySelector("#themeToggle"),
    pageBody: document.querySelector("body"),
  };

  function switchToDarkTheme() {
    themeToggle.setAttribute("src", "images/icon-sun.svg");
    staticDOM.pageBody.classList.add("dark");

    document.documentElement.style.setProperty(
      "--page-background",
      "var(--darktheme-very-dark-blue)"
    );
    document.documentElement.style.setProperty(
      "--task-background-color",
      "var(--darktheme-very-dark-desaturated-blue)"
    );
    document.documentElement.style.setProperty(
      "--task-text-color",
      "var( --darktheme-light-grayish-blue)"
    );
    document.documentElement.style.setProperty(
      "--task-bottom-border-color",
      "var(--darktheme-very-dark-grayish-blue-lighter)"
    );
    document.documentElement.style.setProperty(
      "--status-border-color",
      "var(--darktheme-very-dark-grayish-blue-lighter)"
    );
    document.documentElement.style.setProperty(
      "--task-selection-text-hover",
      "var(--darktheme-light-grayish-blue-hover)"
    );
    document.documentElement.style.setProperty(
      "--task-selection-text",
      "var(--darktheme-dark-grayish-blue)"
    );
    document.documentElement.style.setProperty(
      "--instruction-text-color",
      "var(--darktheme-dark-grayish-blue)"
    );
  }

  function switchToLightTheme() {
    themeToggle.setAttribute("src", "images/icon-moon.svg");
    document.documentElement.style.setProperty(
      "--page-background",
      "var(--lighttheme-very-light-grayish-blue)"
    );
    document.documentElement.style.setProperty(
      "--task-background-color",
      "var(--lighttheme-very-light-gray)"
    );
    document.documentElement.style.setProperty(
      "--task-text-color",
      "var(--lighttheme-very-dark-grayish-blue)"
    );
    document.documentElement.style.setProperty(
      "--task-bottom-border-color",
      "var(--lighttheme-very-light-grayish-blue)"
    );
    document.documentElement.style.setProperty(
      "--status-border-color",
      "var(--lighttheme-light-grayish-blue)"
    );
    document.documentElement.style.setProperty(
      "--task-selection-text-hover",
      "var(--lighttheme-very-dark-grayish-blue)"
    );
    document.documentElement.style.setProperty(
      "--task-selection-text",
      "var(--lighttheme-dark-grayish-blue)"
    );
    document.documentElement.style.setProperty(
      "--instruction-text-color",
      "var(--lighttheme-dark-grayish-blue)"
    );
  }

  //   Set Static Event Listeners
  staticDOM.themeToggle.addEventListener("click", function (e) {
    if (this.getAttribute("src").includes("moon")) switchToDarkTheme();
    else switchToLightTheme();
  });
})();
