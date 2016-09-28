import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteTypeListComponent }      from './components/note-type/note-type-list.component';
import { NoteTypeAddComponent }      from './components/note-type/note-type-add.component';

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
    {
        path: 'note-type/add',
        component: NoteTypeAddComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);