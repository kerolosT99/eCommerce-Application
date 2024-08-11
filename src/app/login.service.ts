import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginAccount } from './interfaces/login-account';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient: HttpClient) {

  }
  sendLogin(login: LoginAccount): Observable<LoginAccount> {
    return this._HttpClient.post<LoginAccount>('https://ecommerce.routemisr.com/api/v1/auth/signin', login)
  }
}
