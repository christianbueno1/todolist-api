import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: 1, description: 'Task 1', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
    { id: 2, description: 'Task 2', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
    { id: 3, description: 'Task 3', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
    { id: 4, description: 'Task 4', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
  ];

  getAllTasks() {
    return this.tasks;
  }

  // findTaskById(id: string) {}

  // createTask(task: Task) {
  //   this.tasks.push(task);
  // }
}
