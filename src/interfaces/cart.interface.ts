export interface Cart {
  _id: string;
  product: string;
  quantity: number;
  price: number;
  total: number;
  user: string;
  createdAt: Date;
  updatedAt: Date;
}
