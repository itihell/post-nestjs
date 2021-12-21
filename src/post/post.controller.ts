import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  getMany() {
    return this.postService.getMany();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getOne(id);
  }

  @Post()
  createOne(@Body() dto: CreatePostDto) {
    return this.postService.createOne(dto);
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePostDto) {
    return this.postService.updateOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.deleteOne(id);
  }
}
