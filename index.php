<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hangman";

/*
$servername = "db722005311.db.1and1.com";
$username = "dbo722005311";
$password = "Super101";
$dbname = "db722005311";
*/

//Connecting to the database
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
     if ($conn){
       echo"connected";
     }
     if ($conn === false)
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Hangman</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="stylize.css">
  <script src="jquery.min.js"></script>
  <script src="bootstrap.min.js"></script>

</head>
<body>

  <script>
        function updateScore() {
          //Thi Ajax section transfers the name and score that is given to be sent
          //to another files called updateDB.php which will then be able to update
          //and insert in to the database


          $.ajax({
            url: 'updateDB.php',
            type: 'POST',
            dataType: "json",
            data: {
              name: $('#TypedPlayerName').val(),
              word: $('#word').text(),
              definition: $('#definition').text()
              ///number: $('#scoreTextHidden').val(),
              ////name: $('#nameText').val(),
            },
            success: function(data) {
              console.log("data coming back is ", data);

              /*
              if (Number($("#nameMaxHidden").val()) < Number($('#scoreTextHidden').val())) {
                $("#maxName").html($('#nameText').val());
                $("#maxValue").html($('#scoreTextHidden').val());
              }
              */
            },
            error: function(err) {
              console.log(err);
            }
          })
          //window.location.reload(true);
        }
  </script>


<div id="FirstPage"> <!-- First Page  -->
  <div id="playContainer">
    <div class="jumbotron text-center">
      <h1>Hangman</h1>
      <p>by Monika Szucs</p>


      <span>Please enter in your name:</span>
        <input id="TypedPlayerName" type="text" name="name"/><br/>
        <button name="submit" onclick="enterGame()" >Enter</button>


    </div>
  </div>
</div> <!-- End of First Page  -->


<div id="SecondPage"> <!-- Second Page  -->
  <!-- Playing Container Area -->
  <div id="playContainer">
    <div class="jumbotron text-center">
      <h1>Hangman</h1>
      <p>by Monika Szucs</p>
      <p>Hi <span id="PlayerName"></span></p>
      <div>
        Number of Guesses left: <span id="NumberGuesses"></span>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8 text-center">
          <p id="findingLetters"></p>
        </div>
        <div class="col-sm-2"></div>
      </div>
      <div class="row top-buffer">
        <div class="col-sm-2"></div>
        <div class="col-sm-8 text-center ">
          <p>Word Guess: <input type="text" name="typedWordGuess" id="typedWordGuess">
            <button id="submitTypedWordGuess" >Submit</button><br></p>
        </div>
        <div class="col-sm-2"></div>
      </div>
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8 text-center">
          Letter Guess:
          <p id="wordGuessArea"></p>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div> <!-- End of Second Page  -->

  <!-- Game Over Container Area -->
  <div id="gameOverContainer"> <!-- Game Over Page  -->
    <div class="jumbotron text-center">
      <h1>Game Over!</h1>
      <h2 id="word2"></h2>
      <span id="definition2"></span>
      <button id="playAgain">Play again</button>
    </div>
  </div> <!-- End of Game Over Page  -->


  <!-- Winner Container Area -->
  <div id="winnerContainer"> <!-- Winner Page  -->
    <div class="jumbotron text-center">
      <h1>You Win!</h1>
      <button id="restart">Play again</button>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8 text-center">
          <h2 id="word"></h2>
          <span id="definition"></span>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div> <!-- End of Winner Page  -->
</div>
<script src="javascriptCode.js"></script>
</body>
</html>
