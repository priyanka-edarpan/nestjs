import { TypeOrmModuleOptions } from '@nestjs/typeorm';
	export const config: TypeOrmModuleOptions = {
	    "type": "postgres",
	    "host": "localhost",
	    "port": 5432,
	    "username": "postgres",
	    "password": "12345678",
	    "database": "todos",
		"synchronize": true,
	    "entities": [
	        "dist/**/**.entity{.ts,.js}"
	    ],
	    
	};