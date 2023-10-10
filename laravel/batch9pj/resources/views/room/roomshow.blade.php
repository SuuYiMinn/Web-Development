@extends ("layout.master")
@section("title","Room Detail");
@section("body")

@include('components.nav')

<div class="p-4 sm:ml-64">

      <div class="text-white px-8 py-6 mx-4 mt-4 text-left bg-gray-600 rounded-xl shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <p class="text-2xl font-semibold opacity-70 mb-5">Room Information</p>
        <div class="leading-9 py-3">
          <p>Room Name: <span>Rm.{{ $room->id }}</span></p>
          <p>Status:
            <span>
              @if ($room->r_status == 0)
              Active
              @elseif($room->r_status == 1)
              Lock
              @elseif($room->r_status == 2)
              Available
              @endif
      
            </span>
          </p>
          <p>Person: <span> @if ($room->r_status == 2)
            none 
          @else
          {{ $room->r_person }}
          @endif</span>
          </p>
          <p>Price: <span>${{ $room->r_price}}</span></p>
          <a href="/room" class="underline text-white float-right">back</a>
        </div>

      </div>
      
        

    
    
  

</div>


 
 
 
 
@endsection
    