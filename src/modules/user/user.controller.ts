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
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getMany() {
    const users = await this.userService.getMany();
    const data = {
      data: users,
      message: 'Ok',
    };
    return data;
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getOne(id);
    const data = {
      data: user,
      message: 'Ok',
    };

    return data;
  }

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const user = await this.userService.createOne(dto);
    const data = {
      data: user,
      message: 'Registro agregado con éxito',
    };
    return data;
  }

  @Put(':id')
  async UpdateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ) {
    const user = await this.userService.updatedOne(id, dto);
    const data = {
      data: user,
      message: 'Registro actualizado con éxito',
    };

    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.deleteOne(id);
    const data = {
      data: user,
      message: 'Registro eliminado con éxito',
    };

    return data;
  }
}
