import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { ContactListComponent }      from './components/contact/contact-list.component';
import { ContactAddComponent }      from './components/contact/contact-add.component';
import { HeroDetailComponent }      from './components/hero-detail/hero-detail.component';

const appRoutes: Routes = [
    {
        path: 'contact',
        component: ContactListComponent
    },
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'contact/add',
        component: ContactAddComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);