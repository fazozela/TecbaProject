import {Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    constructor(public app: AppComponent) {}
}
