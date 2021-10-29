import helper from "./helper.js";
import movies from "./list.js";
class Schedule {
  #filmList;
  #startTime;
  #endTime;
  constructor(filmList, startTime, endTime) {
    this.#filmList = filmList;
    this.#startTime = startTime;
    this.#endTime = endTime;
    this.filmStartTimes = [];
  }

  filmTimeDictionaryGenerator(givenTime, filmList, iteratorValue) {
    if (iteratorValue > filmList.length) {
      this.filmStartTimes.push({ time: "Not enough Films to fill Schedule" });
    }
    this.filmStartTimes.push(
      Object.fromEntries([[givenTime, filmList[iteratorValue].name]])
    );
  }

  generateSchedule() {
    let randomFilmOrder = helper.shuffleArray(this.#filmList);
    let currentTime = new Date(this.#startTime.getTime());
    let iterator = 0;
    while (
      currentTime.getHours() < this.#endTime.getHours() ||
      (currentTime.getHours() === this.#endTime.getHours() &&
        currentTime.getMinutes() < this.#endTime.getMinutes())
    ) {
      if (iterator > randomFilmOrder.length) {
        this.filmTimeDictionaryGenerator(
          currentTime,
          randomFilmOrder,
          iterator
        );
        break;
      }
      if (currentTime.getMinutes() === 0) {
        this.filmTimeDictionaryGenerator(
          currentTime,
          randomFilmOrder,
          iterator
        );
        currentTime.setMinutes(
          currentTime.getMinutes() + randomFilmOrder[iterator].runtime
        );
        iterator += 1;
      } else if (currentTime.getMinutes() > 30) {
        currentTime.setMinutes(0);
        currentTime.setHours(currentTime.getHours() + 1);
        this.filmTimeDictionaryGenerator(
          currentTime,
          randomFilmOrder,
          iterator
        );
        currentTime.setMinutes(
          currentTime.getMinutes() + randomFilmOrder[iterator].runtime
        );
        iterator += 1;
      } else {
        currentTime.setMinutes(30);
        this.filmTimeDictionaryGenerator(
          currentTime,
          randomFilmOrder,
          iterator
        );
        currentTime.setMinutes(
          currentTime.getMinutes() + randomFilmOrder[iterator].runtime
        );
        iterator += 1;
      }
    }
  }
  renderSchedule() {
    const timetableDiv = document.querySelector(".timetable");
    timetableDiv.innerHTML = "";
    this.filmStartTimes.forEach((filmStartTime) => {
      const newEntryDiv = document.createElement("div");
      const startTime = document.createElement("h2");
      const filmTitle = Object.values(filmStartTime)[0];
      const filmTime = Object.keys(filmStartTime)[0];
      const filmNameHeading = document.createElement("h3");
      const filmInfo = document.createElement("p");
      filmInfo.textContent = helper.getObjectFromTitle(
        filmTitle,
        movies
      ).storyline;
      startTime.textContent =
        helper.getDateFromString(filmTime).getMinutes() !== 0
          ? `Starting at ${helper
              .getDateFromString(filmTime)
              .getHours()}:${helper.getDateFromString(filmTime).getMinutes()}`
          : `Starting at ${helper
              .getDateFromString(filmTime)
              .getHours()}:${helper.getDateFromString(filmTime).getMinutes()}0`;
      filmNameHeading.textContent = `${filmTitle}`;
      newEntryDiv.append(startTime, filmNameHeading, filmInfo);
      timetableDiv.appendChild(newEntryDiv);
    });
  }
}
export default Schedule;
