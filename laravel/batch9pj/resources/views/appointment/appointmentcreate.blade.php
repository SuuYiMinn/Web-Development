@extends ("layout.master")
@section("title","Add Appointment");
@section("body")

@include('components.nav')

<div class="p-4 sm:ml-64">
  <p class="text-2xl font-semibold opacity-70 mb-5">Add Appointment</p>
  
<form action="/appointment" method="POST">
  @csrf
  
    <div class="mb-6">
      <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment Name</label>
      <input type="text" name="aName" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
    </div>
  
  <div class="mb-6">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Name</label>
    <input type="number" name="aRoom" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
  </div>
  <div class="mb-6 flex flex-row space-x-3">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
    <input type="Date" name="aDate" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
    <input type="Time" name="aTime" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required>
  </div>
  
  

  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Appointment</button>
</form>

</div>


 
 
 
 
@endsection
    