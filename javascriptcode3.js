function func(wordChosen) {
  console.log("My val " + wordChosen);
  var wordChosen = wordChosen;
};

function func2(wordDefinition) {
  console.log("My def " + wordDefinition);
  var wordDefinition = wordDefinition;
};







var playContainer = document.getElementById("playContainer");
var gameOverContainer = document.getElementById("gameOverContainer");
var winnerContainer = document.getElementById("winnerContainer");
playContainer.style.display = "block";
gameOverContainer.style.display = "none";
winnerContainer.style.display = "none";

var letters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];


//grab button area
var buttons = document.getElementById("buttons");

var TypedPlayerName = document.getElementById("TypedPlayerName");

for (i = 0; i < wordChosen.length; i++) {
  var box = document.createElement("SPAN");
  box.id = 'idLetter' + i;
  box.innerHTML = "_";
  box.style.marginRight = "5px";
  document.getElementById("findingLetters").appendChild(box);
}


function myButtons() {
  for (i = 0; i < letters.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.id = 'id' + i;
    btn.innerHTML = letters[i];
    document.getElementById("wordGuessArea").appendChild(btn);
  }
}

function printOnScreen(letter, i) {
  var givenID = "idLetter" + i;
  document.getElementById(givenID).innerHTML = letter;
}
myButtons();

var clicks = 0;
var wordGuessArea = document.getElementById("wordGuessArea");

var playAgain = document.getElementById("playAgain");
var restart = document.getElementById("restart");

var word = document.getElementById("word");
var definition = document.getElementById("definition");

var word2 = document.getElementById("word2");
var definiton2 = document.getElementById("definiton2");

var letterGuessingArea = document.getElementById("letterGuessingArea");
var WordGuessWrong = document.getElementById("WordGuessWrong");


var stand = document.getElementById("stand");
var headPart = document.getElementById("headPart");
var bodyPart = document.getElementById("bodyPart");
var leftArm = document.getElementById("leftArm");
var rightArm = document.getElementById("rightArm");
var leftLeg = document.getElementById("leftLeg");
var rightLeg = document.getElementById("rightLeg");



stand.style.display = "none";
headPart.style.display = "none";
bodyPart.style.display = "none";
leftArm.style.display = "none";
rightArm.style.display = "none";
leftLeg.style.display = "none";
rightLeg.style.display = "none";

var score = parseInt(document.getElementById("myScore").value);
console.log(score);

var scoreShown = document.getElementById("scoreShown");


submitTypedWordGuess.addEventListener("click", function() {
  console.log(typedWordGuess.value.toLowerCase());
  console.log(wordChosen);
  console.log(typedWordGuess.value.length);
  if (typedWordGuess.value.length > 0) {
    if (wordChosen === typedWordGuess.value.toLowerCase()) {

      word.innerHTML = wordChosen;
      definition.innerHTML = wordDefintion;

      playContainer.style.display = "none";
      gameOverContainer.style.display = "none";
      winnerContainer.style.display = "block";
      letterGuessingArea.style.display = "none";

      score += 50;
      scoreShown.innerHTML = score;

    } else {
      score -= 50;
      scoreShown.innerHTML = score;

      clicks += 1;
      console.log("clicks " + clicks)
      numberGuessesMinus();
      images()
      WordGuessWrong.innerHTML = "Guess Again!";

      console.log("Over " + clicks)
      if (clicks >= 7) {

        console.log("7 guesses");
        letterGuessingArea.style.display = "none";
        gameOverContainer.style.display = "block";

        word2.innerHTML = wordChosen;
        definition2.innerHTML = wordDefintion;

      }

    }
  } else {
    WordGuessWrong.innerHTML = "Must type something!";
  }


})



playAgain.addEventListener("click", function() {
  //window.location.reload();
  console.log("PLAY AGAIN");
  console.log(myStorage);
  imagesReset();
  //document.getElementById("enterGame").click();


  playContainer.style.display = "block";
  gameOverContainer.style.display = "none";
  winnerContainer.style.display = "none";
  letterGuessingArea.style.display = "block";
})

function rest() {

}

restart.addEventListener("click", function() {

  console.log("PLAY AGAIN");
})

var NumberGuesses = document.getElementById("NumberGuesses");
NumberGuesses.innerHTML = 7;

function numberGuessesMinus() {
  NumberGuesses.innerHTML = (7 - clicks);
}


function imagesReset() {
  stand.style.display = "none";
  headPart.style.display = "none";
  bodyPart.style.display = "none";
  leftArm.style.display = "none";
  rightArm.style.display = "none";
  leftLeg.style.display = "none";
  rightLeg.style.display = "none";
}

function images() {
  if (clicks === 1) {
    stand.style.display = "block";
  } else if (clicks === 2) {
    headPart.style.display = "block";
  } else if (clicks === 3) {
    bodyPart.style.display = "block";
  } else if (clicks === 4) {
    leftArm.style.display = "block";
  } else if (clicks === 5) {
    rightArm.style.display = "block";
  } else if (clicks === 6) {
    leftLeg.style.display = "block";
  } else if (clicks === 7) {
    rightLeg.style.display = "block";
    letterGuessingArea.style.display = "none"
  }

}

