import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

export interface Task {
  title: string;
  descripcion: string;
  done: boolean;
}

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 1,
      title: 'tarea 1',
      descripcion: 'la tarea 1',
      done: true,
    },
    {
      id: 2,
      title: 'tarea 2',
      descripcion: 'la tarea 2',
      done: false,
    },
    {
      id: 3,
      title: 'tarea 3',
      descripcion: 'la tarea 3',
      done: false,
    },
  ];

  getAll(): Array<Task> {
    return this.tasks;
  }

  getById(id: number): Task | NotFoundException {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return new NotFoundException(`task with id ${id} not found`);
    }
    return taskFound;
  }

  create(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: (this.tasks.length = 0
        ? 1
        : this.tasks[this.tasks.length - 1].id + 1),
    });
    return 'tarea creada';
  }

  update(task: UpdateTaskDto) {
    return 'actualizando tarea';
  }

  destroy() {
    return 'Elimiando tarea';
  }

  updateStatus() {
    return 'actualizando estado de tarea';
  }
}
