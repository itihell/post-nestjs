import { Controller, Get } from '@nestjs/common';

@Controller('post-comment')
export class CommentController {
  @Get()
  getComments() {
    return { comment: 'Comentarios' };
  }
}
