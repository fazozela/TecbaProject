import { Component, OnInit } from '@angular/core';
import { EstudianteRelease, Release } from '../../interfaces/release.interfaces';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  anuncios: Release[] = [];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.getAnuncios();
  }

  getAnuncios() {
    return this.estudianteService.getAnuncios()
      .subscribe(res => {
        this.anuncios = res.response;
      })
  }

  getColor(status: any) {

      switch (status) {
          case 1: return 'rgba(234,55,77,0.1)';
          case 2: return 'rgba(255,212,35,0.2)';
          default: return 'white';
      }

  }

}
