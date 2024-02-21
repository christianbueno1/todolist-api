import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,  
  ) {}
  
  async login(loginAuthDto: LoginAuthDto) {
    const email = loginAuthDto.email;
    const existingUser = await this.usersService.findOneByEmail(email);
    console.log('existingUser', existingUser);
    
    if (!existingUser) {
      throw new UnauthorizedException('Invalid credentials: email not found');
    }
    const plainTextPassword = loginAuthDto.password;
    const isPasswordValid = await bcrypt.compare(plainTextPassword, existingUser.password);
    console.log('isPasswordValid', isPasswordValid);
    
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials: password is incorrect');
    }
    const payload = { email, sub: existingUser.id };
    const accessToken = await this.jwtService.signAsync(payload);
    console.log('accessToken', accessToken);
    return { access_token: accessToken, user: existingUser };
    // return 'This action logs a user in';
  }

  async register(registerAuthDto: RegisterAuthDto) {
    const existingEmailUser = await this.usersService.findOneByEmail(registerAuthDto.email);
    console.log('existingEmailUser', existingEmailUser);
    
    const existingUsernameUser = await this.usersService.findOneByUsername(registerAuthDto.username);
    console.log('existingUsernameUser', existingUsernameUser);
    
    if (existingEmailUser && existingUsernameUser) {
      throw new BadRequestException('Email and Username already exists');
    }
    if(existingEmailUser) {
      throw new BadRequestException('Email already exists');
    }
    if(existingUsernameUser) {
      throw new BadRequestException('Username already exists');
    }
    const saltOrRounds = await bcrypt.genSalt();
    const password = registerAuthDto.password;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    registerAuthDto = {...registerAuthDto, password: hashedPassword};

    return await this.usersService.create(registerAuthDto);
    // return 'This action registers a new user';
  }
  
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
