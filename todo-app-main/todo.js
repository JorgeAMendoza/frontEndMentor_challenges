// Module to control DOM Deletion and Editing
const domController = (function () {
  const staticDOM = {
    themeToggle: document.querySelector("#themeToggle"),
    pageBody: document.querySelector("body"),
    inputNewTask: document.querySelector("#inputNewTask"),
    inputName: document.querySelector("#newTask"),
    inputStatus: document.querySelector("#inputStatus"),
    taskList: document.querySelector(".task-list"),
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
      staticDOM.inputStatus.checked
    );
    staticDOM.inputName.value = "";
    staticDOM.inputStatus.checked = false;

    _writeTaskList();
  }

  function _writeTaskList() {
    const taskData = taskDataModule.getTaskData();
    staticDOM.taskList.innerHTML = taskData
      .map((task) => {
        return `
      <div class="task" data-position="${task.taskPosition}">
        <label class="task-status">
            <input type="checkbox" ${task.taskStatus ? "checked" : ""}/>
            <span class="checkmark"></span>
          </label>
          <span class="task-name">${task.taskName}</span>
          <img
            class="task-delete"
            src="images/icon-cross.svg"
            alt="Delete Task Button"
          />
      </div>
      `;
      })
      .join("");

    // Insert event listeners for deletion button for each task DOM
    const deleteButtons = document.querySelectorAll(".task-delete");
    deleteButtons.forEach((button) =>
      button.addEventListener("click", _deleteTask)
    );
  }

  function _deleteTask() {
    const taskPosition = this.parentElement.dataset.position;
    taskDataModule.deleteTask(taskPosition);
    _writeTaskList();
  }

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
    _taskData.push({
      taskName: name,
      taskStatus: status,
      taskPosition: _taskData.length,
    });
  }

  function _getTaskData() {
    return [..._taskData];
  }

  function _deleteTask(postition) {
    _taskData.splice(postition, 1);
    _sortTask();
    console.table(_taskData);
  }

  function _sortTask() {
    _taskData.map((task, index) => {
      task.taskPosition = index;
    });
  }

  return {
    insertNewTask: _insertNewTask,
    getTaskData: _getTaskData,
    deleteTask: _deleteTask,
  };
})();
