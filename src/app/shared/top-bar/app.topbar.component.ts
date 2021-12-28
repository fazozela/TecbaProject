import {Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppMainComponent } from 'src/app/shared/main/app.main.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-left">
                <a href="#" class="topbar-menu-button" (click)="appMain.onMenuButtonClick($event)" *ngIf="appMain.isOverlay() || appMain.isMobile()">
                    <i class="pi pi-bars"></i>
                </a>

                <a href="#" class="logo">
                    <img src="../../../assets/images/logotec.png" alt="">
                </a>

                <a href="#">
                    <img  [src]="'assets/layout/images/appname-'+ (app.colorScheme === 'light' ? 'dark' : 'light') + '.png'" class="app-name"/>
                </a>
            </div>

            <app-menu></app-menu>

            <div class="layout-topbar-right">
                <ul class="layout-topbar-right-items">
                    <li #profile class="profile-item" [ngClass]="{'active-topmenuitem':appMain.activeTopbarItem === profile}">
                        <a href="#" (click)="appMain.onTopbarItemClick($event,profile)">
                            <img src="assets/layout/images/profile-image.png">
                        </a>

                        <ul class="fadeInDown">
                            <li role="menuitem">
                                <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                    <i class="pi pi-fw pi-sign-out"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class AppTopbarComponent {

    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

}
