import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { config } from 'process';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

console.log(`.${process.env.NODE_ENV}.env`);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        autoLoadEntities: configService.get<boolean>('DB_AUTOLOAD_ENTITIES'),
        synchronize: configService.get<boolean>('DB_SYNC'),
      }),
    }),

    TasksModule,

    UsersModule,

    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
