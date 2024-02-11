import { Test, TestingModule } from '@nestjs/testing';

import { SellerService } from './seller.service';
import { Seller } from '../db/entities/seller';
import { Role } from '../types';

describe('SellerService', () => {
  let service: SellerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerService],
    }).compile();

    service = module.get<SellerService>(SellerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should has defined createSeller method', () => {
    expect(service.createSeller).toBeDefined();
  });

  it('should add the new seller to the array of sellers', () => {
    const sellers = service.sellers;
    const newSeller = {
      id: 4,
      firstName: 'Foo',
      lastName: 'Test',
      mail: 'footest@gmail.com',
      role: Role.SELLER,
      password: 'strongpassword',
    };

    service.createSeller(newSeller);

    /*
      as this app has no persistance layer I'm testing
      that the new seller is added to the end of the array
    */
    expect(sellers[sellers.length - 1]).toStrictEqual<Seller>({
      id: 4,
      firstName: 'Foo',
      lastName: 'Test',
      mail: 'footest@gmail.com',
      role: Role.SELLER,
      password: 'strongpassword',
    });
  });

  it('should has defined getSellers method', () => {
    expect(service.getSellers).toBeDefined();
  });

  it('should return an array of all registered sellers', () => {
    const allSellers = service.getSellers();

    expect(allSellers).toBeInstanceOf(Array<Seller>);
    expect(allSellers[0]).toStrictEqual<Seller>({
      id: 1,
      firstName: 'Chris',
      lastName: 'Gomm',
      mail: 'chrimsdummy@gmail.com',
      password: 'test123',
      role: Role.SELLER,
    });
  });
});
