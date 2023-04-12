export interface Category {
  categoryId: string;
  name: string;
}

export interface Product {
  productId: string;
  code: string;
  description: string;
  imageUrl: string;
  price: number;
  categoryId: string;
  category: Category;
}
