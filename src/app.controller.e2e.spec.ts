import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import brands from './brands.json';

describe('AppModule', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET brand/:brandId', () => {
    const brandStub = brands.data[0];

    it(`should throw an exception if an invalid Brand ID is provided`, () => {
      return request(app.getHttpServer()).get(`/brand/INVALID_ID`).expect(404);
    });

    it(`should return the Brand with the corresponding ID`, () => {
      return request(app.getHttpServer())
        .get(`/brand/${brandStub.id}`)
        .expect(200)
        .then((res) => {
          // ensure that all our desired properties exist
          expect(brandStub).toStrictEqual(expect.objectContaining(res.body));
        });
    });
  });

  describe('GET brand/:brandId/products', () => {
    const brandStub = brands.data[0];

    it(`should throw an exception if an invalid Brand ID is provided`, () => {
      return request(app.getHttpServer())
        .get(`/brand/INVALID_ID/products`)
        .expect(404);
    });

    it(`should return an array of Products for the corresponding Brand ID`, () => {
      return request(app.getHttpServer())
        .get(`/brand/${brandStub.id}/products`)
        .expect(200)
        .then((res) => {
          expect(res.body.map(({ id }) => id)).toEqual(brandStub.products);
        });
    });
  });
});
