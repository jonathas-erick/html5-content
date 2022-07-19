const hero = document.querySelector('.hero')
const obstacle = document.querySelector('.obstacle')
const title = document.querySelector('.title')
const scoreT = document.querySelector('.subtitle')
let score = 0



const jump = () =>{
    hero.classList.add('jump')

    setTimeout(() => {
        hero.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {
    const obstaclePosition = obstacle.offsetLeft
    const heroPosition = window.getComputedStyle(hero).bottom.replace('px', '')

    score = score + 10

    scoreT.innerHTML = "Score: " + score 

    if(obstaclePosition <= 100 && obstaclePosition > 0 && heroPosition < 100){
       
        obstacle.style.animation = 'none'
        obstacle.style.left = `${obstaclePosition}px`
         
        title.innerHTML = "Game Over. Refresh the page please"
        scoreT.innerHTML = 0
        score = 0
        
    }
}, 10);

document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
