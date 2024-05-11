   <!-- Table -->
   <div class="mx-5 flex flex-col mt-6">
       <div class="p-2 text-center">
           <label class="text-md" for="search">Buscar:</label>
           <input wire:model.live="search" class="p-2 rounded-xl text-black text-md w-2/4" id="search" type="text">
       </div>

       @if ($posts->count())

           <div class="mx-4 my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                   <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                       <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                           <!-- Headers -->
                           <thead class="bg-gray-50 dark:bg-gray-800 ">
                               <tr class="grid grid-cols-4">
                                   <th scope="col" wire:click="sortBy('id')"
                                       class="px-12
                                       py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500
                                       dark:text-gray-400">
                                       ID
                                   </th>
                                   <th scope="col" wire:click="sortBy('name')"
                                       class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                       Nombre
                                   </th>
                                   <th scope="col"
                                       class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 col-span-2">
                                       Acciones</th>
                               </tr>
                           </thead>
                           <!-- data -->
                           <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                               @foreach ($posts as $post)
                                   <tr class="grid grid-cols-4">
                                       <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                           <div class="text-center">
                                               {{ $post->id }}
                                           </div>
                                       </td>
                                       <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                           <div class="text-center">
                                               {{ $post->name }}
                                           </div>
                                       </td>
                                       <td class="px-4 py-4 text-sm font-medium whitespace-nowrap col-span-2">
                                           <div class="flex justify-center items-center gap-6">
                                               <a href="{{ route('admin.posts.show', $post) }}"
                                                   class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                   Ver </a>
                                               <a href="{{ route('admin.posts.edit', $post) }}"
                                                   class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                   Editar </a>
                                               <form action="{{ route('admin.posts.destroy', $post) }}" method="POST">
                                                   @method('DELETE')
                                                   @csrf
                                                   <button
                                                       class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                                       type="submit">Eliminar</button>
                                               </form>

                                           </div>
                                       </td>

                                   </tr>
                               @endforeach
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
           <div class="mb-5">
               {{ $posts->links() }}
           </div>
       @else
           <div class="mx-4 my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                   <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                       <h2 class="font-bold text-xl text-center py-10">No hay registros para mostrar</h2>
                   </div>
               </div>
           </div>

       @endif

   </div>
