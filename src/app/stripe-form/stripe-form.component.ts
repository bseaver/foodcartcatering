import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-stripe-form',
  templateUrl: './stripe-form.component.html',
  styleUrls: ['./stripe-form.component.css']
})
export class StripeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_0Fz5DRbok6assd8JOXeXVlzd',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Food Cart Catering Demo',
      description: '20 Tacos',
      amount: 2000
    });

  }
}
