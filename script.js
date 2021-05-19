let randNum = Math.floor(Math.random()*20+1);
let score = 20;
let highscore = 0;
//alert(randNum);
const displayM = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
  const input = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if(!input){
      displayM = 'Please Input An Value Between 1 to 20.';
    } else if (input > randNum) {
      displayM("Too High!");
      score--;
      document.querySelector('.score').textContent = score;
    } else if (input < randNum) {
      displayM("Too Low!");
      score--;
      document.querySelector('.score').textContent = score;
    } else if (input == randNum) {
      displayM("Correct!");
      if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('.number').textContent = randNum;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
  } else {
    displayM("You Lose The Game.");
  }
})
document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  randNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
