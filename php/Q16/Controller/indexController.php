<?php
// DB Connection
include "../Model/model.php";
$sql = $pdo->prepare(
    "SELECT * FROM room;"
  );
  $sql->execute();
  
  // $result = $sql->fetchAll(PDO::FETCH_ASSOC);
  //DB Connection
  // echo "<pre>";
  // print_r($result);
  $_SESSION["room"] = $sql->fetchAll(PDO::FETCH_ASSOC);
  header("Location: ../View/index.php");

?>