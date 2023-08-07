//function searchMovies() {
    //fetch("http://localhost:3000/films")
      //.then((response) => response.json())
      //.then((data) => displayMovies(data))
  //}
  
  function getFilms(){
    fetch("http://localhost:3000/films")
    .then(response=> response.json())  
    .then(jsonData=> {
    jsonData.forEach(movie => {
        const movieDisplay = document.createElement('li')
        movieDisplay.innerHTML = `
        <div>
        <h4>${movie.title}</h4>
        <img src=${movie.poster}>
        </div>
        `
        const movieList = document.createElement('div')
        movieList.id = 'movieList'
        movieList.textContent = movie.title
        document.querySelector('#movieTitles'). appendChild(movieList)
        document.querySelector('#displayArea').appendChild(movieDisplay)
      
      });
      displayMovies()
    })
   }
  getFilms()
   function displayMovies(){
    // console.log(films);
    for (let i=0; i<=movieList.length; i++){
    movieList[i].addEventListener('click',function(){
      let id =i+1;
      fetch(`http://localhost:3000/films/${id}`)
      .then(response =>response.json())
      .then(singleMovie=> {
          //console.log(singleMovie)
      document.querySelector('#displayArea').remove()
      const selectMovie=document.createElement('div')
      selectMovie.id = 'displayArea'
      selectMovie.innerHTML= `
      <div id="movieDetails">
                      <h5>Title : ${singleMovie.title}</h5>
                      <img src='${singleMovie.poster}'>
                      <p>showtime : ${singleMovie.showtime}</p>
                      <p>runtime : ${singleMovie.runtime}</p>
                      <p>capacity : ${singleMovie.capacity}</p>
                      <p>tickets_sold : ${singleMovie.tickets_sold}</p>
                      <p>description : ${singleMovie.description}</p>
      </div>
  
      `
      document.querySelector('#movieDetails').appendChild(selectMovie)
      } )
    
    })
    
  }}
  
  
  displayMovies()
     
     
  
     
     
    
  