import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto, PaginateRoleDto } from '../dto';
import { UpdateRoleDto } from '../dto/update-role.dto';

@Controller('setup/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @Get()
  async getAll(@Query() query: PaginateRoleDto) {
    return await this.roleService.getAll(query);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.roleService.getOne(id);
  }
  @Post()
  async createOne(@Body() dto: CreateRoleDto) {
    dto.user = {
      id: 3,
    };
    const role = await this.roleService.createOne(dto);
    const data = {
      message: 'Role created exist',
      data: role,
    };
    return data;
  }

  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateRoleDto,
  ) {
    dto.user = {
      id: 3,
    };
    const role = await this.roleService.updateOne(id, dto);
    const data = {
      message: 'Registration updated successfully',
      data: role,
    };

    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    const role = await this.roleService.deleteOne(id);
    const data = {
      message: 'Item deleted successfully',
      data: role,
    };

    return data;
  }
}
