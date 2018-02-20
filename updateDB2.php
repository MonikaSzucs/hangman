<?php

$name = "fail";
$myScore = "0";



if( isset($_POST['name']) )
{
    $name = $_POST['name'];
     echo $_POST['name'];
} else{
  echo "fAILLLLLLLLLLLLLLLLLLLLLLLLLL";

}

if( isset($_POST['myScore']) )
{
    $myScore = $_POST['myScore'];
     echo $_POST['myScore'];
} else{
  echo "fAILLLLLLLLLLLLLLLLLLLLLLLLLL";

}






$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hangman2";


	////connect to the database
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



	$check = $conn->prepare("INSERT INTO player (name,score) VALUES ('". $name ."','". $myScore."')");
	$check->execute();


  //$last_id = $conn->lastInsertId();
  /*
   echo "New record created successfully. Last inserted ID is: " . $last_id;
*/

/*
  $check2 = $conn->prepare("INSERT INTO word_guessed (id,word,definition) VALUES ('". $last_id ."','". $word ."','".$definition ."')");
	$check2->execute();
  */

?>
