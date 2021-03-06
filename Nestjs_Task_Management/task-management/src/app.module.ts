import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './users/companies.module';
import { config } from './orm.config';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(config), CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
