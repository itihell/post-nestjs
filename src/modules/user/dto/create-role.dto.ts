import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { User } from '../entities';

export class CreateRoleDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsObject()
  user: Partial<User>;
}
