@extends('layouts.panel')

@section('title', 'crear post')

@section('content')
    <div class="text-center py-6">
        <h2 class="text-3xl font-bold pb-6">Crear Post</h2>
        <div class=" flex flex-col ">
            {!! Form::open(['route' => 'admin.posts.store', 'autocomplete' => 'off', 'files' => true]) !!}

            @include('admin.posts.partials.form')

            {!! Form::submit('Crear Post', [
                'class' => 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium',
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

        //--cambiar imagen
        document.getElementById('file').addEventListener('change', cambiarImagen)

        function cambiarImagen(event) {
            let file = event.target.files[0];

            let reader = new FileReader();
            reader.onload = (event => {
                document.getElementById('picture').setAttribute('src', event.target.result);
            })
            reader.readAsDataURL(file)
        }
    </script>
@endsection
