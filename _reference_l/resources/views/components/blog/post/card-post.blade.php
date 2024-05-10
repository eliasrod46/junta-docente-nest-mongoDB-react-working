@props(['post'])

<article class="mb-8 bg-gray-600 shadow-lg rounded-lg overflow-hidden">


    @if ($post->image != null)
        <img class="w-full h-72 object-cover object-center" src="{{ Storage::url($post->image->url) }}" alt="">
    @else
        <img class="w-full h-72 object-cover object-center" src="/storage/app/default-blog-image.jpg" alt="">
    @endif
    <div class="px-6 py-8">
        <h1 class="font-bold text-xl mb-2">
            <a href="{{ route('posts.show', $post) }}">{{ $post->name }}</a>
        </h1>
        <div class="text-gray-200 text-base">
            {{ $post->extract }}
        </div>
    </div>

    <!-- Tags -->
    <div class="px-6 pt-4 pb-2">
        @foreach ($post->tags as $tag)
            <a href="{{ route('posts.tag', $tag) }}"
                class="mr-3 inline-block text-sm rounded-full px-3 h-6 {{ 'bg-' . $tag->color . '-500' }} text-white">{{ $tag->name }}</a>
        @endforeach
    </div>
</article>
