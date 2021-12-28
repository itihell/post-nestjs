import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities';
import { existFindOne } from '../../../helpers/valitations';
import { CreateRoleDto } from '../dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { PaginateRoleDto } from '../dto';
import console from 'console';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  async getAll(query: PaginateRoleDto) {
    const roles = await this.roleRepository.find({
      relations: ['user'],
      skip: query.offset,
      take: query.limit,
    });
    return roles;
  }

  async getOne(id: number) {
    const role = await this.roleRepository.findOne(id, { relations: ['user'] });
    existFindOne(role);
    return role;
  }

  async createOne(dto: CreateRoleDto) {
    const role: Role = this.roleRepository.create(dto);
    return await this.roleRepository.save(role);
  }

  async updateOne(id: number, dto: UpdateRoleDto) {
    const role: Role = await this.roleRepository.findOne(id);
    existFindOne(role);
    const updateRole = Object.assign(role, dto);

    return await this.roleRepository.save(updateRole);
  }

  async deleteOne(id: number) {
    const role: Role = await this.roleRepository.findOne(id);
    existFindOne(role);
    return await this.roleRepository.remove(role);
  }
}
