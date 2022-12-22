const footballContainer = document.querySelector(".banner-football__container");
const football = document.querySelector("#football");
const goalKeeperContainer = document.querySelector(".goal-keeper-container");
const goalKeeper = document.querySelector(".goalkeeper");

const scoreBoard = document.querySelector(".score");
const scoreNumber = document.querySelector(".score-number");

let score = 0;
scoreNumber.textContent = score;

footballContainer.addEventListener("mouseover", function (event) {
  football.classList.add("bounce");
});

footballContainer.addEventListener("mouseout", function (event) {
  football.classList.remove("bounce");
});

footballContainer.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 6);

  football.classList.remove("bounce");

  console.log(randomNumber);

  if (randomNumber === 0) {
    score++;

    goalKeeper.classList.remove("standard-keeper-position");
    goalKeeper.classList.add("left-keeper-position");
    football.classList.remove("ball");
    football.classList.add("score-ball");

    setTimeout(() => {
      goalKeeper.classList.add("standard-keeper-position");
      goalKeeper.classList.remove("left-keeper-position");
      football.classList.add("ball");
      football.classList.remove("score-ball");
    }, "1000");
  } else if (randomNumber === 3 || randomNumber == 5) {
    goalKeeper.classList.remove("standard-keeper-position");
    goalKeeper.classList.add("right-keeper-position");
    football.classList.remove("ball");
    football.classList.add("score-ball");

    setTimeout(() => {
      goalKeeper.classList.add("standard-keeper-position");
      goalKeeper.classList.remove("right-keeper-position");
      football.classList.add("ball");
      football.classList.remove("score-ball");
    }, "1000");
  } else {
    goalKeeper.classList.remove("standard-keeper-position");
    goalKeeper.classList.add("left-keeper-position");
    football.classList.remove("ball");
    football.classList.add("miss-ball");

    setTimeout(() => {
      goalKeeper.classList.add("standard-keeper-position");
      goalKeeper.classList.remove("left-keeper-position");
      football.classList.add("ball");
      football.classList.remove("miss-ball");
    }, "1000");
  }

  console.log("Score: " + score);
  scoreNumber.textContent = score;
});
