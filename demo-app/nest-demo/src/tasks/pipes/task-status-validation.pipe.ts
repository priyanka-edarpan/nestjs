import { PipeTransform, BadRequestException } from "@nestjs/common";
import { StatusTask } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform{
	readonly allowedStatus = [  
		StatusTask.Done,
		StatusTask.In_progress,
		StatusTask.Open
	] 

transform(value:any){
	value = value.toUpperCase()

	if(!this.isStatusValid(value)){
		throw new BadRequestException(`"${value}" is an invalid status`)
	}
	    return value
	
	
}

private isStatusValid(status:any){
const idex	= this.allowedStatus.indexOf(status)
	return idex!==-1
}

}