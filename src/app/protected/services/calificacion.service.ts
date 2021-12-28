import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Calificacion } from '../interfaces/calificacion.interface';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private baseUrl: string = environment.baseUrl;
  private apiToken = this.authService.isLoggedIn().valueOf();
  private ci = this.authService.getCI().valueOf();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCalificacion() {
    const url = `${this.baseUrl}/api/view/student/calification/${this.ci}`;

    return this.http.get<Calificacion>(url, {
      headers: { 'Authorization': `Bearer ${this.apiToken}` }
    })
  }
}
