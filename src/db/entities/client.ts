import { Pet } from './pet';
import { User } from './user';

export class Client extends User {
  pets: Pet[];
}
