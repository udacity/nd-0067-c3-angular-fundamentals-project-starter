import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { Router} from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product()

  quantities: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {}

  addToCart(product: Product) {
    alert(`${product.name} has been added to the cart!`);
    this.cartService.addProductToCart(product);
  }

  showProductDetails(product: Product) {
    this.router.navigate([`/products/${product.id}`], { state: { selectedProduct: product}});
  }

  changeQuantity(event: Event) {
    this.product.quantity = Number(event);
  }
}
