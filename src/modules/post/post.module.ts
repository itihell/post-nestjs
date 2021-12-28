import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController, CommentController],
  providers: [PostService, CommentService],
})
export class PostModule {}
