import { Component, OnInit, ViewChild } from '@angular/core';
import { HorarioResponse } from '../../interfaces/horario.interface';
import { HorarioService } from '../../services/horario.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

  horarios: HorarioResponse[] = [];

  constructor(private horarioService: HorarioService) { }

    ngOnInit(): void {
      this.getHorario();
    }

  getHorario() {
    return this.horarioService.getHorario()
      .subscribe(res => {
        this.horarios = res.response;
    })
  }


  }

