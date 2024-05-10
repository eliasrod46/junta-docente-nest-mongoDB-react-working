@extends('layouts.panel')

@section('title', 'editar post')

@section('content')
    @if (session('info'))
        <div class="text-green-700">
            <strong>{{ session('info') }}</strong>
        </div>
    @endif
    <div class="text-center py-6">
        <h2 class="text-3xl font-bold pb-6">Editar Post</h2>
        <div class=" flex flex-col ">
            {!! Form::model($post, [
                'route' => ['admin.posts.update', $post],
                'autocomplete' => 'off',
                'files' => true,
                'method' => 'put',
            ]) !!}

            @include('admin.posts.partials.form')

            {!! Form::submit('Actualizar Post', [
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
