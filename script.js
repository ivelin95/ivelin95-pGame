var globalScore = [0, 0];
var currentScrore = 0;
var activePLayer = 0;
var winnigscore;
var roll = document.querySelector("#rollDice");
var picdice = document.querySelector(".dice");
var hold = document.querySelector("#hold")
var newgamebtn = document.querySelector(".newgamebutton")


function rollDice() {
    //set current score to 0
    document.querySelector(".currentscore" + activePLayer).textContent = 0
    let rolldicenumber = Math.floor(Math.random() * 6 + 1);

    if (rolldicenumber !== 1) {

        currentScrore += rolldicenumber
        document.querySelector(".currentscore" + activePLayer).textContent = currentScrore
        console.log(globalScore)
        console.log(currentScrore);
        
    } else {
       
        nextPlayer()
        console.log(globalScore)
        console.log(currentScrore);
    }
    picdice.src = "dice-" + rolldicenumber + ".png";
    picdice.style.display = "block";

}

roll.addEventListener("click", rollDice)

function pressHold() {

 
    globalScore[activePLayer] += currentScrore;
    document.getElementById("score" + activePLayer).textContent = globalScore[activePLayer]
    winner();
    currentScrore = 0
    document.querySelector(".currentscore" + activePLayer).textContent = "0"
    console.log(globalScore)
    console.log(currentScrore);
    nextPlayer();
    /*
        if (activePLayer == 1) {
            globalScore[activePLayer] += currentScrore;
            document.getElementById("score" + activePLayer).textContent = globalScore[activePLayer]
            //  globalScore[activePLayer] += parseInt(scoreplayer);
            //currentScrore= 0
            currentScrore = 0
            activePLayer = 0
            document.querySelector(".currentscore" + activePLayer).textContent = currentScrore
            document.querySelector(".dot-left").classList.toggle("active")
            document.querySelector(".dot-right").classList.toggle("active")
            console.log(globalScore)
    
        } else if (activePLayer == 0) {
            globalScore[activePLayer] += currentScrore;
            document.getElementById("score" + activePLayer).textContent = globalScore[activePLayer]
    
    
            currentScrore = 0
            activePLayer = 1
            document.querySelector(".currentscore" + activePLayer).textContent = currentScrore
            document.querySelector(".dot-left").classList.toggle("active")
            document.querySelector(".dot-right").classList.toggle("active")
    
    
        }
        */
}
hold.addEventListener("click", pressHold)


function nextPlayer() {
    activePLayer === 0 ? activePLayer += 1 : activePLayer = 0

    document.querySelector(".currentscore" + activePLayer).textContent = "0"

    document.querySelector(".dot-left").classList.toggle("active")
    document.querySelector(".dot-right").classList.toggle("active")
    picdice.style.display = "none";
}

function winner() {
 winnigscore = document.querySelector(".winnigscore").value

    for (i = 0; i < globalScore.length; i++) {
        if (globalScore[i] >= winnigscore) {
            document.querySelector(".winner" + i).textContent = "WINNER !!!";
            roll.disabled = true;
            hold.disabled = true;
        }
    }
}

function newGame() {
    //reset scores
     globalScore = [0,0];
     currentScrore = 0;
     activePLayer = 0;

    document.querySelector(".currentscore0").textContent = "0"
    document.querySelector(".currentscore1").textContent = "0"
    document.getElementById("score0").textContent = "0"
    document.getElementById("score1").textContent = "0"
    document.querySelector(".winner0").textContent= "PLAYER 1"
    document.querySelector(".winner1").textContent= "PLAYER 2"
    roll.disabled = false;
    hold.disabled = false;
    console.log(globalScore)
    console.log(currentScrore);
    console.log(activePLayer)
}
newgamebtn.addEventListener("click", newGame)
