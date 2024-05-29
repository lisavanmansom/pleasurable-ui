// elements selecteren
let image_preview = document.getElementById('file')
let button_preview = document.querySelector('.file-input label')
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

button_preview.classList.add("preview-enhanced");

// Allstories carousel
image_preview.addEventListener('change', function(event) {
  if (event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("image-preview");
    preview.src = src;
    preview.style.display = "block";
    preview.style.height = "130px";

    startConfetti();
  }
});


function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiCount = 150;
  const confetti = [];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 4 + 1,  // radius
      d: Math.random() * confettiCount,  // density
      color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`,
      tilt: Math.random() * 10 - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((confetto, index) => {
      confetto.tiltAngle += confetto.tiltAngleIncremental;
      confetto.y += (Math.cos(confetto.d) + 3 + confetto.r / 2) / 2;
      confetto.tilt = Math.sin(confetto.tiltAngle - index / 3) * 15;

      if (confetto.y > canvas.height) {
        confetto.x = Math.random() * canvas.width;
        confetto.y = -20;
      }

      ctx.beginPath();
      ctx.lineWidth = confetto.r;
      ctx.strokeStyle = confetto.color;
      ctx.moveTo(confetto.x + confetto.tilt + confetto.r, confetto.y);
      ctx.lineTo(confetto.x + confetto.tilt, confetto.y + confetto.tilt + confetto.r);
      ctx.stroke();
    });

    requestAnimationFrame(draw);
  }

  draw();
}
