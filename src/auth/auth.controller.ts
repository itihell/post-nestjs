import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators';

import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@User() user: any) {
    return user;
  }
  @Get('profile')
  profile() {
    return { message: 'estos son tus datos' };
  }
}
