let playerName = "";
let playerColor = "red";
let computerColor = "yellow";

document.getElementById("playerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  playerName = document.getElementById("playerName").value;
  playerColor = document.getElementById("playerColor").value;
  computerColor = playerColor === "red" ? "yellow" : "red";

  document.getElementById("whosturn").innerText = `${
    playerColor === "red" ? playerName : "Computer"
  }'s Turn`;

  document.getElementById("intro").style.display = "none";
  document.getElementById("game").style.display = "block";
});

let val_c1 = 1,
  val_c2 = 1,
  val_c3 = 1,
  val_c4 = 1,
  val_c5 = 1,
  val_c6 = 1,
  val_c7 = 1;
let turn = 1;

function check(player) {
  setTimeout(() => {
    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 3; j++) {
        if (
          document.getElementById(`c${i}r${j}`).style.backgroundColor ===
            player &&
          document.getElementById(`c${i}r${j + 1}`).style.backgroundColor ===
            player &&
          document.getElementById(`c${i}r${j + 2}`).style.backgroundColor ===
            player &&
          document.getElementById(`c${i}r${j + 3}`).style.backgroundColor ===
            player
        ) {
          alert(`${player === playerColor ? playerName : "Computer"} wins!`);
          location.reload();
        }
      }
    }
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 4; j++) {
        if (
          document.getElementById(`c${j}r${i}`).style.backgroundColor ===
            player &&
          document.getElementById(`c${j + 1}r${i}`).style.backgroundColor ===
            player &&
          document.getElementById(`c${j + 2}r${i}`).style.backgroundColor ===
            player &&
          document.getElementById(`c${j + 3}r${i}`).style.backgroundColor ===
            player
        ) {
          alert(`${player === playerColor ? playerName : "Computer"} wins!`);
          location.reload();
        }
      }
    }
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 3; j++) {
        if (
          document.getElementById(`c${i}r${j}`).style.backgroundColor ===
            player &&
          document.getElementById(`c${i + 1}r${j + 1}`).style
            .backgroundColor === player &&
          document.getElementById(`c${i + 2}r${j + 2}`).style
            .backgroundColor === player &&
          document.getElementById(`c${i + 3}r${j + 3}`).style
            .backgroundColor === player
        ) {
          alert(`${player === playerColor ? playerName : "Computer"} wins!`);
          location.reload();
        }
      }
    }
    for (let i = 1; i <= 4; i++) {
      for (let j = 6; j >= 4; j--) {
        if (
          document.getElementById(`c${i}r${j}`).style.backgroundColor ===
            player &&
          document.getElementById(`c${i + 1}r${j - 1}`).style
            .backgroundColor === player &&
          document.getElementById(`c${i + 2}r${j - 2}`).style
            .backgroundColor === player &&
          document.getElementById(`c${i + 3}r${j - 3}`).style
            .backgroundColor === player
        ) {
          alert(`${player === playerColor ? playerName : "Computer"} wins!`);
          location.reload();
        }
      }
    }
  }, 200);
}

function computerMove() {
  let columns = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"];
  let validMove = false;
  while (!validMove) {
    let col = columns[Math.floor(Math.random() * columns.length)];
    let sum = eval(`val_${col}`);
    if (sum <= 6) {
      document.getElementById(`${col}r${sum}`).style.backgroundColor =
        computerColor;
      eval(`val_${col}++`);
      validMove = true;
      turn++;
      check(computerColor);
      document.getElementById("whosturn").innerText = `${
        playerColor === "red" ? playerName : "Computer"
      }'s Turn`;
    }
  }
}

document.querySelectorAll(".column").forEach((e) => {
  e.addEventListener("click", () => {
    let sum = eval(`val_${e.id}`);
    eval(`val_${e.id}++`);
    if (sum <= 6 && turn % 2 !== 0) {
      document.getElementById(`${e.id}r${sum}`).style.backgroundColor =
        playerColor;
      turn++;
      check(playerColor);
      document.getElementById("whosturn").innerText = `${
        playerColor === "red" ? "Computer" : playerName
      }'s Turn`;
      setTimeout(computerMove, 500);
    }
  });
});
