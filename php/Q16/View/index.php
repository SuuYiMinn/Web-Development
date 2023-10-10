<?php
include "../Controller/indexController.php";
session_start();
$result = $_SESSION["room"];



?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="logo.jpg" type="image/x -icon" />
    <title>Dashboard</title>
    <script src="jquery3.6.0.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
  </head>
  <body>
    <div class="main">
      <div class="header">
        <span id="logo"><img src="logo.png" alt="" /></span>
        <span class="contact"
          >Care Center
          <p id="phone"><ion-icon name="call"></ion-icon> </p></span>
      </div>
      <div class="mainbody">
        <div class="nav">
          <div class="systemname">Sakura Hospital</div>
          <ul class="menu">
            <li class="active"><ion-icon name="apps"></ion-icon> Dashboard</li>
          <a href="./doctorlist.html">    <li><ion-icon name="git-network"></ion-icon> Doctor List</li></a>
          <a href="./roomView.html">  <li ><ion-icon name="bed"></ion-icon> Room View</li></a>
            <li><ion-icon name="newspaper"></ion-icon> News</li>
          </ul>
          <hr>
          <ul class="menu">
            <li><ion-icon name="calendar"></ion-icon> Appointment Form</li>
            <li><ion-icon name="git-network"></ion-icon> Doctor Form</li>
            <li><ion-icon name="medkit"></ion-icon> Drug Form</li>
            <li><ion-icon name="call"></ion-icon> Contact</li>
          </ul>
        </div>
        <div class="body">
          <p class="dashboard">Hospital Status</p>
          <div class="h_status">
            <div class="doctor">
              <ion-icon name="git-network"></ion-icon>
              <p class="name">Doctor</p>
              <p class="count" id="dcount"></p>
            </div>
            <div class="nurse">
              <ion-icon name="people-outline"></ion-icon>
              <p class="name">Nurse</p>
              <p class="count" id="ncount"></p>
            </div>
            <div class="room">
              <ion-icon name="bed-outline"></ion-icon>
              <p class="name">Bed</p>
              <p class="count" id="bcount"></p>
            </div>
          </div>
          <div class="detailstatus">
            <div class="status">
              <div class="title colorprimary bgsecondary">
                <ion-icon name="bed-outline"></ion-icon><span id="roomTitle"> </span>
              </div>
              <table class="table" id="room" class="table-fixed">
                <thead>
                  <tr class="border bg-gray-500 text-white">
                    <th>Name</th>
                    <th>Status</th>
                    <th>Person</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach($result as $room){ ?>

                  <tr class="border border-1">
                    <td class="p-3"><?= $room["Name"]; ?></td>
                    <td class="p-3"> <?= $room["Status"]; ?></td>
                    <td class="p-3"> <?= $room["Person"]; ?></td>
                    <td class="p-3"> <?= $room["Price"]; ?></td>
                    <td class="p-3 underline">
                      <a href="../Controller/userEditController.php?name=<?= $room["Name"]?>">Edit</a></td>
                  </tr>
                  <?php } ?>
                </tbody>
              </table>
              <a href="./user/add.php"> <button class="btn btnroom">Add Room</button></a>
            </div>
            <div class="status">
              <div class="title bgthird">
                <ion-icon name="mail-unread-outline"></ion-icon><span id="messageTitle"> </span>
              </div>
              <table class="table" id="message">
               
              </table>
              <button class="btn btnmessage">Read More</button>
            </div>
          </div>
          <div class="detailstatus">
            <div class="status">
              <div class="title colorprimary bgfouth">
              <ion-icon name="medkit"></ion-icon><span id="drugTitle">  Drug Store</span>
              </div>
              <table class="table">
                <tr>
                  <td>Alcohol</td>
                  <td>100 g</td>
                  <td>1100</td>
                  <td class="price">$1/per item</td>
                </tr>
                <tr>
                  <td>Ayahuasca</td>
                  <td>1 mg</td>
                  <td>200</td>
                  <td class="price">$20/per item</td>
                </tr>
                <tr>
                  <td>Central Nervous System Depressants</td>
                  <td>200 g</td>
                  <td>Out of stock</td>
                  <td class="price">$15/per item</td>
                </tr>
                <tr>
                  <td>Cocaine</td>
                  <td>60 mg</td>
                  <td>400</td>
                  <td class="price">$8/per item</td>
                </tr>
                <tr>
                  <td>Hallucinogens</td>
                  <td>50 mg</td>
                  <td>300</td>
                  <td class="price">$22/per item</td>
                </tr>
              </table>
              <button class="btn btndrug bgfouth">CHECK ALL</button>
              <button class="btn btndrug bgfouth"><ion-icon name="add-circle"></ion-icon> Add Drug</button>
            </div>
            <div class="status">
              <div class="title colorprimary btnappointment">
              <ion-icon name="calendar"></ion-icon><span id="appointmentTitle"> Appointment </span>
              </div>
              <table class="table">
                <tr>
                  <td>Meet Dr.Yamada Uke  (Skin).</td>
                  <td>Room 102</td>
                  <td class="price">2020/12/03 09:00 AM</td>
                </tr>
                <tr>
                <td>Meet Dr.Yamazaki Shizue  (lung).</td>
                  <td>Room 202</td>
                  <td class="price">2021/01/12 07:00 PM</td>
                </tr>
                <tr>
                  <td>Meet Dr.Kanagawa Aki  (Heart).</td>
                  <td>Room 401</td>
                  <td class="price">2021/02/21 11:00 AM</td>
                </tr>
              </table>
              <button class="btn btndrug btnappointment">SEE ALL</button>
              <button class="btn btndrug btnappointment"><ion-icon name="add-circle"></ion-icon> Add </button>
            </div>
        </div>
      </div>
    </div>
  </body>
</html>
