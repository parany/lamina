import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteTypeListComponent } from './components/note-type/note-type-list.component';
import { NoteTypeAddComponent } from './components/note-type/note-type-add.component';
import { NoteTypeEditComponent } from './components/note-type/note-type-edit.component';
import { NoteTypeDetailComponent } from './components/note-type/note-type-detail.component';
import { NoteListComponent } from './components/note/note-list.component';
import { NoteAddComponent } from './components/note/note-add.component';
import { NoteEditComponent } from './components/note/note-edit.component';
import { NoteDetailComponent } from './components/note/note-detail.component';

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
        component: NoteTypeEditComponent
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
        component: NoteEditComponent
    },
    {
        path: 'note/detail/:id',
        component: NoteDetailComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);