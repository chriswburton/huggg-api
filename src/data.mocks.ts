import brands from './brands.json';
import { BrandInterface } from './interfaces/brand.interface';

// brand ID -> brand data
export const brandIdMap: { [id: string]: BrandInterface } = brands.data.reduce(
  (acc, { id, name, logo, expiry, website, products, stores, logo_url }) => ({
    ...acc,
    [id]: {
      id,
      name,
      logo,
      expiry,
      website,
      products,
      stores,
      logo_url,
    },
  }),
  {},
);
