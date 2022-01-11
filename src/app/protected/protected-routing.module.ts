import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { KardexComponent } from './pages/kardex/kardex.component';
import { LibretaComponent } from './pages/libreta/libreta.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { SaetaComponent } from './pages/saeta/saeta.component';
import { AppMainComponent } from '../shared/main/app.main.component';
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
import { HojaComponent } from './pages/hoja/hoja.component';
import { ListaComponent } from './pages/lista/lista.component';
import { MeetComponent } from './pages/meet/meet.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';
import { CalificacionesDocComponent } from './pages/calificaciones-doc/calificaciones-doc.component';

const routes: Routes =
  [
    {
      path: '',
      component: AppMainComponent,
      children:
        [
          {path: '', component: InicioComponent},
          {path: 'inicio', component: InicioComponent},
          {path: 'horarios', component: HorariosComponent},
          {path: 'calendario', component: CalendarioComponent},
          {path: 'programacion', component: ProgramacionComponent},
          {path: 'kardex', component: KardexComponent},
          {path: 'calificaciones', component: CalificacionesComponent},
          {path: 'libreta', component: LibretaComponent},
          {path: 'recursos', component: RecursosComponent},
          {path: 'saeta', component: SaetaComponent},
          {path: 'hoja', component: HojaComponent},
          {path: 'listas', component: ListaComponent},
          {path: 'meet', component: MeetComponent},
          {path: 'syllabus', component: SyllabusComponent},
          {path: 'seguimiento', component: SeguimientoComponent},
          {path: 'calificacionesDoc', component: CalificacionesDocComponent},
        ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
