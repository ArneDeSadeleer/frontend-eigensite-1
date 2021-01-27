var loader = document.querySelector(".loader-wrapper")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

anime({
  targets: '.ventje',
  rotate: 720,
  direction: 'alternate',
  loop: true,
})
