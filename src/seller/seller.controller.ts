import { Controller } from '@nestjs/common';

import { SellerService } from './seller.service';

@Controller('seller')
export class SellerController {
  constructor(private readonly _sellerService: SellerService) {}

  createSeller() {}

  getAllSellers() {}
}
