import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  getMany() {
    return { ok: 'Listo getMany' };
  }

  createOne(dto: CreatePostDto) {
    return { ok: 'Listo createOne' };
  }
  getOne(id: number) {
    return { ok: 'Listo getOne' };
  }
  updateOne(id: number, dto: UpdatePostDto) {
    return { ok: 'Listo editOne' };
  }
  deleteOne(id: number) {
    return { ok: 'Listo deleteOne' };
  }
}
