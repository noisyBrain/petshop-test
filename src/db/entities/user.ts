import { BaseEntity } from './base.entity';

export class User extends BaseEntity {
  firstName: string;

  lastName: string;

  mail: string;

  password: string;
}
