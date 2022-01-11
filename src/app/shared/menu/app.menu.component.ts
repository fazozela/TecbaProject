import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import {AppComponent} from '../../app.component';
import { AppMainComponent } from '../main/app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    public model: any[];

    private modelEst = [
        {
            label: 'MENÚ ACADÉMICO', icon: 'pi pi-fw pi-home',
            items: [
                {label: 'Inicio', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio']},
                {label: 'Calendario Académico', icon: 'pi pi-fw pi-calendar', routerLink: ['/inicio/calendario']},
                {label: 'Horarios', icon: 'pi pi-fw pi-clock', routerLink: ['/inicio/horarios']},
                {label: 'Programación', icon: 'pi pi-fw pi-file-o', routerLink: ['/inicio/programacion']},
                {label: 'Kardex', icon: 'pi pi-fw pi-id-card', routerLink: ['/inicio/kardex']},
                {label: 'Calificaciones', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/inicio/calificaciones']},
                {label: 'Libreta de Notas', icon: 'pi pi-fw pi-book', routerLink: ['/inicio/libreta']},
                {label: 'Recursos estudiantiles', icon: 'pi pi-fw pi-folder', routerLink: ['/inicio/recursos']},
                { label: 'SAETA+', icon: 'pi pi-fw pi-reply', routerLink: ['/inicio/saeta'] },
            ]
        }
    ];

    private modelDoc = [
        {
            label: 'MENÚ ACADÉMICO', icon: 'pi pi-fw pi-home',
            items: [
                {label: 'Inicio', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio']},
                {label: 'Hoja de vida docente', icon: 'pi pi-fw pi-file-o', routerLink: ['/inicio/hoja']},
                {label: 'Horarios', icon: 'pi pi-fw pi-clock', routerLink: ['/inicio/horarios']},
                {label: 'Listas de estudiantes', icon: 'pi pi-fw pi-book', routerLink: ['/inicio/listas']},
                {label: 'Clases Meet', icon: 'pi pi-fw pi-video', routerLink: ['/inicio/meet']},
                {label: 'Syllabus de la asignatura', icon: 'pi pi-fw pi-pencil', routerLink: ['/inicio/syllabus']},
                {label: 'Seguimiento de materia', icon: 'pi pi-fw pi-chart-line', routerLink: ['/inicio/seguimiento']},
                { label: 'SAETA+', icon: 'pi pi-fw pi-reply', routerLink: ['/inicio/saeta'] },
                {label: 'Calificaciones', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/inicio/calificacionesDoc']},
            ]
        }
    ];

    constructor(public app: AppComponent, public appMain: AppMainComponent, private authService: AuthService) {}

    ngOnInit() {

        if (this.authService.usuario.Users_status_login === 1) {
            this.model = this.modelEst;
        } else {
            this.model = this.modelDoc;
        }
    }
}
