import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  // POST Signup (/auth/signup)
  @Post('signup')
  async signup(@Body() signupData: SignupDto) {
    return 'Signup';
  }

  // POST Login (/auth/login)
  // POST Refresh Token 




}
