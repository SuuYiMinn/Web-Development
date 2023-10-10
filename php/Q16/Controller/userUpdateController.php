<?php
ini_set('display_errors',1);
// echo "<pre>";
// print_r($_POST);

// Direct Access?
if(count($_POST) == 0){
    header("Location: ../View/errors/error.php");
}else{
    $name = $_POST["name"];
    $status = $_POST["status"];
    $person = $_POST["person"];
    $price = $_POST["price"];

    include "../Model/model.php";
    $sql = $pdo->prepare(
    "
    UPDATE room SET
     name = :name,
     status = :status,
     person = :person,
     price = :price
     WHERE name= :name;
    "
    );
    $sql->bindValue(":name",$name);
    $sql->bindValue(":status",$status);
    $sql->bindValue(":person",$person);
    $sql->bindValue(":price",$price);

    $sql->execute();
    header("Location: ../View/index.php");
}
?>