import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getMany() {
    return await this.userRepository.find();
  }
  async getOne(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('No se encontro el registro');
    return user;
  }

  async createOne(dto: CreateUserDto) {
    const user = this.userRepository.create(dto);
    return await this.userRepository.save(user);
  }
  async updatedOne(id: number, dto: UpdateUserDto) {
    const post = await this.userRepository.findOne(id);
    const editedPost = Object.assign(post, dto);
    return await this.userRepository.save(editedPost);
  }

  async deleteOne(id: number) {
    const post = await this.userRepository.findOne(id);
    return await this.userRepository.remove(post);
  }
}
