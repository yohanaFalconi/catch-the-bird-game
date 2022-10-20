const squares = document.querySelectorAll('.square');
const blueBird = document.querySelector('.blue-bird');
const pinkBird = document.querySelector('.pink-bird');
const timeLeft = document.querySelector('#time-left');
const pinkBirdScore = document.querySelector('#pink-bird-score');
const blueBirdScore = document.querySelector('#blue-bird-score');

let blueBirdCounter = 0;
let pinkBirdCounter = 0;
let hitPosition;
let timerId = null;
let currentTime = 60;
const blueBirdsArray = [1,3,5,7,9];
const pinkBirdsArray = [2,4,6,8];


function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('blue-bird');
    square.classList.remove('pink-bird');

  })
  const randomSquare = squares[Math.floor(Math.random() * 9)];
  hitPosition = randomSquare.id;
  randomSquare.classList.add('blue-bird');

  for (let i = 0; i < pinkBirdsArray.length; i++) {
    if (hitPosition == pinkBirdsArray[i]) {
        randomSquare.classList.add('pink-bird');
    }
  }  
}

/* Birds counter */
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
        for (let i = 0; i < blueBirdsArray.length; i++) {
            if (hitPosition == blueBirdsArray[i]) {
                blueBirdCounter++;
                blueBirdScore.textContent = blueBirdCounter;
                hitPosition = null;
            }
        }
        for (let i = 0; i < pinkBirdsArray.length; i++) {
            if (hitPosition == pinkBirdsArray[i]) {
                pinkBirdCounter++;
                pinkBirdScore.textContent = pinkBirdCounter;
                hitPosition = null;
            }
        }
    }
  })
})

function moveBird() {
  timerId = setInterval(randomSquare, 600);
}

moveBird()

function countDown() {
 currentTime--;
 timeLeft.textContent = currentTime;

 if (currentTime == 0) {
    clearInterval(countDownTimerId);
   clearInterval(timerId);
   alert('Fin del juego! Capturaste: '+ blueBirdCounter + ' pájaros azules y' + pinkBirdCounter + ' pájaros rosas.');
 }
}

let countDownTimerId = setInterval(countDown, 1000);


