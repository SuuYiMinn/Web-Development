@extends ("layout.master")
@section("title","Login")
@section("body")
<!-- component -->
<!-- This is an example component -->
<!-- component -->
<!-- component -->
<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 rounded-xl">
        <h3 class="text-2xl font-bold text-center">Sign Up</h3>
        <form action="/signUp" method="POST">
			@csrf
            <div class="mt-4">
                <div>
                    <label class="block" for="Name">Name<label>
                            <input type="text" placeholder="Name" name="name"
                                value="{{ old('name') }}"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            @error('name')
                                <small class="text-red-500 ">{{ $message }}</small>
                            @enderror
                </div>
                <div class="mt-4">
                    <label class="block" for="email">Email<label>
                            <input type="email" placeholder="Email" name="email"
                                value="{{ old('email') }}"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            @error("email")
                                <small class="text-red-500 ">{{ $message }}</small>
                            @enderror
                </div>
                <div class="mt-4">
                    <label class="block">Password<label>
                            <input type="password" placeholder="Password" name="password"
                                value="{{ old('password') }}"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            @error("password")
                                <small class="text-red-500 ">{{ $message }}</small>
                            @enderror
                </div>
                {{-- <div class="mt-4">
                    <label class="block">Confirm Password<label>
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <span class="text-xs text-red-400">Password must be same!</span> --}}
                <div class="flex">
                    <button class="w-full px-6 py-2 mt-4 text-white bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:bg-blue-900">Create
                        Account</button>
                </div>
                <div class="mt-6 text-grey-dark text-center">
                    Already have an account?
                    <a class="text-blue-600 hover:underline" href="/login">
                        Log in
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
	
  
@endsection
    