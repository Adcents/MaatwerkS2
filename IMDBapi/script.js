function myFunction() {
  var varfn = document.getElementById("searchText").value;
  console.log(varfn);


  // var varfn = document.getElementById("naam-film").value;
  // console.log(varfn);


  let apiData = {
    url: 'http://www.omdbapi.com/',
    apiKey: '?apikey=623dcc99&t=',
    filmnaam: varfn,
  }

  const {
    url,
    apiKey,
    filmnaam
  } = apiData
  const apiUrl = `${url}${apiKey}${filmnaam}`

  fetch(apiUrl)
    .then((data) => data.json())
    .then((poster) => createHtml(poster))

  const createHtml = (data) => {
    console.log(data)
    const html = `
    <h2>${data.Title}</h2>
    <div class="jaar">Year: ${data.Year}</div>
    <img src=${data.Poster}>
  `

    const posterDiv = document.querySelector('.poster')
    posterDiv.innerHTML = html
  }
}
