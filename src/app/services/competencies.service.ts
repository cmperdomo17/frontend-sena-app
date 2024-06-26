import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competence } from '../models/Compentence';
import { AppToken } from '../models/AppToken';

@Injectable({
  providedIn: 'root'
})

export class CompetenciesService {

  API_URI = 'https://backend-sena-app.onrender.com/api';

  token = AppToken.getInstance();
  auxToken = this.token.getToken();

  constructor(private http: HttpClient) { }

  listCompetencies() {
    return this.http.get(`${this.API_URI}/competencies`, {headers: {auth: this.auxToken}});
  }

  getCompetence(id: number, type: number) {
    return this.http.get(`${this.API_URI}/competencies/${id}/${type}`, {headers: {auth: this.auxToken}});
  }

  createCompetence(competence: Competence) {
    return this.http.post(`${this.API_URI}/competencies`, competence, {headers: {auth: this.auxToken}});
  }

  updateCompetence(id: number, updatedCompetence: Competence) {
    return this.http.put(`${this.API_URI}/competencies/${id}`, updatedCompetence, {headers: {auth: this.auxToken}});
  }

  changeStateCompetence(id: number, state: number, type: {competence_type: number}) {
    return this.http.put(`${this.API_URI}/competencies/${id}/${state}`, type, {headers: {auth: this.auxToken}});
  }

  deleteCompetence(id: number, program_id: number | null) {
    return this.http.delete(`${this.API_URI}/competencies/${id}/${program_id}`, {headers: {auth: this.auxToken}});
  }

}
