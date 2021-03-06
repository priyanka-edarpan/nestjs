import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { title } from 'process';
import { identity } from 'rxjs';
import { GetTaskFilterDto } from './Dto/get-task-filter.dto';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
	constructor(
		@InjectRepository(TaskRepository)
		private readonly taskRepository:TaskRepository
	){}
	// private tasks:Task[]= []

	// getAllTasks():Task[]
	// {
	// 	return this.tasks
	// }	


	// GetTaskFilterDto(filterdto:GetTaskFilterDto):Task[]{
	// const{status, search}= filterdto
    //  let tasks = this.getAllTasks()

	//  if(status){
	// 	 tasks= tasks.filter(task=>task.status === status)
	//  }

	//  if(search){
	// 	 tasks = tasks.filter(task=>task.title.includes(search)||task.description.includes(search)
	// 	 )
	//  }
	//  return tasks

	// }

	async getTaskById(id:number): Promise<Task> {
    const found = await this.taskRepository.findOne(id)

	 if(!found){
		throw new NotFoundException(`task with id "${id}" not found`);
	 }
	
		return found

	}

}
	// 
	// createTask(title:string,description:string):Task{
	// 	const id=new Date().toString()
	// 	const task:Task={
	// 	id,
	// 	title,
	// 	description,		
	// 	status:StatusTask.Open
	// 	}

	// 	this.tasks.push(task)
	// 	return task
		
	// }

	// deleteTaskById(id:string){ 
	// 	this.tasks= this.tasks.filter(task=>task.id!==id)
	// }

	// updateTask(id:string,statustask:StatusTask):Task{

	// 	let task = this.getTaskById(id)
	// 	task.status = statustask
	// 	return task

	// }

