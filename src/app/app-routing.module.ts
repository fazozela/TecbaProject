import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './Atlantis-Content/demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './Atlantis-Content/demo/view/formlayoutdemo.component';
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
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './Atlantis-Content/pages/app.notfound.component';
import {AppErrorComponent} from './Atlantis-Content/pages/app.error.component';
import {AppAccessdeniedComponent} from './Atlantis-Content/pages/app.accessdenied.component';
import {AppLoginComponent} from './login/app.login.component';
import {InputDemoComponent} from './Atlantis-Content/demo/view/inputdemo.component';
import {FloatLabelDemoComponent} from './Atlantis-Content/demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './Atlantis-Content/demo/view/invalidstatedemo.component';
import {ButtonDemoComponent} from './Atlantis-Content/demo/view/buttondemo.component';
import {TableDemoComponent} from './Atlantis-Content/demo/view/tabledemo.component';
import {ListDemoComponent} from './Atlantis-Content/demo/view/listdemo.component';
import {TreeDemoComponent} from './Atlantis-Content/demo/view/treedemo.component';
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
import {InicioComponent} from "./paginas/inicio/inicio.component";
import {HorariosComponent} from "./paginas/horarios/horarios.component";
import {CalendarioComponent} from "./paginas/calendario/calendario.component";
import {ProgramacionComponent} from "./paginas/programacion/programacion.component";
import {KardexComponent} from "./paginas/kardex/kardex.component";
import {CalificacionesComponent} from "./paginas/calificaciones/calificaciones.component";
import {LibretaComponent} from "./paginas/libreta/libreta.component";
import {RecursosComponent} from "./paginas/recursos/recursos.component";
import {SaetaComponent} from "./paginas/saeta/saeta.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: InicioComponent},
                    {path: 'inicio', component: InicioComponent},
                    {path: 'horarios', component: HorariosComponent},
                    {path: 'calendario', component: CalendarioComponent},
                    {path: 'programacion', component: ProgramacionComponent},
                    {path: 'kardex', component: KardexComponent},
                    {path: 'calificaciones', component: CalificacionesComponent},
                    {path: 'libreta', component: LibretaComponent},
                    {path: 'recursos', component: RecursosComponent},
                    {path: 'saeta', component: SaetaComponent},
                    {path: 'dashboard', component: DashboardDemoComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/menu', component: MenusDemoComponent},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/display', component: DisplayComponent},
                    {path: 'utilities/elevation', component: ElevationComponent},
                    {path: 'utilities/flexbox', component: FlexboxComponent},
                    {path: 'utilities/grid', component: GridComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'utilities/widgets', component: WidgetsComponent},
                    {path: 'utilities/spacing', component: SpacingComponent},
                    {path: 'utilities/typography', component: TypographyComponent},
                    {path: 'utilities/text', component: TextComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/invoice', component: AppInvoiceComponent},
                    {path: 'pages/help', component: AppHelpComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent}
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
