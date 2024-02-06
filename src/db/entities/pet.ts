import { PetType } from '../../types';
import { BaseEntity } from './base.entity';

export class Pet extends BaseEntity {
  name: string;

  weight: number;

  age: number;

  type: PetType;

  neutered: boolean;
}
