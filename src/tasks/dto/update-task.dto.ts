import { PartialType } from "@nestjs/swagger";
import { CreateTaskDto } from "./create-task.dto";

// set all properties to optional
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}