const gameBoard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    //incompleted. 

    // const render = () => {
    //    document.querySelector(".gameboard");
    //    const cells = document.querySelectorAll(".cells");
    //    cells.forEach((cell) =>{
    //     cell.addEventListener("click", )
    //    })
    // }

    // return {
    //     render,
    // }

})

const cellElements = document.querySelectorAll('[data-cell]') //target's every "data-cell" within the html. has nothing to do with the gameboard array within gameBoard


cellElements.forEach((cell) => {
    cell.addEventListener('click', handleClick, {once: true})//this makes it so once it's been clicked, it can't be clicked again
})

const startGame = document.querySelector("#start-Game");
startGame.addEventListener("click", () => {
Game.start();
})


function handleClick(e){
    console.log("clicked")
}


const Game = (() => { 
    const start = () => {
        //first, the gameboard needs to be shown to the players 

        const showGameBoard = document.querySelector("main")
        showGameBoard.style.display = "block";
    }

    return{
        start
    }
  
})();