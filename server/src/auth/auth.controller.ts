import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guard';
import { AuthLogInDto } from './dto/login';
import { AuthSignUpDto } from './dto/signup';
import { User } from '@prisma/client';

@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  public login(
    @Body() authLogInDto: AuthLogInDto,
  ): Promise<{ access_token: string; user: User }> {
    return this.authService.login(authLogInDto);
  }

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  public signup(@Body() authSignUpDto: AuthSignUpDto): Promise<User> {
    return this.authService.signup(authSignUpDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  public getProfile() {
    return 'successful';
  }
}
