@extends ("layout.master")
@section("title","Room");
@section("body")

@include('components.nav')

<div class="p-4 sm:ml-64">
    <div class="flex justify-between mb-3">
        <p class="text-2xl font-semibold opacity-70">Room List </p>
        <a href="/room/create" class="mr-5 bg-blue-500 px-2 py-2 rounded-lg text-white">Add Room</a>
    </div>
  

  
<div class="relative overflow-x-auto clear-both">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Room Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Person
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" colspan="3" class="text-center px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            @forelse ($rooms as $room)
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span>Rm.</span>{{ $room->id }}
                </th>
                <td class="px-6 py-4">
                    @if ($room->r_status == 0)
                        Active
                    @elseif($room->r_status == 1)
                        Lock
                    @elseif($room->r_status == 2)
                        Available
                    @endif
                   
                </td>
                <td class="px-6 py-4">
                    @if ($room->r_status == 2)
                       none 
                    @else
                    {{ $room->r_person }}
                    @endif
                   
                </td>
                <td class="px-6 py-4">
                  <span>$</span> {{ $room->r_price }}
                </td>
                <td class=" py-4 text-center">
                    <a href="/room/{{ $room->id }}">
                        <svg fill="#FF5733" height="32" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title/><circle cx="22" cy="24" r="2"/><path class="cls-1" d="M22,28a4,4,0,1,1,4-4A4.0039,4.0039,0,0,1,22,28Zm0-6a2,2,0,1,0,2,2A2.0027,2.0027,0,0,0,22,22Z" data-name="&lt;inner path&gt;" id="_inner_path_"/><path d="M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z"/><path d="M12,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v4h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h4ZM18,4.4,23.6,10H18Z"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>
                    </a>
                </td>
                <td class=" py-4 text-center">
                    <a href="/room/{{ $room->id }}/edit">
                        <svg fill="#FF5733" class="w-6" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M78,60a5.9966,5.9966,0,0,0-6,6V84H12V24H30a6,6,0,0,0,0-12H6a5.9966,5.9966,0,0,0-6,6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,78,60Z"/><path d="M94.2422,13.7578l-12-12a5.9979,5.9979,0,0,0-8.4844,0l-36,36A5.9958,5.9958,0,0,0,36,42V54a5.9966,5.9966,0,0,0,6,6H54a5.9956,5.9956,0,0,0,4.2422-1.7578l36-36A5.9979,5.9979,0,0,0,94.2422,13.7578ZM51.5156,48H48V44.4844l30-30L81.5156,18Z"/></g></svg>
                    </a>
                </td>
                 <td class="py-4 text-center">
                    <form action="/room/{{ $room->id }}" method="POST">
                        @csrf
                        @method("DELETE")
                        <button type="submit" class="text-red-500 underline">
                            <svg fill="#FF5733" class="w-8" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0V0z" fill="none"/><path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
                        </button>
                    </form>
                    
                </td>
            </tr>   
            @empty
                <p class="text-red-500"> No Employee data.</p>
            @endforelse
            
           
            
        </tbody>
    </table>
</div>
<div class="mt-10 flex p-10 justify-center">
    {{ $rooms->links() }}
</div>


</div>


 
 
 
 
@endsection
    