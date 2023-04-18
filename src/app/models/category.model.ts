import { Product } from '../models/product.model';

export interface Category {
  categoryId: string;
  name: string;
  products?: Product[];
}
