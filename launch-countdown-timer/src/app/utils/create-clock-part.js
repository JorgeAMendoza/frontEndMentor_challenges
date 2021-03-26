export const createClockPart = (timeValue, nextTimeValue, className = "") => {
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute(
    "class",
    `countdown-clock__time__card ${className}`
  );

  const frontCard = document.createElement("div");
  frontCard.setAttribute("class", "countdown-clock__time__card__front");

  const backCard = document.createElement("div");
  backCard.setAttribute("class", "countdown-clock__time__card__back");

  const frontText = document.createElement("p");
  frontText.textContent = `${timeValue}`;

  const backText = document.createElement("p");
  backText.textContent = `${nextTimeValue}`;

  // Put it all together
  frontCard.append(frontText);
  backCard.append(backText);

  
  cardContainer.append(frontCard);
  cardContainer.append(backCard);

  return cardContainer;
};
