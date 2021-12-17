import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

// Application Components
import {AppCodeModule} from './app.code.component';
import {AppComponent} from './app.component';

// Demo pages
import {DashboardDemoComponent} from './Atlantis-Content/demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './Atlantis-Content/demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './Atlantis-Content/demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './Atlantis-Content/demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './Atlantis-Content/demo/view/inputdemo.component';
import {ButtonDemoComponent} from './Atlantis-Content/demo/view/buttondemo.component';
import {TableDemoComponent} from './Atlantis-Content/demo/view/tabledemo.component';
import {ListDemoComponent} from './Atlantis-Content/demo/view/listdemo.component';
import {TreeDemoComponent} from './Atlantis-Content/demo/view/treedemo.component';
import {PanelsDemoComponent} from './Atlantis-Content/demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './Atlantis-Content/demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './Atlantis-Content/demo/view/mediademo.component';
import {MenusDemoComponent} from './Atlantis-Content/demo/view/menusdemo.component';
import {MessagesDemoComponent} from './Atlantis-Content/demo/view/messagesdemo.component';
import {MiscDemoComponent} from './Atlantis-Content/demo/view/miscdemo.component';
import {EmptyDemoComponent} from './Atlantis-Content/demo/view/emptydemo.component';
import {ChartsDemoComponent} from './Atlantis-Content/demo/view/chartsdemo.component';
import {FileDemoComponent} from './Atlantis-Content/demo/view/filedemo.component';
import {DocumentationComponent} from './Atlantis-Content/demo/view/documentation.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {WidgetsComponent} from './utilities/widgets.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';
import {AppCrudComponent} from './Atlantis-Content/pages/app.crud.component';
import {AppCalendarComponent} from './Atlantis-Content/pages/app.calendar.component';
import {AppTimelineDemoComponent} from './Atlantis-Content/pages/app.timelinedemo.component';
import {AppInvoiceComponent} from './Atlantis-Content/pages/app.invoice.component';
import {AppHelpComponent} from './Atlantis-Content/pages/app.help.component';
import {AppNotfoundComponent} from './Atlantis-Content/pages/app.notfound.component';
import {AppErrorComponent} from './Atlantis-Content/pages/app.error.component';
import {AppAccessdeniedComponent} from './Atlantis-Content/pages/app.accessdenied.component';

// Demo services
import {CountryService} from './Atlantis-Content/demo/service/countryservice';
import {CustomerService} from './Atlantis-Content/demo/service/customerservice';
import {EventService} from './Atlantis-Content/demo/service/eventservice';
import {IconService} from './Atlantis-Content/demo/service/iconservice';
import {NodeService} from './Atlantis-Content/demo/service/nodeservice';
import {PhotoService} from './Atlantis-Content/demo/service/photoservice';
import {ProductService} from './Atlantis-Content/demo/service/productservice';

// Application services
import {MenuService} from './services/MenuService/app.menu.service';
import {AppBreadcrumbService} from './services/BreadCrumbService/app.breadcrumb.service';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppTopbarComponent } from './shared/top-bar/app.topbar.component';
import { AppMenuComponent } from './shared/menu/app.menu.component';
import { AppRightMenuComponent } from './shared/right-menu/app.rightmenu.component';
import { AppInlineMenuComponent } from './shared/inline-menu/app.inlinemenu.component';
import { AppMenuitemComponent } from './shared/menu-item/app.menuitem.component';
import { AppFooterComponent } from './shared/footer/app.footer.component';
import { AppBreadcrumbComponent } from './shared/breadcrumb/app.breadcrumb.component';
import { AppConfigComponent } from './config/app.config.component';
import { AppMainComponent } from './shared/main/app.main.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppCodeModule,
        PrimeNgModule
    ],
    declarations: [
        AppComponent,
        DashboardDemoComponent,
        FormLayoutDemoComponent,
        FloatLabelDemoComponent,
        InvalidStateDemoComponent,
        InputDemoComponent,
        ButtonDemoComponent,
        TableDemoComponent,
        ListDemoComponent,
        TreeDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MediaDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
        DisplayComponent,
        ElevationComponent,
        FlexboxComponent,
        GridComponent,
        IconsComponent,
        WidgetsComponent,
        SpacingComponent,
        TypographyComponent,
        TextComponent,
        AppCrudComponent,
        AppCalendarComponent,
        AppTimelineDemoComponent,
        AppInvoiceComponent,
        AppHelpComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppTopbarComponent,
        AppMenuComponent,
        AppRightMenuComponent,
        AppInlineMenuComponent,
        AppMenuitemComponent,
        AppFooterComponent,
        AppBreadcrumbComponent,
        AppConfigComponent,
        AppMainComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, AppBreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
