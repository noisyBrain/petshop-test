import { Seller } from '../db/entities/seller';
import { Role } from '../types/index';


export const sellers: Seller[] = [
  {
    id: 1,
    firstName: 'Chris',
    lastName: 'Gomm',
    mail: 'chrimsdummy@gmail.com',
    password: 'test123',
    role: Role.SELLER,
  },
  {
    id: 2,
    firstName: 'Barbara',
    lastName: 'Weinston',
    mail: 'jb@gmail.com',
    password: 'test234',
    role: Role.SELLER,
  },
];
