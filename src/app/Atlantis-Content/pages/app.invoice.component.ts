import {Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppBreadcrumbService } from 'src/app/services/BreadCrumbService/app.breadcrumb.service';

@Component({
    templateUrl: './app.invoice.component.html'
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: AppBreadcrumbService, public app: AppComponent) {
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Invoice', routerLink: ['/pages/invoice'] }
        ]);
    }

    print() {
        window.print();
    }
}
