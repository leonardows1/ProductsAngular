import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
      productId: '',
      code: '',
      description: '',
      imageUrl: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 100,
      categoryId: '',
      category: {
        categoryId: '',
        name: ''
    }
  }

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail() {
    this.showProduct.emit(this.product.productId);
  }
}
