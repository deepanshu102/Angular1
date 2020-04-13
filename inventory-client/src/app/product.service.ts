import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HttpClient for Rest Apis

import {Observable} from 'rxjs'; // Reactive eXtension for JavaScript
/**
* Angular makes use of observables as an interface to handle a variety of common asynchronous operations.
* You can define custom events that send observable output data from a child to a parent component.
The HTTP module uses observables to handle AJAX requests and responses.
The Router and Forms modules use observables to listen for and respond to user-input events.
*/
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl='http://localhost:8080/ims/api/products';
  constructor(private http:HttpClient) {
  }
  getProductsList():Observable<any>{
    return this.http.get('${this.baseUrl}');


   }
}