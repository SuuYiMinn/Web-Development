@extends("layout.master")
@section("title","Unread Message Edit")
@section("body")
    @include('components.nav')
    <div class="p-4 sm:ml-64">
       
        <p class="text-2xl font-semibold opacity-70 mb-5">Edit Unread Message</p>
        <form action="/unmessage/{{ $unmessages->id }}" method="POST">
            @csrf
            @method("PUT")
            <div class="mb-6">
              <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <input type="text" name="unmDesc" value="{{ $unmessages->unm_desc }}" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
            </div>
            <div class="mb-6 flex flex-row space-x-5">
              <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">VIP Message</label>
              <input type="checkbox"
                  
             value="" @if ($unmessages->unm_vip == 1) checked
                 
             @endif  name="unmVip" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
            </div>
            <div class="mb-6">
              <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
              <input type="time" name="unmTime" value="{{ $unmessages->unm_time }}" id="" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
            </div>
            
          
            
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Message</button>
          </form>

           
       
        
    </div>
@endsection