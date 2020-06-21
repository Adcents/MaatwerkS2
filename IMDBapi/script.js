function myFunction() {
  let varfn = document.getElementById("searchText").value;
  getMovies(varfn);
  // console.log(varfn);


  // var varfn = document.getElementById("naam-film").value;
  // console.log(varfn);

  function getMovies(varfn) {

  }

  let apiData = {
    url: 'http://www.omdbapi.com/',
    apiKey: '?apikey=623dcc99&s=',
    filmnaam: varfn,
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
           <img src=${movie.Poster} onclick="movieSelected('${movie.imdbID}') href="#">
           </div>
         </div>
        `;
      });

      $('#movies').html(output); //inner html kan mss ook?
    });


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
}
// }
