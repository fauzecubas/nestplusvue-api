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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BadRequestSwagger } from './swagger/bad-request.swagger';
import { IndexUserSwagger } from './swagger/index-user.swagger';
import { NotFoundSwagger } from './swagger/not-found.swagger';
import { UpdateUserSwagger } from './swagger/update-user.swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a User.' })
  @ApiResponse({
    status: 200,
    description: 'The User was created.',
    type: IndexUserSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters.',
    type: BadRequestSwagger,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all Users.' })
  @ApiResponse({
    status: 200,
    description: 'A Users list.',
    type: IndexUserSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    type: BadRequestSwagger,
  })
  findAll() {
    const users = this.usersService.findAll();

    return users;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one User.' })
  @ApiResponse({
    status: 200,
    description: 'The User searched.',
    type: IndexUserSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'User was not found.',
    type: NotFoundSwagger,
  })
  findOne(@Param('id') id: number) {
    const user = this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User does not exists.');
    }

    return user;
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The User was updated.',
    type: UpdateUserSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters.',
    type: BadRequestSwagger,
  })
  @ApiOperation({ summary: 'Update a User.' })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a User.' })
  @ApiResponse({ status: 200, description: 'The User was deleted.' })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    type: BadRequestSwagger,
  })
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @Delete()
  @ApiResponse({ status: 200, description: 'All users have been deleted.' })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    type: BadRequestSwagger,
  })
  @ApiOperation({ summary: 'Delete all Users.' })
  removeAll() {
    return this.usersService.removeAll();
  }
}
