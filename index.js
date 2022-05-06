let test = document.querySelector("#movies-container");
const myForm = document.getElementById("search-form");

document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
  myForm.addEventListener("submit", function (e) {
    // event listener code goes here
    e.preventDefault();
    const renderMovie = (movieArray) => {
      movieHtmlArray = movieArray.map((currentMovie) => {
        return `
                    <div class="col-3 card">
                    <div class="card-body">
                      <img class="card-img-top" id="img" src=${currentMovie.Poster} alt="Card image cap">
                      <h5 class="card-title" id="title">${currentMovie.Title}</h5>
                      <h5 class="card-title"id="year">${currentMovie.Year}</h5>
                    </div>
                    </div>
                   
                    `;
      });
      return movieHtmlArray.join("");
    };
      test.innerHTML = renderMovie(movieData);
  });
  // console.log(test);

});
// console.log(renderMovie)

