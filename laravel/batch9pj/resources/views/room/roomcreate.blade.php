@extends ("layout.master")
@section("title","Add Room");
@section("body")

@include('components.nav')

<div class="p-4 sm:ml-64">
  <div class="text-white px-8 py-8 pb-16 mx-4 mt-4 text-left bg-gray-600 rounded-xl shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
    <p class="text-2xl font-semibold opacity-70 mb-5">Add Room</p>
  
    <form action="/room" method="POST">
      @csrf
      <div class="mb-6">
        <label for="" class="block mb-2 text-sm text-white font-medium text-gray-900 dark:text-white">Room Status</label>
        <select name="rStatus" id="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <option value="0">Active</option>
          <option value="1">Lock</option>
          <option value="2">Available</option>
        </select>
      </div>
      <div class="mb-6">
        <label for="" class="block mb-2 text-sm text-white font-medium text-gray-900 dark:text-white">Person</label>
        <input type="number" name="rPerson" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
      </div>
      <div class="mb-6">
        <label for="" class="block mb-2 text-sm text-white font-medium text-gray-900 dark:text-white">Room Price</label>
        <div class="flex flex-row space-x-3">
          <input type="number" name="rPrice" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
        <span class="text-lg mt-2">$</span>
        </div>
        
      </div>
      
    
      
      <button type="submit" class="text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Room</button>
    </form>
  </div>


</div>


 
 
 
 
@endsection
    