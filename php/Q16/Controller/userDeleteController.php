<?php
$name = $_GET["name"];
echo $name;
include "../Model/model.php";
$sql = $pdo->prepare(
    "
    DELETE FROM room WHERE name = :name
    "

);
$sql->bindValue(":name",$name);
$sql->execute();
header("Location: ./indexController.php");
?>