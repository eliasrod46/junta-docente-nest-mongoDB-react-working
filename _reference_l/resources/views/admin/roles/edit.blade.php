@extends('layouts.panel')

@section('title', 'crear rol')

@section('content')
    @if (session('info'))
        <div class="text-green-700">
            <strong>{{ session('info') }}</strong>
        </div>
    @endif
    <div class="text-center py-6">
        <h2 class="text-3xl font-bold pb-6">Acualizar Rol</h2>
        <div class=" flex flex-col ">
            {!! Form::model($role, ['route' => ['admin.roles.update', $role], 'method' => 'put']) !!}
            <div class="mb-10">
                {!! Form::label('name', 'Nombre:', ['class' => 'block text-xl mb-2']) !!}
                {!! Form::text('name', null, [
                    'class' => 'text-black rounded-lg',
                    'placeholder' => 'Ingrese el nombre del rol',
                ]) !!}

                @error('name')
                    <span class="text-red-500">{{ $message }}</span>
                @enderror
            </div>
            <div class="mb-10">
                <h2>Lista de permisos</h2>

                <div class="flex flex-col justify-center items-center">
                    @foreach ($permissions as $permission)
                        <div class="flex w-2/6">
                            {!! Form::checkbox('permissions[]', $permission->id, null, []) !!}
                            <span class="font-bold">{{ $permission->group }}</span> / {{ $permission->description }}
                        </div>
                    @endforeach
                </div>


                @error('permissions[]')
                    <span class="text-red-500">{{ $message }}</span>
                @enderror
            </div>

            {!! Form::submit('Actualizar Rol', [
                'class' => 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium',
            ]) !!}
            {!! Form::close() !!}
        </div>
    </div>
@endsection
