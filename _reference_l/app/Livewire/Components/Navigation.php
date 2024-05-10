<?php

namespace App\Livewire\Components;

use Livewire\Component;
use App\Livewire\Actions\Logout;
use App\Models\Blog\Category;

class Navigation extends Component
{

    public function logout (Logout $logout) {
        $logout();
        $this->redirect('/', navigate: true);
    }

    public function render(){
        $categories = Category::all();

        return view('livewire.components.navigation', compact('categories'));
    }
}


