var calculateTime = function(keyboard, word) {
    var move= 0;
    var curr= 0;
    for(letter of word){
        move=move+Math.abs(keyboard.indexOf(letter) - curr);
        curr=keyboard.indexOf(letter);
    }
    return move;
};
