import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { title } from 'process';
import { StatusTask } from './task-status.enum';
export class Task extends BaseEntity{

@PrimaryGeneratedColumn()
id:number;

@Column()
title:string;

@Column()
description:string;

@Column()
status:StatusTask

}