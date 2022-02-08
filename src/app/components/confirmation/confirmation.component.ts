import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  total: number = 0;

  constructor(private router: Router, private cartService: CartService) { 
    let nav: Navigation | null = this.router.getCurrentNavigation();
    // if(nav !== null) {
    //   if(nav.extras && nav.extras.state && nav.extras.state.total) {
    //     this.total = nav.extras.state.total;
    //   }
    // }
    this.total = this.cartService.getCartTotal();
  }

  ngOnInit(): void {}
}
