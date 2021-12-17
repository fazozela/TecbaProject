import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Libreta } from '../interfaces/libreta.interface';

@Injectable({
  providedIn: 'root'
})
export class LibretaService {

  private baseUrl: string = environment.baseUrl;
  private apiToken = this.authService.isLoggedIn().valueOf();
  private ci = this.authService.getCI().valueOf();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getLibreta() {
    const url = `${this.baseUrl}/api/view/student/reportcard/${this.ci}`;

    return this.http.get<Libreta>(url, {
      headers: { 'Authorization': `Bearer ${this.apiToken}` }
    })
  }
}
