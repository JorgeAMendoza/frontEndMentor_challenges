export const themeSwitch = () => {
  const _staticDOM = {
    pageBody: document.querySelector("body"),
    themeSelect: document.querySelectorAll("input[type='radio']"),
    themeTab: document.querySelector(".theme-select__tab"),
  };

  const _changeTheme = (e) => {
    const themeSelection = e.target.dataset.theme;
    _staticDOM.pageBody.classList.remove("theme-1", "theme-2", "theme-3");

    switch (themeSelection) {
      case "1":
        _staticDOM.pageBody.classList.add("theme-1");
        break;
      case "2":
        _staticDOM.pageBody.classList.add("theme-2");
        break;
      case "3":
        _staticDOM.pageBody.classList.add("theme-3");
        break;
    }
  };

  _staticDOM.themeSelect.forEach((input) =>
    input.addEventListener("change", _changeTheme)
  );
};
