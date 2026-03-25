import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketplaceController } from './marketplace.controller';
import { AuctionService } from './marketplace.service';
import { Auction } from './entities/auction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auction])],
  controllers: [MarketplaceController],
  providers: [AuctionService],
  exports: [AuctionService],
})
export class MarketplaceModule {}
