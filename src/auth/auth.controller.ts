import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User, Auth } from 'src/common/decorators';
import { User as UserEntity } from 'src/modules/user/entities';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticación')
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
  @Auth()
  @Get('profile')
  profile(@User() user: UserEntity) {
    return { message: 'Ok', user };
  }

  @Auth()
  @Get('refresh')
  refreshToken(@User() user: UserEntity) {
    const data = this.authService.login(user);
    return {
      message: 'Refresh exitoso',
      data,
    };
  }
}
