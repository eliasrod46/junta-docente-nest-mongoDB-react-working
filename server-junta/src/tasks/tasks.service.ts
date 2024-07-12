import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
  
  getAll() {
    return ["task 1", "task 2", "taske 3"]
  }

  create() {
    return 'creando tarea';
  }

  update() {
    return 'actualizando tarea';
  }

  destroy() {
    return 'Elimiando tarea';
  }
}