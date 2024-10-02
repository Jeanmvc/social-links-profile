const githubButton = document.getElementById("github-button");
const linkedinButton = document.getElementById("linkedin-button");
const facebookButton = document.getElementById("facebook-button");
const instagramButton = document.getElementById("instagram-button");
const yotubeButton = document.getElementById("youtube-button");

// para indicar que cuando hagamos click en el boton de github abra una nueva ventana
// vamos a usar el siguiente codigo
githubButton.addEventListener("click", function () {
  window.open("https://github.com/Jeanmvc");
});

linkedinButton.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/jeanmvc");
});

facebookButton.addEventListener("click", function () {
  window.open("https://www.facebook.com/jeanmvco/");
});

instagramButton.addEventListener("click", function () {
  window.open("https://www.instagram.com/jeanmvc/");
});

yotubeButton.addEventListener("click", function () {
  window.open("https://www.youtube.com/@jeanm10");
});