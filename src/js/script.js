var loader = document.querySelector(".loader-wrapper")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

var tl = anime.timeline({
  targets: '.ventje',
  delay: function(el, i) { return i * 200 },
  duration: 500, // Can be inherited
  easing: 'easeOutExpo', // Can be inherited
  direction: 'alternate', // Is not inherited
  loop: true // Is not inherited
});

tl
.add({
  translateX: 1900,
  // override the easing parameter
  easing: 'spring',
})
.add({
  opacity: 1,
  scale: 4
})
.add({
  // override the targets parameter
  targets: '.ventje',
  rotate: 180
})
.add({
  translateX: 1130,
  scale: 1
});
