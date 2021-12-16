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
                    {label: 'SAETA+', icon: 'pi pi-fw pi-reply', routerLink: ['/inicio/saeta']},
                ]
            }
        ];
    }
}