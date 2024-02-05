import { pets } from './pet';

export const clients = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    mail: 'johndoe@gmail.com',
    password: 'test123',
    pets: [pets[0].id],
  },
  {
    id: 2,
    firstname: 'Jean',
    lastname: 'Barrel',
    mail: 'jb@gmail.com',
    password: 'test234',
    pets: [pets[1].id, pets[2].id],
  },
  {
    id: 3,
    firstname: 'Bobby',
    lastname: 'James',
    mail: 'bobbyj@gmail.com',
    password: 'test345',
    pets: [pets[3].id, pets[4].id]
  },
];
