import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateResult } from 'typeorm';


@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post(':userId')
  create(@Body(ValidationPipe) createTaskDto: CreateTaskDto, @Param('userId') userId: number) {
    try {
      console.log('userId', userId, typeof userId);
      return this.tasksService.create(createTaskDto, Number(userId));
    } catch (error) {
      console.log('error', error);
      throw new NotFoundException(error.message);
      
    }
  }

  // @Get()
  // gretting(): Task[] {
  //   return this.tasksService.getAllTasks();
  // }

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get('/find-all-task-open-by-user/:userId')
  findAllTaskOpenByUser(@Param('userId') userId: number): Promise<Task[]> {
    return this.tasksService.findAllTaskOpenByUser(Number(userId));
  }

  @Get('/find-all-task-done-by-user/:userId')
  findAllTaskDoneByUser(@Param('userId') userId: number): Promise<Task[]> {
    return this.tasksService.findAllTaskDoneByUser(Number(userId));
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Patch('/update-task-done/:id')
  updateTaskDone(@Param('id') id: number) {
    return this.tasksService.updateTaskDone(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<UpdateResult> {
    return this.tasksService.remove(Number(id));
  }



}
