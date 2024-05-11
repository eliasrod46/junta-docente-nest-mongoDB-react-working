<x-app-layout>
    <x-slot name="title">
        Post por catedoria
    </x-slot>
    <x-slot name="header">
        <a href="{{ route('posts.index') }}">
            Post por catedoria
        </a>
    </x-slot>

    <div class="py-6 px-20">
        <h1 class="uppercase text-center text-3xl font-bold mb-10">Categoria: {{ $category->name }}</h1>
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
{{-- <h1 class="{{ 'bg-red-500' }}">{{ 'bg-red-500' }}</h1>
<h1 class="{{ 'bg-orange-500' }}">{{ 'bg-orange-500' }}</h1>
<h1 class="{{ 'bg-yellow-500' }}">{{ 'bg-yellow-500' }}</h1>
<h1 class="{{ 'bg-lime-500' }}">{{ 'bg-lime-500' }}</h1>
<h1 class="{{ 'bg-green-500' }}">{{ 'bg-green-500' }}</h1>
<h1 class="{{ 'bg-emerald-500' }}">{{ 'bg-emerald-500' }}</h1>
<h1 class="{{ 'bg-teal-500' }}">{{ 'bg-teal-500' }}</h1>
<h1 class="{{ 'bg-sky-500' }}">{{ 'bg-sky-500' }}</h1>
<h1 class="{{ 'bg-indigo-500' }}">{{ 'bg-indigo-500' }}</h1> --}}
