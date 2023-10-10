const handleEvents = ['click', 'touchstart'];
const btns = document.querySelectorAll('[data-button]');
const soms = document.querySelectorAll('[data-som]');
window.addEventListener('keydown', addClass) 

// função do evento de teclado
function addClass(event) {
    if(event.key === 'Enter' || event.key === ' ') event.target.classList.add('ativa')
    event.target.addEventListener('keyup', removeClass)
    function removeClass() {
        event.target.classList.remove('ativa')
    }   
}

handleEvents.forEach((event) => {
    btns.forEach(button => button.addEventListener(event, playSom));
})

function playSom(event) {   
    const valueButtonClicked = event.target.dataset.button;
    soms[valueButtonClicked].play();
}