import { Role } from '../../types';
import { User } from './user';

export class Seller extends User {
  role: Role;
}
