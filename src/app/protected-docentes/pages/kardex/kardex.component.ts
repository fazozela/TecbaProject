import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {

kardex =
[
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        estado: 'APROBADO',
        nota: '90',
        gestion: '2021'
    },
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        estado: 'APROBADO',
        nota: '90',
        gestion: '2021'
        },
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        estado: 'APROBADO',
        nota: '90',
        gestion: '2021'
        },
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        estado: 'APROBADO',
        nota: '90',
        gestion: '2021'
        },
    {
        sigla: 'GEE-107',
        materia: 'GESTOR EMPRESARIAL',
        curso: '1',
        estado: 'APROBADO',
        nota: '90',
        gestion: '2021'
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
