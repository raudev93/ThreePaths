function computerPlay(){
    return Math.round(Math.random() * 3)
}
function getPlayerSelection(){
    return formatSelection(prompt("Choise your Path"))
}
function formatSelection(selection){
    return selection.toLowerCase()
}

function playRound(playerSelection,computerSelection){
    
}

function game(){
    for(let i = 0; i< 5; i++){
        console.log(`Round: ${i+1}`)
        // const playerSelection = getPlayerSelection()
        // const computerSelection = computerPlay()
        // const result = playRound(playerSelection,computerSelection)
    }
}
game()