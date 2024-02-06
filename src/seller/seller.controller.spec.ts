import { Test, TestingModule } from '@nestjs/testing';

import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';

describe('SellerController', () => {
  let controller: SellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerController],
      providers: [SellerService],
    }).compile();

    controller = module.get<SellerController>(SellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should has defined createSeller method', () => {
    expect(controller.createSeller).toBeDefined();
  });

  it('should has defined getAllSellers', () => {
    expect(controller.getAllSellers).toBeDefined();
  });
});
