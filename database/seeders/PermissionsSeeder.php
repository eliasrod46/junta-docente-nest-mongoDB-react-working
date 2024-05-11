<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{
        $role1 = Role::create(['name'=> 'Admin']);
        $role2 = Role::create(['name'=> 'Blogger']);
        $role3 = Role::create(['name'=> 'User']);

        //-permissions
        Permission::create(['group'=>'General','description'=>'Ver el Panel','name'=> 'admin.home'])->syncRoles([$role1, $role2]);

        Permission::create(['group'=>'Usuarios','description'=>'Ver el listado de usaurios','name' => 'admin.users.index'])->syncRoles([$role1]);
        Permission::create(['group'=>'Usuarios','description'=>'Asignar roles','name' => 'admin.users.edit'])->syncRoles([$role1]);

        Permission::create(['group'=>'Roles','description'=>'Ver listado de roles','name' => 'admin.roles.index'])->syncRoles([$role1]);
        Permission::create(['group'=>'Roles','description'=>'Crear roles','name' => 'admin.roles.create'])->syncRoles([$role1]);
        Permission::create(['group'=>'Roles','description'=>'Editar roles','name' => 'admin.roles.edit'])->syncRoles([$role1]);
        Permission::create(['group'=>'Roles','description'=>'Eliminar roles','name' => 'admin.roles.destroy'])->syncRoles([$role1]);

        Permission::create(['group'=>'Etiquetas','description'=>'Ver listado de etiquetas','name' => 'admin.tags.index'])->syncRoles([$role1,$role2]);
        Permission::create(['group'=>'Etiquetas','description'=>'Crear etiquetas','name' => 'admin.tags.create'])->syncRoles([$role1]);
        Permission::create(['group'=>'Etiquetas','description'=>'Editar etiquetas','name' => 'admin.tags.edit'])->syncRoles([$role1]);
        Permission::create(['group'=>'Etiquetas','description'=>'Eliminar etiquetas','name' => 'admin.tags.destroy'])->syncRoles([$role1]);

        Permission::create(['group'=>'Categorias','description'=>'Ver listado de categorias','name' => 'admin.categories.index'])->syncRoles([$role1,$role2]);
        Permission::create(['group'=>'Categorias','description'=>'Crear categorias','name' => 'admin.categories.create'])->syncRoles([$role1]);
        Permission::create(['group'=>'Categorias','description'=>'Editar categorias','name' => 'admin.categories.edit'])->syncRoles([$role1]);
        Permission::create(['group'=>'Categorias','description'=>'Eliminar categorias','name' => 'admin.categories.destroy'])->syncRoles([$role1]);

        Permission::create(['group'=>'Posts','description'=>'Ver listado de posts','name' => 'admin.posts.index'])->syncRoles([$role1,$role2]);
        Permission::create(['group'=>'Posts','description'=>'Crear posts','name' => 'admin.posts.create'])->syncRoles([$role1,$role2]);
        Permission::create(['group'=>'Posts','description'=>'Editar posts','name' => 'admin.posts.edit'])->syncRoles([$role1,$role2]);
        Permission::create(['group'=>'Posts','description'=>'Eliminar posts','name' => 'admin.posts.destroy'])->syncRoles([$role1,$role2]);

        



        // $role->givePermissionTo($permission);
        // ó
        // $permission->assignRole($role);

        
        $user = User::find(1);
        $user->assignRole('Admin');
        $user = User::find(2);
        $user->assignRole('Blogger');
        $user = User::find(3);
        $user->assignRole('User');

    }
}
