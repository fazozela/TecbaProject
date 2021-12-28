import { Component, OnInit } from '@angular/core';
import { CalificacionResponse } from '../../interfaces/calificacion.interface';
import { CalificacionService } from '../../services/calificacion.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.scss']
})
export class CalificacionesComponent implements OnInit {

  calificacion: CalificacionResponse[] = [];

  constructor(private calificacionService: CalificacionService) { }

  ngOnInit(): void {
    this.getCalificacion();
  }

  getCalificacion() {
      return this.calificacionService.getCalificacion()
          .subscribe(res => {
              this.calificacion = res.response;
          });
  }

  getColor(status: any) {

    let color = '';

    if (status > 51) {
      color = 'rgba(2,185,213,0.4)';
    } else if (status > 0 && status < 51) {
      color = 'rgba(234,55,77,0.4)';
    } else{
      color = 'rgba(70,70,70,0.2)';
    }

    return color;

  }

}
