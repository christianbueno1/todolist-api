import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TasksService {
  // private tasks: Task[] = [
  //   { id: 1, description: 'Task 1', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
  //   { id: 2, description: 'Task 2', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
  //   { id: 3, description: 'Task 3', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
  //   { id: 4, description: 'Task 4', status: TaskStatus.OPEN, deletedAt: new Date('2024-02-17') },
  // ];

  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>, private usersService: UsersService,
  ) { }

  // getAllTasks() {
  //   return this.tasks;
  // }


  async create(createTaskDto: CreateTaskDto, userId: number) {
    let task: Task = new Task();
    task.description = createTaskDto.description;
    task.status = createTaskDto.status;

    task.user = await this.usersService.findOne(userId);
    task.userId = task.user.id;

    return await this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.find({
      // relations: ['user'],
      relations: {
        user: true,
      },
    });
  }

  async findAllTasksByUser(userId: number): Promise<Task[]> {
    return await this.tasksRepository.find({
      // relations: ['user'],
      relations: {
        user: true,
      },
      where: {
        user: {
          id: userId,
        },
      },
    });
  }
  
  async findAllTaskOpenByUser(userId: number): Promise<Task[]> {
    return await this.tasksRepository.find({
      // relations: ['user'],
      relations: {
        user: true,
      },
      where: {
        user: {
          id: userId,
        },
        status: TaskStatus.OPEN,
      },
    });
  }

  async findAllTaskDoneByUser(userId: number): Promise<Task[]> {
    return await this.tasksRepository.find({
      // relations: ['user'],
      relations: {
        user: true,
      },
      where: {
        user: {
          id: userId,
        },
        status: TaskStatus.DONE,
      },
    });
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

  async updateTaskDone(id: number) {
    // return `This action updates a #${id} task`;
    return await this.tasksRepository.update(id, { status: TaskStatus.DONE });
  }


  async remove(id: number): Promise<UpdateResult> {
    // await this.tasksRepository.delete(id);
    return await this.tasksRepository.softDelete({ id });
    // return await this.tasksRepository.softRemove({task}); // need the instance of the task
  }

  // findTaskById(id: string) {}


}
