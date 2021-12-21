import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';
import { PostCategory } from '../enums';

export class CreatePostDto {
  @IsString()
  title: string;
  @IsString()
  descripcion: string;
  @IsString()
  slug: string;
  @IsString()
  excerpt: string;
  @IsString()
  content: string;
  @IsEnum(PostCategory)
  category: PostCategory;
  @IsArray()
  @IsString({ each: true })
  tags: string[];
  @IsBoolean()
  status: boolean;
}
