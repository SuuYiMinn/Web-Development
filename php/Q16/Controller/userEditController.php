<?php
session_start();
$name = $_GET["name"];
if(!isset($name)){
    header("Location: ../View/errors/error.php");
}else{
    include "../Model/model.php";
    $sql = $pdo->prepare(
    "
        SELECT * FROM room WHERE name = :name
    "
    );
    $sql->bindValue(":name",$name);
    $sql->execute();
    $_SESSION["edituser"] = $sql->fetchAll(PDO::FETCH_ASSOC);
    header ("Location: ../View/user/edit.php");
     
}
?>