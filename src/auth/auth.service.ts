import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({
      where: { emailAddress: username },
    });
    if (!user) {
      return null;
    }
    const valid = bcrypt.compareSync(pass, user.password);
    if (valid) return this.login(user);
    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // generateLoginToken(user: User): string {
  // }
  async login(user: User) {
    const payload = { email: user.emailAddress, userID: user.id };
    // const payload = user.toJSON();
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
