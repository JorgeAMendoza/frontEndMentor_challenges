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
    clearCompletedButton: document.querySelector("#clearCompleted"),
    mobileTaskSelectionButton: document.querySelector("#mobileTaskSelection"),
    desktopTaskSelectionButton: document.querySelector("#desktopTaskSelection"),
  };

  const pageStatus = {
    active: false,
    completed: false,
  };

  //Variables to hold dragged data attributes value
  let draggedTaskPosition, targetTaskPosition;

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
      <div class="task" data-position="${task.taskPosition}" draggable="true">
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

    _updateTaskCount();
    _setDragEvents();
  }

  // Function to start drag event.
  function _setDragEvents() {
    const allTask = document.querySelectorAll(".task-list .task");
    allTask.forEach((task) => {
      task.addEventListener("dragstart", _startDraggingTask);
      task.addEventListener("dragover", _dragOverTask);
      task.addEventListener("dragleave", _dragOutOfTask);
      task.addEventListener("dragend", _stopDraggingTask);
      task.addEventListener("drop", _dropDraggedTask);
    });
  }

  function _startDraggingTask() {
    this.classList.add("dragged");
    draggedTaskPosition = this.dataset.position;
  }

  function _dragOverTask(e) {
    e.preventDefault();
    this.classList.add("dragged-over");
  }

  function _dragOutOfTask(e) {
    e.preventDefault();
    this.classList.remove("dragged-over");
  }

  function _stopDraggingTask() {
    this.classList.remove("dragged");
  }

  function _dropDraggedTask() {
    this.classList.remove("dragged-over");
    targetTaskPosition = this.dataset.position;
    taskDataModule.moveTask(draggedTaskPosition, targetTaskPosition);

    if (pageStatus.active) _writeActiveTask();
    else if (pageStatus.completed) _writeCompletedTask();
    else _writeAllTask();
  }

  function _writeAllTask() {
    const allTaskData = taskDataModule.getTaskData();
    _createTaskDOM(allTaskData);
  }

  function _deleteTask(e) {
    const taskPosition = e.target.parentElement.dataset.position;
    taskDataModule.deleteTask(taskPosition);

    if (pageStatus.active) _writeActiveTask();
    else if (pageStatus.completed) _writeCompletedTask();
    else _writeAllTask();

    _updateTaskCount();
  }

  function _changeStatus(e) {
    const taskPosition = e.target.parentElement.parentElement.dataset.position;
    const newStatus = e.target.checked;
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

  function _changeTaskPage(e) {
    if (e.target.nodeName !== "BUTTON") return;

    document
      .querySelectorAll("#mobileTaskSelection button")
      .forEach((button) => button.classList.remove("type-active"));

    document
      .querySelectorAll("#desktopTaskSelection button")
      .forEach((button) => button.classList.remove("type-active"));

    switch (e.target.textContent) {
      case "All":
        document
          .querySelectorAll("#mobileTaskSelection button")[0]
          .classList.add("type-active");
        document
          .querySelectorAll("#desktopTaskSelection button")[0]
          .classList.add("type-active");

        pageStatus.active = false;
        pageStatus.completed = false;

        _writeAllTask();
        break;
      case "Active":
        document
          .querySelectorAll("#mobileTaskSelection button")[1]
          .classList.add("type-active");
        document
          .querySelectorAll("#desktopTaskSelection button")[1]
          .classList.add("type-active");

        pageStatus.active = true;
        pageStatus.completed = false;

        _writeActiveTask();
        break;
      case "Completed":
        document
          .querySelectorAll("#mobileTaskSelection button")[2]
          .classList.add("type-active");
        document
          .querySelectorAll("#desktopTaskSelection button")[2]
          .classList.add("type-active");

        pageStatus.active = false;
        pageStatus.completed = true;
        _writeCompletedTask();
        break;
    }
  }

  // Set Page Event Listeners
  staticDOM.inputNewTask.addEventListener("submit", insertTask);

  staticDOM.clearCompletedButton.addEventListener("click", _clearCompletedTask);

  staticDOM.mobileTaskSelectionButton.addEventListener(
    "click",
    _changeTaskPage
  );

  staticDOM.desktopTaskSelectionButton.addEventListener(
    "click",
    _changeTaskPage
  );

  staticDOM.themeToggle.addEventListener("click", function (e) {
    if (this.getAttribute("src").includes("moon")) switchToDarkTheme();
    else switchToLightTheme();
  });

  staticDOM.taskList.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") === "task-delete") _deleteTask(e);
    else if (e.target.getAttribute("type") === "checkbox") _changeStatus(e);
  });

  // write all tasks when page is done loading.
  window.addEventListener("load", _writeAllTask);
})();

// Module to hold and change task Data.
const taskDataModule = (function () {
  const _taskData = JSON.parse(localStorage.getItem("tasks")) || [];

  function _insertNewTask(name, status) {
    _taskData.push({
      taskName: name,
      taskStatus: status,
      taskPosition: _taskData.length,
    });

    localStorage.setItem("tasks", JSON.stringify(_taskData));
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

    localStorage.setItem("tasks", JSON.stringify(_taskData));
  }

  function _changeTaskStatus(index, status) {
    _taskData[index].taskStatus = status;
    localStorage.setItem("tasks", JSON.stringify(_taskData));
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

  function _moveTask(dropped, target) {
    const [droppedTask] = _taskData.splice(dropped, 1);
    _taskData.splice(target, 0, droppedTask);
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
    moveTask: _moveTask,
  };
})();
