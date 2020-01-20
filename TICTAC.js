const grids = document.querySelectorAll(".squares");
let turn = 0;
amount = 0;
for (let i = 0; i < grids.length; i++) {
  grids[i].addEventListener("click", function changeColor() {
    if (turn % 2 === 0) {
      if (
        grids[i].style.backgroundColor !== "blue" &&
        grids[i].style.backgroundColor !== "red"
      ) {
        grids[i].style.backgroundColor = "blue";
        if (
          grids[0].style.backgroundColor === "blue" &&
          grids[1].style.backgroundColor === "blue" &&
          grids[2].style.backgroundColor === "blue"
        ) {
          alert("blue won");
        } else if (
          grids[3].style.backgroundColor === "blue" &&
          grids[4].style.backgroundColor === "blue" &&
          grids[5].style.backgroundColor === "blue"
        ) {
          alert("blue won");
        } else if (
          grids[6].style.backgroundColor === "blue" &&
          grids[7].style.backgroundColor === "blue" &&
          grids[8].style.backgroundColor === "blue"
        ) {
          alert("blue won");
        } else if (
          grids[0].style.backgroundColor === "blue" &&
          grids[3].style.backgroundColor === "blue" &&
          grids[6].style.backgroundColor === "blue"
        ) {
          alert("blue won");
        } else if (
          grids[1].style.backgroundColor === "blue" &&
          grids[4].style.backgroundColor === "blue" &&
          grids[7].style.backgroundColor === "blue"
        ) {
          alert("blue won");
        } else if (
          grids[2].style.backgroundColor === "blue" &&
          grids[5].style.backgroundColor === "blue" &&
          grids[8].style.backgroundColor === "blue"
        ) {
          alert("blue won");
        } else if (
          grids[2].style.backgroundColor === "blue" &&
          grids[4].style.backgroundColor === "blue" &&
          grids[6].style.backgroundColor === "blue"
        ) {
          alert("blue won");
        } else if (
          grids[0].style.backgroundColor === "blue" &&
          grids[4].style.backgroundColor === "blue" &&
          grids[8].style.backgroundColor === "blue"
        ) {
          alert("blue won");
        } else {
          amount++;
          if (amount === 9) {
            alert("its atie");
          }
        }
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
        if (
          grids[0].style.backgroundColor === "red" &&
          grids[1].style.backgroundColor === "red" &&
          grids[2].style.backgroundColor === "red"
        ) {
          alert("red won");
        } else if (
          grids[3].style.backgroundColor === "red" &&
          grids[4].style.backgroundColor === "red" &&
          grids[5].style.backgroundColor === "red"
        ) {
          alert("red won");
        } else if (
          grids[6].style.backgroundColor === "red" &&
          grids[7].style.backgroundColor === "red" &&
          grids[8].style.backgroundColor === "red"
        ) {
          alert("red won");
        } else if (
          grids[0].style.backgroundColor === "red" &&
          grids[3].style.backgroundColor === "red" &&
          grids[6].style.backgroundColor === "red"
        ) {
          alert("red won");
        } else if (
          grids[1].style.backgroundColor === "red" &&
          grids[4].style.backgroundColor === "red" &&
          grids[7].style.backgroundColor === "red"
        ) {
          alert("red won");
        } else if (
          grids[2].style.backgroundColor === "red" &&
          grids[5].style.backgroundColor === "red" &&
          grids[8].style.backgroundColor === "red"
        ) {
          alert("red won");
        } else if (
          grids[2].style.backgroundColor === "red" &&
          grids[4].style.backgroundColor === "red" &&
          grids[6].style.backgroundColor === "red"
        ) {
          alert("red won");
        } else if (
          grids[0].style.backgroundColor === "red" &&
          grids[4].style.backgroundColor === "red" &&
          grids[8].style.backgroundColor === "red"
        ) {
          alert("red won");
        } else {
          amount++;
          if (amount === 9) {
            alert("its atie");
          }
        }
      } else {
        turn--;
      }
      turn++;
    }
  });
}

let button = document.querySelector(".button");
button.addEventListener("click", function resetGame() {
  for (let i = 0; i < grids.length; i++) {
    grids[i].style.backgroundColor = "white";
    amount = 0;
  }
});
