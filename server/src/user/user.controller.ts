import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/auth/enum';
import { User } from '@prisma/client';
import { ChangePasswordDto, UserRequestDto, UserResponseDto } from './dto';
import { GetUser } from 'src/auth/decorator';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public retrieveUsers(): Promise<UserResponseDto[]> {
    return this.userService.retrieveUsers();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.USER)
  @Put('/:userId')
  @HttpCode(HttpStatus.OK)
  public updateUser(
    @Param() params: { userId: string },
    @Body() userRequestDto: UserRequestDto,
  ): Promise<UserResponseDto> {
    return this.userService.updateUser(
      parseInt(params.userId, 10),
      userRequestDto,
    );
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete('/:userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  public removeUser(@Param() params: { userId: string }): Promise<void> {
    return this.userService.removeUser(parseInt(params.userId, 10));
  }

  @Get('/:userId')
  @HttpCode(HttpStatus.OK)
  public retrieveUser(@Param() params: { userId: string }): Promise<User> {
    return this.userService.retrieveUser(parseInt(params.userId, 10));
  }

  @UseGuards(AuthGuard)
  // todo: fix this
  // @Put('/change')
  @Put()
  @HttpCode(HttpStatus.NO_CONTENT)
  public changePassword(
    @GetUser('sub') sub: string,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.userService.changePassword(
      parseInt(sub, 10),
      changePasswordDto,
    );
  }
}
