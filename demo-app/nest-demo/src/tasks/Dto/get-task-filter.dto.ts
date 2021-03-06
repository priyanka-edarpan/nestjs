import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { StatusTask } from '../task-status.enum';

export class GetTaskFilterDto{
	@IsOptional()
	@IsIn([StatusTask.Open, StatusTask.In_progress, StatusTask.Done])
	status:StatusTask

    @IsOptional()
	@IsNotEmpty()
	search:string
}