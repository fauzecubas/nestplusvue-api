import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    const users = this.usersService.findAll();

    console.log(users);

    // if (users.length === 0) {
    //   throw new NotFoundException('Coudn`t find any Users.');
    // }

    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const user = this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User does not exists.');
    }

    return user;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @Delete()
  removeAll() {
    return this.usersService.removeAll();
  }
}
