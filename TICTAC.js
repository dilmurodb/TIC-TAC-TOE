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
        }
        // let blueArray =[];
        // blueArray.push(i);
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
        }
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

// let array1 = [0, 1, 2]
// let array2 = [3, 4, 5]
// let array3 = [6, 7, 8]
// let array4 = [0, 3, 6]
// let array5 = [1, 4, 7]
// let array6 = [2, 5, 8]
// let array7 = [0, 4, 8]
// let array8 = [2, 4, 6]
