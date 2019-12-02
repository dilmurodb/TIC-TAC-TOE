// let allSquares = document.querySelectorAll(".squares")
// allSquares.addEventListener("click", function changeColor() {
//     console.log("hhhh")
// })

// this works but weired
const grids = document.querySelectorAll(".squares")
for (let i=0; i < grids.length; i++) {
    if (i % 2 === 0) {
        grids[i].addEventListener("click", function() {
        grids[i].style.backgroundColor = "blue"
    })} else {
        grids[i].addEventListener("click", function() {
            grids[i].style.backgroundColor = "red"
    })
    
    }
}

// const grids = document.querySelectorAll(".squares")
// for (let i=0; i < grids.length; i++) {
//     grids[i].addEventListener("click", function() {
//         grids[i].style.backgroundColor = "blue"
//     })
// }
