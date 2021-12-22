import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    await this.validarEmail(dto);
    const user = this.userRepository.create(dto);
    return await this.userRepository.save(user);
  }
  async updatedOne(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('No se encontro el registro');
    const newUser = Object.assign(user, dto);
    return await this.userRepository.save(newUser);
  }

  async deleteOne(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('No se encontro el registro');
    return await this.userRepository.remove(user);
  }

  async validarEmail(dto: CreateUserDto) {
    const user = await this.userRepository.find({ email: dto.email });
    if (user.length > 0)
      throw new BadRequestException('El email ya esta en uso');
  }
}
