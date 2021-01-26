// Module to control DOM Deletion and Editing
const domController = (function () {
  const staticDOM = {
    themeToggle: document.querySelector("#themeToggle"),
    pageBody: document.querySelector("body"),
    inputNewTask: document.querySelector("#inputNewTask"),
    inputName: document.querySelector("#newTask"),
    inputStatus: document.querySelector("#inputStatus"),
  };

  function switchToDarkTheme() {
    staticDOM.themeToggle.setAttribute("src", "images/icon-sun.svg");
    staticDOM.pageBody.classList.add("dark");
    staticDOM.pageBody.dataset.theme = "dark";
  }

  function switchToLightTheme() {
    staticDOM.themeToggle.setAttribute("src", "images/icon-moon.svg");
    staticDOM.pageBody.classList.remove("dark");
    staticDOM.pageBody.dataset.theme = "light";
  }

  function insertNewTask(taskName, taskStatus) {
    console.log(taskName, taskStatus);
    const newTask = `
    <div class="task">
      <label class="task-status">
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <span class="task-name">${taskName}</span>
      <img
      class="task-delete"
      src="images/icon-cross.svg"
      alt="Delete Task Button"
      />
    </div>
    `;
  }

  //   Set Static Event Listeners
  staticDOM.themeToggle.addEventListener("click", function (e) {
    if (this.getAttribute("src").includes("moon")) switchToDarkTheme();
    else switchToLightTheme();
  });

  staticDOM.inputNewTask.addEventListener("submit", function (e) {
    e.preventDefault();
    insertNewTask(staticDOM.inputName.value, staticDOM.inputStatus.checked);
    staticDOM.inputName.value = "";
    staticDOM.inputStatus.checked = false;
  });
})();
