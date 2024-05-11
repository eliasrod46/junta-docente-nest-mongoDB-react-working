@extends('layouts.panel')

@section('title', 'lista de roles')

@section('content')
    @if (session('info'))
        <div class="text-red-700">
            <strong>{{ session('info') }}</strong>
        </div>
    @endif
    <section class="mb-5 px-4 mx-auto">

        <!-- New Role Button -->
        @can('admin.roles.create')
            <div class="my-5">
                <a href="{{ route('admin.roles.create') }}"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Nuevo Rol </a>
            </div>
        @endcan

        <!-- Table -->
        <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <!-- Headers -->
                            <thead class="bg-gray-50 dark:bg-gray-800 ">
                                <tr class="grid grid-cols-4">
                                    <th scope="col"
                                        class="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                        ID
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                        Nombre
                                    </th>

                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 col-span-2">
                                        Acciones</th>


                                </tr>
                            </thead>
                            <!-- data -->
                            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                @foreach ($roles as $role)
                                    <tr class="grid grid-cols-4">
                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div class="text-center">
                                                {{ $role->id }}
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div class="text-center">
                                                {{ $role->name }}
                                            </div>
                                        </td>

                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap col-span-2">
                                            <div class="flex justify-center items-center gap-6">
                                                @can('admin.roles.show')
                                                    <a href="{{ route('admin.roles.show', $role) }}"
                                                        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                        Ver </a>
                                                @endcan
                                                @can('admin.roles.edit')
                                                    <a href="{{ route('admin.roles.edit', $role) }}"
                                                        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                        Editar </a>
                                                @endcan
                                                @can('admin.roles.destroy')
                                                    <form action="{{ route('admin.roles.destroy', $role) }}" method="POST">
                                                        @method('DELETE')
                                                        @csrf
                                                        <button
                                                            class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                                            type="submit">Eliminar</button>
                                                    </form>
                                                @endcan

                                            </div>
                                        </td>

                                    </tr>
                                @endforeach
                                {{-- <tr>
                                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <div>
                                            <h2 class="font-medium text-gray-800 dark:text-white ">Catalog</h2>
                                            <p class="text-sm font-normal text-gray-600 dark:text-gray-400">catalogapp.io
                                            </p>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div
                                            class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            Customer
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div>
                                            <h4 class="text-gray-700 dark:text-gray-200">Content curating app</h4>
                                            <p class="text-gray-500 dark:text-gray-400">Brings all your news into one place
                                            </p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <p
                                                class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                                                +4</p>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                            <div class="bg-blue-500 w-2/3 h-1.5"></div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <button
                                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <div>
                                            <h2 class="font-medium text-gray-800 dark:text-white ">Circooles</h2>
                                            <p class="text-sm font-normal text-gray-600 dark:text-gray-400">getcirooles.com
                                            </p>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div
                                            class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                                            Churned
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div>
                                            <h4 class="text-gray-700 dark:text-gray-200">Design software</h4>
                                            <p class="text-gray-500 dark:text-gray-400">Super lightweight design app</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <p
                                                class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                                                +4</p>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                            <div class="bg-blue-500 w-2/5 h-1.5"></div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <button
                                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <div>
                                            <h2 class="font-medium text-gray-800 dark:text-white ">Sisyphus</h2>
                                            <p class="text-sm font-normal text-gray-600 dark:text-gray-400">sisyphus.com
                                            </p>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div
                                            class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            Customer
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div>
                                            <h4 class="text-gray-700 dark:text-gray-200">Automation and workflow</h4>
                                            <p class="text-gray-500 dark:text-gray-400">Time tracking, invoicing and
                                                expenses</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <p
                                                class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                                                +4</p>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                            <div class="bg-blue-500 w-11/12 h-1.5"></div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <button
                                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <div>
                                            <h2 class="font-medium text-gray-800 dark:text-white ">Hourglass</h2>
                                            <p class="text-sm font-normal text-gray-600 dark:text-gray-400">hourglass.app
                                            </p>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div
                                            class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                                            Churned
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div>
                                            <h4 class="text-gray-700 dark:text-gray-200">Productivity app</h4>
                                            <p class="text-gray-500 dark:text-gray-400">Time management and productivity
                                            </p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <p
                                                class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                                                +4</p>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                            <div class="bg-blue-500 w-1/3 h-1.5"></div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <button
                                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <div>
                                            <h2 class="font-medium text-gray-800 dark:text-white ">Quotient</h2>
                                            <p class="text-sm font-normal text-gray-600 dark:text-gray-400">quotient.co</p>
                                        </div>
                                    </td>
                                    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                        <div
                                            class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                            Customer
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div>
                                            <h4 class="text-gray-700 dark:text-gray-200">Sales CRM</h4>
                                            <p class="text-gray-500 dark:text-gray-400">Web-based sales doc management</p>
                                        </div>
                                    </td>
                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="flex items-center">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                                alt="">
                                            <img class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                                alt="">
                                            <p
                                                class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                                                +4</p>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                                            <div class="bg-blue-500 w-1/6 h-1.5"></div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                        <button
                                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr> --}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    </section>
@endsection
