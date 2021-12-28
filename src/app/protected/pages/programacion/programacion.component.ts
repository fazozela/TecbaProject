import { Component, OnInit } from '@angular/core';
import { ProgramacionResponse } from '../../interfaces/programacion.interface';
import { ProgramacionService } from '../../services/programacion.service';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.scss']
})
export class ProgramacionComponent implements OnInit {

  displayModal: boolean;

  programaciones: ProgramacionResponse[] = [];

  constructor(private programacionService: ProgramacionService) { }

  ngOnInit(): void {
    this.getProgramacion();
  }

  getProgramacion() {
    return this.programacionService.getProgramacion()
    .subscribe(res => {
      this.programaciones = res.response;
    })
  }

  showModalDialog() {
      this.displayModal = true;
  }

}
