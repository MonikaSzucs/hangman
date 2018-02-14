//array storage area
var words = ["foltfic", "subjoin", "alcoved", "aliquot", "elution",
  "frijole", "hyaline", "kalopsia", "lacuna", "saorsa"
]
var definitions = ["relating to electricity produced by chemical action in battery",
  "add information at the end of a speech or text.", "the wall of a room or of a garden",
  "a portion of a larger whole",
  "the process of extracting one material from another by washing with a solvent",
  "beans", "having glassy, translucent appearance",
  "the delusion of things being more beutiful than they really are", "a blank space",
  "freedom,liberty"
]
var letters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];

//grab button area
var buttons = document.getElementById("buttons");

//chosing a word in the list
var wordChosen = words[Math.floor(Math.random() * 10)];
console.log(wordChosen);
//defintion of that word chosen
var wordDefintion = definitions[Math.floor(Math.random() * 10)];
console.log(wordDefintion);

var playContainer = document.getElementById("playContainer");
var gameOverContainer = document.getElementById("gameOverContainer");
var winnerContainer = document.getElementById("winnerContainer");
playContainer.style.display = "block";
gameOverContainer.style.display = "none";
winnerContainer.style.display = "none";

var typedWordGuess = document.getElementById("typedWordGuess");
var submitTypedWordGuess = document.getElementById("submitTypedWordGuess");

var FirstPage = document.getElementById("FirstPage");
var SecondPage = document.getElementById("SecondPage");
FirstPage.style.display = "block";
SecondPage.style.display = "none";

var TypedPlayerName = document.getElementById("TypedPlayerName");



function enterGame() {
  FirstPage.style.display = "none";
  SecondPage.style.display = "block";
  console.log(TypedPlayerName.value);
  PlayerName.innerHTML = TypedPlayerName.value;
}

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

submitTypedWordGuess.addEventListener("click", function() {
  console.log(typedWordGuess.value.toLowerCase());
  console.log(wordChosen);
  if (wordChosen === typedWordGuess.value.toLowerCase()) {

    word.innerHTML = wordChosen;
    definition.innerHTML = wordDefintion;

    playContainer.style.display = "none";
    gameOverContainer.style.display = "none";
    winnerContainer.style.display = "block";


    updateScore();
  }

})

playAgain.addEventListener("click", function() {
  window.location.reload();
  console.log("PLAY AGAIN");
})

restart.addEventListener("click", function() {
  window.location.reload();
  console.log("PLAY AGAIN");
})

var NumberGuesses = document.getElementById("NumberGuesses");

function numberGuessesMinus() {
  NumberGuesses.innerHTML = (7 - clicks);
}

var stand = document.getElementsByClassName("stand");
var headPart = document.getElementById("headPart");
var bodyPart = document.getElementById("bodyPart");
var leftArm = document.getElementsByClassName("leftArm");
var rightarm = document.getElementsByClassName("rightarm");
var leftLeg = document.getElementsByClassName("leftLeg");
var rightLeg = document.getElementsByClassName("rightLeg");

headPart.style.display = "none";
bodyPart.style.display = "none";

function images() {
  if (clicks === 1) {
    headPart.style.display = "block";
  }
  if (clicks === 2) {
    bodyPart.style.display = "block";
  }


}


id0.addEventListener("click", function() {
  console.log("a");
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
      console.log("NONE a found")
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";

    word.innerHTML = wordChosen;
    definition.innerHTML = wordDefintion;

    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id1.addEventListener("click", function() {
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
      console.log("NONE b found")
    }

  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word.innerHTML = wordChosen;
    definition.innerHTML = wordDefintion;
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id2.addEventListener("click", function() {
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
      console.log("NONE c found")
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word.innerHTML = wordChosen;
    definition.innerHTML = wordDefintion;
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id3.addEventListener("click", function() {
  console.log("d");
  if (!id3.disabled && clicks < 7) {
    id3.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "d") printOnScreen("d", i);
    }
    if (!wordChosen.match(/d/g)) {
      clicks += 1;
      images();
      console.log("NONE d found")
    }

  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word.innerHTML = wordChosen;
    definition.innerHTML = wordDefintion;
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id4.addEventListener("click", function() {
  console.log("e");
  if (!id4.disabled && clicks < 7) {
    id4.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "e") printOnScreen("e", i);
    }
    if (!wordChosen.match(/e/g)) {
      clicks += 1;
      images();
      console.log("NONE e found")
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    word.innerHTML = wordChosen;
    definition.innerHTML = wordDefintion;
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id5.addEventListener("click", function() {
  console.log("f");
  if (!id5.disabled && clicks < 7) {
    id5.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "f") printOnScreen("f", i);
    }
    if (!wordChosen.match(/f/g)) {
      clicks += 1;
      images();
      console.log("NONE f found")
    }

  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id6.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id7.addEventListener("click", function() {
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
    }

  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id8.addEventListener("click", function() {
  console.log("i");
  if (!id8.disabled && clicks < 7) {
    id8.disabled = 'disabled';
    for (var i = 0; i < wordChosen.length; i++) {
      if (wordChosen[i] === "i") printOnScreen("i", i);
    }
    if (!wordChosen.match(/i/g)) {
      clicks += 1;
      images();
      console.log("NONE i found");
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id9.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    updateScore();
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id10.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id11.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id12.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id13.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id14.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id15.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id16.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id17.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id18.addEventListener("click", function() {
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
    }
    clicks += 1;
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id19.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id20.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id21.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id22.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id23.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id24.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})

id25.addEventListener("click", function() {
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
    }
  }
  if (clicks >= 7) {
    playContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  console.log(clicks);
  console.log(7 - clicks);
  numberGuessesMinus();
})