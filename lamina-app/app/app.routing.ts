import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteTypeListComponent }      from './components/note-type/note-type-list.component';
import { NoteTypeAddComponent }      from './components/note-type/note-type-add.component';
import { NoteTypeDetailComponent }      from './components/note-type/note-type-detail.component';
import { NoteListComponent }      from './components/note/note-list.component';
import { NoteAddComponent }      from './components/note/note-add.component';

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
    {
        path: 'note-type/edit/:id',
        component: NoteTypeAddComponent
    },
    {
        path: 'note-type/detail/:id',
        component: NoteTypeDetailComponent
    },

    {
        path: 'note',
        component: NoteListComponent
    },
    {
        path: 'note/add',
        component: NoteAddComponent
    },
    {
        path: 'note/edit/:id',
        component: NoteAddComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);