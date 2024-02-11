import { Body, Controller, Post } from '@nestjs/common';

import { SellerService } from './seller.service';
import { CreateSeller } from './validators/createSeller.validator';

@Controller('seller')
export class SellerController {
  constructor(private readonly _sellerService: SellerService) {}

  @Post('/create')
  createSeller(@Body() newSeller: CreateSeller) {
    return this._sellerService.createSeller(newSeller);
  }

  getAllSellers() {}
}
