// let allSquares = document.querySelectorAll(".squares")
// allSquares.addEventListener("click", function changeColor() {
//     console.log("hhhh")
// })

// this works but weired


//1st want to give every square an event listener
// 2nd want the event listener to dictate the changing of the colors based off the %
const grids = document.querySelectorAll(".squares")
let turn = 0
//Works but wierd
// for (let j=0; j<grids.length; j++) {
//     grids[j].addEventListener("click", function changeColor() {
//     for (let i=0; i<grids.length; i++) {
//         if ( turn % 2 === 0) {
//             grids[i].addEventListener("click", function blue() {
//                 grids[i].style.backgroundColor = "blue";
//                 turn++
//             })
//         } else {
//             grids[i].addEventListener("click", function red() {
//                 grids[i].style.backgroundColor = "red";
//                 turn++
//             })
//         }
//     }
// })
// }
for (let i=0; i<grids.length; i++) {
    grids[i].addEventListener("click", function changeColor() {
        if (turn % 2 === 0) {
            grids[i].style.backgroundColor = "blue";
            turn++
        } else {
            grids[i].style.backgroundColor = "red";
            turn++
        }
    })
}
















// for (let i= 0; i < grids.length; i++) {
//     if (turn % 2 === 0) {
//         grids[i].addEventListener("click", function blue() {
//         grids[i].style.backgroundColor = "blue"
//         turn++
//         console.log(turn)
//     })} else if (turn % 2 === 1){
//         grids[i].addEventListener("click", function red() {
//             grids[i].style.backgroundColor = "red"
//             console.log(turn)
//     })
    
//     }
// }


// grids[i].addEventListener("click", function blue() {
//     for (let i= 0; i < grids.length; i++) {
//         if (turn % 2 === 0) {

//             grids[i].style.backgroundColor = "blue"
//             turn++
//         })} else if (turn % 2 === 1){
//             grids[i].addEventListener("click", function red() {
//                 grids[i].style.backgroundColor = "red"
//                 console.log(turn)
//         })
        
//         }

//     }
// })




// const grids = document.querySelectorAll(".squares")
// for (let i=0; i < grids.length; i++) {
//     grids[i].addEventListener("click", function() {
//         grids[i].style.backgroundColor = "blue"
//     })
// }
