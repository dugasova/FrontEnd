const MOVIES_PER_PAGE = 10;
const searchInput = document.getElementById("input");
const getFilm = document.getElementById("btn");
const searchResults = document.getElementById("searchResults");
const pagination = document.getElementById("pagination");
const filmDetails = document.getElementById("details");

function ShowPagination(totalMovies) {
  for (let i = 0; i * MOVIES_PER_PAGE < totalMovies && i < 15; i++) {
    pagination.innerHTML += `<li onClick="loadData(${i + 1})"> ${i + 1}</li>`;
  }
}

function showDetails(event) {
  moreDetails(event.target.dataset.movieId);
}

function loadData(page) {
  if (searchInput.value.trim() === "") {
    searchResults.innerHTML =
      "<h2 class = header-not-found>Please enter your film</h2>";
    return;
  }

  let filmUrl =
    "https://www.omdbapi.com/?apikey=a0d12fb1&s=" + searchInput.value;

  if (page > 0) {
    filmUrl += "&page=" + page;
  }

  const searchFilm = fetch(filmUrl);
  searchFilm
    .then((result) => {
      searchResults.innerHTML = "";
      pagination.innerHTML = "";
      return result.json();
    })
    .then((data) => {
      if (data.Response === "False") {
        searchResults.innerHTML =
          "<h2 class = header-not-found>Movie not found!</h2>";
      }

      if (data.totalResults > MOVIES_PER_PAGE)
        ShowPagination(data.totalResults);

      data.Search.forEach((item) => {
        searchResults.innerHTML +=
          "<div class=result>" +
          (item.Poster !== "N/A" ? "<img  src= " + item.Poster + ">" : "") +
          item.Title +
          " " +
          item.Type +
          " " +
          item.Year +
          '<button class="details" data-movie-id="' +
          item.imdbID +
          '">More</button></div>';
      });

      const detailsButtons = document.querySelectorAll(".details");
      detailsButtons.forEach((item) => {
        item.addEventListener("click", showDetails);
      });
    });
}

function moreDetails(movieId) {
  moreDetails.innerHTML = "";
  const moreFilmUrl = "https://www.omdbapi.com/?apikey=a0d12fb1&i=" + movieId;

  const moreData = fetch(moreFilmUrl);

  moreData
    .then((result) => {
      console.log(`${result} it is more details`);
      return result.json();
    })
    .then((data) => {
      filmDetails.innerHTML =
        (data.Poster !== "N/A"
          ? `<img class="data-result" src=${data.Poster}>`
          : "") +
        `<div class ="data-about"<br> Title:  ${data.Title}<br> Relised:  ${data.Released}<br>
    Country: ${data.Country}<br>Actors:  ${data.Actors}<br> 
    Genre:  ${data.Genre}<br> Runtime:  ${data.Runtime}<br> Plot:  ${data.Plot}<br>
    Director:  ${data.Director}<br>Writer:  ${data.Director}<br>Rating:  ${data.imdbRating}`;
    });
}
getFilm.addEventListener("click", loadData);
