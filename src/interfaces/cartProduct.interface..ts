import { Product } from "./product.interface";

export interface CartProduct {
  _id: string;
  product: Product;
  price: number;
  title: string;
  quantity: number;
}
