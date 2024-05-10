<?php

namespace App\Livewire\Admin;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;


class UsersIndex extends Component
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
        $users = User::paginate();
        return view('livewire.admin.users-index',compact('users'));
    }
}
