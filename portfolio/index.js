const projectPertama = document.getElementById('details-project-one')
const projectKedua = document.getElementById('details-project-two')
const projectKetiga = document.getElementById('details-project-three')
const projectKeempat = document.getElementById('details-project-four')

const closeOne = document.getElementById('close-one')
const closeTwo = document.getElementById('close-two')
const closeThree = document.getElementById('close-three')
const closeFour = document.getElementById('close-four')

let popupOne = document.getElementById('eventlistener-one')
let popupTwo = document.getElementById('eventlistener-two')
let popupThree = document.getElementById('eventlistener-three')
let popupFour = document.getElementById('eventlistener-four')

let wrapperEl = document.getElementById('wrapper')

projectPertama.addEventListener('click', function(){
    popupOne.style.display = "block"
    wrapperEl.style.webkitFilter = "blur(5px)"
})

projectKedua.addEventListener('click', function(){
    popupTwo.style.display = "block"
    wrapperEl.style.webkitFilter = "blur(5px)"
})

projectKetiga.addEventListener('click', function(){
    popupThree.style.display = "block"
    wrapperEl.style.webkitFilter = "blur(5px)"
})

projectKeempat.addEventListener('click', function(){
    popupFour.style.display = "block"
    wrapperEl.style.webkitFilter = "blur(5px)"
})

//CLOSE EL 

closeOne.addEventListener('click', function(){
    popupOne.style.display = "none";

    wrapperEl.style.webkitFilter = "none"
})

closeTwo.addEventListener('click', function(){
    popupTwo.style.display = "none"

    wrapperEl.style.webkitFilter = "none"
})

closeThree.addEventListener('click', function(){
    popupThree.style.display = "none"

    wrapperEl.style.webkitFilter = "none"
})

closeFour.addEventListener('click', function(){
    popupFour.style.display = "none"

    wrapperEl.style.webkitFilter = "none"
})