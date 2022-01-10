import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { KardexResponse } from '../../interfaces/kardex.interface';
import { KardexService } from '../../services/kardex.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {

    kardex: KardexResponse[] = [];

    constructor(private kardexService: KardexService, private renderer2: Renderer2) { }

    ngOnInit(): void {

        this.getKardex();

    }

    getKardex() {
        return this.kardexService.getKardex()
            .subscribe(res => {
                this.kardex = res.response;
            });
    }

    getColor(status: any) {

        switch (status) {
            case 'APROBADO': return 'rgba(2,185,213,0.8)';
            case 'REPROBADO': return 'rgba(234,55,77,0.8)';
            default: return 'rgba(70,70,70,0.8)';
        }

    }

}
