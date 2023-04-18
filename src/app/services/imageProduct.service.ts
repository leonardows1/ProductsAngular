import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductDTO, Product } from '../models/product.model';
import { CreateImageProductDTO, ImageProduct } from '../models/imageProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProductService {

  private imagesProductsApiUrl = 'https://localhost:7155/imagesProducts/';

  constructor(private http: HttpClient) { }

  getAllImagesProducts() {
    return this.http.get<ImageProduct[]>(this.imagesProductsApiUrl);
  }

  addImageProduct(imageProduct: CreateImageProductDTO) {
    return this.http.post<ImageProduct>(this.imagesProductsApiUrl + 'addImageProduct', imageProduct);
  }
}
