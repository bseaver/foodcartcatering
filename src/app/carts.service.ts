import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartsService {

  constructor(private http: Http) { }

  getAllCarts(zip) {
    return this.http.get('/api/'+ zip)
      .map(res => res.json());
  }
}
