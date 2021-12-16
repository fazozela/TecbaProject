import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes =
    [
        {
            path: 'auth',
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
        },
        {
            path: 'inicio',
            loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule)
        },
        {
            path: 'docentes',
            loadChildren: () => import('./protected-docentes/protected-docentes.module').then(m => m.ProtectedDocentesModule)
        },
        {
            path: '**',
            redirectTo: 'auth'
        }
    ];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
