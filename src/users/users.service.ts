import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    // return 'This action adds a new user';
    return await this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    // return `This action returns all users`;
    return  await this.usersRepository.find({
      // relations: ['user'],
      relations: {
        tasks: true,
      }
    });
  }

  async findOne(id: number) {
    // return `This action returns a #${id} user`;
    return await this.usersRepository.findOneOrFail({
      where: { id },
      relations: ['tasks'],
    });
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    // return await this.usersRepository.findOneOrFail({ where: { username } });
    return await this.usersRepository.findOne({ where: { username } });
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    // return await this.usersRepository.findOneOrFail({ where: { email } });
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOneOrFail({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<DeleteResult> {
    // return `This action removes a #${id} user`;
    return await this.usersRepository.delete(id);
  }
}
