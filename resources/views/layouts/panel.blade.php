<x-app-layout>
    <x-slot name="header">
        @yield('title')
    </x-slot>
    <x-slot name="title">
        admin -
        @yield('title')
    </x-slot>
    <div class="py-6 px-2">
        <div class="grid grid-cols-6">
            <div>
                <livewire:components.admin-navigation />
            </div>
            <div class="col-span-5 shadow shadow-zinc-400 rounded-md">
                @yield('content')
            </div>
        </div>
    </div>

    @yield('js')


</x-app-layout>
