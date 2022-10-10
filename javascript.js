console.log("Hello world!");

                function getComputerChoice(){
                        //Function randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
                        const choices = ['Rock', 'Paper', 'Scissors'];
                        let random = Math.floor(Math.random()*choices.length);
                        return choices[random];
                }

                function playRound(playerSelection, computerSelection) {
                         // return a string that declares the winner.
                         if((playerSelection.toLowerCase() === "rock")&& (computerSelection.toLowerCase() === "scissors")){
                                return "You Win! Rock beats Scissors";
                         }
                         else if((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")){
                                return "You Win! Paper beats Rock";
                         }
                         else if((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "paper")){
                                return "You Win! Scissors beats Paper";
                         }
                         else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
                                return "Same choices! Play again";
                         }
                         else{
                                 return "You Lose!";
                         }
                }

                function draw(){
                        let playerSelection = prompt("Rock, Paper or Scissors...?", "rock");
                        const computerSelection = getComputerChoice();
                        let gameRound = playRound(playerSelection, computerSelection);
                        console.log(gameRound);
                        return gameRound;
                }

                function game(){
                        let score = 0;
                        let i = 0;
                        for (let i = 0; i < 5; i++) {
                        // your code here!
                                let playerSelection = prompt("Rock, Paper or Scissors...?", "rock");
                                const computerSelection = getComputerChoice();
                                let gameRound = playRound(playerSelection, computerSelection);
                                console.log(gameRound);
                                if(gameRound.indexOf("Win") != -1){
                                        score += 1;
                                }
                                else if(gameRound.indexOf("Same") != -1){

                                        let result = draw();
                                        while(result.indexOf("Same") != -1){
                                                result = draw();
                                        }
                                        if(result.indexOf("Win") != -1){
                                                score += 1;
                                        }
                                         
                                }

                        }
                        if(score >= 3){
                                console.log("Congratulations! You are Winner, Computer lose." );
                        }
                        else{
                                console.log("Unfortunately, Computer is Winner.");
                        }

                }
 
                //const playerSelection = "rock";
                //console.log(playerSelection);
                //const computerSelection = getComputerChoice();
                //console.log(computerSelection);
                //console.log(playRound(playerSelection, computerSelection));
                game();