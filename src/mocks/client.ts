import { Client } from 'src/db/entities/client';
import { pets } from './pet';

export const clients: Client[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    mail: 'johndoe@gmail.com',
    password: 'test123',
    pets: [pets[0]],
  },
  {
    id: 2,
    firstName: 'Jean',
    lastName: 'Barrel',
    mail: 'jb@gmail.com',
    password: 'test234',
    pets: [pets[1], pets[2]],
  },
  {
    id: 3,
    firstName: 'Bobby',
    lastName: 'James',
    mail: 'bobbyj@gmail.com',
    password: 'test345',
    pets: [pets[3], pets[4]]
  },
];
