const apiKey = "mwMs3DqK9oEdxGB90Od9UXjFzN5EjDwm";

const CITY_LIST = {
  Lviv: 324561,
  Kyiv: 324505,
  Kharkiv: 323903,
  Chernihiv: 322162,
  Odesa: 325343,
  Mariupol: 323037,
  Poltava: 325523,
  Zhytomyr: 326609,
  Cherkasy: 321985,
  London: 328328,
  Warsaw: 274663,
  "New York": 349727,
};

const city = document.getElementById("enter-city");
const getWeather = document.getElementById("btn");
const message = document.getElementById("weather");

function loadData(cityId) {
  const xhttp = new XMLHttpRequest();

  xhttp.open(
    "GET",
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
      cityId +
      "?metric=true&apikey=" +
      apiKey
  );
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.status !== 200) {
      return   message.innerHTML = "Something went wrong, please try again";
    } else if
     (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(this.response);
      message.innerHTML = `<h2>Weather in ${city.value}</h2>`;
      result.DailyForecasts.forEach((item) => {
        const date = new Date(item.Date);
        const dateOptions = {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        };
        const temperatureMax = item.Temperature.Maximum.Value;
        const temperatureMin = item.Temperature.Minimum.Value;
        message.innerHTML += `${date.toLocaleDateString(
          "en-UK",
          dateOptions
        )}<br> ${temperatureMin} - ${temperatureMax}  <h4>${
          item.Day.IconPhrase
        }</h4><br>`;
      });
    };
  };
};

function getWeatherInfo() {
  if (city.value in CITY_LIST) {
    const result = loadData(CITY_LIST[city.value]);
    loadBackground(city.value);
  } else {
    message.innerHTML = "Wrong city, please enter from list";
  };
};

function loadBackground(cityId) {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://api.unsplash.com/photos/random?client_id=-qo2R2MZRQA7vO0qZkxKtKn-ksVDkFzVce0BrnXPQeE&orientation=landscape&query=" +
      cityId
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(this.response);
      const photo = result.links.download;
      body.style.backgroundImage = "url('" + photo + "')";
    };
  };
};

getWeather.addEventListener("click", getWeatherInfo);
