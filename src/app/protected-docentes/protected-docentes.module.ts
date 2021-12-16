import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedDocentesRoutingModule } from './protected-docentes-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { KardexComponent } from './pages/kardex/kardex.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { LibretaComponent } from './pages/libreta/libreta.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { SaetaComponent } from './pages/saeta/saeta.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    InicioComponent,
    HorariosComponent,
    CalendarioComponent,
    ProgramacionComponent,
    KardexComponent,
    CalificacionesComponent,
    LibretaComponent,
    RecursosComponent,
    SaetaComponent,
  ],
  exports: [
    InicioComponent,
    HorariosComponent,
    CalendarioComponent,
    ProgramacionComponent,
    KardexComponent,
    CalificacionesComponent,
    LibretaComponent,
    RecursosComponent,
    SaetaComponent,
  ],
  imports: [
    CommonModule,
    ProtectedDocentesRoutingModule,
    PrimeNgModule
  ]
})
export class ProtectedDocentesModule { }
