import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { BrandInterface } from './interfaces/brand.interface';
import { brandIdMap, productIdMap } from './data.mocks';
import { ProductInterface } from './interfaces/product.interface';

@Controller()
export class AppController {
  @Get('brand/:brandId')
  getBrandById(@Param('brandId') brandId = ''): BrandInterface {
    // check brand exists
    if (!brandIdMap[brandId]) {
      throw new NotFoundException('Brand not found');
    }
    return brandIdMap[brandId];
  }

  @Get('brand/:brandId/products')
  getProductsByBrand(@Param('brandId') brandId = ''): ProductInterface[] {
    if (!brandIdMap[brandId]) {
      throw new NotFoundException('Brand not found');
    }
    return brandIdMap[brandId].products.map(
      (productId: string) => productIdMap[productId],
    );
  }
}
