//fetch('http://www.omdbapi.com/?apikey=8cee15b2&t=iron+man')
//.then((movieResponse) => movieResponse.json())
//.then((movieJson) => {
//const title = document.querySelector('#title')
//const rating = document.querySelector('#rating')
//const year = document.querySelector('#year')
//title.innerText = movieJson['Title']
//rating.innerText = movieJson['Rated']
//year.innerText = movieJson['Year']
//})

const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', (event) => {
  const input = document.querySelector('input')
  const movieName = input.value
  fetch('http://www.omdbapi.com/?apikey=8cee15b2&t=' + movieName)
  .then((response) => response.json())
  .then((movieJson) => {
    const title = document.querySelector('#title')
    const rating = document.querySelector('#rating')
    const year = document.querySelector('#year')
    const poster = document.querySelector('#movie-poster')
    title.innerText = ''
    rating .innerText = ''
    year.innerText = ''
    poster.src = ''
      if (movieJson['Response'] === 'False') {
      const rated = document.querySelector('#rating')
      rated.innerText = 'Title not found, please search again'
      return
    }
    
    title.innerText = movieJson['Title']
    rating.innerText = movieJson['Rated']
    year.innerText = movieJson['Year']
    
    poster.src = movieJson['Poster']
  })
})
