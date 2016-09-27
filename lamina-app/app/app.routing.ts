import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteTypeListComponent }      from './components/note/note-type-list.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/note-type',
        pathMatch: 'full'
    },
    {
        path: 'note-type',
        component: NoteTypeListComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);