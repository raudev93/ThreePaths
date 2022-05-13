const paths = ["rock","paper","scissor"]
function computerPlay(){
    const randomChoice = Math.floor(Math.random() * 3)
    return paths[randomChoice]
}
function getPlayerSelection(){
    return formatSelection(prompt("Choise your Path"))
}
function formatSelection(selection){
    return selection.toLowerCase()
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return "It's a Tie"
    }
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            return "You Lose! Paper beats Rock"
        }
        else{
            return "You Win! Rock beats Scissor"
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "scissor"){
            return "You Lose! Scissor beats Paper"
        }
        else{
            return "You Win! Paper beats Rock"
        }
    }
    else{
        if(computerSelection === "rock"){
            return "You Lose! Rock beats Scissor"
        }
        else{
            return "You Win! Scissor beats Paper"
        }
    }
}

function game(){
    for(let i = 0; i< 5; i++){
        console.log(`Round: ${i+1}`)
        const playerSelection = getPlayerSelection()
        const computerSelection = computerPlay()
        const result = playRound(playerSelection,computerSelection)
        console.log(result)
    }
}
game()