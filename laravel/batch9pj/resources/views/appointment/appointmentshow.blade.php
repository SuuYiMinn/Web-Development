@extends ("layout.master")
@section("title","Drug Detail");
@section("body")

@include('components.nav')

<div class="p-4 sm:ml-64">
  <p class="text-2xl font-semibold opacity-70 mb-5">Appointment Information</p>
  <div class="leading-9">
    <p>Appointment Name: <span>{{ $appointment->a_name }}</span></p>
    <p>Appointment Room: {{ $appointment->a_room }}
      </p>
    <p>Time: {{ $appointment->a_date }} {{ $appointment->a_time }}</p>
    
  </div>
  <a href="/appointment" class="underline">back</a>
  

</div>


 
 
 
 
@endsection
    