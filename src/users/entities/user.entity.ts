import { Task } from "src/tasks/task.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  username: string;

  @Column()
  password: string;

  @Column({ unique: true})
  email: string;

  @OneToMany(() => Task, (task) => task.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id'})
  tasks: Task[];

}
