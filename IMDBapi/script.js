function myFunction() {
  let varfn = document.getElementById("searchText").value;
  getMovies(varfn);
}
// console.log(varfn);


// var varfn = document.getElementById("naam-film").value;
// console.log(varfn);

function getMovies(varfn) {



  let apiData = {
    url: 'http://www.omdbapi.com/',
    apiKey: '?apikey=623dcc99&s=',
    filmnaam: varfn
  }

  const {
    url,
    apiKey,
    filmnaam
  } = apiData
  const apiUrl = `${url}${apiKey}${filmnaam}`

  let res;

  fetch(apiUrl)
    .then((response) => response.json())
    .then(data => res = data)
    .then((res) => {

      let movies = res.Search;
      let output = '';

      console.log(movies);
      $.each(movies, (index, movie) => {
        output += `
        <div class ="col-md-3" id="ruimte">
          <div class="well text-center">
           <h5>${movie.Title}</h5>
           <h6>Year: ${movie.Year}</h6>
           <img src=${movie.Poster} onclick="movieSelected('${movie.imdbID}')" datatoggle="modal" href="#">
           </div>
         </div>
        `;
      });

      $('#movies').html(output); //inner html kan mss ook?
    });
}

function movieSelected(id) {
  console.log(id);


  let apiData = {
    url: 'http://www.omdbapi.com/',
    apiKey: '?apikey=623dcc99&i=',
    filmnaam: id,
  }

  const {
    url,
    apiKey,
    filmnaam
  } = apiData
  const apiUrl = `${url}${apiKey}${filmnaam}`

  // let res;

  fetch(apiUrl)
    .then((response) => response.json())
    .then(data => res = data)
    .then((res) => {

      // console.log(res);

      let movie = res;

      console.log(movie);
      //
      let output = `
      <div id="poef">
          <div id="source-modal" class="modal fade show" tabindex="-1" style="display: block; padding-right: 17px;" aria-modal="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">${movie.Title}</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="removeElement()">×</button>
            </div>
            <div class="modal-body">
            <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
          </div>
        </div>
            </div>
            <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="removeElement()">Close</button>
      </div>
          </div>
        </div>
      </div>
      </div>
          `;

      $('#movie').html(output); //inner html kan mss ook?



    });


}
function removeElement() {
  // Removes an element from the document
  var element = document.getElementById('poef');
  element.remove();

}


//   .then((poster) => createHtml(poster))
//
// const createHtml = (data) => {
//   console.log(data)
//   const html = `
//   <div class ="col-md-3"?
//   <h2>${data.Title}</h2>
//   <div class="jaar">Year: ${data.Year}</div>
//   <img src=${data.Poster}>
//   </div>
// `
//
//   const posterDiv = document.querySelector('.poster')
//   posterDiv.innerHTML = html

// }
