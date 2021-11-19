import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libreta',
  templateUrl: './libreta.component.html',
  styleUrls: ['./libreta.component.scss']
})
export class LibretaComponent implements OnInit {

libreta =
[
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        requisito: 'FUA-101',
        estado: 'APROBADO'
        },
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        requisito: 'FUA-101',
        estado: 'APROBADO'
        },
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        requisito: 'FUA-101',
        estado: 'PROGRAMADO'
        },
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        requisito: 'FUA-101',
        estado: 'PROGRAMADO'
        },
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        requisito: 'FUA-101',
        estado: 'APROBADO'
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
