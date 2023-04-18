import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsApiUrl = 'https://localhost:7155/products/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.productsApiUrl);
  }

  getProduct(productId: string) {
    return this.http.get<Product>(this.productsApiUrl + productId);
  }

  create(product: CreateProductDTO) {
    return this.http.post<Product>(this.productsApiUrl + 'addProduct', product);
  }

  update(productId: string, product: UpdateProductDTO) {
    return this.http.put<Product>(this.productsApiUrl + productId, product);
  }
}
