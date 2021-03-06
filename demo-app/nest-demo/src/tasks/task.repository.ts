import { EntityRepository, Repository } from 'typeorm';
//import { Task } from '../../dist/tasks/task.model';
import { Task } from './task.entity';
import { TasksController } from './tasks.controller';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

}