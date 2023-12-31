import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    {
        path: 'register',
        loadChildren: ()=> import('src/app/auth/auth.routes').then((m)=> m.registerRoutes)
    },
    {
        path: '',
        loadChildren: ()=> import('src/app/auth/auth.routes').then((m)=> m.loginRoutes)
    },
    {
        path: 'globalFeed',
        loadChildren: ()=> import('src/app/globalFeed/globalFeed.routes').then((m)=> m.routes)
    },
    {
        path: 'dashboard',
        loadChildren: ()=> import('src/app/dashboardPage/dashboardPage.routes').then((m)=> m.routes)
    }
]