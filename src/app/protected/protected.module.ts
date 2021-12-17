import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { KardexComponent } from './pages/kardex/kardex.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { LibretaComponent } from './pages/libreta/libreta.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { SaetaComponent } from './pages/saeta/saeta.component';
import { Docente1Component } from './pages/docente1/docente1.component';
import { Docente2Component } from './pages/docente2/docente2.component';
import { Docente3Component } from './pages/docente3/docente3.component';
import { Docente4Component } from './pages/docente4/docente4.component';
import { Docente5Component } from './pages/docente5/docente5.component';
import { Docente6Component } from './pages/docente6/docente6.component';
import { Docente7Component } from './pages/docente7/docente7.component';
import { Docente8Component } from './pages/docente8/docente8.component';
import { Docente9Component } from './pages/docente9/docente9.component';
import { Docente10Component } from './pages/docente10/docente10.component';



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
    Docente1Component,
    Docente2Component,
    Docente3Component,
    Docente4Component,
    Docente5Component,
    Docente6Component,
    Docente7Component,
    Docente8Component,
    Docente9Component,
    Docente10Component,
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
    ProtectedRoutingModule,
    PrimeNgModule
  ]
})
export class ProtectedModule { }
