<?php

$name = "fail";
$word = "fail";
$definition = "fail";

if( isset($_POST['name']) )
{
    $name = $_POST['name'];
     echo $_POST['name'];
} else{
  echo "fAILLLLLLLLLLLLLLLLLLLLLLLLLL";

}


if( isset($_POST['word']) )
{
    $word = $_POST['word'];
     echo $_POST['word'];
} else{
  echo "fAILLLLLLLLLLLLLLLLLLLLLLLLLL";

}

if( isset($_POST['definition']) )
{
    $definition = $_POST['definition'];
     echo $_POST['definition'];
} else{
  echo "fAILLLLLLLLLLLLLLLLLLLLLLLLLL";

}


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hangman";


	////connect to the database
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);





echo $name;


	$check = $conn->prepare("INSERT INTO player (name,score) VALUES ('". $name ."','11')");
	$check->execute();


  $last_id = $conn->lastInsertId();
  /*
   echo "New record created successfully. Last inserted ID is: " . $last_id;
*/
  $check2 = $conn->prepare("INSERT INTO word_guessed (id,word,definition) VALUES ('". $last_id ."','". $word ."','".$definition ."')");
	$check2->execute();


?>
