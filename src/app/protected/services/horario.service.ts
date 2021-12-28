import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Horario } from '../interfaces/horario.interface';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private baseUrl: string = environment.baseUrl;
  private apiToken = this.authService.isLoggedIn().valueOf();
  private ci = this.authService.getCI().valueOf();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getHorario() {
    const url = `${this.baseUrl}/api/view/student/schedule/${this.ci}`;

    return this.http.get<Horario>(url, {
      headers: { 'Authorization': `Bearer ${this.apiToken}` }
    })
  }
}
