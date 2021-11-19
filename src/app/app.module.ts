import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {ImageModule} from 'primeng/image';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

// Application Components
import {AppCodeModule} from './app.code.component';
import {AppComponent} from './app.component';
import {AppBreadcrumbComponent} from './breadcrumb/app.breadcrumb.component';
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './config/app.config.component';
import {AppRightMenuComponent} from './app.rightmenu.component';
import {AppInlineMenuComponent} from './inline-menu/app.inlinemenu.component';
import {AppMenuComponent} from './menu/app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppTopbarComponent} from './app.topbar.component';
import {AppFooterComponent} from './footer/app.footer.component';

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
import {AppLoginComponent} from './login/app.login.component';

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

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { HorariosComponent } from './paginas/horarios/horarios.component';
import { CalendarioComponent } from './paginas/calendario/calendario.component';
import { ProgramacionComponent } from './paginas/programacion/programacion.component';
import { KardexComponent } from './paginas/kardex/kardex.component';
import { CalificacionesComponent } from './paginas/calificaciones/calificaciones.component';
import { LibretaComponent } from './paginas/libreta/libreta.component';
import { RecursosComponent } from './paginas/recursos/recursos.component';
import { SaetaComponent } from './paginas/saeta/saeta.component';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    imports: [
        ImageModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarGroupModule,
        AvatarModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        KnobModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule
    ],
    declarations: [
        AppComponent,
        AppBreadcrumbComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppRightMenuComponent,
        AppInlineMenuComponent,
        AppTopbarComponent,
        AppFooterComponent,
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
        AppLoginComponent,
        AppInvoiceComponent,
        AppHelpComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        InicioComponent,
        HorariosComponent,
        CalendarioComponent,
        ProgramacionComponent,
        KardexComponent,
        CalificacionesComponent,
        LibretaComponent,
        RecursosComponent,
        SaetaComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, AppBreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
