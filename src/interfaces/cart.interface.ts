import { Product } from "./product.interface";


export interface Cart {
  _id: string;
  products: Array<Product>;
  quantity: number;
  price: number;
  total: number;
  user: string;
  createdAt: Date;
  updatedAt: Date;
}
