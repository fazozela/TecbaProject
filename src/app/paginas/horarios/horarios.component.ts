import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

    alumnos =
        [
            {
                sigla: 'ABC',
                materia: 'Desarrollo Web',
                dia: 'lunes',
                hora: '15:00',
                meet: 'link'
            },
            {
                sigla: 'ABC',
                materia: 'Desarrollo Web',
                dia: 'lunes',
                hora: '15:00',
                meet: 'link'
            },
            {
                sigla: 'ABC',
                materia: 'Desarrollo Web',
                dia: 'lunes',
                hora: '15:00',
                meet: 'link'
            },
            {
                sigla: 'ABC',
                materia: 'Desarrollo Web',
                dia: 'lunes',
                hora: '15:00',
                meet: 'link'
            },
            {
                sigla: 'ABC',
                materia: 'Desarrollo Web',
                dia: 'lunes',
                hora: '15:00',
                meet: 'link'
            },
        ]

  constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getEstudiante();
        console.log(this.userService.resultados);
    }

}
