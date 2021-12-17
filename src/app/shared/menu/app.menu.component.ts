import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import { AppMainComponent } from '../main/app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    public model: any[];

    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'MENÚ ACADÉMICO', icon: 'pi pi-fw pi-home',
                items: [
                    {label: 'Inicio', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio']},
                    {label: 'Calendario Académico', icon: 'pi pi-fw pi-calendar', routerLink: ['/inicio/calendario']},
                    {label: 'Horarios', icon: 'pi pi-fw pi-clock', routerLink: ['/inicio/horarios']},
                    {label: 'Programación', icon: 'pi pi-fw pi-file-o', routerLink: ['/inicio/programacion']},
                    {label: 'Kardex', icon: 'pi pi-fw pi-id-card', routerLink: ['/inicio/kardex']},
                    {label: 'Calificaciones', icon: 'pi pi-fw pi-pencil', routerLink: ['/inicio/calificaciones']},
                    {label: 'Libreta de Notas', icon: 'pi pi-fw pi-book', routerLink: ['/inicio/libreta']},
                    {label: 'Recursos estudiantiles', icon: 'pi pi-fw pi-folder', routerLink: ['/inicio/recursos']},
                    { label: 'SAETA+', icon: 'pi pi-fw pi-reply', routerLink: ['/inicio/saeta'] },
                    {label: 'Docente-1', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente1']},
                    {label: 'Docente-2', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente2']},
                    {label: 'Docente-3', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente3']},
                    {label: 'Docente-4', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente4']},
                    {label: 'Docente-5', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente5']},
                    {label: 'Docente-6', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente6']},
                    {label: 'Docente-7', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente7']},
                    {label: 'Docente-8', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente8']},
                    {label: 'Docente-9', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente9']},
                    {label: 'Docente-10', icon: 'pi pi-fw pi-bookmark', routerLink: ['/inicio/docente10']},
                ]
            }
        ];
    }
}
