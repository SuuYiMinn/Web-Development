<?php
session_start();
$userdata = $_SESSION["edituser"];
// print_r($userdata);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>add Room</title>
</head>
<body>
    <div class="text-2xl font-semibold mt-10 ml-10">Edit User</div>
  <form class="p-20" action="../../Controller/userUpdateController.php" method="post">
  <div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text"name="name"
    value="<?php echo $userdata[0]["Name"] ?>"
    class="block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
    <input type="text" name="status"
    value="<?php echo $userdata[0]["Status"] ?>"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div>
    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Person</label>
    <input type="number" name="person"
    value="<?php echo $userdata[0]["Person"] ?>"
     class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div>
    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input type="text" name="price"
    value="<?php echo $userdata[0]["Price"] ?>"
     class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<a href=""> <button type="submit" class="bg-blue-700 p-5 rounded text-white mt-10 ml-[100px]">Update</button></a>


  </form> 
  <a href="../../Controller/userDeleteController.php?name=<?= $userdata[0]["Name"] ?>">
  <button type="submit" class="bg-red-700 p-5 rounded text-white ml-[180px]">Delete</button>
</a>

</body>
</html>