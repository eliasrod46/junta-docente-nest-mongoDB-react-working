<!-- name -->
<div class="mb-10 mx-5">
    {!! Form::label('name', 'Nombre:', ['class' => 'block text-xl mb-2']) !!}
    {!! Form::text('name', null, [
        'class' => 'text-black rounded-lg w-3/6',
        'placeholder' => 'Ingrese el nombre de la categoria',
    ]) !!}

    @error('name')
        <br>
        <span class="text-red-500">{{ $message }}</span>
    @enderror
</div>
<!-- slug -->
<div class="mb-10 mx-5">
    {!! Form::label('slug', 'Slug:', ['class' => 'block text-xl mb-2']) !!}
    {!! Form::text('slug', null, [
        'class' => 'text-black rounded-lg w-3/6',
        'placeholder' => 'Ingrese el slug de la categoria',
        'readonly',
    ]) !!}

    @error('slug')
        <br>
        <span class="text-red-500">{{ $message }}</span>
    @enderror
</div>
<!-- category -->
<div class="mb-10 mx-5">
    {!! Form::label('category_id', 'Categoria:', ['class' => 'block text-xl mb-2']) !!}
    {!! Form::select('category_id', $categories, null, [
        'class' => 'text-black rounded-lg w-3/6',
    ]) !!}

    @error('category_id')
        <span class="text-red-500">{{ $message }}</span>
    @enderror
</div>
<!-- tags -->
<div class="mb-10 mx-5">
    <span class="block text-xl mb-2">Etiquetas:</span>

    <div class="flex justify-center items-center gap-x-5">
        @foreach ($tags as $tag)
            <div>
                {!! Form::checkbox('tags[]', $tag->id, null, ['class' => 'text-black rounded-lg m-1']) !!}
                {{ $tag->name }}
            </div>
        @endforeach
    </div>


    @error('tags')
        <span class="text-red-500">{{ $message }}</span>
    @enderror
</div>
<!-- status -->
<div class="mb-10 mx-5">
    <span class="block text-xl mb-2">Estado:</span>

    <div class="flex justify-center items-center gap-x-5">

        <label>
            {!! Form::radio('status', 1, true, []) !!}
            Borrador
        </label>

        <label>
            {!! Form::radio('status', 2, null, []) !!}
            Publicado
        </label>
    </div>


    @error('status')
        <span class="text-red-500">{{ $message }}</span>
    @enderror
</div>
<!-- file(image) -->
<div class="mb-10 flex mx-auto justify-between items-center w-5/6">
    <div class=" w-3/6">
        @isset($post->image)
            <img id="picture" class="aspect-video object-cover object-center" src="{{ Storage::url($post->image->url) }}"
                alt="">
        @else
            <img id="picture" class="aspect-video object-cover object-center" src="/storage/app/default-blog-image.jpg"
                alt="">
        @endisset
    </div>
    <div class="w-3/6">
        {!! Form::label('file', 'Imagen que se mostrara en el post:', ['class' => 'block text-xl mb-2']) !!}
        {!! Form::file('file', ['class' => 'text-black rounded-lg w-5/6']) !!}
        <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio deleniti
            nulla velit
            voluptatibus, voluptates veritatis ducimus.</p>
        @error('file')
            <span class="text-red-500">{{ $message }}</span>
        @enderror
    </div>
</div>
<!-- extract -->
<div class="mb-10">

    {!! Form::label('extract', 'Extracto:', ['class' => 'block text-xl mb-2']) !!}
    {!! Form::textarea('extract', null, ['class' => 'text-black rounded-lg w-3/6']) !!}
    @error('extract')
        <br>
        <span class="text-red-500">{{ $message }}</span>
    @enderror
</div>
<!-- body -->
<div class="mb-10">

    {!! Form::label('body', 'Cuerpo del post:', ['class' => 'block text-xl mb-2']) !!}
    {!! Form::textarea('body', null, ['class' => 'text-black rounded-lg w-3/6']) !!}
    @error('body')
        <br>
        <span class="text-red-500">{{ $message }}</span>
    @enderror
</div>
