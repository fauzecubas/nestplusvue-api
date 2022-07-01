import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  zipCode: number;

  @ApiProperty()
  district: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  addressNumber: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  githubUsername: string;

  @ApiProperty()
  githubUrl: string;

  @ApiProperty()
  githubId: number;

  @ApiProperty()
  nodeId: string;

  @ApiProperty()
  githubType: string;
}
