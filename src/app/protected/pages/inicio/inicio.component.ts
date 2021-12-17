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

}
