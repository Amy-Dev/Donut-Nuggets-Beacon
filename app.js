const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    game(button);
  });
})

function game(button) {
  const player = button.innerHTML;
  const robot = robotPlay();
  const result = checkResult(player, robot);
  displayResult({player, robot, result})
}

function robotPlay() {
  return buttons[Math.floor(Math.random() * buttons.length)].innerHTML
}

function checkResult(player, robot) {
  if (player === robot) return 'Draw';
  else if (
    (player === "Donut" && robot === "Bacon") ||
    (player === "Nuggets" && robot === "Donut") ||
    (player === "Bacon" && robot === "Nuggets")
  ) return "Player's win";
  else return "Robot's win";
}

function displayResult({player, robot, result}) {
  const container = document.querySelector('.result');
  container.innerHTML = `
    Player : ${player} </br>
    Robot : ${robot} </br>
    Result : ${result}
  `;
}