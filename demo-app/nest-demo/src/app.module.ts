import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
//import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { typeormConfig } from './config/typeorm.config';

@Module({
  imports: [
  TypeOrmModule.forRoot(typeormConfig),
  TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
