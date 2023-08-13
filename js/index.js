function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("toggle-btn").addEventListener("click", switchTheme);
