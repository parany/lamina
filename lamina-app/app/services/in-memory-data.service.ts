import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { NoteType, Note } from '../models/index';

var noteTypes: NoteType[] = [
  new NoteType('1', 'Mail to send', 'Write a mail to sent in the near future'),
  new NoteType('2', 'Shopping list', 'Dress shopping list When operating on a [List], the returned list is always a copy even when all the elements are being returned.')
];

noteTypes[0].createdAt = new Date(2015, 7, 23);
noteTypes[0].updatedAt = new Date(2015, 11, 3);
noteTypes[0].createdBy = 'any';
noteTypes[0].updatedBy = 'parany';
noteTypes[1].createdAt = new Date(2016, 1, 2);
noteTypes[1].updatedAt = new Date(2016, 8, 22);
noteTypes[1].createdBy = 'tix';
noteTypes[1].updatedBy = 'any';

var notes: Note[] = [
  new Note('1', 'To Kem', 'Hi, a joke!', noteTypes[0]),
  new Note('2', 'Saturday', '*bred, *meal', noteTypes[0])
];

export class InMemoryDataService implements InMemoryWebApiModule {
  createDb() {
    return { noteTypes, notes };
  }
}
