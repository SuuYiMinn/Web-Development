@extends ("layout.master")
@section("title","Edit Room");
@section("body")

@include('components.nav')

<div class="p-4 sm:ml-64">
  <div class="text-white px-8 py-8 pb-16 mx-4 mt-4 text-left bg-gray-600 rounded-xl shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
    <p class="text-2xl font-semibold opacity-70 mb-5">Edit Room</p>
  
<form action="/room/{{ $room->id }}" method="POST">
  @csrf
  @method("PUT")
  <div class="mb-6">
    <label for="" class="block mb-2 text-white text-sm font-medium text-gray-900 dark:text-white">Room Status</label>
    <select name="rStatus" id="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <option value="0" 
      @if ($room->r_status == "0")
          selected
      @endif
      >Active</option>
      <option value="1"
      @if ($room->r_status == "1")
          selected
      @endif
      >Lock</option>
      <option value="2"
      @if ($room->r_status == "2")
          selected
      @endif
      >Available</option>
    </select>
  </div>
  <div class="mb-6">
    <label for="" class="block mb-2 text-sm text-white font-medium text-gray-900 dark:text-white">Person</label>
    <input type="number" value="{{ $room->r_person }}" name="rPerson" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
  </div>
  <div class="mb-6">
    <label for="" class="block mb-2 text-white text-sm font-medium text-gray-900 dark:text-white">Room Price</label>
<div class="flex flex-row space-x-5">
  <input type="number" value="{{ $room->r_price }}" name="rPrice" id="" class=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
  <span class="mt-2 text-lg">$</span>
</div>
    
  </div>
  

  
  <button type="submit" class="float-right text-white bg-blue-700 mb-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Room</button>
</form>

  </div>
  

</div>


 
 
 
 
@endsection
    