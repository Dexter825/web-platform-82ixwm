const url = 'https://cool-ascii-face.herokuapp.com/';

function getRandomCoolAsciiFace() {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json.face;
    });
}

var button = document.getElementById( 'refresh');
button.addEventListener("click", ()=>{
  document.getSelection("loading")
})

window.addEventListener('DOMContentLoaded', function () {
  // TODO 1: When the website is has recevied the Cool Ascii Face,
  //          it should hide the "Loading" word.
  //          (regardless of success or failure)
  getRandomCoolAsciiFace().then(function (face) {
    document.querySelector('h1').textContent = face;
  });
});

// TODO 2: When I click the "Refresh" button,
//         it should get a random cool ascii face and update the h1
//         it should show "Loading" when it is fetching and hide it eventually.
