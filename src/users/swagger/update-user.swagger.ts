import { OmitType, PartialType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class UpdateUserSwagger extends PartialType(OmitType(User, ['id'])) {}
