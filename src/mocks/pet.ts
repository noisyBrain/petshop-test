import { Pet } from '../db/entities/pet';
import { PetType } from '../types';

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Fuffy',
    age: 5,
    weight: 2.5,
    neutered: false,
    type: PetType.CAT,
  },
  {
    id: 2,
    name: 'Gino',
    weight: 6.8,
    age: 10,
    neutered: true,
    type: PetType.DOG,
  },
  {
    id: 3,
    name: 'Carla',
    weight: 5.1,
    age: 1,
    neutered: true,
    type: PetType.CAT,
  },
  {
    id: 4,
    name: 'Adela',
    weight: 3.0,
    age: 3,
    neutered: false,
    type: PetType.DOG,
  },
];
