import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(@Query() query: any) {
    return this.tasksService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.tasksService.getById(Number(id));
  }

  @Post()
  create(@Body() task: CreateTaskDto) {
    return this.tasksService.create(task);
  }

  @Put()
  update(@Body() task: UpdateTaskDto) {
    return this.tasksService.update(task);
  }

  @Delete()
  destroy() {
    return this.tasksService.destroy();
  }

  @Patch()
  updateStatus() {
    return this.tasksService.updateStatus();
  }
}
