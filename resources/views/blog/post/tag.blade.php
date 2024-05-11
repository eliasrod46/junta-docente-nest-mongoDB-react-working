<x-app-layout>
    <x-slot name="title">
        Post por etiqueta
    </x-slot>
    <x-slot name="header">
        <a href="{{ route('posts.index') }}">
            Post por etiqueta
        </a>
    </x-slot>

    <div class="py-6 px-20">
        <h1 class="uppercase text-center text-3xl font-bold mb-10">Etiqueta: {{ $tag->name }}</h1>
        <!-- Posts -->
        @foreach ($posts as $post)
            <!-- Post -->
            <x-blog.post.card-post :post="$post" />
        @endforeach


        <div class="flex justify-between mt-4">
            {{ $posts->links() }}
        </div>

    </div>
</x-app-layout>
