
// Creating random generator 
var randomNumber1 = (Math.random() * 6) + 1;  // 1-6
randomNumber1 = Math.floor(randomNumber1);

// Selecting an image according to the random number 
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-6

var randomImageSource = "images/" + randomDiceImage; // images/dice.png - images/dice.png


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Creating random generator 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // 1-6

// Selecting an image according to the random number 
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //dice1-6

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){

    document.querySelector("h1").innerHTML = "🥳 Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "🥴 Draw! ";
}


