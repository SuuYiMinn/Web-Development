@extends("layout.master")
@section("title","Unread Message Detail")
@section("body")
    @include('components.nav')
    <div class="p-4 sm:ml-64">
       
        <p class="text-2xl font-semibold opacity-70 mb-5">Unread Message Information</p>
        <div class="leading-9">
          <p>Message:{{ $unmessages->unm_desc }}</p>
          <p>VIP : @if ($unmessages->unm_vip == 0)
              No
              @elseif($unmessages->unm_vip == 1)
              Yes
          @endif</p>
          <p>Time :{{ $unmessages->unm_time }}</p>
          
        </div>
        <a href="/unmessage" class="underline">back</a>
    </div>
@endsection