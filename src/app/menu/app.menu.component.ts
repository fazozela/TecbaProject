import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {AppMainComponent} from '../app.main.component';

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
                    {label: 'Calendario Académico', icon: 'pi pi-fw pi-calendar', routerLink: ['/calendario']},
                    {label: 'Horarios', icon: 'pi pi-fw pi-clock', routerLink: ['/horarios']},
                    {label: 'Programación', icon: 'pi pi-fw pi-file-o', routerLink: ['/programacion']},
                    {label: 'Kardex', icon: 'pi pi-fw pi-id-card', routerLink: ['/kardex']},
                    {label: 'Calificaciones', icon: 'pi pi-fw pi-pencil', routerLink: ['/calificaciones']},
                    {label: 'Libreta de Notas', icon: 'pi pi-fw pi-book', routerLink: ['/libreta']},
                    {label: 'Recursos estudiantiles', icon: 'pi pi-fw pi-folder', routerLink: ['/recursos']},
                    {label: 'SAETA+', icon: 'pi pi-fw pi-reply', routerLink: ['/saeta']},
                    {label: 'login test', icon: 'pi pi-fw pi-reply', routerLink: ['/login']}
                ]
            }
        ];
    }
}
