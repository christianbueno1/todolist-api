// create a task class: id description, status

import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  // @Column({ unique: true})
  @Column('text')
  description: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.OPEN})
  status: TaskStatus;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  date: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;

  @Column({ name: 'user_id'})
  userId: number;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'user_id'})
  // @JoinColumn()
  user: User;
}

