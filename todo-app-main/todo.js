// Module to control DOM Deletion and Editing
const domController = (function () {
  const staticDOM = {
    themeToggle: document.querySelector("#themeToggle"),
    pageBody: document.querySelector("body"),
    inputNewTask: document.querySelector("#inputNewTask"),
    inputName: document.querySelector("#newTask"),
    inputStatus: document.querySelector("#inputStatus"),
    taskList: document.querySelector(".task-list"),
    activeTaskButton: document.querySelector("#activeTask"),
    completedTaskButton: document.querySelector("#completedTask"),
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

    // Event Listeners for when a user changes the status of a task.
    const taskCheckboxes = document.querySelectorAll(".task-status input");
    taskCheckboxes.forEach((check) =>
      check.addEventListener("click", _changeStatus)
    );
  }

  function _deleteTask() {
    const taskPosition = this.parentElement.dataset.position;
    taskDataModule.deleteTask(taskPosition);
    _writeTaskList();
  }

  function _changeStatus() {
    const taskPosition = this.parentElement.parentElement.dataset.position;
    const newStatus = this.checked;
    console.log(newStatus);
    taskDataModule.changeTaskStatus(taskPosition, newStatus);
  }

  function _writeActiveTask() {
    console.log("Hello");
  }

  function _writeCompletedTask() {
    console.log("Goodbye");
  }

  //   Set Static Event Listeners
  staticDOM.themeToggle.addEventListener("click", function (e) {
    if (this.getAttribute("src").includes("moon")) switchToDarkTheme();
    else switchToLightTheme();
  });

  staticDOM.inputNewTask.addEventListener("submit", insertTask);

  staticDOM.activeTaskButton.addEventListener("click", _writeActiveTask);
  staticDOM.completedTaskButton.addEventListener("click", _writeCompletedTask);
})();

// Module to hold and change task Data.
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

  function _deleteTask(position) {
    _taskData.splice(position, 1);
    _sortTask();
    console.table(_taskData);
  }

  function _sortTask() {
    _taskData.map((task, index) => {
      task.taskPosition = index;
    });
  }

  function _changeTaskStatus(index, status) {
    _taskData[index].taskStatus = status;
  }

  return {
    insertNewTask: _insertNewTask,
    getTaskData: _getTaskData,
    deleteTask: _deleteTask,
    changeTaskStatus: _changeTaskStatus,
  };
})();
