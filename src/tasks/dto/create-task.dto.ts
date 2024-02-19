import { IsString } from "class-validator";
import { TaskStatus } from "../task.entity";

export class CreateTaskDto {

  @IsString()
  description: string;

  @IsString()
  status: TaskStatus;
}