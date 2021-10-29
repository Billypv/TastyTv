import helper from "./helper.js";
import Schedule from "./schedule.js";
import movies from "./list.js";
const currentSchedule = new Schedule(
  movies,
  helper.generateStartTime(9),
  helper.generateEndTime(21)
);
currentSchedule.generateSchedule();
const currentTimetable = currentSchedule.filmStartTimes;
currentSchedule.renderSchedule();
const randomButton = document.querySelector("#random-button");

randomButton.addEventListener("click", (event) => {
  event.preventDefault();
  const randomFilmDiv = document.getElementById("random-film");
  randomFilmDiv.innerHTML = "";
  const genreInput = document.getElementById("genre");
  const randomTitle = document.createElement("h2");
  const randomDescription = document.createElement("p");
  randomFilmDiv.append(randomTitle, randomDescription);
  if (genreInput.value === "") {
    let chosenFilm = helper.shuffleArray(currentTimetable).pop();
    chosenFilm = helper.getObjectFromTitle(
      Object.values(chosenFilm)[0],
      movies
    );
    randomTitle.textContent = chosenFilm.name;
    randomDescription.textContent = chosenFilm.storyline;
  } else {
    const randomGenreList = helper.generateListofGenre(
      movies,
      genreInput.value,
      currentTimetable.map((filmTime) => Object.values(filmTime)[0])
    );
    if (randomGenreList.length === 0) {
      randomDescription.textContent =
        "Sorry we aren't currently showing any films of that genre please try again";
    } else {
      let chosenFilm = helper.shuffleArray(randomGenreList).pop();

      chosenFilm = helper.getObjectFromTitle(chosenFilm, movies);
      randomTitle.textContent = chosenFilm.name;
      randomDescription.textContent = chosenFilm.storyline;
    }
  }
  genreInput.value = "";
});
