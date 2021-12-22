import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators';
import { User as UserEntity } from 'src/user/entities';

import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@User() user: UserEntity) {
    console.log('rpboasdfdsfd ');
    const data = await this.authService.login(user);
    return {
      message: 'Login exitoso',
      data: data,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile() {
    return { message: 'estos son tus datos' };
  }
}
