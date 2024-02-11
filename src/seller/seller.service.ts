import { Injectable } from '@nestjs/common';

import { Seller } from '../db/entities/seller';
import { sellers as sellersMock } from '../mocks/seller';

@Injectable()
export class SellerService {
  sellers: Seller[];

  constructor() {
    this.sellers = sellersMock;
  }

  createSeller(seller: Seller): void {
    const lastSellerId = this.sellers[this.sellers.length - 1].id + 1;
    seller.id = lastSellerId + 1;

    this.sellers.push(seller);
  }

  getSellers(): Seller[] {
    return this.sellers;
  }
}
