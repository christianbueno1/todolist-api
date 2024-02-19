import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: 1, description: 'Task 1', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
    { id: 2, description: 'Task 2', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
    { id: 3, description: 'Task 3', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
    { id: 4, description: 'Task 4', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
  ];

  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  getAllTasks() {
    return this.tasks;
  }

  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    console.log('id', id);
    
    return this.tasksRepository.findOne({
      where: { id },
    
    });
    // return await this.tasksRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    // return `This action updates a #${id} task`;
    return await this.tasksRepository.update(id, updateTaskDto);
  }
    

  async remove(id: number): Promise<UpdateResult> {
    // await this.tasksRepository.delete(id);
    return await this.tasksRepository.softDelete({id});
    // return await this.tasksRepository.softRemove({task}); // need the instance of the task
  }

  // findTaskById(id: string) {}

  async create(createTaskDto: CreateTaskDto) {
    const newTask = this.tasksRepository.create(createTaskDto);
    return await this.tasksRepository.save(newTask);
  }
}
