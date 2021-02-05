// Module to control DOM Deletion and Editing
const domController = (function () {
  const staticDOM = {
    themeToggle: document.querySelector("#themeToggle"),
    pageBody: document.querySelector("body"),
    inputNewTask: document.querySelector("#inputNewTask"),
    inputName: document.querySelector("#newTask"),
    inputStatus: document.querySelector("#inputStatus"),
    taskList: document.querySelector(".task-list"),
    taskCount: document.querySelector("#taskCount"),
    allTaskButton: document.querySelector("#allTask"),
    activeTaskButton: document.querySelector("#activeTask"),
    completedTaskButton: document.querySelector("#completedTask"),
    clearCompletedButton: document.querySelector("#clearCompleted"),
  };

  const pageStatus = {
    active: false,
    completed: false,
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

    if (pageStatus.active) _writeActiveTask();
    else if (pageStatus.completed) _writeCompletedTask(0);
    else _writeAllTask();

    _updateTaskCount();
  }

  function _createTaskDOM(taskData) {
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

    _setDeleteButtons();
    _setTaskCheckboxes();
    _updateTaskCount();
  }

  function _writeAllTask() {
    const allTaskData = taskDataModule.getTaskData();
    _createTaskDOM(allTaskData);
  }

  function _setDeleteButtons() {
    const deleteButtons = document.querySelectorAll(".task-delete");
    deleteButtons.forEach((button) =>
      button.addEventListener("click", _deleteTask)
    );
  }

  function _setTaskCheckboxes() {
    const taskCheckboxes = document.querySelectorAll(
      ".task > .task-status input"
    );
    taskCheckboxes.forEach((check) =>
      check.addEventListener("click", _changeStatus)
    );
  }

  function _deleteTask() {
    const taskPosition = this.parentElement.dataset.position;
    taskDataModule.deleteTask(taskPosition);

    if (pageStatus.active) _writeActiveTask();
    else if (pageStatus.completed) _writeCompletedTask();
    else _writeAllTask();

    _updateTaskCount();
  }

  function _changeStatus() {
    const taskPosition = this.parentElement.parentElement.dataset.position;
    const newStatus = this.checked;
    taskDataModule.changeTaskStatus(taskPosition, newStatus);
  }

  function _updateTaskCount() {
    const count = staticDOM.taskList.children.length;
    staticDOM.taskCount.textContent = count;
  }

  function _writeActiveTask() {
    const activeTaskData = taskDataModule.getActiveTask();
    _createTaskDOM(activeTaskData);
  }

  function _writeCompletedTask() {
    const completedTaskData = taskDataModule.getCompletedTask();
    _createTaskDOM(completedTaskData);
  }

  function _clearCompletedTask() {
    taskDataModule.clearCompletedTask();
    if (pageStatus.active) _writeActiveTask();
    if (pageStatus.completed) _writeCompletedTask();
    else _writeAllTask();
  }

  // Set Page Event Listeners
  staticDOM.themeToggle.addEventListener("click", function (e) {
    if (this.getAttribute("src").includes("moon")) switchToDarkTheme();
    else switchToLightTheme();
  });

  staticDOM.inputNewTask.addEventListener("submit", insertTask);

  staticDOM.allTaskButton.addEventListener("click", () => {
    staticDOM.allTaskButton.classList.add("type-active");
    staticDOM.activeTaskButton.classList.remove("type-active");
    staticDOM.completedTaskButton.classList.remove("type-active");

    pageStatus.active = false;
    pageStatus.completed = false;

    _writeAllTask();
  });

  staticDOM.activeTaskButton.addEventListener("click", () => {
    staticDOM.allTaskButton.classList.remove("type-active");
    staticDOM.activeTaskButton.classList.add("type-active");
    staticDOM.completedTaskButton.classList.remove("type-active");

    pageStatus.active = true;
    pageStatus.completed = false;

    _writeActiveTask();
  });

  staticDOM.completedTaskButton.addEventListener("click", () => {
    staticDOM.allTaskButton.classList.remove("type-active");
    staticDOM.activeTaskButton.classList.remove("type-active");
    staticDOM.completedTaskButton.classList.add("type-active");

    pageStatus.active = false;
    pageStatus.completed = true;

    _writeCompletedTask();
  });

  staticDOM.clearCompletedButton.addEventListener("click", _clearCompletedTask);
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
  }

  function _getActiveTask() {
    return _taskData.filter((task) => !task.taskStatus);
  }

  function _getCompletedTask() {
    return _taskData.filter((task) => task.taskStatus);
  }

  function _sortTask() {
    _taskData.map((task, index) => {
      task.taskPosition = index;
    });
  }

  function _changeTaskStatus(index, status) {
    _taskData[index].taskStatus = status;
  }

  function _clearCompletedTask() {
    let completedTask = _taskData.filter((task) => task.taskStatus).length;

    while (completedTask > 0) {
      for (let i = 0; i < _taskData.length; i++) {
        if (_taskData[i].taskStatus) {
          _taskData.splice(i, 1);
          completedTask--;
          break;
        }
      }
    }

    _sortTask();
  }

  return {
    insertNewTask: _insertNewTask,
    getTaskData: _getTaskData,
    getActiveTask: _getActiveTask,
    getCompletedTask: _getCompletedTask,
    deleteTask: _deleteTask,
    changeTaskStatus: _changeTaskStatus,
    clearCompletedTask: _clearCompletedTask,
  };
})();
