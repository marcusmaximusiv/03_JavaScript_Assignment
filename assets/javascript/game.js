/*
Pseudocode
1) Create code for html and css (check)
2) Create Javscript functionality
        1) create global variables 
        2) create javascript functionality for playing the Avengers theme music
        3) create function to create random letter and make user guess then print append it to letter choices
        4) create function to check if on key up is a win or and loss subtracts from guess word
        5) 

*/

//Game Object
var game{
    heroes= [
        "hulk",
        "wolverine",
        "antman",
        "spiderman",
        "thor",
        "dr.strange"
    ],
    guesses = 10,
    letter_guess = [],
    index,
    guessed_word = [],
    guesses_remain = 10,
    start = false,
    finished = false,
    wins = 0
};

function reset() {
    game.guesses_remain = guesses;
    game.start = false;
    game.WordIndex = Math.floor(Math.random() * (heroes.length));
    game.guessed_word = [];
    game.letter_guess = [];
    game.guesses = 10;
    for (var i = 0; i < heroes[index].length){
        guessed_word.append("_");
    }
};

function display(){
    document.getElementById("wins");
    document.getE

}









