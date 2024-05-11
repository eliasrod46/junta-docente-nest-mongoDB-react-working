<x-app-layout>
    <x-slot name="title">
        Post
    </x-slot>

    <x-slot name="header">
        Post
    </x-slot>
    <div class="py-6 px-2">
        <div class="py-8">
            <h1 class="text-4xl font-bold text-gray-400">{{ $post->name }}</h1>
            <div class="text-lg mb-2 text-gray-200">
                {{ $post->extract }}
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <!-- Principal content -->
                <div class="lg:col-span-2">
                    <figure>
                        <img class="w-full h-80 object-cover object-center"
                            src="{{ 'http://localhost:8000' . Storage::url($post->image->url) }}" alt="">
                    </figure>
                    <div class="text-base text-gray-500 mt-4">
                        {{ $post->body }}
                    </div>
                </div>

                <!-- Related content -->
                <aside>
                    <h1 class="text-2xl font-bold text-gray-600 mb-4">Mas en: {{ $post->name }}</h1>
                    <ul>
                        @foreach ($relatedContent as $content)
                            <li class="mb-4">
                                <a class="flex" href="{{ route('posts.show', $content) }}">
                                    <img class="w-36 h-20 object-cover object-center"
                                        src="{{ 'http://localhost:8000' . Storage::url($content->image->url) }}"
                                        alt="">
                                    <span class="ml-2 text-gray-600">{{ $content->name }}</span>
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </aside>
            </div>

        </div>

    </div>
</x-app-layout>
