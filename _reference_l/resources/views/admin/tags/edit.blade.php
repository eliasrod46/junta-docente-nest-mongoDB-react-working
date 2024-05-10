@extends('layouts.panel')

@section('title', 'editar etiqueta')

@section('content')
    @if (session('info'))
        <div class="text-green-700">
            <strong>{{ session('info') }}</strong>
        </div>
    @endif
    <div class="text-center py-6">
        <h2 class="text-3xl font-bold pb-6">Editar Etiqueta</h2>
        <div class=" flex flex-col ">
            {!! Form::model($tag, ['route' => ['admin.tags.update', $tag], 'method' => 'put']) !!}
            <div class="mb-10">
                {!! Form::label('name', 'Nombre', ['class' => 'block text-xl mb-2']) !!}
                {!! Form::text('name', null, [
                    'class' => 'text-black rounded-lg',
                    'placeholder' => 'Ingrese el nombre de la etiqueta',
                ]) !!}

                @error('name')
                    <span class="text-red-500">{{ $message }}</span>
                @enderror
            </div>
            <div class="mb-10">
                {!! Form::label('slug', 'Slug', ['class' => 'block text-xl mb-2']) !!}
                {!! Form::text('slug', null, [
                    'class' => 'text-black rounded-lg',
                    'placeholder' => 'Ingrese el slug de la etiqueta',
                    'readonly',
                ]) !!}

                @error('slug')
                    <span class="text-red-500">{{ $message }}</span>
                @enderror
            </div>

            <div class="mb-10">
                {!! Form::label('color', 'Color', ['class' => 'block text-xl mb-2']) !!}
                {!! Form::select('color', $colors, null, ['class' => 'text-black rounded-lg']) !!}

                @error('color')
                    <span class="text-red-500">{{ $message }}</span>
                @enderror
            </div>

            {!! Form::submit('Actualizar Etiqueta', [
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
