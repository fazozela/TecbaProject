import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Programacion } from '../interfaces/programacion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  private baseUrl: string = environment.baseUrl;
  private apiToken = this.authService.isLoggedIn().valueOf();
  private ci = this.authService.getCI().valueOf();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getProgramacion() {
    const url = `${this.baseUrl}/api/view/student/programation/${this.ci}`;

    return this.http.get<Programacion>(url, {
      headers: { 'Authorization': `Bearer ${this.apiToken}` }
    })
  }

}
