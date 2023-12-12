import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '../schemas/palabrasSchema';

export class CreatePalabraDto {
  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  definition: string;

  @IsEnum(Status)
  @IsOptional()
  status: Status;
}
