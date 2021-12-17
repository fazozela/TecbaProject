import { Component, OnInit } from '@angular/core';
import { KadexResponse } from '../../interfaces/kardex.interface';
import { KardexService } from '../../services/kardex.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {


    kardex: KadexResponse[] = [];

    constructor(private kardexService: KardexService) { }

    ngOnInit(): void {
        this.getKardex();
    }

    getKardex() {
        return this.kardexService.getKardex()
        .subscribe(res => {
            this.kardex = res.response;
        })
    }



}
