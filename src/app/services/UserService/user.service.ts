import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Response, UserEstudiante } from 'src/app/interfaces/userEstudiate.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlt7ImlkIjoxfSx7ImNpIjo3NTQ2MjYxfSx7ImNhcmVlciI6IkFETUlOSVNUUkFDSU9OIERFIEVNUFJFU0FTIn0seyJuaWNrbmFtZSI6IkNSSVNUSUFOIEFOVE9OSU8ifV0sImlhdCI6MTYzNzEyNDYxOCwiZXhwIjoxNjM3MTI4MjE4fQ.ov64VPAuJNM0mF_rLVica7ozEBcXVLUAPtKO8h5yDVE';
    private apiUrl = 'http://localhost:3036';

    public resultados:Response[] = [];

    constructor(private http: HttpClient) {
        this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    }

    getEstudiante() {

        this.http.get<UserEstudiante>(`${this.apiUrl}/api/view/student/kardex/7546261`, {
            headers: {
                'Authorization': `Bearer ${this.apiToken}`
            }
         }).subscribe(res => {
             console.log(res.response);
             this.resultados = res.response;
            })
    }
}
