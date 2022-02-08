import { Injectable } from '@angular/core';
import Product from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: Array<Product> = [];
  total: number = 0;


  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }
  
  getCartTotal(): number {
    return this.total;
  }

  addProductToCart(product: Product): void {
    this.products.push(product);
  }

  removeProductFromCart(product: Product): void {
    let filteredArray = this.products.filter(p => p.id !== product.id);
    this.products = filteredArray;
    this.resetTotal();
    alert(`${product.name} has been removed from the cart.`);
  }

  calculateCartTotal(): number {
    if (this.products.length === 0) {
      return this.total;
    } else {
      this.products.forEach(product => {
        this.total = product.quantity * product.price;
      });
      return this.total;
    }
  }

  resetTotal(): void {
    this.total = 0;
  }
}
