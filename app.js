const calculateReadingTime = () => {
  const readingTimeElement = document.querySelector("[data-reading-time]");
  const contentElement = document.querySelector("[data-content]");

  const numberOfCharacters = contentElement.textContent.length;
  const readingTime = Math.round(numberOfCharacters / 7.5 / 60);

  readingTimeElement.textContent = `Tempo de Leitura ${readingTime <  1 ? 1 : readingTime} min`;
};

window.onload = () => {
  calculateReadingTime();
};
