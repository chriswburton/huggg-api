import brands from './brands.json';
import { BrandInterface } from './interfaces/brand.interface';
import { ProductInterface } from './interfaces/product.interface';
import { StoreInterface } from './interfaces/store.interface';

const { products, stores } = brands.embedded;

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

// producty ID -> product data
export const productIdMap: { [id: string]: ProductInterface } = products.reduce(
  (
    acc,
    {
      id,
      created_at,
      updated_at,
      brand_id,
      description,
      label,
      price,
      over_18_offer,
      redemption_instructions,
      subtitle,
      weight,
      recipient_description,
      on_app,
      on_imessage,
      handling_fee,
      sale_price,
      brand_name,
      brand_weight,
      image_url,
      claim_image_url,
      imessage_image,
      imessage_image_url,
      open_graph_image_url,
    },
  ) => ({
    ...acc,
    [id]: {
      id,
      created_at,
      updated_at,
      brand_id,
      description,
      label,
      price,
      over_18_offer,
      redemption_instructions,
      subtitle,
      weight,
      recipient_description,
      on_app,
      on_imessage,
      handling_fee,
      sale_price,
      brand_name,
      brand_weight,
      image_url,
      claim_image_url,
      imessage_image,
      imessage_image_url,
      open_graph_image_url,
    },
  }),
  {},
);

// store ID -> store data
export const storeIdMap: { [id: string]: StoreInterface } = stores.reduce(
  (
    acc,
    { id, brand_id, latitiude, longitude, name, description, image_url },
  ) => ({
    ...acc,
    [id]: {
      id,
      brand_id,
      latitiude,
      longitude,
      name,
      description,
      image_url,
    },
  }),
  {},
);

// product id -> stores data
export const productStoreMap: {
  [productId: string]: StoreInterface[];
} = brands.data.reduce((acc, brand) => {
  const stores = [];
  // we'll merge product + consolidated ids to give us all products available from a given brand
  [...brand.products, ...brand.consolidated_products].forEach(
    (productId: string) => {
      // use our existing store map to populate each product id
      stores[productId] = brand.stores.map(
        (storeId: string) => storeIdMap[storeId],
      );
    },
  );
  return { ...acc, ...stores };
}, {});
