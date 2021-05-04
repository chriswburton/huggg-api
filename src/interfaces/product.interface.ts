export interface ProductInterface {
  id: string;
  created_at: string;
  updated_at: string;
  brand_id: string;
  description: string;
  label: string;
  price: string;
  over_18_offer: boolean;
  redemption_instructions: string;
  subtitle: string;
  weight: number;
  recipient_description: string;
  on_app: boolean;
  on_imessage: boolean;
  handling_fee: number;
  sale_price: number;
  brand_name: string;
  brand_weight: number;
  image_url: string;
  claim_image_url: string;
  imessage_image: string;
  imessage_image_url: string;
  open_graph_image_url: string;
}
