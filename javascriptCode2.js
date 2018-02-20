//console.log("THEEE WORD " + wordChosen);
//console.log("THEE DEFINTION " + wordDefinition);
var nameNeeded = document.getElementById("nameNeeded");

function enterGame() {

  if (TypedPlayerName.value.length) {
    FirstPage.style.display = "none";
    SecondPage.style.display = "block";
    PlayerName.innerHTML = TypedPlayerName.value;
  } else {
    nameNeeded.innerHTML = "Please enter your name!";
    nameNeeded.style.color = "red";
  }
  //FirstPage.style.display = "none";
  //SecondPage.style.display = "block";
  console.log(TypedPlayerName.value.length);
  //PlayerName.innerHTML = TypedPlayerName.value;
};