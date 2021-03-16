const messWithMe1 = document.querySelector('.mess-with-me')
messWithMe1.style.fontSize = '40px';
const messWithMe2 = document.querySelector('p.mess-with-me')
messWithMe2.style.backgroundColor = 'green'
const dinosaur = document.querySelectorAll('img')
const dino1 = dinosaur[0]
const dino2 = document.querySelector('#hide-me-area')
dino2.style.display = "none";
dino1.style.width = '324px'

function backgroundToOrange() {
    messWithMe1.style.backgroundColor = 'orange'
}

messWithMe2.addEventListener ('click', backgroundToOrange)

function redBorder (){
    dino1.style.border = "1px solid red"
}

dino1.addEventListener('click', redBorder)

function opacity(){
    const featherDino = document.querySelector('#feathers')
    featherDino.style.opacity = 0.5
}

dinosaur[3].addEventListener('click', opacity)

const row = document.querySelector('#row')

function switchBackgroundColor (){
    if (row.style.backgroundColor === ''){
        row.style.backgroundColor = 'yellow'
    } else{
        row.style.backgroundColor = ''
    }
}

const button = document.querySelector('button')

button.addEventListener('click', switchBackgroundColor)

const biggify = document.querySelector('#biggify')

function bigger () {
    biggify.style.width = '200px'
}
 function smaller (){
    biggify.style.width = ''
 }

biggify.addEventListener('mouseover', bigger)
biggify.addEventListener('mouseout', smaller)

