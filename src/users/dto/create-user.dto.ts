import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  age: number;

  @IsNumber()
  @ApiProperty()
  zipCode: number;

  @IsString()
  @ApiProperty()
  district: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  address: string;

  @IsString()
  @ApiProperty()
  addressNumber: string;

  @IsString()
  @ApiProperty()
  state: string;

  @IsString()
  @ApiProperty()
  githubUsername: string;

  @IsString()
  @ApiProperty()
  githubUrl: string;

  @IsNumber()
  @ApiProperty()
  githubId: number;

  @IsString()
  @ApiProperty()
  nodeId: string;

  @IsString()
  @ApiProperty()
  githubType: string;

  @IsString()
  @ApiProperty()
  reposUrl: string;
}
