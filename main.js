const col = document.querySelectorAll('.col');
const output = document.getElementById('output');

yaz = (element) => fetch(`https://swapi.co/api/people/${element.path[0].id}/`)
  .then(response => response.json())
  .then(data => update(data));

update = (data) => {
  console.log(data);
  output.style.display = 'block';
  output.innerHTML = `<b>Name :</b> <mark>${data.name}</mark> <br> <b>Height :</b> ${data.height} <br> <b>Birth Year :</b> ${data.birth_year} <br> <b>Hair Color :</b> ${data.hair_color} <br>
  <b>Skin Color :</b> ${data.skin_color} <br> <b>Mass :</b> ${data.mass}   <br> <b>Created :</b> ${data.created} <br> <b>Edited :</b> ${data.edited} <br>
  <b>Eye Color :</b> ${data.eye_color} <br> <b>Gender :</b> ${data.gender} <br> <b>Homeworld :</b> ${data.homeworld} <br> <b>Films :</b> ${data.films} <br>
  <b>Species :</b> ${data.species} <br> <b>Starships :</b> ${data.starships} <br> <b>Vehicles :</b> ${data.vehicles}`;
}

col.forEach(element => element.addEventListener('click',yaz));