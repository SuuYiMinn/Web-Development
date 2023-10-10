@extends("layout.master")
@section("title","Dashboard");
@section("body")
    @include("components.nav");
    <div class="px-4 py-0 sm:ml-64 ">
        <div class="flex flex-row mx-2">
            <div class = "w-full lg:w-1/3 p-2">
                <div class = "flex items-center justify-center flex-row w-full bg-gray-600  rounded-md p-3">
                    <div class = "flex flex-row justify-center items-center space-x-3 flex-grow text-white">
                        <svg class="w-10 h-7" fill= white class="" data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M18,5V3a1,1,0,0,0-2,0V5H8V3A1,1,0,0,0,6,3V5H2V21H22V5Zm2,14H4V7H20ZM9,10H7v2H9Zm0,4H7v2H9Zm8-4H11v2h6Zm0,4H11v2h6Z"/></svg>
                        <div class = "text-lg whitespace-nowrap">
                            Appointment
                        </div>
                    </div>
                </div>
            </div>
            <div class = "w-full lg:w-1/3 p-2">
                <div class = "flex items-center justify-center flex-row w-full bg-gray-600 rounded-md p-3">
                    <div class = "flex flex-row justify-center items-center space-x-3 flex-grow text-white">
                        <svg class="w-10 h-5" fill = "white" height="1407px" style="enable-background:new 0 0 1691 1407;" version="1.1" viewBox="0 0 1691 1407" width="1691px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="packet"><path d="M1691,165.177C1691,73.952,1617.048,0,1525.823,0H165.177C73.952,0,0,73.952,0,165.177v1076.646   C0,1333.048,73.952,1407,165.177,1407h1360.646c91.225,0,165.177-73.952,165.177-165.177V165.177z M166.062,132h1361.057   c18.216,0,32.881,14.528,32.881,32.746v1.433L869.916,856.337c-8.417,8.417-18.208,9.675-23.318,9.675   c-5.11,0-14.934-1.258-23.353-9.675L133,166.085v-1.339C133,146.528,147.846,132,166.062,132z M1527.119,1275H166.062   c-18.216,0-33.062-15.084-33.062-33.301V352.961l596.826,596.816c31.198,31.197,72.684,48.376,116.803,48.376   c44.125-0.003,85.528-17.186,116.724-48.382L1560,353.054v888.645C1560,1259.916,1545.335,1275,1527.119,1275z"/></g><g id="Layer_1"/></svg>
                        <div class = "text-lg whitespace-nowrap">
                            Message
                        </div>
                    </div>
                </div>
            </div>
            <div class = "w-full lg:w-1/3 p-2">
                <div class = "flex items-center justify-center flex-row w-full bg-gray-600 rounded-md p-3">
                    <div class = "flex flex-row justify-center items-center space-x-3 flex-grow text-white">
                        <svg class="w-10 h-6" fill= "white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M17.167,16.155a2.5,2.5,0,0,0-3.535,0l-.385.384A46.692,46.692,0,0,1,7.458,10.75l.385-.385a2.5,2.5,0,0,0,0-3.536L5.721,4.708a2.5,2.5,0,0,0-3.535,0L1.022,5.872a3.51,3.51,0,0,0-.442,4.4A46.932,46.932,0,0,0,13.722,23.417a3.542,3.542,0,0,0,4.4-.442l1.165-1.164a2.5,2.5,0,0,0,0-3.535Z"/><path d="M11.5,0a1,1,0,0,0,0,2A10.512,10.512,0,0,1,22,12.5a1,1,0,1,0,2,0A12.515,12.515,0,0,0,11.5,0Z"/><path d="M11.5,6A6.508,6.508,0,0,1,18,12.5a1,1,0,0,0,2,0A8.51,8.51,0,0,0,11.5,4a1,1,0,1,0,0,2Z"/><path d="M11.5,10A2.5,2.5,0,0,1,14,12.5a1,1,0,0,0,2,0A4.505,4.505,0,0,0,11.5,8a1,1,0,1,0,0,2Z"/></svg>
                        <div class = "text-lg whitespace-nowrap">
                            Care Center
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        <div class="flex flex-row mx-2">
            <div class = "w-full lg:w-1/3 p-2">
                <div class = "flex items-center justify-between flex-row w-full bg-gray-600 rounded-md p-10">
                    <div class = "flex flex-row items-center space-x-3 flex-grow text-white">
                        <svg class="w-10 h-8" fill ="white" enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28,23v7H4v-7c0-2.209,1.791-4,4-4h3.018c-0.396,0.629-0.692,1.331-0.851,2.09C8.361,21.475,7,23.08,7,25v1.5  C7,26.776,7.224,27,7.5,27h2c0.276,0,0.5-0.224,0.5-0.5c0-0.276-0.224-0.5-0.5-0.5H9v-1c0-1.214,1.086-2.178,2.338-1.972  C12.321,23.19,13,24.115,13,25.112L13,26h-0.5c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5  V25c0-1.781-1.179-3.277-2.791-3.793c0.252-0.887,0.774-1.646,1.458-2.207h5.55c1.347,1.106,1.493,2.345,1.66,3.345  C20.348,22.705,20,23.312,20,24c0,1.243,1.133,2.221,2.423,1.957c0.741-0.152,1.358-0.753,1.525-1.491  c0.222-0.979-0.278-1.862-1.064-2.252c-0.168-1.007-0.256-1.948-1.049-3.214H24C26.209,19,28,20.791,28,23z"/><path d="M10,7V5c0-1.657,1.343-3,3-3h6c1.657,0,3,1.343,3,3v2h-2h-8H10z"/><path d="M22,8v3c0,3.314-2.686,6-6,6s-6-2.686-6-6V8h2v3c0,0.309,0.043,0.607,0.109,0.895C13.025,10.749,14.418,10,16,10  s2.975,0.749,3.891,1.895C19.957,11.607,20,11.309,20,11V8H22z"/></svg>
                        <div class = "text-lg whitespace-nowrap">
                            Doctors
                        </div>
                    </div>
                    <div class="text-white text-lg">25</div>
                </div>
            </div>
            <div class = "w-full lg:w-1/3 p-2">
                <div class = "flex items-center justify-between flex-row w-full bg-gray-600 rounded-md p-10">
                    <div class = "flex flex-row items-center space-x-3 flex-grow text-white">
                        <svg class="w-10 h-8" fill="white" id="Layer_1" style="enable-background:new 0 0 48 48;" version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M19.9,24.7c-0.6,0-1,0.4-1,1v1.5c0,0.6,0.4,1,1,1s1-0.4,1-1v-1.5C20.9,25.2,20.5,24.7,19.9,24.7z"/><path d="M28.1,24.7c-0.6,0-1,0.4-1,1v1.5c0,0.6,0.4,1,1,1s1-0.4,1-1v-1.5C29.1,25.2,28.6,24.7,28.1,24.7z"/><path d="M5.5,46.1L5,47.5H43l-0.5-1.4c-1.3-3.2-3.4-6.1-6-8.2H40V24.6v-1V20c0-3-0.8-5.8-2.4-8.4l3.1-5.8l-0.8-0.5   c-9.8-6.5-22.1-6.5-31.9,0L7.3,5.9l3.1,5.8C8.8,14.2,8,17,8,20v4.2v1.4v12.3h3.6C8.9,40.1,6.8,42.9,5.5,46.1z M40,45.5H8   c1.5-3,3.8-5.5,6.6-7.3c0.3,0.3,0.6,0.6,0.9,0.9v2.5l0.4,0.3c2.3,1.9,5.2,2.8,8.2,2.8c3,0,5.9-0.9,8.2-2.8l0.4-0.3v-2.5   c0.3-0.3,0.6-0.6,0.9-0.9C36.3,40,38.6,42.5,40,45.5z M32.6,36.2v-2.9l2-4.8V30C34.5,32.3,33.8,34.4,32.6,36.2z M16.9,31.5   l-3.2-8.2c3.1-1.6,5.3-3.4,6.3-4.4c3.9,2.8,8.7,4.5,14.1,5.3l-3,7.3C27,28.9,21.1,28.9,16.9,31.5z M30.6,33.6v7.1   c-3.7,2.8-9.4,2.8-13.1,0v-7.1C21.2,30.8,26.8,30.8,30.6,33.6z M13.5,28.2l2,5.1v2.9c-1.3-1.8-2-3.9-2-6.1V28.2z M35.1,35.9   c1-1.8,1.5-3.8,1.5-5.9v-5.6c0.5,0,1,0.1,1.5,0.1v11.4H35.1z M38.1,6.6l-4.8,9C30.4,13.9,27.2,13,24,13c-3.2,0-6.4,0.8-9.3,2.5   l-4.8-9C18.7,1.2,29.3,1.2,38.1,6.6z M10,20c0-2.2,0.5-4.3,1.5-6.3l2.5,4.7l0.9-0.6c5.6-3.7,12.6-3.7,18.3,0l0.9,0.6l2.5-4.7   c1,1.9,1.5,4.1,1.5,6.3v2.5c-0.7,0-1.4-0.1-2-0.2l0,0h-0.3c-0.5-0.1-0.9-0.1-1.4-0.2c-0.3,0-0.5-0.1-0.8-0.1   c-0.6-0.1-1.1-0.2-1.7-0.3c-0.1,0-0.3-0.1-0.4-0.1c-0.6-0.1-1.3-0.3-1.9-0.5c0,0-0.1,0-0.1,0c-3.3-1-6.2-2.4-8.8-4.3l-0.7-0.5   l-0.2,0.2l-0.4,0.4c0,0-2.6,2.8-7.1,5l0,0c0,0,0,0,0,0c-0.6,0.3-1.3,0.6-2,0.9V20z M10,24.9c0.5-0.2,1-0.4,1.5-0.6V30   c0,2.1,0.5,4.1,1.5,5.9H10V24.9z"/><polygon points="23,11.4 25,11.4 25,9 27.4,9 27.4,7 25,7 25,4.5 23,4.5 23,7 20.6,7 20.6,9 23,9  "/></g></svg>
                        <div class = "text-lg whitespace-nowrap">
                            Nurses
                        </div>
                    </div>
                    <div class="text-white text-lg">50</div>
                </div>
            </div>
            <div class = "w-full lg:w-1/3 p-2">
                <div class = "flex items-center justify-between flex-row w-full bg-gray-600 rounded-md p-10">
                    <div class = "flex flex-row items-center space-x-3 flex-grow text-white">
                        <svg class="w-10 h-8" fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z"/></svg>
                        <div class = "text-lg whitespace-nowrap">
                            Bed
                        </div>
                    </div>
                    <div class="text-white text-lg">50</div>
                </div>
            </div>
        </div>
             
    </div>
    
    
    <div class="p-4 sm:ml-64"> 
        {{-- start of upper    --}}
        <div class="flex flex-row mx-2">
             {{-- start of room   --}}
            <div class="w-full lg:w-1/2 p-2">
                <table class="border-2">
                    <thead class="bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-gray-900 via-blue-950 to-purple-500">
                        <tr class= "text-white">
                            <th class="text-white px-5 flex flex-row justify-center items-center space-x-5">
                                <svg fill="#FFFFFF" class="w-8" enable-background="new 0 0 64 64" height="64px" version="1.1" viewBox="0 0 64 64" width="64px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x35_0_China"/><g id="_x34_9_fever"/><g id="_x34_8_Thermo_Head"/><g id="_x34_7_Call_Hospital"/><g id="_x34_6_Hospital_Bed"/><g id="_x34_5_Eye"/><g id="_x34_4_Ambulance"/><g id="_x34_3_disinfectant"/><g id="_x34_2_Antibody"/><g id="_x34_1_Death"/><g id="_x34_0_Isolation_Room"><g><path d="M62,4H2C0.896,4,0,4.896,0,6v52c0,1.104,0.896,2,2,2h60c1.104,0,2-0.896,2-2V6C64,4.896,63.104,4,62,4z M32,56V20h20v36    H32z M60,56h-4V18c0-1.104-0.896-2-2-2H30c-1.104,0-2,0.896-2,2v38H4V8h56V56z"/><path d="M20,32h-8c-1.104,0-2,0.896-2,2v12c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2V34C22,32.896,21.104,32,20,32z M18,44h-4    v-8h4V44z"/><path d="M46,24h-8c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2v-8C48,24.896,47.104,24,46,24z M44,32h-4v-4    h4V32z"/><path d="M16,28c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S11.589,28,16,28z M16,24c-0.355,0-0.694-0.062-1.022-0.149    l4.873-4.873C19.938,19.306,20,19.645,20,20C20,22.206,18.206,24,16,24z M16,16c0.355,0,0.694,0.062,1.022,0.149l-4.873,4.873    C12.062,20.694,12,20.355,12,20C12,17.794,13.794,16,16,16z"/></g></g><g id="_x33_9_Soap"/><g id="_x33_8_Corona_Virus"/><g id="_x33_7_Medic"/><g id="_x33_6_Vitamin"/><g id="_x33_5_Diare"/><g id="_x33_4_Hand_sanitizer"/><g id="_x33_3_Soap"/><g id="_x33_2_Wash_Hand"/><g id="_x33_1_Wash_with_Soap"/><g id="_x33_0_Stethoscope"/><g id="_x32_9_Lockdown"/><g id="_x32_8_Bat"/><g id="_x32_7_Pills"/><g id="_x32_6_Airborne"/><g id="_x32_5_Lockdown"/><g id="_x32_4_Siocial_Distance"/><g id="_x32_3_Thermometer"/><g id="_x32_2_Hand_Soap"/><g id="_x32_1_Alcohol"/><g id="_x32_0_Vaccine"/><g id="_x31_9_Clinic"/><g id="_x31_8_Check_Up"/><g id="_x31_7_Pneumonia"/><g id="_x31_6_Masker"/><g id="_x31_5_Use_Masker"/><g id="_x31_4_No_Travel"/><g id="_x31_3_No_crowd"/><g id="_x31_2_Work_from_Home"/><g id="_x31_1_Quarantine"/><g id="_x31_0_Face_Contact"/><g id="_x30_9_Headache"/><g id="_x30_8_Puke"/><g id="_x30_7_Sore_Throath"/><g id="_x30_6_Breathe"/><g id="_x30_5_Cough"/><g id="_x30_4_Blood"/><g id="_x30_3_Microscope"/><g id="_x30_2_Pandemic"/><g id="_x30_1_Corona_Virus"/></svg>
                                <span class="">Room Status</span>
                            </th>
                            <th class="px-3" colspan="6"></th> 
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($rooms as $room)
                        <tr class="bg-white">
                            <td class="border-b-2 px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span>Rm.{{ $room->id }}</span>
                            </td>
                            <td class="border-b-2 px-5">
                                @if ($room->r_status == 0)
                                    Active
                                @elseif($room->r_status == 1)
                                    Lock
                                @elseif($room->r_status == 2)
                                    Available
                                @endif
                            </td>
                            <td class="border-b-2 px-5">
                                @if ($room->r_status == 2)
                                none 
                                @else
                                {{ $room->r_person }}
                                @endif
                            </td>
                            <td class="border-b-2 px-5">
                                <span>$</span> {{ $room->r_price }}
                            </td>
                            <td class="border-b-2 px-3 text-center">
                                <a href="/room/{{ $room->id }}" class="text-blue-500 underline">
                                    <svg fill="#FF5733" height="32" class="w-5" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title/><circle cx="22" cy="24" r="2"/><path class="cls-1" d="M22,28a4,4,0,1,1,4-4A4.0039,4.0039,0,0,1,22,28Zm0-6a2,2,0,1,0,2,2A2.0027,2.0027,0,0,0,22,22Z" data-name="&lt;inner path&gt;" id="_inner_path_"/><path d="M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z"/><path d="M12,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v4h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h4ZM18,4.4,23.6,10H18Z"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>
                                </a>
                            </td>
                            <td class="border-b-2 px-3 text-center">
                                <a href="/room/{{ $room->id }}/edit" class="text-blue-500 underline">
                                    <svg fill="#FF5733" class="w-5" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M78,60a5.9966,5.9966,0,0,0-6,6V84H12V24H30a6,6,0,0,0,0-12H6a5.9966,5.9966,0,0,0-6,6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,78,60Z"/><path d="M94.2422,13.7578l-12-12a5.9979,5.9979,0,0,0-8.4844,0l-36,36A5.9958,5.9958,0,0,0,36,42V54a5.9966,5.9966,0,0,0,6,6H54a5.9956,5.9956,0,0,0,4.2422-1.7578l36-36A5.9979,5.9979,0,0,0,94.2422,13.7578ZM51.5156,48H48V44.4844l30-30L81.5156,18Z"/></g></svg>
                                </a>
                            </td>
                            <td class="border-b-2 px-3 text-center">
                                <form action="/room/{{ $room->id }}" method="POST">
                                    @csrf
                                    @method("DELETE")
                                    <button type="submit" class="text-red-500 underline px-0 py-0">
                                        <svg fill="#FF5733" class="w-5" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0V0z" fill="none"/><path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
                                    </button>   
                                </form>  
                            </td>
                        </tr>   
                        @empty
                            <p class="text-red-500"> No Employee data.</p>
                        @endforelse
                    </tbody>  
                </table>
                <a href="/room" class="float-right mr-28 px-6 py-2 bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 mt-2 text-white">See All</a>
            </div>
            {{-- end of room --}}
            {{-- start of unread message --}}
            <div class="w-full lg:w-1/2 p-2">
                <table class="border-2">
                    <thead class="bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-gray-900 via-blue-950 to-purple-500">
                        <tr class= "text-white">
                            <th class="text-white px-3 py-3 flex flex-row items-center space-x-5">
                                <svg fill="#FFFFFF" class="w-8" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M496,128.05A64,64,0,0,0,389.62,80h0a64.52,64.52,0,0,0-12.71,15.3l0,.06c-.54.9-1.05,1.82-1.55,2.74l-.24.49c-.42.79-.81,1.59-1.19,2.4-.12.25-.23.5-.34.75-.33.73-.65,1.47-.95,2.22-.13.31-.25.62-.37.93-.27.7-.53,1.4-.78,2.11l-.36,1.06c-.22.68-.43,1.37-.63,2.06-.12.39-.23.77-.33,1.16-.19.67-.35,1.35-.51,2-.1.41-.2.82-.29,1.23-.14.68-.27,1.37-.39,2-.08.42-.16.84-.23,1.26-.11.7-.2,1.41-.29,2.12-.05.41-.11.82-.16,1.24-.08.77-.13,1.54-.19,2.32,0,.36-.06.72-.08,1.08-.06,1.14-.1,2.28-.1,3.44h0c0,1,0,2,.08,2.94l0,.64q.08,1.41.21,2.82l.06.48c.09.85.19,1.69.32,2.52,0,.17,0,.35.07.52.14.91.31,1.81.49,2.71,0,.22.09.43.13.65.18.86.38,1.72.6,2.57,0,.07,0,.13,0,.19.23.89.48,1.76.75,2.63l.21.68c.27.85.55,1.68.85,2.51.06.18.13.36.2.54.27.71.55,1.42.84,2.12.08.21.16.41.25.61.34.79.69,1.58,1.06,2.36l.33.67c.35.7.7,1.4,1.07,2.09a64.34,64.34,0,0,0,22.14,23.81h0a62.22,62.22,0,0,0,7.62,4.15l.39.18q2.66,1.2,5.43,2.16l.95.32,1.5.47c.45.14.9.26,1.36.39l1.92.5,1.73.4,1.15.23,1.83.33.94.15c.9.13,1.81.25,2.72.35l.77.07c.73.06,1.47.12,2.21.16l.86.05c1,0,1.94.08,2.92.08h0c1.16,0,2.3,0,3.44-.1l1.08-.08c.78-.06,1.55-.11,2.32-.19l1.25-.16c.7-.09,1.41-.18,2.11-.29l1.26-.23c.68-.12,1.37-.25,2-.39l1.23-.29c.68-.16,1.36-.32,2-.51.39-.1.77-.21,1.16-.33.69-.2,1.38-.41,2.06-.63l1.06-.36c.71-.25,1.41-.51,2.11-.78l.93-.37c.75-.3,1.49-.62,2.22-.95l.75-.34c.81-.38,1.61-.77,2.4-1.19l.49-.24c.92-.5,1.84-1,2.74-1.55l.06,0A64.52,64.52,0,0,0,480,170.38h0A63.81,63.81,0,0,0,496,128.05Z"/><path d="M371.38,202.53l-105.56,82.1a16,16,0,0,1-19.64,0l-144-112a16,16,0,1,1,19.64-25.26L256,251.73l94.22-73.28A95.86,95.86,0,0,1,348.81,80H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H424a56.06,56.06,0,0,0,56-56V211.19a95.85,95.85,0,0,1-108.62-8.66Z"/></svg>
                                <span class="">Unread Message</span>
                            </th>
                            <th class="px-5 py-4" colspan="4"></th> 
                        </tr>
                    </thead>
                    <tbody class="border-b-2">
                        @forelse ($unmesgs as $unmesg)
                        <tr class="bg-white">
                            <td class="border-b-2 px-5 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <p>{{ $unmesg->unm_desc }}</p>
                                <p class="flex flex-row mt-3">
                                    @if ($unmesg->unm_vip == 1)
                                    <svg fill="#FF5733" class="w-8" baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M18.383,4.318c-0.374-0.155-0.804-0.069-1.09,0.217c-1.264,1.263-3.321,1.264-4.586,0c-2.045-2.043-5.37-2.043-7.414,0  C5.105,4.722,5,4.977,5,5.242v13c0,0.552,0.447,1,1,1s1-0.448,1-1v-4.553c1.271-0.997,3.121-0.911,4.293,0.26  c2.045,2.043,5.371,2.043,7.414,0C18.895,13.761,19,13.507,19,13.242v-8C19,4.837,18.756,4.473,18.383,4.318z"/></svg>
                                    <span class="">VIP Message</span>
                                    @endif
                                </p>

                            </td>
                            <td class="border-b-2 px-5 text-center">
                                {{ $unmesg->unm_time }}
                            </td>
                           
                            <td class="border-b-2 px-3 text-center">
                                <a href="/unmessage/{{ $unmesg->id }}" class="text-blue-500 underline">
                                    <svg fill="#FF5733" class="w-5" height="32" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title/><circle cx="22" cy="24" r="2"/><path class="cls-1" d="M22,28a4,4,0,1,1,4-4A4.0039,4.0039,0,0,1,22,28Zm0-6a2,2,0,1,0,2,2A2.0027,2.0027,0,0,0,22,22Z" data-name="&lt;inner path&gt;" id="_inner_path_"/><path d="M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z"/><path d="M12,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v4h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h4ZM18,4.4,23.6,10H18Z"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>
                                </a>
                            </td>
                            <td class="border-b-2 px-3 text-center">
                                <a href="/unmessage/{{ $unmesg->id }}/edit" class="text-blue-500 underline">
                                    <svg fill="#FF5733" class="w-5" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M78,60a5.9966,5.9966,0,0,0-6,6V84H12V24H30a6,6,0,0,0,0-12H6a5.9966,5.9966,0,0,0-6,6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,78,60Z"/><path d="M94.2422,13.7578l-12-12a5.9979,5.9979,0,0,0-8.4844,0l-36,36A5.9958,5.9958,0,0,0,36,42V54a5.9966,5.9966,0,0,0,6,6H54a5.9956,5.9956,0,0,0,4.2422-1.7578l36-36A5.9979,5.9979,0,0,0,94.2422,13.7578ZM51.5156,48H48V44.4844l30-30L81.5156,18Z"/></g></svg>
                                </a>
                            </td>
                            <td class="border-b-2 px-3 text-center">
                                <form action="/unmessage/{{ $unmesg->id }}" method="POST">
                                    @csrf
                                    @method("DELETE")
                                    <button type="submit" class="text-red-500 underline px-0 py-0">
                                        <svg fill="#FF5733" class="w-6" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0V0z" fill="none"/><path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
                                    </button>   
                                </form>  
                            </td>
                        </tr>   
                        @empty
                            <p class="text-red-500"> No Message data.</p>
                        @endforelse
                    </tbody>  
                </table>
                <a href="/unmessage" class="float-right mr-7 px-6 py-2 bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 mt-2 text-white">See All</a>
            </div>
            {{-- end of unread message --}}
        </div>
        {{-- end of upper --}}
        {{-- start of lower --}}
        <div class="flex flex-row mx-2 my-8 ">
            {{-- start of drug  --}}
           <div class="w-full lg:w-1/3 p-2">
               <table class="border-2">
                   <thead class="bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-gray-900 via-blue-950 to-purple-500">
                       <tr class= "text-white">
                           <th class="text-white px-5 py-4 flex flex-row justify-center items-center space-x-5">
                            <svg fill="#FFFFFF" class="h-8" id="Solid" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><rect height="9" width="4" x="1" y="21"/><path d="M19,10a2,2,0,0,0,2-2V7H17V8A2,2,0,0,0,19,10Z"/><path d="M21,4a2,2,0,0,0-4,0V5h4Z"/><path d="M10.489,11.683a2,2,0,1,0,3.759-1.368l-.342-.939-3.759,1.368Z"/><path d="M9.463,8.864,13.222,7.5l-.342-.939A2,2,0,1,0,9.121,7.925Z"/><path d="M26.414,14.586a2,2,0,0,0-2.828-2.829l-.707.707,2.828,2.829Z"/><path d="M20.757,17.414a2,2,0,0,0,2.829,0l.707-.707-2.829-2.828-.707.707A2,2,0,0,0,20.757,17.414Z"/><path d="M27.535,19.765,23,26H15a1,1,0,0,1,0-2h5.893a2.075,2.075,0,0,0,2.08-1.664A2,2,0,0,0,21,20H17l-.041-.02a9.279,9.279,0,0,0-9.3.578L7,21v9H23.446a3,3,0,0,0,2.45-1.27L30.649,22a1.916,1.916,0,0,0-3.114-2.232Z"/></svg>
                               <span class="">Drug Store</span>
                           </th>
                           <th class="px-3" colspan="6"></th> 
                       </tr>
                   </thead>
                   <tbody>
                       @forelse ($drugs as $drug)
                       <tr class="bg-white">
                           <td class="border-b-2 px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               <span>{{ $drug->d_name }}</span>
                           </td>
                           <td class="border-b-2 px-5">
                              {{ $drug->d_weight }}
                           </td>
                           <td class="border-b-2 px-5">
                               @if ($drug->d_quantity == 0)
                              out of stocks
                               @else
                               {{ $drug->d_quantity }}
                               @endif
                           </td>
                           <td class="border-b-2 px-5">
                               <span>$</span> {{ $drug->d_price }} /per Item
                           </td>
                           <td class="border-b-2 px-3 text-center">
                               <a href="/drug/{{ $drug->id }}" class="text-blue-500 underline">
                                   <svg fill="#FF5733" height="32" class="w-5" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title/><circle cx="22" cy="24" r="2"/><path class="cls-1" d="M22,28a4,4,0,1,1,4-4A4.0039,4.0039,0,0,1,22,28Zm0-6a2,2,0,1,0,2,2A2.0027,2.0027,0,0,0,22,22Z" data-name="&lt;inner path&gt;" id="_inner_path_"/><path d="M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z"/><path d="M12,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v4h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h4ZM18,4.4,23.6,10H18Z"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>
                               </a>
                           </td>
                           <td class="border-b-2 px-3 text-center">
                               <a href="/drug/{{ $drug->id }}/edit" class="text-blue-500 underline">
                                   <svg fill="#FF5733" class="w-5" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M78,60a5.9966,5.9966,0,0,0-6,6V84H12V24H30a6,6,0,0,0,0-12H6a5.9966,5.9966,0,0,0-6,6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,78,60Z"/><path d="M94.2422,13.7578l-12-12a5.9979,5.9979,0,0,0-8.4844,0l-36,36A5.9958,5.9958,0,0,0,36,42V54a5.9966,5.9966,0,0,0,6,6H54a5.9956,5.9956,0,0,0,4.2422-1.7578l36-36A5.9979,5.9979,0,0,0,94.2422,13.7578ZM51.5156,48H48V44.4844l30-30L81.5156,18Z"/></g></svg>
                               </a>
                           </td>
                           <td class="border-b-2 px-3 text-center">
                               <form action="/drug/{{ $drug->id }}" method="POST">
                                   @csrf
                                   @method("DELETE")
                                   <button type="submit" class="text-red-500 underline px-0 py-0">
                                       <svg fill="#FF5733" class="w-5" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0V0z" fill="none"/><path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
                                   </button>   
                               </form>  
                           </td>
                       </tr>   
                       @empty
                           <p class="text-red-500"> No Drug data.</p>
                       @endforelse
                   </tbody>  
               </table>
               <a href="/drug" class="float-right mr-28 px-6 py-2 bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 mt-2 text-white">See All</a>
           </div>
           {{-- end of drug --}}
           {{-- start of appointment --}}
           <div class="w-full lg:w-1/3 p-2">
            <table class="border-2">
                <thead class="bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-gray-900 via-blue-950 to-purple-500">
                    <tr class= "text-white">
                        <th class="text-white px-5 py-4 flex flex-row justify-center items-center">
                            <svg class="w-10 h-7" fill= white class="" data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M18,5V3a1,1,0,0,0-2,0V5H8V3A1,1,0,0,0,6,3V5H2V21H22V5Zm2,14H4V7H20ZM9,10H7v2H9Zm0,4H7v2H9Zm8-4H11v2h6Zm0,4H11v2h6Z"/></svg>
                            <span class="">Appointment</span>
                        </th>
                        <th class="px-3" colspan="6"></th> 
                    </tr>
                </thead>
                <tbody>
                    @forelse ($appointments as $app)
                    <tr class="bg-white">
                        <td class="border-b-2 px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span>{{ $app->a_name }}</span>
                        </td>
                        <td class="border-b-2 px-5">
                           Room {{ $app->a_room }}
                        </td>
                        <td class="border-b-2 px-5">
                            {{ date("Y/m/d", strtotime($app->a_date)) }} 
                            <span class="uppercase">{{ date("h:i a",strtotime($app->a_time)) }}</span> 
                        </td>
                        <td class="border-b-2 px-5">
                             
                        </td>
                        <td class="border-b-2 px-3 text-center">
                            <a href="/drug/{{ $drug->id }}" class="text-blue-500 underline">
                                <svg fill="#FF5733" height="32" class="w-5" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title/><circle cx="22" cy="24" r="2"/><path class="cls-1" d="M22,28a4,4,0,1,1,4-4A4.0039,4.0039,0,0,1,22,28Zm0-6a2,2,0,1,0,2,2A2.0027,2.0027,0,0,0,22,22Z" data-name="&lt;inner path&gt;" id="_inner_path_"/><path d="M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z"/><path d="M12,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v4h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h4ZM18,4.4,23.6,10H18Z"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>
                            </a>
                        </td>
                        <td class="border-b-2 px-3 text-center">
                            <a href="/drug/{{ $drug->id }}/edit" class="text-blue-500 underline">
                                <svg fill="#FF5733" class="w-5" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M78,60a5.9966,5.9966,0,0,0-6,6V84H12V24H30a6,6,0,0,0,0-12H6a5.9966,5.9966,0,0,0-6,6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,78,60Z"/><path d="M94.2422,13.7578l-12-12a5.9979,5.9979,0,0,0-8.4844,0l-36,36A5.9958,5.9958,0,0,0,36,42V54a5.9966,5.9966,0,0,0,6,6H54a5.9956,5.9956,0,0,0,4.2422-1.7578l36-36A5.9979,5.9979,0,0,0,94.2422,13.7578ZM51.5156,48H48V44.4844l30-30L81.5156,18Z"/></g></svg>
                            </a>
                        </td>
                        <td class="border-b-2 px-3 text-center">
                            <form action="/app/{{ $app->id }}" method="POST">
                                @csrf
                                @method("DELETE")
                                <button type="submit" class="text-red-500 underline px-0 py-0">
                                    <svg fill="#FF5733" class="w-5" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0V0z" fill="none"/><path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
                                </button>   
                            </form>  
                        </td>
                    </tr>   
                    @empty
                        <p class="text-red-500"> No appointment data.</p>
                    @endforelse
                </tbody>  
            </table>
            <a href="/appointments" class="float-right mr-7 px-6 py-2 bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 mt-2 text-white">See All</a>
        </div>
           {{-- end of appointment --}}
       </div>
        {{-- end of lower --}}



    </div>
@endsection