import { Component, SimpleChanges } from '@angular/core';
import { CreateProductDTO, Product } from '../../models/product.model';
import { CreateImageProductDTO, ImageProduct } from '../../models/imageProduct.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { ImageProductService } from '../../services/imageProduct.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    productId: '',
    code: '',
    description: '',
    imagesProduct: [],
    price: 100,
    categoryId: '',
    category: {
      categoryId: '',
      name: '',
      products: []
    }
  }

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
    private imageProductService: ImageProductService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.updateProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateProducts();
  }

  onAddToShopingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(productId: string) {
    this.productsService.getProduct(productId).subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }

  updateProducts() {
    this.productsService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      description: 'Yamaha MT',
      categoryId: '036f88c2-b339-4f98-aca3-25e70f9c6433',
      code: '0023F',
      price: 123
    };

    let createdProduct: Product = {
        productId: '',
        code: '',
        description: '',
        price: 0,
        categoryId: ''
    }

    let images: CreateImageProductDTO[] = [
      {
        src: 'https://i.pinimg.com/564x/7b/ed/0c/7bed0c7da8f6508dfeb7ea027305e329.jpg',
        productId: ''
      },
      {
        src: 'https://i.pinimg.com/564x/23/c9/35/23c935aa461c6db0e4e5b40527e706e9.jpg',
        productId: ''
      },
      {
        src: 'https://i.pinimg.com/564x/ce/d2/a8/ced2a850bbf2a16f39dfb20f7db38449.jpg',
        productId: ''
      }
    ];

    this.productsService.create(product)
      .subscribe(data => {
        images.forEach(
          image => {
            image.productId = data.productId;
            this.imageProductService.addImageProduct(image).subscribe()
          })
        createdProduct = data;
      })

    this.updateProducts();
  }
}
