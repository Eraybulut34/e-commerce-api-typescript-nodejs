import { Category } from "./category.interface";

export interface Product {
  _id: string;
  price: number;
  title: string;
  description: string;
  category: Category;
  image: string;
}
