//set random numbers for each gem (1-15)
var red = Math.floor(Math.random()*14+1)
var blue = Math.floor(Math.random()*14+1)
var green = Math.floor(Math.random()*14+1)
var purple = Math.floor(Math.random()*14+1)

//define global variable to save result
var currentScore = 0;
var wins = 0;
var losses = 0;
var targetScore = 0;
var button = $('.button');

//start game function
function startGame() {
    currentScore = 0;
    $('#userScore').text(currentScore);

    $('#wins').text(wins);
    $('#losses').text(losses);

//create random number between 20-120 to be shown when user starts game
    var targetScore = Math.floor(Math.random() * 101) + 19;
    console.log("Number is: " + targetScore);
//append random number to html
    $('#scoreTarget').text(targetScore);


//arry with 4 random nubers between 1-15
var buttonVal = [];
for (var i = 0; i < 4; i++) {
    buttonVal.push(Math.round(Math.random() * 12))
    console.log(buttonVal);
}
    $('#red').attr('value', buttonVal[0]);

    $('#blue').attr('vlaue', buttonVal[1]);

    $('#green').attr('value', buttonVal[2]);

    $('#purple').attr('value', buttonVal[3]);
}
startGame();

//game play and start function
var playGame = function(){
    currentScore = currentScore + (Number($(this).attr('value')));
    $('#userScore').text(currentScore);

    if (currentScore === targetScore){
        $('#userScore').text(currentScore)
        wins++;
        $('#wins').text(wins);
    }
    else if(currentScore) 
}



//set on click function for gems
$('#red').on("click", function() {
    userTotal = userTotal + redGem;
    console.log("Current user total: " + userTotal);
//print out current total to html
    $('#total').text(userTotal);
//if statement for current conditions
    if (userTotal == Random) {
        won();
    }
    else if(userTotal > Random){
        lost();
    }
});

$('#blue').on("click", function() {
    userTotal = userTotal + blueGem;
    console.log("Current user total: " + userTotal);
    $('#total').text(userTotal);
    if (userTotal == Random) {
        won();
    }
    else if (userTotal > Random) {
        lost();
    }
});

$('#green').on("click", function() {
    userTotal = userTotal + greenGem;
    console.log("Current user total: " + userTotal);
    $('#total').text(userTotal);
    if (userTotal == Random) {
        won();
    }
    else if (userTotal > Random) {
        lost();
    }
});

$('#purple').on("click", function() {
    userTotal = userTotal + purpleGem;
    console.log("Current user total: " + userTotal);
    $('#total').text(userTotal);
    if (userTotal == Random) {
        won();
    }
    else if (userTotal > Random) {
        lost();
    }

});


});