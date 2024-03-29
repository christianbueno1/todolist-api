import { IsNumber, IsString } from "class-validator";
import { TaskStatus } from "../task.entity";

export class CreateTaskDto {

  @IsString()
  public description: string;

  @IsString()
  public status: TaskStatus;

  // @IsNumber()
  // public userId: number;
}