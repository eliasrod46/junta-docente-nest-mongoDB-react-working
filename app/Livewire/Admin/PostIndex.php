<?php

namespace App\Livewire\Admin;

use App\Models\Blog\Post;
use Livewire\Component;
use Livewire\WithPagination;

class PostIndex extends Component
{
    use WithPagination;
    //--- datatable
    public $search; //-- var global search input
    public $sortField = 'id'; // default field
    public $sortDirection = 'desc'; // default order

    //--function order rows
    public function sortBy($field){
        if ($this->sortField === $field) {
            $this->sortDirection = $this->sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            $this->sortField = $field;
            $this->sortDirection = 'asc';
        }
    }

    //--update pagination function
    public function updatingSearch(){
        $this->resetPage();
    }
    //--- datatable
    
    public function render(){

        $posts = Post::where('user_id',auth()->user()->id)->where(function ($query) {
            $query->where('name','LIKE', '%'.$this->search.'%')
                ->orWhere('id','LIKE', '%'.$this->search.'%');
        })->orderBy($this->sortField, $this->sortDirection)->paginate();
        
        return view('livewire.admin.post-index', compact('posts'));
    }
}


