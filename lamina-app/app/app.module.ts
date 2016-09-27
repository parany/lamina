import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import './rxjs-extensions';

import { InMemoryDataService }  from './services/in-memory-data.service';

import { EllipsisPipe } from './pipes/ellipsis.pipe';

import { AppComponent }         from './components/app/app.component';
import { NoteTypeListComponent }      from './components/note/note-type-list.component';

import { NoteService }          from './services/note.service';
import { NoteTypeService }          from './services/note-type.service';

import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    EllipsisPipe,
    AppComponent,
    NoteTypeListComponent
  ],
  providers: [
    NoteService,
    NoteTypeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
