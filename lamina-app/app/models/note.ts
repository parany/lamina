import { Base } from './base';
import { NoteType } from './note-type';

export class Note extends Base {
    constructor(
        public id: string = null,
        public title: string = null,
        public content: string = '',
        public noteType: NoteType = new NoteType()) {
        super(id, '', '', new Date(), new Date())
    }
}