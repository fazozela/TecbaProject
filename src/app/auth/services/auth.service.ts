import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;
  private ok;

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
            localStorage.setItem('name', resp.response.datos.Users_name_login.toString());
            localStorage.setItem('career', resp.response.datos.Users_career_login.toString());
            localStorage.setItem('tipo', resp.response.datos.Users_status_login.toString());
            this._usuario = {
              Users_name_login: resp.response.datos.Users_name_login,
              Users_ci_login: resp.response.datos.Users_ci_login,
              Users_career_login: resp.response.datos.Users_career_login,
              Users_status_login: resp.response.datos.Users_status_login,
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

  verificarAutenticacion(): Observable<boolean>{

    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return of(this.usuario).pipe(

      map(resp => {

        resp.Users_name_login = localStorage.getItem('name');
        resp.Users_career_login = localStorage.getItem('career');
        resp.Users_ci_login = Number(localStorage.getItem('ci'));
        resp.Users_status_login = Number(localStorage.getItem('tipo'));

        this._usuario = {
          Users_name_login: resp.Users_name_login,
          Users_career_login: resp.Users_career_login,
          Users_ci_login: resp.Users_ci_login,
          Users_status_login: resp.Users_status_login
        };

        this.ok = true;
        return this.ok;

      }),
      catchError(err => of(false))
    );

  }

}
