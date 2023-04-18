import { ImageProduct } from '../models/imageProduct.model';
import { Category } from '../models/category.model';

export interface Product {
  productId: string;
  code: string;
  description: string;
  price: number;
  categoryId: string;
  category?: Category;
  imagesProduct?: ImageProduct[];
}

// interface para omitir propiedades de un objeto
export interface CreateProductDTO extends Omit<Product, 'productId' | 'category' | 'imagesProduct'>{
  categoryId: string;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> { }
