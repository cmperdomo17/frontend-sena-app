import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ambient } from '../models/Ambient';
import { AppToken } from '../models/AppToken';

@Injectable({
  providedIn: 'root'
})

export class AmbientsService {

  API_URI = 'https://backend-sena-app.onrender.com/api';

  token = AppToken.getInstance();
  auxToken = this.token.getToken();

  constructor(private http: HttpClient) { }

  listAmbients() {
    return this.http.get(`${this.API_URI}/ambients`, {headers: {auth: this.auxToken}});
  }

  getAmbient(id: string) {
    return this.http.get(`${this.API_URI}/ambients/${id}`, {headers: {auth: this.auxToken}});
  }

  createAmbient(ambient: Ambient) {
    return this.http.post(`${this.API_URI}/ambients`, ambient, {headers: {auth: this.auxToken}});
  }

  updateAmbient(id: string, updatedAmbient: Ambient) {
    return this.http.put(`${this.API_URI}/ambients/${id}`, updatedAmbient, {headers: {auth: this.auxToken}});
  }

  changeStateAmbient(id: string, state: number) {
    return this.http.put(`${this.API_URI}/ambients/${id}/${state}`, null, {headers: {auth: this.auxToken}});
  }
}
