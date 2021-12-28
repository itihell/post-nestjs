import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { existFindOne } from '../../helpers';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  async getMany() {
    return await this.postRepository.find();
  }

  async createOne(dto: CreatePostDto) {
    const post = this.postRepository.create({ ...dto });
    return await this.postRepository.save(post);
  }
  async getOne(id: number) {
    const post = await this.postRepository.findOne(id);
    existFindOne(post);
    return post;
  }

  async updateOne(id: number, dto: UpdatePostDto) {
    const post = await this.postRepository.findOne(id);
    const editedPost = Object.assign(post, dto);
    return await this.postRepository.save(editedPost);
  }
  async deleteOne(id: number) {
    const post = await this.postRepository.findOne(id);
    return await this.postRepository.remove(post);
  }
}
