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
$score = 0;
$name = "";

if(isset($_POST['name']))
{
  $name = $_POST['name'];

}

if (isset($_POST['score'])) {
   //echo "Your firstname is " . $_POST['score'] . "<br>";

   $score = $_POST["score"];
 } else {
    //echo "Your score is " . $score . "<br>";
 }

//Connecting to the database
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
     if ($conn){
       //echo"connected";



       //page2.php?name=newww&playagain=true
       $query = "SELECT * FROM words_available";
       $words = array();
       $sth = $conn->query($query);
       while( $row = $sth->fetch(PDO::FETCH_ASSOC) ) {
         $words[] = $row; // appends each row to the array
       }


       $pos = rand(0,count($words)-1);

     }
     if ($conn === false)
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
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

<script>

//chosing a word in the list
var wordChosen = '<?php echo $words[$pos]['word']; ?>';
console.log(wordChosen);
//defintion of that word chosen
var wordDefintion = '<?php echo $words[$pos]['definiton']; ?>';
//console.log(wordDefintion);
function func(wordChosen) {
  //console.log("My val " + wordChosen);
  var wordChosen = wordChosen;
};

function func2(wordDefinition) {
  //console.log("My def " + wordDefinition);
  var wordDefinition = wordDefinition;
};
func(wordChosen);
func2(wordDefintion);








      function updateScore() {
        console.log("UPDATE THIS SCORE");
        //Thi Ajax section transfers the name and score that is given to be sent
        //to another files called updateDB.php which will then be able to update
        //and insert in to the database

        $.ajax({
          url: 'updateDB2.php',
          type: 'POST',
          dataType: "json",
          data: {
            name: $('#playAgain').val(),
            myScore: $('#myScore').val(),
            //score: $('#')
            ////word: $('#word').text(),
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

<div id="SecondPage"> <!-- Second Page  -->
  <!-- Playing Container Area -->
  <div id="playContainer">
    <div class="jumbotron text-center">

      <div class="row">
        <div class="col-sm-2">by Monika Szucs</div>
        <div id="MainTitle" class="col-sm-8 text-center">Hangman</div>
        <div class="col-sm-2">Hi: <span id="PlayerName">
          <?php
              echo $name;
           ?>
        </span></div>
      </div>

      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8 text-center h4">Score: <span id="scoreShown"></span></div>
        <div class="col-sm-2"></div>
      </div>

      <div class="h2">
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

      <div class="jumbotron text-center">
        <div class="row">
          <div class="col-sm-2">by Monika Szucs</div>
          <div id="MainTitle" class="col-sm-8 text-center">Hangman</div>
          <div class="col-sm-2">Hi: <span id="PlayerName">
            <?php
                echo $name;
             ?>
          </span></div>
        </div>
      </div>

      <h1>Game Over!</h1>
      <h2 id="word2"></h2>
      <div id="definition2"></div>

      <form method="post" action="http://localhost/hangmanFeb20/hangman/page2.php" class="inline">
        <input  id="myScore" type="hidden" name="score" value="<?php echo $score?>">
        <button onclick="updateScore2(); updateScore()" id="playAgain" type="submit" name="name" value="<?php echo $name?>" class="link-button">
          Play Again
        </button>
      </form>

    </div>

  </div> <!-- End of Game Over Page  -->




  <!-- Winner Container Area -->
  <div id="winnerContainer"> <!-- Winner Page  -->
    <div class="jumbotron text-center">

      <div class="jumbotron text-center">
        <div class="row">
          <div class="col-sm-2">by Monika Szucs</div>
          <div id="MainTitle" class="col-sm-8 text-center">Hangman</div>
          <div class="col-sm-2">Hi: <span id="PlayerName">
            <?php
                echo $name;
             ?>
          </span></div>
        </div>
      </div>

      <h1>You Win!</h1>
      <h2 id="word"></h2>
      <div id="definition"></div>

      <form method="post" action="http://localhost/hangmanFeb20/hangman/page2.php" class="inline">
        <input  id="myScore2" type="hidden" name="score" value="<?php echo $score?>">
        <button onclick="updateScore2(); updateScore()" id="restart" type="submit" name="name" value="<?php echo $name?>" class="link-button">
          Play Again
        </button>
      </form>

    </div>
  </div> <!-- End of Winner Page  -->
</div>

<script src="javascriptCode3.js"></script>
</body>
</html>
