import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { EstudianteRelease } from '../interfaces/release.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl: string = environment.baseUrl;
  private apiToken = this.authService.isLoggedIn().valueOf();

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAnuncios() {
    const url = `${this.baseUrl}/api/view/student/releases`;

    return this.http.get<EstudianteRelease>(url, {
      headers: { 'Authorization': `Bearer ${this.apiToken}` }
    })
  }
}
