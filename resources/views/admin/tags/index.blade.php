@extends('layouts.panel')

@section('title', 'lista de etiquetas')

@section('content')
    @if (session('info'))
        <div class="text-red-700">
            <strong>{{ session('info') }}</strong>
        </div>
    @endif
    <section class="mb-5 px-4 mx-auto">

        <!-- New Tag Button -->
        @can('admin.tags.create')
            <div class="my-5">
                <a href="{{ route('admin.tags.create') }}"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Nueva Etiqueta </a>
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
                                <tr class=" grid grid-cols-5">
                                    <th scope="col"
                                        class="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                        ID
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                        Nombre
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                        Slug
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 col-span-2">
                                        Acciones</th>
                                </tr>
                            </thead>
                            <!-- data -->
                            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                @foreach ($tags as $tag)
                                    <tr class="grid grid-cols-5">
                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div class="text-center">
                                                {{ $tag->id }}
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div class="text-center">
                                                {{ $tag->name }}
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div class="text-center">
                                                {{ $tag->slug }}
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap col-span-2">
                                            <div class="flex justify-center items-center gap-6">
                                                @can('admin.tags.show')
                                                    <a href="{{ route('admin.tags.show', $tag) }}"
                                                        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                        Ver </a>
                                                @endcan

                                                @can('admin.tags.edit')
                                                    <a href="{{ route('admin.tags.edit', $tag) }}"
                                                        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                        Editar </a>
                                                @endcan
                                                @can('admin.tags.destroy')
                                                    <form action="{{ route('admin.tags.destroy', $tag) }}" method="POST">
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </section>
@endsection
