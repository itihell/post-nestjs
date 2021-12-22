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
import { CreateUserDto } from './dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getMany() {
    return await this.userService.getMany();
  }

  @Get('id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getOne(id);
  }

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    return await this.userService.createOne(dto);
  }

  @Put('id')
  async UpdateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ) {
    return await this.userService.updatedOne(id, dto);
  }

  @Delete('id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteOne(id);
  }
}
