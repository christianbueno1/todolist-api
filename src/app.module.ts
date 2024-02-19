import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'chris',
      password: 'maGazine1!',
      database: 'company',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
