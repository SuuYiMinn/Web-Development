@extends ("layout.master")
@section("title","Drug Detail");
@section("body")

@include('components.nav')

<div class="p-4 sm:ml-64">
  <p class="text-2xl font-semibold opacity-70 mb-5">Drug Information</p>
  <div class="leading-9">
    <p>Drug Name: <span>{{ $drug->d_name }}</span></p>
    <p>Weight: {{ $drug->d_weight }}
      </p>
    <p>Quantity: <span> @if ($drug->d_quantity == 0)
        out of stocks
     @else
     {{ $drug->d_quantity }}
     @endif</span></p>
    <p>Price: <span>${{ $drug->d_price}}</span>/per Item</p>
  </div>
  <a href="/drug" class="underline">back</a>
  

</div>


 
 
 
 
@endsection
    