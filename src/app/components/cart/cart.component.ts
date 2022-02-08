import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Form from 'src/app/models/form';
import Product from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @Input() product: Product = new Product();
  product: Product = new Product();
  
  fullName: string = "";
  address: string = "";
  creditCardNumber: string = "";
  errorMessage: string = "";
  total: number = 0;
  products: Array<Product> = [];
  selectedAmount: number = 1;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  onSubmit(): void {
    const form: Form = new Form()
    form.fullName = this.fullName;
    form.address = this.address;
    form.creditCardNumber = this.creditCardNumber;

    if(form.fullName === "" || form.address === "" ||  form.creditCardNumber === "") {
      console.log("something has happened");
    } else {
      this.router.navigate([`/confirmation`], { state: { total: this.total }});
    }
  }

  onNumberChanged(event: Event, product: Product): void {
    product.quantity = Number(event);

    if(product.quantity === 0) {
      this.cartService.removeProductFromCart(product);
      this.products = this.cartService.getProducts();
    }

    this.cartService.calculateCartTotal();
  }

  calculateTotal(): number {
    return this.cartService.calculateCartTotal();
  }
}
