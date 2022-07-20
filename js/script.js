const mario = document.querySelector('.mario'); 
const pipe = document.querySelector('.pipe')
const ceu = document.querySelector('.ceu', '.ceu2')
const ceu1 = document.querySelector('.ceu1')
const ceu2 = document.querySelector('.ceu2')

const jump = () => {
 mario.classList.add('jump');

 setTimeout(() => {
    mario.classList.remove('jump');
 }, 500);
}


const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const ceuPosition = +window.getComputedStyle(ceu).right.replace('px', '') ;
    const ceuPosition1 = +window.getComputedStyle(ceu1).right.replace('px', '') ;
    const ceuPosition2 = +window.getComputedStyle(ceu2).right.replace('px', '') ;
    console.log(ceuPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        ceu.style.animation = 'none';
        ceu.style.left = `${ceuPosition}px`;

        ceu1.style.animation = 'none';
        ceu1.style.left = `${ceuPosition1}px`;

        ceu2.style.animation = 'none';
        ceu2.style.left = `${ceuPosition2}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        mario.style.transform = 'matrix(0.866,0.10,-0.12,0.866,0,0)(0.866,-0.7,0.8,0.866,0,0)';
        mario.style.transition = ' 0.2s ease-in';
        // mario.style.transform = 'matrix'
        // mario.style.transition = ' 0.4s ease-in';

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump);
