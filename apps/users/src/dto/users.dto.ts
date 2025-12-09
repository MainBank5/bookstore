import { IsInt, IsNotEmpty, IsString, Min, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsInt()
  @Min(0)
  age: number;
}
export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string; 

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;
}