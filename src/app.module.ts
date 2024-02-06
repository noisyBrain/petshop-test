import { Module } from '@nestjs/common';
import { SellerService } from './seller/seller.service';
import { SellerController } from './seller/seller.controller';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [SellerModule],
  controllers: [SellerController],
  providers: [SellerService],
})
export class AppModule {}
