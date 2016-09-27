import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { ContactListComponent }      from './components/contact/contact-list.component';
import { ContactAddComponent }      from './components/contact/contact-add.component';
import { HeroDetailComponent }      from './components/hero-detail/hero-detail.component';
import { NoteListComponent }      from './components/note/note-list.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/note',
        pathMatch: 'full'
    },
    {
        path: 'note',
        component: NoteListComponent
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