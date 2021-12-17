import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Kardex } from '../interfaces/kardex.interface';

@Injectable({
  providedIn: 'root'
})
export class KardexService {

  private baseUrl: string = environment.baseUrl;
  private apiToken = this.authService.isLoggedIn().valueOf();
  private ci = this.authService.getCI().valueOf();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getKardex() {
    const url = `${this.baseUrl}/api/view/student/kardex/${this.ci}`;

    return this.http.get<Kardex>(url, {
      headers: { 'Authorization': `Bearer ${this.apiToken}` }
    })
  }

}
