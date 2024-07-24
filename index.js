
let score = JSON.parse(localStorage.getItem("score")) || {
  win:  0,
  lose: 0,
  tie:  0,
};

updateScore()
function PickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Siccors";
  }
  return computerMove;
}


function playGame(playermove) {
    
  let computerMove = PickComputerMove();
  let results = "";

  if (playermove === "Rock") {
    if (computerMove === "Rock") {
      results = "Tie";
    } else if (computerMove === "Paper") {
      results = "You Lose";
    } else if (computerMove === "Siccors") {
      results = "You Win";
    }
  }

  if (playermove === "Paper") {
    if (computerMove === "Paper") {
      results = "Tie";
    } else if (computerMove === "Siccors") {
      results = "You Lose";
    } else if (computerMove === "Rock") {
      results = "You Win";
    }
  }

  if (playermove === "Siccors") {
    if (computerMove === "Siccors") {
      results = "Tie";
    } else if (computerMove === "Rock") {
      results = "You Lose";
    } else if (computerMove === "Paper") {
      results = "You Win";
    }
  }
  if (results === `You Win`) {
    score.win += 1;
  } else if (results === `You Lose`) {
    score.lose += 1;
  } else if (results === `Tie`) {
    score.tie += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateScore()
  document.querySelector(`.js-results`). innerHTML = `${results}`
  document.querySelector(`.js-moves`). innerHTML = `Computer <img src="./Assets/${computerMove}-emoji.png"> You <img src="./Assets/${playermove}-emoji.png">`
}


function updateScore(){
    document.querySelector(`.js-score`). innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`
}


function remove() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.removeItem("score");
}
