// elements selecteren
let hamburger = document.querySelector('.hamburger')
let navMenu = document.querySelector('.desktop')
let body = document.querySelector('body')
var likedCircle = document.querySelector('.liked-circle')
var sugCircle = document.querySelector('.sug-circle')
var hiddenHeader = document.querySelectorAll('.hidden-header')
var prevBTN = document.querySelector('.prevBTN')
var nextBTN = document.querySelector('.nextBTN')
var prevBTN2 = document.querySelector('.prevBTN2')
var nextBTN2 = document.querySelector('.nextBTN2')
const carousel = document.querySelector('.playlist-carousel')
const gallery = document.querySelector('.gallery')
const delay = 200; // Delay in milliseconds

// hamburger menu addeventlistener
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav-active')
  navMenu.classList.toggle('desktop')
  hamburger.classList.toggle('active-bar')
})

// PE suggested + liked playlist section
// JS code added & removing styling without JS
body.classList.remove('liked-no-js', 'sug-no-js')
body.classList.add('has-js')
// hide content no function w/o JS
likedCircle.hidden = false
sugCircle.hidden = false
nextBTN.hidden = false
prevBTN.hidden = false
nextBTN2.hidden = false
prevBTN2.hidden = false

// Carousel own playlist
// Buttons click scrollevent in carousel
prevBTN.addEventListener('click', function () {
  carousel.scrollBy({
    left: -carousel.offsetWidth,
    behavior: 'smooth'
  })
});

nextBTN.addEventListener('click', function () {
  carousel.scrollBy({
    left: carousel.offsetWidth,
    behavior: 'smooth'
  })
});

// hover & click event button
prevBTN.addEventListener('mousedown', () => {
  prevBTN.classList.add('button-background');
});

prevBTN.addEventListener('mouseup', () => {
    setTimeout(() => {
      prevBTN.classList.remove('active');
    }, delay);
});

prevBTN.addEventListener('mouseleave', () => {
    // This ensures the class is removed if the mouse leaves the button while it's pressed
    setTimeout(() => {
      prevBTN.classList.remove('button-background');
    }, delay);
});

// hover & click event button
nextBTN.addEventListener('mousedown', () => {
  nextBTN.classList.add('button-background');
});

nextBTN.addEventListener('mouseup', () => {
    setTimeout(() => {
      nextBTN.classList.remove('active');
    }, delay);
});

nextBTN.addEventListener('mouseleave', () => {
    // This ensures the class is removed if the mouse leaves the button while it's pressed
    setTimeout(() => {
      nextBTN.classList.remove('button-background');
    }, delay);
});


// Carousel all stories
// Buttons click scrollevent in carousel
prevBTN2.addEventListener('click', function () {
  gallery.scrollBy({
    left: -gallery.offsetWidth,
    behavior: 'smooth'
  })
  gallery.classList.add('item-open');
});

nextBTN2.addEventListener('click', function () {
  gallery.scrollBy({
    left: gallery.offsetWidth,
    behavior: 'smooth'
  })
  gallery.classList.add('item-open');
});


// Carousel liked + suggested playlist
// external JS file GSAP
document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(Draggable)
})

// GSAP draggable
Draggable.create('.slayrousel', {
  type: 'rotation',
  inertia: true,
})

// Clientside fetch
let forms = document.querySelectorAll('form.like-form')
// loop door forms
forms.forEach(function (form) {
  form.addEventListener('submit', function (event) {
    // leest data form + geeft extra eigenschap mee
    let data = new FormData(this)
    data.append('enhanced', true)

    // client-side fetch
    fetch(this.action, {
      method: this.method,
      body: new URLSearchParams(data),
    })
      // return html
      .then(function (response) {
        return response.text()
      })
      .then(function (responseHTML) {
        document.querySelector('.art-slayrousel').innerHTML = responseHTML
        console.log(responseHTML)
      })

    event.preventDefault()
  })
})

// Allstories carousel