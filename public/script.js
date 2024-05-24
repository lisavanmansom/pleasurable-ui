// elements selecteren
let add_playlist = document.querySelector('.add-playlist')
let playlist = document.querySelector('.playlist')
let close_playlist = document.querySelector('.close-playlist')
let hamburger = document.querySelector('.hamburger')
let navMenu = document.querySelector('.desktop')
let body = document.querySelector('body')
var likedCircle = document.querySelector('.liked-circle')
var sugCircle = document.querySelector('.sug-circle')
var hiddenHeader = document.querySelectorAll('.hidden-header')
var prevBTN = document.querySelector('.prevBTN')
var nextBTN = document.querySelector('.nextBTN')

// hamburger menu addeventlistener
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav-active')
  navMenu.classList.toggle('desktop')
  hamburger.classList.toggle('active-bar')
})

add_playlist.addEventListener('click', () => {
  playlist.classList.toggle('playlist-active')
})

close_playlist.addEventListener('click', () => {
  playlist.classList.toggle('playlist-active')
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

function showPreview(event){
  if(event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("image-preview");
    preview.src = src;
    preview.style.display = "block";
    preview.style.height = "130px";
  }
}