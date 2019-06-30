const col = document.querySelectorAll('.col');
const movies = document.querySelectorAll('.episode');
const output = document.getElementById('output');

getChar = (element) => fetch(`https://swapi.co/api/people/${element.path[0].id}/`)
  .then(response => response.json())
  .then(data => update(data));

update = (data) => {
  output.style.display = 'block';
  output.innerHTML = `<b>Name :</b> <mark>${data.name}</mark> <br> <b>Height :</b> ${data.height} <br> <b>Birth Year :</b> ${data.birth_year} <br> <b>Hair Color :</b> ${data.hair_color} <br>
  <b>Skin Color :</b> ${data.skin_color} <br> <b>Mass :</b> ${data.mass}   <br> <b>Created :</b> ${data.created} <br> <b>Edited :</b> ${data.edited} <br>
  <b>Eye Color :</b> ${data.eye_color} <br> <b>Gender :</b> ${data.gender} <br> <b>Homeworld :</b> ${data.homeworld} <br> <b>Films :</b> ${data.films} <br>
  <b>Species :</b> ${data.species} <br> <b>Starships :</b> ${data.starships} <br> <b>Vehicles :</b> ${data.vehicles}`;
}

col.forEach(element => element.addEventListener('click',getChar));

// MOVIE SIDE
getEpisode = (element) => fetch(`https://swapi.co/api/films/${element.path[0].id}/`)
  
  .then(response => response.json())
  .then(episode => updateEpisode(episode));

updateEpisode = (episode) => {
  output.style.display = 'block';
  output.innerHTML = `<b>Title :</b> <mark>${episode.title}</mark> <br> <b>Episode ID :</b> ${episode.episode_id} <br> <b>Opening Crawl :</b> ${episode.opening_crawl} <br> <b>Director :</b> ${episode.director} <br>
  <b>Created :</b> ${episode.created} <br> <b>Edited :</b> ${episode.edited}   <br> <b>Producer :</b> ${episode.producer} <br> <b>Characters :</b> ${episode.characters} <br>
  <b>Release Date :</b> ${episode.release_date} <br> <b>Species :</b> ${episode.species} <br> <b>Starships :</b> ${episode.starships} <br> <b>Vehicles :</b> ${episode.vehicles} <br> <b>Planets :</b> ${episode.planets}`;
}

movies.forEach(element => element.addEventListener('click',getEpisode));