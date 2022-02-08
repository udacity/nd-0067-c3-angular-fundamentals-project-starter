import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // Mimic the result of sign in.
  onSubmit(): void {
    alert(`${this.username} has signed in successfully.`)
  }

}