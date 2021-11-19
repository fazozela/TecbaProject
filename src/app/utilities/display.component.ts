import {Component} from '@angular/core';
import {AppBreadcrumbService} from '../services/BreadCrumbService/app.breadcrumb.service';

@Component({
    templateUrl: './display.component.html'
})
export class DisplayComponent {

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Display', routerLink: ['/utilities/display'] }
        ]);
    }
}
