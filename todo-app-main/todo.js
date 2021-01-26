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

  function insertTask(e) {
    e.preventDefault();
    taskDataModule.insertNewTask(
      staticDOM.inputName.value,
      (staticDOM.inputStatus.checked = "false")
    );

    staticDOM.inputName.value = "";
    staticDOM.inputStatus.checked = false;
  }

  function _writeTaskList() {}

  //   Set Static Event Listeners
  staticDOM.themeToggle.addEventListener("click", function (e) {
    if (this.getAttribute("src").includes("moon")) switchToDarkTheme();
    else switchToLightTheme();
  });

  staticDOM.inputNewTask.addEventListener("submit", insertTask);
})();

const taskDataModule = (function () {
  const _taskData = [];

  function _insertNewTask(name, status) {
    _taskData.push({ taskName: name, taskStatus: status });
    console.table(_taskData);
  }

  return {
    insertNewTask: _insertNewTask,
  };
})();
