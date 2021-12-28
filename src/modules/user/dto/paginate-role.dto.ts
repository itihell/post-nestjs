import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginateRoleDto {
  @IsNumber()
  @IsOptional()
  @IsPositive()
  readonly offset: number;
  @IsNumber()
  @IsOptional()
  @IsPositive()
  readonly limit: number;
}
