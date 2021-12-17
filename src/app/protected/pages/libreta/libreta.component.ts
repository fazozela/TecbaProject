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

}
