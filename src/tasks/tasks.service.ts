import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';

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

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOne(id);
  }

  update(id: number, updateTaskDto: CreateTaskDto) {
    return `This action updates a #${id} task`;
  }
    

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }

  // findTaskById(id: string) {}

  create(createTaskDto: CreateTaskDto) {
    const newCreateTaskDto = this.tasksRepository.create(createTaskDto);
    return this.tasksRepository.save(newCreateTaskDto);
  }
}
