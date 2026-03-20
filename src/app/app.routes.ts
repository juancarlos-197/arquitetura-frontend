import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./feature/auth/auth.routes').then(m => m.AUTH_ROUTES),
        canActivate:[loggedGuard]
    }, 
    {
        path: 'articles',
        loadChildren: () => import('./feature/articles/article.routes').then(m => m.ARTICLES_ROUTES)
    },
    {
        path: 'admin',
        loadChildren: () => import('./feature/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
       
        path: '**',redirectTo:'',pathMatch:'full'

    }
];
