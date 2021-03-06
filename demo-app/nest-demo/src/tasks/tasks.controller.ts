import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
// import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TasksModule } from './tasks.module';
import { TasksService } from './tasks.service';
// import { Task } from '../../dist/tasks/task.model';
import { GetTaskFilterDto } from './Dto/get-task-filter.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService:TasksService){}

	// @Get()
   // getTasks(@Query(ValidationPipe)filterDto:GetTaskFilterDto):Task[]{
   //    if(Object.keys(filterDto).length){
   //       return this.tasksService.GetTaskFilterDto(filterDto)
   //    }
   //    else{
	//   return this.tasksService.getAllTasks()
   //    }
   // }		

   // @Post()
   // createTask(@Body('title')title:string,@Body('description')description:string):Task{
	//    return this.tasksService.createTask(title,description)
   // }

   @Get('/:id')
   getTaskById(@Param('id', ParseIntPipe) id:number): Promise<Task>{
	   return this.tasksService.getTaskById(id)
   }

   // @Delete('/:id')
   // delteTaskById(@Param('id')id:string){
	//   this.tasksService.deleteTaskById(id)
	//   return `task ${id} is deleted`
   // }

   // @Patch('/:id')
   // updateTask(@Param('id')id:string,@Body('status', TaskStatusValidationPipe)status:StatusTask){
	//    return this.tasksService.updateTask(id,status)
   // }
}
