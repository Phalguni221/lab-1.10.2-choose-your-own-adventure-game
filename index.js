let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
}if(secondAnswer === 'follow'){
    let thirdAnswer = window.prompt("You come across a room full of treasures and mysteries! You lucky cat!!(Type OK to continue)")

} else if(secondAnswer === "continue"){
    let thirdAnswer = window.prompt("Go straight ahead to reach the golden door!")

} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
        let thirdAnswer = window.prompt("Keep walking until you reach the Golden Door")
    }




let userScore = 0;

for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}

window.alert('Your score is: '+userScore)

let serializedGames = localStorage.getItem('games')

let games;
if(serializedGames === null){
    games = [] 
} else {
    games = JSON.parse(serializedGames)
}

let game = {
    user: userName,
    score: userScore
}

games.push(game)

serializedGames = JSON.stringify(games)
localStorage.setItem('games', serializedGames)

let highestScoringGame = games[0]
for(let i = 0; i < games.length; i++){
    let game = games[i]
    if(game.score > highestScoringGame.score){
        highestScoringGame = game
    }
}
window.alert('The high score is: '+highestScoringGame.score)
