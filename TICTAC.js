//1st want to give every square an event listener
// 2nd want the event listener to dictate the changing of the colors based off the %

const grids = document.querySelectorAll(".squares");
let turn = 0;
for (let i = 0; i < grids.length; i++) {
  grids[i].addEventListener("click", function changeColor() {
    if (turn % 2 === 0) {
      if (
        grids[i].style.backgroundColor !== "blue" &&
        grids[i].style.backgroundColor !== "red"
      ) {
        grids[i].style.backgroundColor = "blue";
      } else {
        turn--;
      }
      turn++;
    } else {
      if (
        grids[i].style.backgroundColor !== "blue" &&
        grids[i].style.backgroundColor !== "red"
      ) {
        grids[i].style.backgroundColor = "red";
      } else {
        turn--;
      }
      // grids[i].style.backgroundColor = "red";
      turn++;
    }
  });
}

let button = document.querySelector(".button");
button.addEventListener("click", function resetGame() {
  for (let i = 0; i < grids.length; i++) {
    grids[i].style.backgroundColor = "white";
  }
});
