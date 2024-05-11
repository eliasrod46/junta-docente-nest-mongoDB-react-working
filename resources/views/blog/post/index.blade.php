<x-app-layout>
    <x-slot name="title">
        Posts
    </x-slot>
    <x-slot name="header">
        Posts
    </x-slot>

    <div class="py-6 px-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @foreach ($posts as $post)
                <!-- Post -->


                @if ($post->image != null)
                    <article
                        class="w-full h-80 bg-cover bg-center @if ($loop->first) md:col-span-2 @endif"
                        style="background-image: url({{ Storage::url($post->image->url) }})">
                    @else
                        <article
                            class="w-full h-80 bg-cover bg-center @if ($loop->first) md:col-span-2 @endif"
                            style="background-image: url(storage/app/default-blog-image.jpg)">
                @endif


                <div class="w-full h-full px-8 flex flex-col justify-center">
                    <!-- Tags -->
                    <div>


                        @foreach ($post->tags as $tag)
                            <a href="{{ route('posts.tag', $tag) }}"
                                class="inline-block px-3 h-6 {{ 'bg-' . $tag->color . '-500' }} text-white rounded-full">{{ $tag->name }}</a>
                        @endforeach
                    </div>
                    <!-- Title -->
                    <h1 class="text-4xl leading-8 font-bold">
                        <a href="{{ route('posts.show', $post) }}"> {{ $post->name }} </a>
                    </h1>
                </div>
                </article>
            @endforeach

        </div>

        <div class="flex justify-between mt-4">
            {{ $posts->links() }}
        </div>
    </div>
    {{-- <h1 class="{{ 'bg-orange-500' }}">{{ 'bg-orange-500' }}</h1>
    <h1 class="{{ 'bg-yellow-500' }}">{{ 'bg-yellow-500' }}</h1>
    <h1 class="{{ 'bg-sky-500' }}">{{ 'bg-sky-500' }}</h1>
    <h1 class="{{ 'bg-red-500' }}">{{ 'bg-red-500' }}</h1>
    <h1 class="{{ 'bg-violet-500' }}">{{ 'bg-lime-500' }}</h1>
    <h1 class="{{ 'bg-green-500' }}">{{ 'bg-green-500' }}</h1>
    <h1 class="{{ 'bg-slate-500' }}">{{ 'bg-emerald-500' }}</h1>
    <h1 class="{{ 'bg-pink-500' }}">{{ 'bg-teal-500' }}</h1> --}}
</x-app-layout>
