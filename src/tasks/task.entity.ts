// create a task class: id description, status

import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TaskStatus {
  OPEN = 'OPEN',
  // IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

// @Entity({ name: 'tasks'})
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ default: TaskStatus.OPEN})
  status: TaskStatus;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;
}

