import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from './home/home.page';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  private apiUrl = 'http://localhost:3000/experiencias';

  constructor(private http: HttpClient) {}

  getExperiencias(): Observable<ExperienciaLaboral[]> {
    return this.http.get<ExperienciaLaboral[]>(this.apiUrl);
  }

  addExperiencia(experiencia: ExperienciaLaboral): Observable<ExperienciaLaboral> {
    return this.http.post<ExperienciaLaboral>(this.apiUrl, experiencia);
  }

  updateExperiencia(experiencia: ExperienciaLaboral): Observable<ExperienciaLaboral> {
    return this.http.put<ExperienciaLaboral>(`${this.apiUrl}/${experiencia.id}`, experiencia);
  }

  deleteExperiencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}