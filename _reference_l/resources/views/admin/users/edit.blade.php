@extends('layouts.panel')

@section('title', 'asignar roles')

@section('content')
    @if (session('info'))
        <div class="text-green-700">
            <strong>{{ session('info') }}</strong>
        </div>
    @endif
    <div class="text-center py-6">
        <h2 class="text-3xl font-bold pb-6">Asignar Roles</h2>
        <h2 class="text-xl font-bold pb-6">Nombre: {{ $user->name }} </h2>
        <div class=" flex flex-col ">
            {!! Form::model($user, ['route' => ['admin.users.update', $user], 'method' => 'put']) !!}
            <div class="mb-10">
                @foreach ($roles as $role)
                    <div>
                        <label for="">
                            {!! Form::checkbox('roles[]', $role->id, null, []) !!}
                            {{ $role->name }}
                        </label>
                    </div>
                @endforeach


                @error('name')
                    <span class="text-red-500">{{ $message }}</span>
                @enderror
            </div>


            {!! Form::submit('Asginar Roles', [
                'class' => 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
            ]) !!}
            {!! Form::close() !!}
        </div>
    </div>
@endsection

@section('js')
    <script>
        const name = document.getElementById('name');
        const slug = document.getElementById('slug');
        name.addEventListener('input', () => {
            name.value = name.value.match(/[a-zA-Z1-9\s]+/g);
            const valueName = name.value;
            slug.value = valueName.toLowerCase().replace(/\s/g, '-');
        });
    </script>
@endsection
