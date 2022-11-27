const API_KEY = "mwMs3DqK9oEdxGB90Od9UXjFzN5EjDwm";

const city = document.getElementById("enter-city");
const getWeather = document.getElementById("btn");
const weather = document.getElementById("weather");
const neighbors = document.getElementById("neighbors");

async function getCityId(city) {
    const keyUrl = "https://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + API_KEY+"&q=" + city;
    try {
      const result =  await (await fetch(keyUrl)).json();
      return result[0].Key;
    }
    catch(err) {
      weather.innerHTML = "<h2>Error getting city " +': ' + err.message + '</h2>'
      return
    }
}

function loadNeighborData(event)
{
    loadData(event.target.dataset.cityId,event.target.dataset.cityName)
}

async function loadData(cityId, cityName) {
  if (!cityId) {
    weather.innerHTML = "<h2>There are no weather info for the city " + cityName + '</h2>'
    return
  }

  const cityForcastUrl = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
  cityId +
  "?apikey=" +
  API_KEY+
  "&metric=true"

  try {
    const weatherCity = await (await fetch(cityForcastUrl)).json();

    const forecaststDaly = document.createElement('div');
    forecaststDaly.classList.add('weather-detail')
  
    weather.innerHTML = `<h2>Weather in ${cityName}</h2>`;
    weatherCity.DailyForecasts.forEach((item) => {
      const date = new Date(item.Date);
      const dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const temperatureMax = item.Temperature.Maximum.Value;
      const temperatureMin = item.Temperature.Minimum.Value;
      weather.innerHTML += `${date.toLocaleDateString(
        "en-UK",
        dateOptions
      )}<br> ${temperatureMin} - ${temperatureMax}  <h4>${
        item.Day.IconPhrase
      }</h4><br>`;
    });
  }
  catch (err) {
    weather.innerHTML = "<h2>Error getting weather for the city " + cityName +': ' + err.message + '</h2>'
    return
  }

  const locationDataUrl = "https://dataservice.accuweather.com/locations/v1/cities/neighbors/" + cityId+
  "?apikey=" + API_KEY;
  try {
    const citiesNeighbors = await(await fetch(locationDataUrl)).json();

    const neighbors_list = document.createElement('p')    

    citiesNeighbors.forEach((item) => {
      const neighbor = document.createElement('div');
      neighbor.classList.add('neighbor-city');
      neighbor.dataset.cityId = item.Key
      neighbor.dataset.cityName = item.LocalizedName
      neighbor.innerText = item.LocalizedName
      neighbor.addEventListener('click', loadNeighborData)
      neighbors_list.appendChild(neighbor);
     
   });

    neighbors.innerHTML = `<h2> Neighbors of ${cityName}</h2>`
    neighbors.replaceChildren(neighbors_list);
  }
  catch(err){
    weather.innerHTML = "<h2>Error getting weather for the city " + cityName +': ' + err.message + '</h2>'
    return

  }
}

async function loadBackground(cityId) {
    const BgUrl = "https://api.unsplash.com/photos/random?client_id=-qo2R2MZRQA7vO0qZkxKtKn-ksVDkFzVce0BrnXPQeE&orientation=landscape&query=" +
      cityId;
    try {
      const background = await (await fetch(BgUrl)).json();
      const photo = background.links.download;
      body.style.backgroundImage = "url('" + photo + "')";
    }
    catch(err){
      console.log("Error loading background:", err.message)
    }
}

getWeather.addEventListener("click", async () => {
  const cityName = city.value.trim()
  if( cityName === "" || !isNaN(cityName)) {
    weather.innerHTML = `<h2>Wrong city name:  ${city.value} + </h2>`
    return
  }

  const cityId = await getCityId(cityName)
  loadData(cityId, cityName)
  loadBackground(cityName)
});
