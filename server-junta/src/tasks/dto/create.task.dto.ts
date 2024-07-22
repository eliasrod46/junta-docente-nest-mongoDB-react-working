import {
  IsString,
  IsBoolean,
  MinLength,
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  descripcion: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  stars: number;
}
