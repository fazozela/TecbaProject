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
        ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
