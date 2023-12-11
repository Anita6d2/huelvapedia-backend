import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '../schemas/palabrasSchema';

export class UpdatePalabraDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  definition?: string;

  @IsEnum(Status)
  @IsOptional()
  status?: Status;
}
