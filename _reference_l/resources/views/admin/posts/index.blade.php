@extends('layouts.panel')

@section('title', 'lista de posts')

@section('content')
    @if (session('info'))
        <div class="text-red-700">
            <strong>{{ session('info') }}</strong>
        </div>
    @endif
    @livewire('admin.post-index')
@endsection
