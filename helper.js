class Helper {
  objectFromValue(key, value, array) {
    return array.filter((element) => element[value] === key);
  }

  generateStartTime(startHours, startMinutes = 0) {
    let date = new Date();
    date.setHours(startHours, startMinutes, 0, 0);

    return date;
  }
  generateEndTime(endHours, endMinutes = 0) {
    let date = new Date();
    date.setHours(endHours, endMinutes, 0, 0);

    return date;
  }
  shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }
  getDateFromString(dateString) {
    return new Date(Date.parse(dateString));
  }
  getObjectFromTitle(title, movieList) {
    return movieList.filter((movie) => movie.name === title)[0];
  }
  generateListofGenre(array, genre, testList) {
    return testList.filter((film) => {
      return this.getObjectFromTitle(film, array)["categories"].includes(genre);
    });
  }
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
const helper = new Helper();
export default helper;
