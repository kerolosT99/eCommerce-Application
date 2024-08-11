import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisteredAccount } from './interfaces/registered-account';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _HttpClient: HttpClient) { }

  sendRegisteration(registeredAccount: RegisteredAccount): Observable<RegisteredAccount> {
   
    return this._HttpClient.post<RegisteredAccount>('https://ecommerce.routemisr.com/api/v1/auth/signup', registeredAccount)
  }

}
