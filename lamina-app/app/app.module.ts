import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import './rxjs-extensions';

import { InMemoryDataService }  from './services/in-memory-data.service';

import { EllipsisPipe } from './pipes/ellipsis.pipe';

import { AppComponent }         from './components/app/app.component';
import { ContactListComponent } from './components/contact/contact-list.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent }  from './components/hero-search/hero-search.component';
import { ContactAddComponent }      from './components/contact/contact-add.component';
import { NoteListComponent }      from './components/note/note-list.component';

import { HeroService }          from './services/hero.service';
import { ContactService }          from './services/contact.service';
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
    ContactListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent,
    ContactAddComponent,
    NoteListComponent
  ],
  providers: [
    HeroService,
    ContactService,
    NoteService,
    NoteTypeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
