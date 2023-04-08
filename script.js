//selecting Elements
let player_0_ScoreEL = document.querySelector("#score--0");

let player_1_ScoreEL = document.querySelector("#score--1");

let player_0_CurrentScoreEL = document.querySelector("#current--0");

let player_1_CurrentScoreEL = document.querySelector("#current--1");

let diceEL = document.querySelector(".dice");

const rollButton = document.querySelector(".btn--roll")

const startButton = document.querySelector(".btn--new")

const holdButton = document.querySelector(".btn--hold");

const player0 = document.querySelector(".player--0");

const player1 = document.querySelector(".player--1");

//declaring variables to be able to assign them in a function
let scores,currentScore,playingState,activePlayer;



//reset the game
const initGame=()=>{
    
    scores=[0,0];
 currentScore = 0;
 playingState=true;
 activePlayer=0;

    document.querySelector(`.player--0`).classList.remove(`player--winner`);
    document.querySelector(`.player--1`).classList.remove(`player--winner`);
    document.querySelector(`.player--1`).classList.remove(`player--active`);
    document.querySelector(`.player--0`).classList.add(`player--active`);

 

player_0_ScoreEL.textContent = 0;
player_1_ScoreEL.textContent = 0;
player_0_CurrentScoreEL.textContent = 0;
player_1_CurrentScoreEL.textContent=0;
}

initGame();

//
rollButton.addEventListener("click", (e) => {
    //chcking if the game started or not 
    if (playingState) {
        
    //rooling random dice number
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    
    diceEL.src = `dice-${randomDice}.png`;
    diceEL.classList.remove(`hide`);
    //check if the dice number is 1 to start the other player turn
        if (randomDice !== 1) {

            currentScore += randomDice;

            document.getElementById(`current--${activePlayer}`)
            .textContent = currentScore;
        } else {
            swichingPlayer();
        }   
    
}

})

holdButton.addEventListener("click", (e) => {
    e.preventDefault;
if (playingState) {
    

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    if (scores[activePlayer] >= 100) {
        diceEL.classList.add(`hide`);
        playingState=false;

        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);

        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);

    }else{
        swichingPlayer();
    }
}
})


startButton.addEventListener("click",initGame)


//to set the  records to the new player
const swichingPlayer = () => {
    
document.getElementById(`current--${activePlayer}`).textContent = 0;

   activePlayer = activePlayer === 0 ? 1 : 0

   currentScore = 0;

   player1.classList.toggle("player--active");

    player0.classList.toggle("player--active");


    
}

