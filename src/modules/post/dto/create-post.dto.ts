import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { EnumToString } from 'src/helpers/enumToString';
import { PostCategory } from '../enums';

export class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly slug: string;

  @IsString()
  readonly excerpt: string;

  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsEnum(PostCategory, {
    message: `Invalid option. Valids options are ${EnumToString(PostCategory)}`,
  })
  readonly category: string;

  @IsString({ each: true })
  @IsArray()
  readonly tags: string[];

  @IsOptional()
  @IsBoolean()
  readonly status: boolean;
}
