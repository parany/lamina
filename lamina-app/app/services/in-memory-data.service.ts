import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { NoteType, Note } from '../models/index';

var noteTypes: NoteType[] = [
  new NoteType('Mail to send', 'Write a mail to sent in the near future'),
  new NoteType('Shopping list', 'Dress shopping list When operating on a [List], the returned list is always a copy even when all the elements are being returned.')
];

var notes: Note[] = [
  new Note('To Kem', 'Hi, a joke!', noteTypes[0]),
  new Note('Saturday', '*bred, *meal', noteTypes[1])
];

export class InMemoryDataService implements InMemoryWebApiModule {
  createDb() {
    return { noteTypes, notes };
  }
}
