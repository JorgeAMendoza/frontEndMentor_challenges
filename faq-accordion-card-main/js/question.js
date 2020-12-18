(function (doc) {
  const _questionToggle = doc.querySelectorAll(".question-text");

  _questionToggle.forEach((arrow) => {
    arrow.addEventListener("click", toggleQuestion);
  });

  function toggleQuestion() {
    //Toggle image boldness and image rotation
    this.querySelector(".question").classList.toggle("selected");
    this.querySelector("img").classList.toggle("rotate");

    //reveal answer
    this.parentElement.querySelector(".answer-text").classList.toggle("show");
  }
})(document);
