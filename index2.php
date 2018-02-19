<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hangman2";

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
       //echo"connected";
     }
     if ($conn === false)
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }



if (isset($_GET['submit'])){
    session_start ();
    echo $_GET['name'];
}
    // Start the session
    //session_start ();

    // Save the POSTed value from the form in the session array.
    //echo $_POST['name'];

    // Save the POSTed value fromthe form in the session array, and a variable of its own.
  //  $userid = $_SESSION['userid'] = $_POST['userid'];


    // If we have a (non-empty) value in the user ID variable.
  //  if (!empty ($userid)) {
        // Show the login confirmation.
  //  }


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

<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hangman2";


  ////connect to the database
  $conn2 = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  $query = "SELECT * FROM words_available";
  $words = array();
  $sth = $conn2->query($query);
  while( $row = $sth->fetch(PDO::FETCH_ASSOC) ) {
    $words[] = $row; // appends each row to the array
  }

/*
  echo "<pre>";
  print_r($words);
  echo "</pre>";
*/
  //var_dump(count($words));
  ///echo(rand(0,count($words)));

  $pos = rand(0,count($words));
  //echo $pos;
////  echo $words[$pos]['word'];
?>


<script src="javascriptCode2.js"></script>
<script>

//chosing a word in the list
var wordChosen = '<?php echo $words[$pos]['word']; ?>';
console.log(wordChosen);
//defintion of that word chosen
var wordDefintion = '<?php echo $words[$pos]['definiton']; ?>';
console.log(wordDefintion);

func(wordChosen);
func2(wordDefintion);



      function updateScore() {
        //Thi Ajax section transfers the name and score that is given to be sent
        //to another files called updateDB.php which will then be able to update
        //and insert in to the database

        $.ajax({
          url: 'updateDB2.php',
          type: 'POST',
          dataType: "json",
          data: {
            name: $('#TypedPlayerName').val(),
            //word: $('#word').text(),
          ///  definition: $('#definition').text()


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
      <div id="MainTitle">Hangman</div>
      <p>by Monika Szucs</p>


      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8 text-center hangmanArtboard">
          <div class="alert-message block-message success span6 offset4 hangmanStaticArea">
            <div id="HangmanWhole"></div>
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>
      <p id="nameNeeded"></p>
    Please enter in your <span class="subTitles">name:</span>
      <form action="page2.php" method="get">
        <input id="TypedPlayerName" type="text" name="name"/><br/>
        <input type="submit" name="submit" id="enterGame" onclick="enterGame()"/>
      </form>
    </div>
  </div>
</div> <!-- End of First Page  -->


<div id="SecondPage"> <!-- Second Page  -->
  <!-- Playing Container Area -->
  <div id="playContainer">
    <div class="jumbotron text-center">
      <div id="MainTitle">Hangman</div>
      <p>by Monika Szucs</p>
      <p>Hi <span id="PlayerName"></span></p>
      <div id="MainTitle">
        Number of Guesses left: <span id="NumberGuesses"></span>
      </div>
    </div>

    <div class="container">

      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8 text-center hangmanArtboard">
          <div class="alert-message block-message success span6 offset4 hangmanStaticArea">
            <div id="stand"></div>
            <div id="headPart"></div>
            <div id="bodyPart"></div>
            <div id="leftArm"></div>
            <div id="rightArm"></div>
            <div id="leftLeg"></div>
            <div id="rightLeg"></div>
          </div>

        </div>
        <div class="col-sm-2"></div>
      </div>

    <span id="letterGuessingArea">
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
          <span class="subTitles">Word Guess:</span> <input type="text" name="typedWordGuess" id="typedWordGuess">
            <button id="submitTypedWordGuess" >Submit</button><span id="WordGuessWrong"></span><br>

          <button id="definitonArea" >Hint?</button><br>
            <span id="hintShown" class="subTitles text-danger"></span>
        </div>
        <div class="col-sm-2"></div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8 text-center">
          <span class="subTitles">Letter Guess:</span>
          <p id="wordGuessArea"></p>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </span>

    </div>
  </div> <!-- End of Second Page  -->

  <!-- Game Over Container Area -->
  <div id="gameOverContainer"> <!-- Game Over Page  -->
    <div class="jumbotron text-center">
      <h1>Game Over!</h1>
      <h2 id="word2"></h2>
      <div id="definition2"></div>
      <button id="playAgain">Play again</button>
    </div>
  </div> <!-- End of Game Over Page  -->


  <!-- Winner Container Area -->
  <div id="winnerContainer"> <!-- Winner Page  -->
    <div class="jumbotron text-center">
      <h1>You Win!</h1>
      <h2 id="word"></h2>
      <div id="definition"></div>
      <button id="restart">Play again</button>
    </div>
  </div> <!-- End of Winner Page  -->
</div>

<script src="javascriptCode2.js"></script>
</body>
</html>
