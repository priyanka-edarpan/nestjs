import { IsNotEmpty } from "class-validator"

export class CreateTasDto{
	@IsNotEmpty()
	title:string

	@IsNotEmpty()
	descripition:string
}