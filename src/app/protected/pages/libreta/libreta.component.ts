import { Component, OnInit } from '@angular/core';
import { LibretaResponse } from '../../interfaces/libreta.interface';
import { LibretaService } from '../../services/libreta.service';

@Component({
  selector: 'app-libreta',
  templateUrl: './libreta.component.html',
  styleUrls: ['./libreta.component.scss']
})
export class LibretaComponent implements OnInit {

    libreta: LibretaResponse[] = [];

    constructor(private libretaService: LibretaService) { }

    ngOnInit(): void {
        this.getlibreta();
    }

    getlibreta() {
        return this.libretaService.getLibreta()
        .subscribe(res => {
            this.libreta = res.response;
        })
    }

    getColor(status: any) {

        switch (status) {
            case 'APROBADO': return 'rgba(2,185,213,0.3)';
            case 'REPROBADO': return 'rgba(234,55,77,0.3)';
            case 'PROGRAMADO': return 'rgba(255,212,35,0.3)';
            case 'ABANDONO': return 'rgba(70,70,70,0.2)';
            default: return 'white';
        }

    }

}
