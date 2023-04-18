import { Product } from '../models/product.model';

export interface ImageProduct {
  imageProductId: string;
  src: string;
  productId: string;
  product?: Product;
}

export interface CreateImageProductDTO extends Omit<ImageProduct, 'imageProductId' | 'product'> {
  src: string;
  productId: string;
}
