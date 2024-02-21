import { PartialType } from "@nestjs/swagger";
import { LoginAuthDto } from "./login-auth.dto";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Transform } from "class-transformer";

// export class RegisterAuthDto extends PartialType(LoginAuthDto) {
export class RegisterAuthDto {
  
  @Transform(({ value }) => value.trim())
  @IsString()
  // @IsNotEmpty()
  @MinLength(4)
  username: string;

  @IsEmail()
  // @IsNotEmpty()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  // @IsNotEmpty()
  @MinLength(4)
  // @MaxLength(12)
  password: string;
}