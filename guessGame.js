
let enterButton = document.querySelector('#enterButton');
let againButton = document.querySelector('#againButton');
let output = document.querySelector('.outputText');
let exitGame = document.querySelector('#exitGame');

let random = Math.floor(Math.random() * 10)+1;

function checkGuessFunction() {
    let input = document.querySelector('#input').value;
    
    if (input == random) {
        output.innerHTML = "Congratulations!<br>You guessed right " + ", <br>" + " The random number was indeed " + random;
        output.style.color = "navajowhite";
    } else if (input > random && input < 10) {
        output.innerHTML = "You guessed too high";
    } else if (input < random && input > 1) {
        output.innerHTML = "You guessed too low";
    } else if (input < 1 || input > 10) {
        output.innerHTML = "Invalid!!!<br> you can only guess<br> between 1 and 10";
    } else if (isNaN(input)) {
        output.innerHTML = "That is not a number";
    }
}

enterButton.addEventListener('click', checkGuessFunction);
againButton.addEventListener('click', function(){
    location.reload();
})
exitGame.addEventListener('click', function(){
    location.reload();
    output.innerHTML = "Game exited";
})
