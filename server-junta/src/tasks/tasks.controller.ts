import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Post()
  create() {
    return this.tasksService.create();
  }

  @Patch()
  update() {
    return this.tasksService.update();
  }

  @Delete()
  destroy() {
    return this.tasksService.destroy();
  }
}
