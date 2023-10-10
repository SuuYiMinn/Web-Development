@extends("layout.master")
@section("title","Home Page")
@section("body")
<h1 class="bg-red-500 text-white font-semibold text-9xl">Welcome Home Page</h1>

@forelse ($users as $user)
@if ($loop->even)
<p>No.{{  $loop -> iteration }}</p> 
@else
<p class="text-blue-800">No.{{  $loop -> iteration }}</p> 
@endif

<p> {{ $loop -> index }}</p>
<p>{{  $loop -> iteration }}</p>
<p>{{  $loop -> count }}</p>
@if (($loop -> index) == 0)
    This is first line.
@endif
<p class="text-green-400">Username: {{ $user["name"] }} </p>
<p>Userage: {{ $user["age"] }}</p>
@if ($user["married"])
<p>married</p>
@else <p>single</p>
@endif 
@if ($loop->last)
    <hr/>
@endif   
@empty
<p>No users</p>
@endforelse


@endsection
