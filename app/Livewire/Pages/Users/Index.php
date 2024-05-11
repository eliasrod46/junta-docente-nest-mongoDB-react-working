<?php
namespace App\Livewire\Pages\Users;
// class Index extends Component
// {
//     public function render()
//     {

//         return view('livewire.pages.users.index');
//     }
// }

use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Livewire\Component;
use PowerComponents\LivewirePowerGrid\Rules\{Rule, RuleActions};
use PowerComponents\LivewirePowerGrid\Traits\ActionButton;
use PowerComponents\LivewirePowerGrid\{Button, Column, Exportable, Footer, Header, PowerGrid, PowerGridComponent, PowerGridEloquent};

class Index extends PowerGridComponent
{
    
    // use ActionButton;

    /*
    |--------------------------------------------------------------------------
    |  Features Setup
    |--------------------------------------------------------------------------
    | Setup Table's general features
    |
    */
    /*public function setUp(): array
    {

       
    }*/
    public function setUp(): array
    {

        return [
            Exportable::make('Users -'.time())
                ->striped()
                ->type(Exportable::TYPE_XLS),
            Header::make()->showSearchInput(),
            Footer::make()
                ->showPerPage()
                ->showRecordCount(),
            
        ];
    }

    /*
    |--------------------------------------------------------------------------
    |  Datasource
    |--------------------------------------------------------------------------
    | Provides data to your Table using a Model or Collection
    |
    */

    /**
    * PowerGrid datasource.
    *
    * @return Builder<\App\Models\Institucion>
    */
    public function datasource(): Builder
    {
        return User::query();
    }

    /*
    |--------------------------------------------------------------------------
    |  Relationship Search
    |--------------------------------------------------------------------------
    | Configure here relationships to be used by the Search and Table Filters.
    |
    */

    /**
     * Relationship search.
     *
     * @return array<string, array<int, string>>
     */
    /*public function relationSearch(): array
{
    return [
      ];
}*/

    /*
    |--------------------------------------------------------------------------
    |  Add Column
    |--------------------------------------------------------------------------
    | Make Datasource fields available to be used as columns.
    | You can pass a closure to transform/modify the data.
    |
    | ❗ IMPORTANT: When using closures, you must escape any value coming from
    |    the database using the `e()` Laravel Helper function.
    |
    */
    public function addColumns(){
    return PowerGrid::eloquent()
        ->addColumn('id')
        ->addColumn('name')
        ->addColumn('last name')
        ->addColumn('username')
        ->addColumn('email');
       
}

    /*
    |--------------------------------------------------------------------------
    |  Include Columns
    |--------------------------------------------------------------------------
    | Include the columns added columns, making them visible on the Table.
    | Each column can be configured with properties, filters, actions...
    |
    */

     /**
     * PowerGrid Columns.
     *
     * @return array<int, Column>
     */
    public function columns(): array {
        return [
            Column::make('ID', 'id')
                ->hidden(),

            Column::make('Nombre', 'name')
                ->searchable()
                ->sortable(),
            
            Column::make('Apellido ', 'lastname')
                ->searchable()
                ->sortable(),

            Column::make('Alias', 'username')
                ->searchable()
                ->sortable(),
                
            Column::make('Correo Electrónico', 'email')
                ->searchable()
                ->sortable(),

            
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | Actions Method
    |--------------------------------------------------------------------------
    | Enable the method below only if the Routes below are defined in your app.
    |
    */

     /**
     * PowerGrid Docente Action Buttons.
     *
     * @return array<int, Button>
     */

     public function actions(): array {
        return [
            // Button::make('modificar', '<div class="inline-block">' . 
            //     '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-500">
            //         <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            //     </svg>' . 
            // '</div>')
            // ->class('cursor-pointer text-white rounded text-sm')
            // ->route('proveedor.modificar', ['id' => 'id'])
            // ->target('_self'),

            // Button::make('destroy', '<div class="inline-block">' . 
            //     '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500">
            //         <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            //     </svg>' . 
            // '</div>')
            // ->class('cursor-pointer text-white mt-2 rounded text-sm')
            // ->route('proveedor.delete', ['id' => 'id'])
            // ->method('delete')
    ];
}
    


    /*
    |--------------------------------------------------------------------------
    | Actions Rules
    |--------------------------------------------------------------------------
    | Enable the method below to configure Rules for your Table and Action Buttons.
    |
    */

     /**
     * PowerGrid Docente Action Rules.
     *
     * @return array<int, RuleActions>
     */

    /*
    public function actionRules(): array
    {
       return [

           //Hide button edit for ID 1
            Rule::button('edit')
                ->when(fn($docente) => $docente->id === 1)
                ->hide(),
        ];
    }
    */
}
