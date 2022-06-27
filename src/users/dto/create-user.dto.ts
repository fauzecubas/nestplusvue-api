import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  age: number;

  @IsNumber()
  zipCode: number;

  @IsString()
  district: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsString()
  addressNumber: string;

  @IsString()
  state: string;
}
