import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

import { of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    const url = `${this.baseUrl}/api/login`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.error === false) {
            localStorage.setItem('token', resp.response.token);
            localStorage.setItem('ci', resp.response.datos.Users_ci_login.toString());
            this._usuario = {
              Users_name_login: resp.response.datos.Users_name_login,
              Users_career_login: resp.response.datos.Users_career_login,
              Users_ci_login: resp.response.datos.Users_ci_login
            };
          }
        }),
        map(resp => resp.error),
        catchError(err => of(err.error.message))
      );
  }

  isLoggedIn() {
   return localStorage.getItem('token');
  }

  getCI() {
    return localStorage.getItem('ci');
  }

  ngOnDestroy() {
    localStorage.removeItem('token');
  }

  // validarToken() {
  //   const url = `${this.baseUrl}/api/login`;
  // }

}
