import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsApiUrl = 'https://localhost:7155/Product/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.productsApiUrl);
  }

  getProduct(productId: string) {
    return this.http.get<Product>(this.productsApiUrl + productId);
  }
}
