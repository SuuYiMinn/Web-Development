@extends("layout.master")
@section("title","Unread Message")
@section("body")
    @include('components.nav')
    <div class="p-4 sm:ml-64">
        <div class="flex flex-row justify-between mb-5">
            <p class="text-2xl font-semibold opacity-70">Unread Message List </p>
            <a href="/unmessage/create" class="mr-5 bg-blue-500 px-2 py-2 rounded-lg text-white">Add Message</a>
        </div>
        <div class="relative overflow-x-auto clear-both">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Message
                        </th>
                        <th scope="col" class="px-6 py-3">
                            VIP Message
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Time
                        </th>
                        <th scope="col" colspan="3" class="text-center px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($unmessages as $unmess)
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {{ $unmess->unm_desc }}
                        </th>
                        <td class="px-6 py-4">
                            @if ($unmess->unm_vip == 0)
                                No
                            @elseif ($unmess->unm_vip == 1)
                            Yes
                            @endif
                           
                        </td>
                        <td class="px-6 py-4">
                            {{ $unmess->unm_time }}
                        </td>
                        <td class="px-6 py-4 text-center">
                            <a href="/unmessage/{{ $unmess->id }}" class="text-blue-500 underline">view</a>
                        </td>
                        <td class="px-6 py-4 text-center">
                            <a href="/unmessage/{{ $unmess->id }}/edit" class="text-blue-500 underline">edit</a>
                        </td>
                         <td class="px-6 py-4 text-center">
                            <form action="/unmessage/{{ $unmess->id }}" method="POST">
                                @csrf
                                @method("DELETE")
                                <button type="submit" class="text-red-500 underline">delete</button>
                            </form>
                            
                        </td>
                    </tr>   
                    @empty
                        <p class="text-red-500"> No Message data.</p>
                    @endforelse
                    
                   
                    
                </tbody>
            </table>
        </div>
        <div class="mt-10 flex p-10 justify-center">
            {{ $unmessages->links("pagination::tailwind") }}
        </div>
        
        
    </div>
@endsection