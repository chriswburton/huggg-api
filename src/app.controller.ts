import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { BrandInterface } from './interfaces/brand.interface';
import {
  brandIdMap,
  productIdMap,
  productStoreMap,
  storeIdMap,
} from './data.mocks';
import { ProductInterface } from './interfaces/product.interface';
import { StoreInterface } from './interfaces/store.interface';

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

  @Get('brand/:brandId/stores')
  getStoresByBrand(@Param('brandId') brandId = ''): StoreInterface[] {
    if (!brandIdMap[brandId]) {
      throw new NotFoundException('Brand not found');
    }
    return brandIdMap[brandId].stores.map(
      (storeId: string) => storeIdMap[storeId],
    );
  }

  @Get('product/:productId/stores')
  getStoresByProduct(@Param('productId') productId = ''): StoreInterface[] {
    if (!productStoreMap[productId]) {
      throw new NotFoundException('Product not found');
    }
    return productStoreMap[productId];
  }
}
