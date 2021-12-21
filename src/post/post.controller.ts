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

@Controller('post')
export class PostController {
  @Get()
  getMany() {
    return { messaje: 'ok' };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return { id: id };
  }

  @Post()
  createOne(@Body() body: CreatePostDto) {
    return { body };
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdatePostDto,
  ) {
    return { body: body };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return { id: id };
  }
}
