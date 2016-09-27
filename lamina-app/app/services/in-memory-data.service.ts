import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { Hero, Contact, Group, PhoneNumber, PhoneNumberType, NoteType, Note } from '../models/index';

var noteTypes: NoteType[] = [
  new NoteType('Mail to send', 'Write a mail to sent in the near future'),
  new NoteType('Shopping list', 'Dress shopping list')
];

var notes: Note[] = [
  { title: 'To Kem', content: 'Hi, a joke!', noteType: noteTypes[0] },
  { title: 'Saturday', content: '*bred, *meal', noteType: noteTypes[1] }
];

var heroes: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

var group = new Group();
group.id = '1';
group.label = 'Family';

var contacts: Contact[] = [
  {
    id: 1,
    firstName: 'Mark',
    lastName: 'Todd',
    facebook: 'fex.raina',
    jobTitle: 'Webmaster',
    work: 'Wamada',
    city: 'Andravoahangy',
    town: 'Antananarivo',
    country: 'Madagascar',
    gender: 'M',
    group: group,
    phoneNumbers: [{
      id: '1',
      operator: 'orange',
      num: '+261 34 76 056 33',
      type: PhoneNumberType.Business
    }]
  },
  {
    id: 2,
    firstName: 'Parany',
    lastName: 'Any',
    facebook: 'pa.nanana',
    jobTitle: 'Dev',
    work: 'Sonhi',
    city: 'Andravoahangy',
    town: 'Antananarivo',
    country: 'Madagascar',
    gender: 'M',
    group: group,
    phoneNumbers: [{
      id: '1',
      operator: 'orange',
      num: '+261 34 76 056 33',
      type: PhoneNumberType.Business
    }]
  },
  {
    id: 3,
    firstName: 'Manj',
    lastName: 'Draina',
    facebook: 'ma.jdran',
    jobTitle: 'Professor',
    work: 'Mu',
    city: 'Andravoahangy',
    town: 'Antananarivo',
    country: 'Madagascar',
    gender: 'M',
    group: group,
    phoneNumbers: [{
      id: '1',
      operator: 'orange',
      num: '+261 34 76 056 33',
      type: PhoneNumberType.Business
    }]
  }
]

export class InMemoryDataService implements InMemoryWebApiModule {
  createDb() {
    return { heroes, contacts, noteTypes, notes };
  }
}
