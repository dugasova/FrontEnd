const MOVIES_PER_PAGE = 10;
const searchInput = document.getElementById("input");
const getFilm = document.getElementById("btn");
const searchResults = document.getElementById("searchResults");
const pagination = document.getElementById("pagination");
const filmDetails = document.getElementById("details");

function ShowPagination(totalMovies) {
  if (
    document.getElementById("pagination").getElementsByTagName("li").length > 0
  ) {
    return;
  }

  pagination.innerHTML = "";

  for (let i = 0; i * MOVIES_PER_PAGE < totalMovies && i < 15; i++) {
    const li = document.createElement("li");
    li.innerHTML = i + 1;
    if (i === 0) {
      li.classList.add("active");
    }
    pagination.append(li);
  }
}

function showDetails(event) {
  if (event.target.dataset.movieId) {
    moreDetails(event.target.dataset.movieId);
  }
}

async function loadData(page) {
  filmDetails.innerHTML = "";

  if (searchInput.value.trim() === "") {
    searchResults.innerHTML =
      "<h2 class = header-not-found>Please enter your film</h2>";
    return;
  }

  let filmUrl =
    `https://www.omdbapi.com/?apikey=a0d12fb1&s=${searchInput.value}`;

  if (page > 0) {
    filmUrl += "&page=" + page;
  }

  let movies = null;

  try {
    movies = await axios.get(filmUrl);
    movies = movies.data;
  } catch (err) {
    searchResults.innerHTML =
      "<h2 class = header-not-found>Something went wrong</h2>" + err.message;
    return;
  }

  if (movies.Response === "False") {
    searchResults.innerHTML =
      "<h2 class = header-not-found>Movie not found!</h2>";
    return;
  }

  if (movies.totalResults > MOVIES_PER_PAGE)
    ShowPagination(movies.totalResults);

  searchResults.innerHTML = "";
  movies.Search.forEach((item) => {
    searchResults.innerHTML += `<div class="result"><img src=${
      item.Poster !== "N/A" ? item.Poster : "/homework-18/img/movie.jpg"
    }>
        ${item.Title}<br>${item.Type}<br>${
      item.Year
    }<button class="details" data-movie-id=${item.imdbID}>More</button></div>`;
  });
}

async function moreDetails(movieId) {
  filmDetails.innerHTML = "";
  moreDetails.innerHTML = "";

  const moreFilmUrl = `https://www.omdbapi.com/?apikey=a0d12fb1&i=${movieId}`;
  let moreData = null;
  try {
    moreData = (await axios.get(moreFilmUrl)).data;
  } catch (err) {
    searchResults.innerHTML =
      "<h2 class = header-not-found>Something went wrong!!!</h2>" + err.message;
    return;
  }

  filmDetails.innerHTML =
    (moreData.Poster !== "N/A"
      ? `<img class="data-result" src=${moreData.Poster}>`
      : `<img src="/homework-18/img/movie.jpg">`) +
    `<div class ="data-about"<br> Title:  ${moreData.Title}<br> Relised:  ${moreData.Released}<br>
  Country:  ${moreData.Country}<br>Actors:  ${moreData.Actors}<br> 
  Genre:  ${moreData.Genre}<br> Runtime:  ${moreData.Runtime}<br> Plot:  ${moreData.Plot}<br>
  Director: ${moreData.Director}<br>Writer:  ${moreData.Director}<br>Rating:  ${moreData.imdbRating}`;
}

getFilm.addEventListener("click", () => {
  pagination.innerHTML = "";
  loadData();
});

pagination.addEventListener("click", (e) => {
  if (!(e.target instanceof HTMLLIElement)) return;

  const pages = pagination.querySelectorAll("li");

  pages.forEach((item) => {
    item.classList.remove("active");
  });

  e.target.classList.add("active");

  const pageIndex = +e.target.innerHTML - 1;
  loadData(pageIndex);
});

searchResults.addEventListener("click", showDetails);
