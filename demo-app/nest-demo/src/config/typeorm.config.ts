import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig:TypeOrmModuleOptions ={
	type:'postgres',
	host:'localhost',
	port:5432,
	username:'postgres',
	password:'priya',
	database:'taskmanagement',
	entities:[__dirname + '/../**/*.entity.ts'],
	synchronize:true,
}