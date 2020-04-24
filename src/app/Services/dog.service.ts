// Service used to get data from remote API (https://dog.ceo/api) (via class 'DogService) 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HttpClient imported to enable it's use by service 'DogService'
import { Observable } from 'rxjs';                  //Observable interface imported to facilitate asynchronous methods
 
@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private httpClient : HttpClient) { }   //local instance of HttpClient made available by adding as argument to constructor via dependency injection framework
  GetDogData() : Observable<any>{
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random/d.message')   //accessing http client to retrieve 'any' type JSON data asynchronously from API via Observables interfcae
  }
}
