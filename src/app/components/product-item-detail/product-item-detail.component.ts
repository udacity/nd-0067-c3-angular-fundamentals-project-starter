import { Component, Input, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import Product from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements OnInit {
  @Input() product: Product = new Product()
  quantities: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router, private cartService: CartService) {
    let nav: Navigation | null = this.router.getCurrentNavigation();

    if(nav !== null) {
      if(nav.extras && nav.extras.state && nav.extras.state.selectedProduct) {
        this.product = nav.extras.state.selectedProduct as Product;
      }
    }
   }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.cartService.addProductToCart(product);
    alert(`${product.name} has been added to the cart!`)
  }

  // Not working or firing needs to fire in order to change the quantity for the product.
  changeQuantity(event: Event) {
    this.product.quantity = Number(event);
  }
}
