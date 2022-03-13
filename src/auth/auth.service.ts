import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}
  signin() {
    return { msg: 'login' };
  }

  signup() {
    return 'sign up';
  }
}
