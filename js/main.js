


const gameBoard = (() => {
    let gameboard = []
    let boardHTML = document.getElementsByClassName("cells") //grabs a bunch of classes and places them into an array
    for (i = 0; i < boardHTML.length; i++){
        gameboard.push(boardHTML[i])
    }
    console.log(gameboard)
    const render = () => { //this was just a for loop before, but a vid said to place the loading of the board into a render function
    }


    return{
        render
    }
    //loop through cells class
    //assign each cell class an index number
    //push all off those classes into the gameboard array


  


})();


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

    //this only seems to work when it is down here. No idea why unfortunately 

    const handleClick = (event) => { //has to be initialized first before cellElements can call  upon it
            console.log(event)
        //stuck at handleclick.
    
        //current issues a) unsure as to why copying all code from here and below the const cells, and placing them under render why no click event is registered

        //b) how do I have it so that the correct array index is shown

        //one possible solution, is to use the "the odin project guide" and go to the end to recall how he debugs things
    }
    
    const cells = document.querySelectorAll('.cells')
        cells.forEach((individualcell) => {
        individualcell.addEventListener("click", handleClick)
        
        })



    return{
        start,
        handleClick
    }
  
})();

//test

//test 1:19pm

//repository test