function updateScore2() {
  document.getElementById("myScore").value = score;
  document.getElementById("myScore2").value = score;
}



id0.addEventListener("click", function() {
  console.log("a");
  id0.style.backgroundColor = "#A9A9A9";
  id0.style.border = "none";

  if (!id0.disabled && clicks < 7) {
    id0.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "a") {
        printOnScreen("a", i);

      }
    }
    //console.log(wordChosen.match(/i/g));
    if (!wordChosen.match(/a/g)) {
      clicks += 1;
      images();
      console.log("NONE a found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";

    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;



  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id1.addEventListener("click", function() {
  id1.style.backgroundColor = "#A9A9A9";
  id1.style.border = "none";
  console.log("b");
  if (!id1.disabled && clicks < 7) {
    id1.disabled = 'disabled';

    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "b") printOnScreen("b", i);

    }

    //console.log(wordChosen.match(/i/g));
    if (!wordChosen.match(/b/g)) {
      clicks += 1;
      images();
      console.log("NONE b found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }

  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id2.addEventListener("click", function() {
  id2.style.backgroundColor = "#A9A9A9";
  id2.style.border = "none";
  console.log("c");
  if (!id2.disabled && clicks < 7) {
    id2.disabled = 'disabled';

    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "c") printOnScreen("c", i);

    }
    //console.log(wordChosen.match(/i/g));
    if (!wordChosen.match(/c/g)) {
      clicks += 1;
      images();
      console.log("NONE c found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id3.addEventListener("click", function() {
  id3.style.backgroundColor = "#A9A9A9";
  id3.style.border = "none";
  console.log("d");
  if (!id3.disabled && clicks < 7) {
    id3.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "d") printOnScreen("d", i);

    }
    if (!wordChosen.match(/d/g)) {
      clicks += 1;
      images();
      console.log("NONE d found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }

  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id4.addEventListener("click", function() {
  id4.style.backgroundColor = "#A9A9A9";
  id4.style.border = "none";
  console.log("e");
  if (!id4.disabled && clicks < 7) {
    id4.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "e") printOnScreen("e", i);

    }
    if (!wordChosen.match(/e/g)) {
      clicks += 1;
      images();
      console.log("NONE e found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id5.addEventListener("click", function() {
  id5.style.backgroundColor = "#A9A9A9";
  id5.style.border = "none";
  console.log("f");
  if (!id5.disabled && clicks < 7) {
    id5.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "f") printOnScreen("f", i);

    }
    if (!wordChosen.match(/f/g)) {
      clicks += 1;
      images();
      console.log("NONE f found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }

  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id6.addEventListener("click", function() {
  id6.style.backgroundColor = "#A9A9A9";
  id6.style.border = "none";
  console.log("g");
  if (!id6.disabled && clicks < 7) {
    id6.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "g") printOnScreen("g", i);

    }
    if (!wordChosen.match(/g/g)) {
      clicks += 1;
      images();
      console.log("NONE g found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id7.addEventListener("click", function() {
  id7.style.backgroundColor = "#A9A9A9";
  id7.style.border = "none";
  console.log("h");
  if (!id7.disabled && clicks < 7) {
    id7.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "h") printOnScreen("h", i);

    }
    if (!wordChosen.match(/h/g)) {
      clicks += 1;
      images();
      console.log("NONE h found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }

  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id8.addEventListener("click", function() {
  id8.style.backgroundColor = "#A9A9A9";
  id8.style.border = "none";
  console.log("i");
  if (!id8.disabled && clicks < 7) {
    id8.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "i") printOnScreen("i", i);
      else {
        score += 20;
        console.log("score: " + score);
      }
    }
    if (!wordChosen.match(/i/g)) {
      clicks += 1;
      images();
      console.log("NONE i found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id9.addEventListener("click", function() {
  id9.style.backgroundColor = "#A9A9A9";
  id9.style.border = "none";
  console.log("j");
  if (!id9.disabled && clicks < 7) {
    id9.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "j") printOnScreen("j", i);

    }
    if (!wordChosen.match(/j/g)) {
      clicks += 1;
      images();
      console.log("NONE j found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;

  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id10.addEventListener("click", function() {
  id10.style.backgroundColor = "#A9A9A9";
  id10.style.border = "none";
  console.log("k");
  if (!id10.disabled && clicks < 7) {
    id10.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "k") printOnScreen("k", i);

    }
    if (!wordChosen.match(/k/g)) {
      clicks += 1;
      images();
      console.log("NONE k found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id11.addEventListener("click", function() {
  id11.style.backgroundColor = "#A9A9A9";
  id11.style.border = "none";
  console.log("l");
  if (!id11.disabled && clicks < 7) {
    id11.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "l") printOnScreen("l", i);

    }
    if (!wordChosen.match(/l/g)) {
      clicks += 1;
      images();
      console.log("NONE l found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id12.addEventListener("click", function() {
  id12.style.backgroundColor = "#A9A9A9";
  id12.style.border = "none";
  console.log("m");
  if (!id12.disabled && clicks < 7) {
    id12.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "m") printOnScreen("m", i);

    }
    if (!wordChosen.match(/m/g)) {
      clicks += 1;
      images();
      console.log("NONE m found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id13.addEventListener("click", function() {
  id13.style.backgroundColor = "#A9A9A9";
  id13.style.border = "none";
  console.log("n");
  if (!id13.disabled && clicks < 7) {
    id13.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "n") printOnScreen("n", i);
    }
    if (!wordChosen.match(/n/g)) {
      clicks += 1;
      images();
      console.log("NONE n found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id14.addEventListener("click", function() {
  id14.style.backgroundColor = "#A9A9A9";
  id14.style.border = "none";
  console.log("o");
  if (!id14.disabled && clicks < 7) {
    id14.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "o") printOnScreen("o", i);

    }
    if (!wordChosen.match(/o/g)) {
      clicks += 1;
      images();
      console.log("NONE o found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id15.addEventListener("click", function() {
  id15.style.backgroundColor = "#A9A9A9";
  id15.style.border = "none";
  console.log("p");
  if (!id15.disabled && clicks < 7) {
    id15.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "p") printOnScreen("p", i);
    }
    if (!wordChosen.match(/p/g)) {
      clicks += 1;
      images();
      console.log("NONE p found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id16.addEventListener("click", function() {
  id16.style.backgroundColor = "#A9A9A9";
  id16.style.border = "none";
  console.log("q");
  if (!id16.disabled && clicks < 7) {
    id16.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "q") printOnScreen("q", i);
    }
    if (!wordChosen.match(/q/g)) {
      clicks += 1;
      images();
      console.log("NONE q found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id17.addEventListener("click", function() {
  id17.style.backgroundColor = "#A9A9A9";
  id17.style.border = "none";
  console.log("r");
  if (!id17.disabled && clicks < 7) {
    id17.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "r") printOnScreen("r", i);
    }
    if (!wordChosen.match(/r/g)) {
      clicks += 1;
      images();
      console.log("NONE r found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id18.addEventListener("click", function() {
  id18.style.backgroundColor = "#A9A9A9";
  id18.style.border = "none";
  console.log("s");
  if (!id18.disabled && clicks < 7) {
    id18.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "s") printOnScreen("s", i);
    }
    if (!wordChosen.match(/s/g)) {
      clicks += 1;
      images();
      console.log("NONE s found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
    clicks += 1;
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id19.addEventListener("click", function() {
  id19.style.backgroundColor = "#A9A9A9";
  id19.style.border = "none";
  console.log("t");
  if (!id19.disabled && clicks < 7) {
    id19.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "t") printOnScreen("t", i);
    }
    if (!wordChosen.match(/t/g)) {
      clicks += 1;
      images();
      console.log("NONE t found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id20.addEventListener("click", function() {
  id20.style.backgroundColor = "#A9A9A9";
  id20.style.border = "none";
  console.log("u");
  if (!id20.disabled && clicks < 7) {
    id20.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "u") printOnScreen("u", i);
    }
    if (!wordChosen.match(/u/g)) {
      clicks += 1;
      images();
      console.log("NONE u found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id21.addEventListener("click", function() {
  id21.style.backgroundColor = "#A9A9A9";
  id21.style.border = "none";
  console.log("v");
  if (!id21.disabled && clicks < 7) {
    id21.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "v") printOnScreen("v", i);
    }
    if (!wordChosen.match(/v/g)) {
      clicks += 1;
      images();
      console.log("NONE v found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id22.addEventListener("click", function() {
  id22.style.backgroundColor = "#A9A9A9";
  id22.style.border = "none";
  console.log("w");
  if (!id22.disabled && clicks < 7) {
    id22.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "w") printOnScreen("w", i);
    }
    if (!wordChosen.match(/w/g)) {
      clicks += 1;
      images();
      console.log("NONE w found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id23.addEventListener("click", function() {
  id23.style.backgroundColor = "#A9A9A9";
  id23.style.border = "none";
  console.log("x");
  if (!id23.disabled && clicks < 7) {
    id23.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "x") printOnScreen("x", i);

    }
    if (!wordChosen.match(/x/g)) {
      clicks += 1;
      images();
      console.log("NONE x found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id24.addEventListener("click", function() {
  id24.style.backgroundColor = "#A9A9A9";
  id24.style.border = "none";
  console.log("y");
  if (!id24.disabled && clicks < 7) {
    id24.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "y") printOnScreen("y", i);
    }
    if (!wordChosen.match(/y/g)) {
      clicks += 1;
      images();
      console.log("NONE y found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id25.addEventListener("click", function() {
  id25.style.backgroundColor = "#A9A9A9";
  id25.style.border = "none";
  console.log("z");
  if (!id25.disabled && clicks < 7) {
    id25.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "z") printOnScreen("z", i);
    }


    if (!wordChosen.match(/z/g)) {
      clicks += 1;
      images();
      console.log("NONE z found");
      score -= 10;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    } else {
      score += 20;
      console.log("score: " + score);
      scoreShown.innerHTML = score;
    }


  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word2.innerHTML = wordChosen;
    definition2.innerHTML = wordDefintion;
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})