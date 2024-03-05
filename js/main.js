const gameBoard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]



})

const displayController = (() => {

 return{
  
 }   

})()

 //target's every "data-cell" within the html. has nothing to do with the gameboard array within gameBoard

 const createPlayer = (name, mark) => {
    return{
        name,
        mark
    }
 }; 


const Game = (() => { 
    let players = []

    //initiliaze the game off the start button
    const startGamebtn = document.querySelector("#start-Game");
    startGamebtn.addEventListener("click", () => {
    Game.start();
    
    })

    const start = () => {
        //first, the gameboard needs to be shown to the players 
        const showGameBoard = document.querySelector("main")
        showGameBoard.style.display = "block";
        gig
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O")
        ]
        
        //just needed to add the .innerHTML to have the name be displayed when it was attached to the appropriate ID

        let player1UserName = document.querySelector("#player1-username");  
        player1UserName.innerHTML = players[0].name
        let player2UserName = document.querySelector("#player2-username");  
        player2UserName.innerHTML = players[1].name
        
    }

    const handleClick = (e) => { //has to be initialized first before cellElements can call  upon it
        console.log("clicked")
        //place a marker
        //check for a win
        //check for a draw
        //switch turns
    }
    

    const cellElements = document.querySelectorAll('[data-cell]')
     cellElements.forEach((cell) => {
            cell.addEventListener('click', handleClick, {once: true}) //this makes it so once it's been clicked, it can't be clicked again
    })

    


    return{
        start,
    }
  
})();

//testing