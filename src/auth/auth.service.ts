import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { use } from 'passport';
import { User } from 'src/user/entities';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findEmail(email);
    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    return null;
  }
}
