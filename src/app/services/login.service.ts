import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../models/User';
import { Router } from '@angular/router';
import { AppToken } from '../models/AppToken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  token = AppToken.getInstance();

  API_URI = 'https://backend-sena-app-production.up.railway.app/login';

  constructor(private http: HttpClient, private router: Router) { }

  validateLogin(user: userModel) {
    console.log(user);
    return this.http.post(`${this.API_URI}`, user, { observe: 'response' });
  }

  logout() {
    this.token.setToken(null);
    this.router.navigate(['']);
  }
}