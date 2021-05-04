import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { BrandInterface } from './interfaces/brand.interface';
import { brandIdMap } from './data.mocks';

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
}
